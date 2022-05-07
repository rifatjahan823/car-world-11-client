import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Testimonial.css';
import tesimonialimg1 from '../../../image/testimonial-img/01-testimonial-1 .jpg'
import tesimonialimg2 from '../../../image/testimonial-img/02-testimonial-1.jpg'
import tesimonialimg3 from '../../../image/testimonial-img/03-comment-1.jpg';


const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div className='carussel'>
            <h2 className='text-center fw-bold'> Why Clients Love Us </h2>
            <div className='pb-4'>
                <div className='title-border '>
                    <div className='title-border-inner'></div>
                    <div className='title-border-inner'></div>
                    <div className='title-border-inner'></div>
                    <div className='title-border-inner'></div>
                </div>
            </div>
            <p className='text-dark text-center pb-4 fw-light'>Hundreds of clients are thrilled by the service that we deliver and are happy to tell us. Read about what some have said about us here.</p>    
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <div style={{height:"200px",}}>

        </div>
          <Carousel.Caption>
          <div className='carousel-content'>
            <img src={tesimonialimg1} alt="" />
            <div className='content'>
           <p>
           I went back to stock Warehouse after a good experience with them.
            </p>
           </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div style={{height:"200px"}}>

        </div>
          <Carousel.Caption>
          <div className='carousel-content' >
          <img src={tesimonialimg2} alt="" />
          <div className='content'>
           <p>
             highly recommended this ware house they provide very good service and safety.
            </p>
           </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <div style={{height:"200px"}}>

            </div>
          <Carousel.Caption>
          <div className='carousel-content' >
          <img src={tesimonialimg3} alt="" />
           <div className='content'>
           <p>
              I'm really happy with their service.anyone can easily stock thrie product withot any hassle.
            </p>
           </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
};

export default Testimonial;