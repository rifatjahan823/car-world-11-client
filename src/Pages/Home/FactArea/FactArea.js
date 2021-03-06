import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarAlt,faCarSide,faGear,faRocket} from '@fortawesome/free-solid-svg-icons';
import factbg from '../../../image/fact-area-img/fact_bg.jpg';
import CountUp from 'react-countup';
import './FactArea.css'

const FactArea = () => {
    return (
        <div className='fact-area'style={{backgroundImage: `url(${factbg})`, backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"relative",color:'white',zIndex:'5',padding:"80px 0",backgroundAttachment:"fixed",marginTop:"50px"}}>
            <div className='container'>
                <div className='fact-title'>
                    Find your Perfect Car
                </div>
               {/* ---------new car area----------  */}
                <div className='row'>
                    <div className="col-lg-3 col-md-6">
                        <div className='fact-item'>
                            <div className='fact-icon-area'>
                                  <FontAwesomeIcon icon={faCarAlt} />
                            </div>
                            <div className='fact-content-area'>
                                <h3> <CountUp end={27000} duration={5}/>+</h3>
                                <p>new cars in stock </p>
                            </div>
                        </div>
                    </div>
                {/* ---------usedcar area----------  */}  
                    <div className="col-lg-3 col-md-6">
                        <div className='fact-item'>
                            <div className='fact-icon-area'>
                                 <FontAwesomeIcon icon={faCarSide} />
                            </div>
                            <div className='fact-content-area'>
                                <h3><CountUp end={20000} duration={5}/>+</h3>
                                <p>used cars in stock</p>
                            </div>
                        </div>
                    </div> 
                {/* ---------service center area----------  */} 
                    <div className="col-lg-3 col-md-6">
                        <div className='fact-item'>
                            <div className='fact-icon-area'>
                                 <FontAwesomeIcon icon={faGear} />
                            </div>
                            <div className='fact-content-area'>
                                <h3><CountUp end={35000} duration={5}/>+</h3>
                                <p>service center</p>
                            </div>
                        </div>
                    </div>
                {/* ---------happy client area----------  */}
                    <div className="col-lg-3 col-md-6">
                       <div className='fact-item'>
                            <div className='fact-icon-area '>
                                 <FontAwesomeIcon icon={faRocket} />
                            </div>
                            <div className='fact-content-area'>
                                <h3><CountUp end={12000} duration={5}/>+</h3>
                                <p>happy clients</p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>       
        </div>
    );
};

export default FactArea;