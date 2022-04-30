import React from 'react';
import './GetInventory.css'

const GetInventory = ({inventory}) => {
    const {name,picture,supplierName,description,quantity}=inventory;
    return (
       <div className='card-group col-lg-4 col-md-6 col-sm-12'>
        <div className='getinventory'>
            <img className='img-fluid' src={picture} alt="" />
            {name}
        </div>
       </div>
    );
};

export default GetInventory;