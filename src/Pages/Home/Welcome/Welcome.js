import React, { useEffect } from 'react';
import car from '../../../image/welcome-section-img/car.png';
import shape from '../../../image/welcome-section-img/shape.png';
import carbg from '../../../image/welcome-section-img/car_bg.jpg'
import './Welcome.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Welcome = () => {
    useEffect(()=>{
        AOS.init({
          
          });
    })
    return (
        <div className='welcome-area'style={{backgroundImage: `url(${carbg})`, backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        padding:"50px 0", 
     
       }}>
            <div className="container">
            <div className="row justify-content-end align-items-center g-4">
            {/*--- welcome-content area ----  */}
            <div className="welcome-content col-md-6 col-sm-12  order-lg-1 order-md-1 order-2"data-aos='fade-down'>
            <h1>best car WareHouse</h1>
            <h2>WELCOME TO CARWORLD LISTING PORTAL</h2>
            <p className='pe-5'>CarWorld is the world's leading portal for easy and quick car buying and selling</p>
            </div>
            {/*--- welcome-Image area ----  */}
            <div className="welcome-image col-md-6 col-sm-12 order-lg-2 order-md-2 order-1"data-aos='fade-up'>
           <div className='shape'>
           <img  src={shape} alt="" />
           </div>
             {/* car image */}
             <div className='car'>
            <img  src={car} alt="" />
            </div>
            </div>
            </div>
           </div>
        </div>
    );
};

export default Welcome;