import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import thumnail from '../../image/Mannageinvetory-page-img/pexels-photo-120049.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';

const InventoryDetails = () => {
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
      const quantity = inventory.quantity-1;
      const sold = inventory.sold+1;
      const user = {quantity,sold};
   
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
  const navigate = useNavigate();
  const mannageInventory=()=>{
  navigate(`/mannageinventory`)
  }

    return (
      <div> 
          <div className='mannage-inventory' style={{backgroundImage: `url(${thumnail})`, backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"relative",color:'white',zIndex:'5',padding:"80px 0",backgroundAttachment:"fixed",}}>
            
      {/* ------form part for restock items----------      */}
            <h2 className='text-uppercase text-center fw-bolder mb-4'>Restock <span style={{color:"#FF5400"}}>Quantity</span></h2>
          <form className='text-center ' onSubmit={updateQuantity}>
              <input  type="number"  name="number" id="" placeholder='Number' required/>
              <input type="submit" value="Restock" />
          </form>
          <div className='button'>
            <button onClick={mannageInventory}>mannage inventory <FontAwesomeIcon icon={faAngleDoubleRight} /></button>
            </div>
          </div>
      
        <div className='container'>
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
         {/*------  sold ------------*/} 

         <p style={{color:"black",fontWeight: "600"}}><span style={{fontSize:"14px",fontWeight: "700",color:"#8b8b8b",lineHeight:"1.2"}}>Sold :</span> {inventory.sold}</p> 
        {/*------ quantity ------------*/} 
        {
        inventory.quantity<=0?
        <p style={{color:"red",fontWeight: "600"}}>Sold Out</p>
          :
          <p style={{color:"black",fontWeight: "600"}}><span style={{fontSize:"14px",fontWeight: "700",color:"#8b8b8b",lineHeight:"1.2"}}>Quantity :</span> {inventory.quantity}</p>
        } 
           {/*------ supperlair name ------------*/} 
           <p style={{color:"black",fontWeight: "600"}}><span style={{fontSize:"14px",fontWeight: "700",color:"#8b8b8b",lineHeight:"1.2"}}>SupplierName :</span> {inventory.supplierName}</p> 
         {/*------ description-part ------------*/}
           <p className='pt-2 ' style={{color:"#565656",fontSize: "14px",fontWeight: "600"}}>{inventory.description}</p>
        {/*------ button-part ------------*/}
         <div className='button text-start '>
            <button onClick={updateDeliver}>Delivered<FontAwesomeIcon icon={faAngleDoubleRight} /></button>
          </div> 
        </div>  
        </div>    
      </div>
      </div>
      </div>
      </div>
    );
};

export default InventoryDetails;