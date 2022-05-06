import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDeleteLeft,faEdit} from '@fortawesome/free-solid-svg-icons';
import auth from '../../firebase.init';
import thumnail from '../../image/Mannageinvetory-page-img/pexels-photo-120049.jpg'

const MyInventory = () => {
    const [user]= useAuthState(auth)
    const [inventory,setInventory]=useState([]);

    useEffect(()=>{
        const email = user.email
     fetch(`http://localhost:5000/inventorys?email=${email}`)
     .then(res=>res.json())
     .then(data=>setInventory(data,{
         headers:{
           
         }
     }));
 },[user]);
 
    const inventoryDelete = id =>{
        const proceed= window.confirm('are you sure');
        if(proceed){
            fetch(`http://localhost:5000/inventory/${id}`,{
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
          <p className='pb-2' style={{fontSize:"16px",fontWeight:"600"}}>Quantity:{quantity}</p>
          <button  className='btn btn-danger me-5'  onClick={()=>inventoryDelete(inventory._id)}><FontAwesomeIcon icon={faDeleteLeft } /></button>
          <button className='edit-btn' onClick={getinventoryDetails}><FontAwesomeIcon icon={faEdit} /></button>
        </div>
       </div>
    )
};

export default MyInventory;