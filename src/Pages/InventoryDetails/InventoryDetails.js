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
    },[quantity])

 //-----updatequantity for restock item---------
    const updateQuantity =event=>{
        event.preventDefault();
        const quantity= event.target.number.value;
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
        
            const quantity = inventory.quantity;
            const updateQuantity= quantity;
            setQuantity(...updateQuantity + quantity)
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
       <form onSubmit={updateQuantity}>
       <input  type="number"  name="number" id="" placeholder='Number' required/><br />
         <input type="submit" value="Updatte" />
       </form>
     {/* ------inventory details----------      */}  
            <div className='card-group col-lg-8 col-md-9 col-sm-12 mx-auto my-3'>
            <div className='getinventory '>
           <img src={inventory.picture} alt="" />
     {/*------ main-content-part ------------*/}
         <div className='px-2'>
       {/*------ top-content-part ------------*/}       
         <div className='border-bottom pt-5'>   
          <div className='top-part d-flex justify-content-between align-items-center flex-wrap'>
          <h3>{inventory.name}</h3>
           <p>{inventory.price}</p>
          </div>
            <p style={{color:"black",fontWeight: "600"}}><span style={{fontSize:"14px",fontWeight: "700",color:"#8b8b8b",lineHeight:"1.2"}}>SupplierName :</span> {inventory.supplierName}</p>
          </div>
           {/*------ description-part ------------*/}
            <p className='pt-2 pb-5' style={{color:"#565656",fontSize: "14px",fontWeight: "600"}}>{inventory.description}</p>
         {/*------ quantity-part ------------*/} 
           <div className='quantity'>
           <p>Quantity<br></br>{inventory.quantity}</p>
           </div>
         </div>
      {/*------ button-part ------------*/}
         <div className='update'>
         <button onClick={ updateDeliver}>Delivered</button>
         </div>
        </div>
            </div>
       </div>
    );
};

export default InventoryDetails;