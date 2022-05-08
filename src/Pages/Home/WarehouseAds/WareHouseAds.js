import React from 'react';
import adimg1 from '../../../image/warehouse-ad-section-img/ads-1.png';
import adimg2 from '../../../image/warehouse-ad-section-img/ads-2.png';
import './WareHouseAds.css'
import Fade from 'react-reveal/Fade';

const WareHouseAds = () => {
    return (
        <div className='warehouse-ads'>
         <div className='warehouse-into-part'>
          <Fade left>
         <div className='ad-img-1'style={{backgroundImage: `url(${adimg1})`, backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"relative",color:'white',zIndex:'5',padding:"90px 0",}}>
          <div className='mx-4'>
            <h2>are you looking for a warehouse?</h2>
              <p>dont looking too much we are here for your service</p>  
          </div>
            </div>
            </Fade>
            <Fade right> 
            <div  className=' ad-img-2'style={{backgroundImage: `url(${adimg2})`, backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"relative",color:'white',zIndex:'5',padding:"90px 0",}}>
                <div className='mx-4'>
                <h2>do you want to stock your products</h2>
                <p>dont worray about more we are here to stock your products</p>
                </div>
            </div>
        </Fade>  
         </div>
        </div>
    );
};

export default WareHouseAds;