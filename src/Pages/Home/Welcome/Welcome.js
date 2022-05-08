import React from 'react';
import car from '../../../image/welcome-section-img/car.png';
import shape from '../../../image/welcome-section-img/shape.png';
import carbg from '../../../image/welcome-section-img/car_bg.jpg'
import './Welcome.css';
import Fade from 'react-reveal/Fade';



const Welcome = () => {

    return (
        <div className='welcome-area'style={{backgroundImage: `url(${carbg})`, backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        padding:"50px 0", 
       }}>
            <div className="container">
            <div className="row justify-content-end align-items-center g-4">
            {/*--- welcome-content area ----  */}
            <Fade left>
            <div className="welcome-content col-md-6 col-sm-12  order-lg-1 order-md-1 order-2">
            <h1>best car WareHouse</h1>
            <h2>WELCOME TO CARWORLD LISTING PORTAL</h2>
            <p className='pe-5'>CarWorld is the world's leading portal for easy and quick car buying and selling</p>
            </div>
            </Fade>
            {/*--- welcome-Image area ----  */}
            <Fade right>
            <div className="welcome-image col-md-6 col-sm-12 order-lg-2 order-md-2 ">
           <div className='shape'>
           <img  src={shape} alt="" />
           </div>
             {/* car image */}
             <div className='car'>
            <img  src={car} alt="" />
            </div>
            </div>
            </Fade>
            </div>
           </div>
        </div>
    );
};

export default Welcome;