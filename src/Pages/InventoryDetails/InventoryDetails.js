import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {Id}=useParams()
    const [inventory,setInventory]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/inventory/${Id}`)
        .then(res=>res.json())
        .then(data=>setInventory(data))
    },[])
 
    return (
        <div>
     {inventory._id}
        
         
        </div>
    );
};

export default InventoryDetails;