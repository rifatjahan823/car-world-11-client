import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GetInventory from '../GetInventory/GetInventory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import './Inventory.css';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';

const Inventory = () => {
    const [spiner,setSpiner]=useState(false);
    const [inventories,setInventories]=useState([]);
    useEffect(()=>{

        try{
            const getInventory = async ()=>{
                setSpiner(true)
            const  {data} = await axios.get(`https://ancient-dawn-90111.herokuapp.com/inventory`);
            setInventories(data)
            setSpiner(false)
            }
            getInventory()
          }
        
          catch(error){
                 console.error('Error:', error);
               };
       
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
            <div  className='row g-4'>
              {
                  spiner ? (
                  <Loading></Loading>
                  )
                  
                  :
                inventories?.slice(0,6).map(inventory=><GetInventory
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