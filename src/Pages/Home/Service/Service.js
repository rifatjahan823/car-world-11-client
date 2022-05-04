import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarOn} from '@fortawesome/free-solid-svg-icons';
import './Service.css'
import shape from '../../../image/welcome-section-img/shape.png';
import car from '../../../image/welcome-section-img/car.png'


const Service = () => {
    return (
        <div className='service pb-5'>
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
                        <div className='featured-icon'>
                             <FontAwesomeIcon icon={faCarOn} />
                        </div>
                        <div className='featured-content'>
                            <h3>mantain high safety</h3>
                            <p>we always maintain high safety. feel free you can use our carworld warehouse. your product safety is our main priority.</p>
                        </div>
                        <div className='featured-icon'>
                             <FontAwesomeIcon icon={faCarOn} />
                        </div>
                        <div className='featured-content'>
                             <h3>fast effective service</h3>
                             <p>Default is 6 months Update & Support. Furthermore, you can extend support to 12 months </p>
                        </div>
                    </div>
                </div>
             {/* ---------featured-item part-2-----------    */}    
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
               {/* ---------featured-item part-3-----------    */}  
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='featured-item text-center'>
                        <div className='featured-icon'>
                             <FontAwesomeIcon icon={faCarOn} />
                        </div>
                        <div className='featured-content'>
                            <h3>High traindy staff</h3>
                            <p>Support is always our highest priority. With support members spread across the world, we provide all around support. </p>
                        </div>
                        <div className='featured-icon'>
                             <FontAwesomeIcon icon={faCarOn} />
                        </div>
                        <div className='featured-content'>
                            <h3>support 24/7</h3>
                            <p>We support to customize minor request as javascript conflict, css issue, etc</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>     
        </div>
    );
};

export default Service;