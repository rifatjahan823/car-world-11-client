import React, { useEffect, useState } from 'react';
import GetInventory from '../GetInventory/GetInventory';

const Inventory = () => {
    const [inventories,setInventories]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setInventories(data))
    },[])

    return (
       <div id="inventory" className='container'>
            <div className='row g-4'>
            {
                inventories.map(inventory=><GetInventory
                inventory={inventory}
                key={inventory._id}
                ></GetInventory>)
            }
           </div>
       </div>
    );
};

export default Inventory;