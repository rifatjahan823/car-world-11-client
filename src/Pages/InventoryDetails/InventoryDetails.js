import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import thumnail from '../../image/Mannageinvetory-page-img/pexels-photo-120049.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import './InventoryDetails.css'
import axios from 'axios';

const InventoryDetails = () => {
const [quantity,setQuantity]=useState({});

    const {Id}=useParams()
    const [inventory,setInventory]=useState({});
   

 //-----updatequantity for restock item---------
    const updateQuantity =event=>{
        event.preventDefault();
        const getQuantity = inventory.quantity
        try{
          const getdata = async ()=>{
            const res =await axios.put(`https://ancient-dawn-90111.herokuapp.com/restock/${Id}`,
           {quantity,getQuantity}
            );
      
          }
          getdata()
        }
      
        catch(error){
               console.error('Error:', error);
             };
}
useEffect(()=>{
  try{
    const getdata = async ()=>{
      const {data} =await axios.get(`https://ancient-dawn-90111.herokuapp.com/inventoryid/${Id}`);
      setInventory(data)
    }
    getdata()
  }
  catch(error){
    console.error('Error:', error);
  };

},[inventory])
//-------------------------------------------
    const updateDeliver =()=>{
      const quantity = inventory.quantity-1;
    const sold = parseInt(inventory.sold+1);
  try{
    const getdata = async ()=>{
    const res =await axios.put(`https://ancient-dawn-90111.herokuapp.com/inventoryUpdate/${Id}`,
      {quantity,sold}
      );

    }
    getdata()
  }

  catch(error){
         console.error('Error:', error);
       };

   
}
  const navigate = useNavigate();
  const mannageInventory=()=>{
  navigate(`/mannageinventory`)
  }

    return (
      <div> 
          <div className='mannage-inventory' style={{backgroundImage: `url(${thumnail})`, backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"relative",color:'white',zIndex:'5',padding:"80px 0",backgroundAttachment:"fixed",}}>
          <h2 className='text-uppercase text-center fw-bolder mb-4'>Restock <span style={{color:"#FF5400"}}>Quantity</span></h2>
     
          <div className='button'>
            <button onClick={mannageInventory}>mannage inventory <FontAwesomeIcon icon={faAngleDoubleRight} /></button>
            </div>
          </div>
      
        <div className='container'>
      {/* ------inventory details----------      */} 
      <div className='border border-secondary my-5 p-3 '> 
        <div className='row  g-4  align-items-center '>
    
       {/* ------inventory image----------      */}     
          <div className="col-12 col-lg-5 col-md-5 ">
              <img className='img-fluid' src={inventory.picture} alt="" />
          </div>
        {/* ------inventory content----------      */} 
        <div className="col-12 col-lg-7 col-md-7 ">
        <div className='card-body'>
           <h3>{inventory.name}</h3>
           <p>ID:{inventory._id}</p>
         {/*------  price ------------*/} 
         <p style={{color:"black",fontWeight: "600"}}><span style={{fontSize:"14px",fontWeight: "700",color:"#8b8b8b",lineHeight:"1.2"}}>Price :</span> {inventory.price}</p> 
         {/*------  sold ------------*/} 
         <p style={{color:"black",fontWeight: "600"}}><span style={{fontSize:"14px",fontWeight: "700",color:"#8b8b8b",lineHeight:"1.2"}}>Sold:</span> {inventory.sold}</p> 

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
         <div className='button text-start restock-btn '>
      
          {     
           inventory.quantity<=0?
           <button disabled onClick={updateDeliver}>Delivered<FontAwesomeIcon icon={faAngleDoubleRight} /></button>
           :
           <button onClick={updateDeliver}>Delivered<FontAwesomeIcon icon={faAngleDoubleRight} /></button>
          }
          </div> 
       {/* ------form part for restock items----------      */}
          <form className='resotck-form mt-3' onSubmit={updateQuantity}>
          <input onChange={event=>setQuantity(event.target.value)} className='input' type="number"  name="number" id="" placeholder='Restock' required/>
          <input className='submit' type="submit" value="Restock" />
          </form>
        </div>  
        </div>    
      </div>
      </div>
      </div>
      </div>
    );
};

export default InventoryDetails;