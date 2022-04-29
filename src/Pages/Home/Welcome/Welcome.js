import React from 'react';
import car from '../../../image/welcome-section-img/car.png';
import shape from '../../../image/welcome-section-img/shape.png';
import carbg from '../../../image/welcome-section-img/car_bg.jpg'
import './Welcome.css'

const Welcome = () => {
    return (
        <div className='welcome-area'style={{backgroundImage: `url(${carbg})`, backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        padding:"50px 0", 
     
       }}>
            <div className="container">
            <div className="row justify-content-end align-items-center g-5">
            {/*--- welcome-content area ----  */}
            <div className="welcome-content col-md-6 col-sm-12 pe-5">
            <h1>best car WareHouse</h1>
            <h2>WELCOME TO AUTOSTARS LISTING PORTAL</h2>
            <p className='pe-5'>CarWorld is the world's leading portal for easy and quick car buying and selling</p>
            </div>
            {/*--- welcome-Image area ----  */}
            <div className="welcome-image col-md-6 col-sm-12 ">
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