import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GetInventory from '../GetInventory/GetInventory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import './Inventory.css';

const Inventory = () => {
    const [inventories,setInventories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res=>res.json())
        .then(data=>setInventories(data))
    },[])
    const navigate = useNavigate();
    const mannageInventory=()=>{
     navigate(`/mannageinventory`)
    }
    return (
        <div className='inventory-section'>
            <h2 className='text-uppercase text-center'>our inventories</h2>
            <div className=' pb-5'>
            <div className='title-border'>
                    <div className='title-border-inner'></div>
                    <div className='title-border-inner'></div>
                    <div className='title-border-inner'></div>
                    <div className='title-border-inner'></div>
                </div>
            </div>
          <div  className='container'>
            <div className='row g-4'>
            {
                inventories.slice(0,6).map(inventory=><GetInventory
                inventory={inventory}
                key={inventory._id}
                ></GetInventory>)
            }
            <div className='button'>
            <button onClick={mannageInventory}>mannage inventory <FontAwesomeIcon icon={faAngleDoubleRight} /></button>
            </div>
            </div>
          </div>
        </div>
    );
};

export default Inventory;