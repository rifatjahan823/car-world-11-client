import React, { useEffect, useState } from 'react';
import GetInventory from '../GetInventory/GetInventory';
import './Inventory.css';
import titleline from '../../../image/title_line.png'

const Inventory = () => {
    const [inventories,setInventories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res=>res.json())
        .then(data=>setInventories(data))
    },[])

    return (
        <div id="inventory" className='inventory-section'>
            <h2 className='text-uppercase text-center'>our inventories</h2>
            <div className='title-line pb-5'>
                <img src={titleline} alt="" />
            </div>
          <div  className='container'>
            <div className='row g-4'>
            {
                inventories.slice(0,6).map(inventory=><GetInventory
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