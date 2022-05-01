import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetInventory.css'

const GetInventory = ({inventory}) => {
    const {name,picture,supplierName,description,quantity,price,_id}=inventory;
   const navigate = useNavigate();
   const getinventoryDetails=()=>{
    navigate(`inventory/${_id}`)
   }
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
           <p>{price}</p>
          </div>
            <p style={{color:"black",fontWeight: "600"}}><span style={{fontSize:"14px",fontWeight: "700",color:"#8b8b8b",lineHeight:"1.2"}}>SupplierName :</span> {supplierName}</p>
          </div>
           {/*------ description-part ------------*/}
            <p className='pt-2 pb-5' style={{color:"#565656",fontSize: "14px",fontWeight: "600"}}>{description.slice(0,130)}.....</p>
         {/*------ quantity-part ------------*/} 
           <div className='quantity'>
           <p>Quantity<br></br>{quantity}</p>
           </div>
         </div>
      {/*------ button-part ------------*/}
         <div className='update'>
         <button onClick={getinventoryDetails}>Update</button>
         </div>
        </div>
       </div>
    );
};

export default GetInventory;