import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDeleteLeft,faEdit} from '@fortawesome/free-solid-svg-icons';
import auth from '../../firebase.init';
import thumnail from '../../image/Mannageinvetory-page-img/pexels-photo-120049.jpg'
import axiosPrivate from '../../api/axiosPrivate';

const MyInventory = () => {
    const [user]= useAuthState(auth)
    const [inventory,setInventory]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
       const getInventory =async ()=>{
        const email = user.email;
        const url =(`https://ancient-dawn-90111.herokuapp.com/inventorys?email=${email}`);
        try{
            const {data} = await axiosPrivate.get(url);
            setInventory(data);
        }
        catch(error){
            console.log(error.message);
            if(error.response.status === 401 || error.response.status === 403){
                signOut(auth);
                navigate('/login')
            }
        }
    }
        getInventory()
 },[user]);
 
    const inventoryDelete = id =>{
        const proceed= window.confirm('are you sure');
        if(proceed){
            fetch(`https://ancient-dawn-90111.herokuapp.com/inventory/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
               const remaing = inventory.filter(service=>service._id!==id) 
               setInventory(remaing) 
            })
        };
    
    }

    return (
        <div>
         <div className='mannage-inventory' style={{backgroundImage: `url(${thumnail})`, backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"relative",color:'white',zIndex:'5',padding:"100px 0",backgroundAttachment:"fixed",}}>
             <h2 className='text-uppercase text-center fw-bolder'>My <span style={{color:"#FF5400"}}>inven</span>tories</h2>
            </div>
            <div  style={{borderTop:"5px solid #FF5400"}}>
          
            </div>
            <div  className='container'> 
          <div  className='row g-4 my-3'> 
           {
                 inventory.map(inventory=><GetMannageInventory
                    inventory={inventory}
                    key={inventory._id}
                    inventoryDelete={inventoryDelete}>
                    </GetMannageInventory>) 
           }
          </div>
          </div>
        </div>
    );
};
const GetMannageInventory = ({inventory,inventoryDelete}) => {
    
    const {name,picture,price,quantity,_id}=inventory;
    const navigate = useNavigate();
    const getinventoryDetails=()=>{
        navigate(`/inventory/${_id}`)
       }
    return (
        <div className='card-group col-lg-4 col-md-6 col-sm-12   '>
        <div className='GetMannageInventory border w-100 text-center p-3'>
          <div>
          <img style={{width:"100px",height:"100px",borderRadius:"50%"}}  src={picture}alt="" />
          </div>
          <h3 style={{fontSize:"18px",fontWeight:"600"}}>{name}</h3>
          <p style={{margin:'0',fontSize:"16px",fontWeight:"600"}}>${price}</p>
          {
        inventory.quantity<=0?
        <p style={{color:"red",fontWeight: "600"}}>Sold Out</p>
          :
          <p className='pb-2' style={{fontSize:"16px",fontWeight:"600"}}>Quantity:{quantity}</p>
          }
          <button  className='btn btn-danger me-5'  onClick={()=>inventoryDelete(inventory._id)}><FontAwesomeIcon icon={faDeleteLeft } /></button>
          <button className='edit-btn' onClick={getinventoryDetails}><FontAwesomeIcon icon={faEdit} /></button>
        </div>
       </div>
    )
};

export default MyInventory;