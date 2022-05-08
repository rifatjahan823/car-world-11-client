import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleRoof,faHeadset,faTruck,faBuildingShield} from '@fortawesome/free-solid-svg-icons';
import './Service.css'
import shape from '../../../image/welcome-section-img/shape.png';
import car from '../../../image/welcome-section-img/car.png';
import carbg from '../../../image/welcome-section-img/car_bg.jpg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';



const Service = () => {
    return (
        <div className='service pb-5'style={{backgroundImage: `url(${carbg})`, backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
     
       }}>
            <div className='container'>
                <h4>our service Cars</h4>
                <h2>Exclusive WareHouse Featured</h2>
                <div className='title-line pb-5 mt-2'>
                <div className='title-border'>
                    <div className='title-border-inner'></div>
                    <div className='title-border-inner'></div>
                    <div className='title-border-inner'></div>
                    <div className='title-border-inner'></div>
                </div>
            </div>
            <div className='row g-4 align-items-center '>
             {/* ---------featured-item part-1-----------    */}
                <div className='col-lg-4 col-md-6 col-sm-12 '>
                    <div className='featured-item text-center'>
                       <Fade left>
                       <div className='featured-icon'>
                             <FontAwesomeIcon icon={faBuildingShield} />
                        </div>
                        <div className='featured-content'>
                            <h3>mantain high safety</h3>
                            <p>we always maintain high safety. feel free you can use our carworld warehouse. your product safety is our main priority.</p>
                        </div>
                       </Fade>
                       <Fade left>
                        <div className='featured-icon'>
                             <FontAwesomeIcon icon={faTruck} />
                        </div>
                        <div className='featured-content'>
                             <h3>fast effective service</h3>
                             <p>Default is 6 months Update & Support. Furthermore, you can extend support to 12 months </p>
                        </div>
                        </Fade>
                    </div>
                </div>
             {/* ---------featured-item part-2-----------    */}    
                <Zoom>
                <div className='col-lg-4 d-none d-lg-block'>
                <div className='featured-img-part '>
                    <div className='shape-img'>
                        <img src={shape} alt="" />
                    </div>
                    <div className='car-img'>
                        <img src={car} alt="" />
                    </div>
                </div>
                </div>
             </Zoom>
               {/* ---------featured-item part-3-----------    */}  
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='featured-item text-center'>
                    <Fade right>
                        <div className='featured-icon'>
                             <FontAwesomeIcon icon={faPeopleRoof} />
                        </div>
                        <div className='featured-content'>
                            <h3>High traindy staff</h3>
                            <p>Support is always our highest priority. With support members spread across the world, we provide all around support. </p>
                        </div>
                        </Fade>
                        <Fade right>
                        <div className='featured-icon'>
                             <FontAwesomeIcon icon={faHeadset} />
                        </div>
                        <div className='featured-content'>
                            <h3>support 24/7</h3>
                            <p>We support to customize minor request as javascript conflict, css issue, etc</p>
                        </div>
                     </Fade>
                    </div>
                </div>
            </div>
            </div>     
        </div>
    );
};

export default Service;