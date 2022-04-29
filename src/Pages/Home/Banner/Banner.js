import React, { useState } from 'react';
import { Carousel} from 'react-bootstrap';
import slider1 from '../../../image/carusel/slider-1.jpg';
import slider2 from '../../../image/carusel/slider-2.jpg';
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className='carusel-caption'>
            <h3>Find your dream car with car world</h3>
            <p className='d-none d-md-block'>It is a long established fact that a reader will distracted by the readable content of a page when looking.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Third slide"
          />
      
          <Carousel.Caption>
          <div className='carusel-caption'>
          <h3>Find your dream car with car world</h3>
            <p className='d-none d-md-block'>It is a long established fact that a reader will distracted by the readable content of a page when looking.</p>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;