import React, { useEffect, useState } from 'react';
import GetInventory from '../GetInventory/GetInventory';
import './Inventory.css'

const Inventory = () => {
    const [inventories,setInventories]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setInventories(data))
    },[])

    return (
        <div id="inventory" className='inventory-section'>
            <h2 className='text-uppercase text-center pb-5'>our inventories</h2>
          <div  className='container'>
            <div className='row g-4'>
            {
                inventories.map(inventory=><GetInventory
                inventory={inventory}
                key={inventory._id}
                ></GetInventory>)
            }
            </div>
          </div>
        </div>
    );
};

export default Inventory;