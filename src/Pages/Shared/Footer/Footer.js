import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div >
         <div className='footer py-5'>
            <div className='container'>
                <div className='row  g-4'>
              {/* ----top footer part-1---- */}
                    <div className='col-lg-4 col-md-6 col-sm-12 me-lg-5'>
                       <h5>About us</h5>
                       <p>I understand very well how lack of confidence can be an obstacle. That is why I dedicated myself to helping people overcome their fears and improve their looks - and their lives.</p>
                    </div>
                 {/* ----top footer part-2---- */}
                    <div className='col-lg-5 col-md-6 col-sm-12 info-2 ms-lg-3'>
                        <h5>Find us here</h5>
                        <p>USA, California 20, First Avenue, California</p>
                        <div className='my-3'>
                        <p>Tel: +7 998 71 150 30 20</p>
                        <p>Fax: +7 998 71 150 30 20</p>
                        </div>
                        <p style={{color:"#84898b"}}>info@stylemixthemes.com</p>
                    </div>
                </div>
            </div>
        </div>
         {/* footer bootom part */}
        <div className='footre-botton'>
         <div className='container'>
         <p className='mt-2'>&copy;2020 Health Coach | Rifat Jahan for a Personal Trainer</p>
         </div>
      </div>
        </div>
    );
};

export default Footer;