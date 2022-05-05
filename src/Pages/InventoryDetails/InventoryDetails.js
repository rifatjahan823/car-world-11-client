import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const [quantity,setQuantity]=useState(0)
    const {Id}=useParams()
    const [inventory,setInventory]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/inventory/${Id}`)
        .then(res=>res.json())
        .then(data=>setInventory(data))
    },[inventory])

 //-----updatequantity for restock item---------
    const updateQuantity =event=>{
        event.preventDefault();
        const quantity= parseInt(event.target.number.value)+parseInt(inventory.quantity);
        const user = {quantity}
          //send data to the surver
    fetch(`http://localhost:5000/inventorie/${Id}`, {
        method: 'PUT', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(data => {
        
        })
        .catch((error) => {
        console.error('Error:', error);
        });
}
    const updateDeliver =event=>{

    fetch(`http://localhost:5000/inventory/${Id}`, {
        method: 'PUT', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inventory),
        })
        .then(response => response.json())
        .then(data => {
            const quantity = inventory.quantity;
            const updateQuantity= quantity-1;
            console.log(updateQuantity)
            setQuantity(updateQuantity)
      
        })
        .catch((error) => {
        console.error('Error:', error);
        });
}

    return (
        <div className='container'>
      {/* ------form part for restock items----------      */}
          <form className='text-center mt-5' onSubmit={updateQuantity}>
              <input  type="number"  name="number" id="" placeholder='Number' required/>
              <input type="submit" value="Updatte" />
          </form>
      {/* ------inventory details----------      */} 
      <div className='border border-secondary my-5 p-3 '> 
        <div className='row  g-4  align-items-center '>
    
       {/* ------inventory image----------      */}     
          <div class="col-12 col-lg-5 col-md-5 ">
              <img className='img-fluid' src={inventory.picture} alt="" />
          </div>
        {/* ------inventory content----------      */} 
        <div class="col-12 col-lg-7 col-md-7 ">
        <div className='card-body'>
           <h3>{inventory.name}</h3>
           <p>ID:{inventory._id}</p>
         {/*------  price ------------*/} 
         <p style={{color:"black",fontWeight: "600"}}><span style={{fontSize:"14px",fontWeight: "700",color:"#8b8b8b",lineHeight:"1.2"}}>Price :</span> {inventory.price}</p> 
        {/*------ quantity ------------*/} 
        {
          inventory.quantity>0?
          <p style={{color:"black",fontWeight: "600"}}><span style={{fontSize:"14px",fontWeight: "700",color:"#8b8b8b",lineHeight:"1.2"}}>Quantity :</span> {inventory.quantity}</p>
          :
          <p style={{color:"red",fontWeight: "700"}}>Sold</p>
        } 
           {/*------ supperlair name ------------*/} 
           <p style={{color:"black",fontWeight: "600"}}><span style={{fontSize:"14px",fontWeight: "700",color:"#8b8b8b",lineHeight:"1.2"}}>SupplierName :</span> {inventory.supplierName}</p> 
         {/*------ description-part ------------*/}
           <p className='pt-2 pb-2' style={{color:"#565656",fontSize: "14px",fontWeight: "600"}}>{inventory.description}</p>
        {/*------ button-part ------------*/}
         <div className=''>
           <button onClick={ updateDeliver}>Delivered</button>
         </div>  
        </div>  
        </div>    
      </div>
      </div>
      </div>
    );
};

export default InventoryDetails;