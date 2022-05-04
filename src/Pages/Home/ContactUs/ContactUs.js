import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contact py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='row contact-info'>
                            <div className='col-4'>
                               <div className='contact-icon'>
                               <FontAwesomeIcon icon={faPhone} />
                               </div>
                            </div>
                            <div className='col-8'>
                                <div className='contact-content'>
                                    <h4>call us on</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;