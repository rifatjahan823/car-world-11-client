import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';

const MyInventory = () => {
    const [user]= useAuthState(auth)
    const [inventory,setInventory]=useState([]);

    useEffect(()=>{
        const email = user.email
     fetch(`http://localhost:5000/myinventory?email=${email}`)
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
            <h2>Your Orders{inventory.length}</h2>
            <div  className='container'> 
          <div  className='row g-4'> 
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
          <button  className='btn btn-danger'  onClick={()=>inventoryDelete(inventory._id)}>Delete</button>
          <button onClick={getinventoryDetails}>Update</button>
        </div>
       </div>
    )
};

export default MyInventory;