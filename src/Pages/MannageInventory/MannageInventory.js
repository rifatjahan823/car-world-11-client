import React, { useEffect, useState } from 'react';
import './MannageInventory.css'

const MannageInventory = () => {
    const [inventories,setInventories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res=>res.json())
        .then(data=>setInventories(data))
    },[])

    const inventoryDelete = id =>{
        const proceed= window.confirm('are you sure');
        if(proceed){
            fetch(`http://localhost:5000/inventory/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
               const remaing = inventories.filter(service=>service._id!==id) 
               setInventories(remaing) 
            })
        }
    }
    return (
        <div id="inventory" className='inventory-section'>
            <h2 className='text-uppercase text-center pb-5'>All inventories</h2>
          <div  className='container'>
            <div className='row g-4'>
            {
                inventories.map(inventory=><GetMannageInventory
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
    const {name,picture,supplierName,price}=inventory;
    return (
        <div className='card-group col-lg-4 col-md-6 col-sm-12'>
        <div className='getinventory '>
           <img src={picture} alt="" />
     {/*------ main-content-part ------------*/}
         <div className='px-2'>
       {/*------ top-content-part ------------*/}       
         <div className='border-bottom pt-5'>   
          <div className='top-part d-flex justify-content-between align-items-center flex-wrap'>
          <h3>{name}</h3>
           <p>${price}</p>
          </div>
            <p style={{color:"black",fontWeight: "600"}}><span style={{fontSize:"14px",fontWeight: "700",color:"#8b8b8b",lineHeight:"1.2"}}>SupplierName :</span> {supplierName}</p>
          </div>
  
         </div>
      {/*------ button-part ------------*/}
         <div className=''>
         <button onClick={()=>inventoryDelete(inventory._id)}>Delete</button>
         </div>
        </div>
       </div>
    );
};



export default MannageInventory;