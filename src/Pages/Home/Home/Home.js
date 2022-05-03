import React from 'react';
import FactArea from '../../FactArea/FactArea';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Testimonial from '../Testimonial/Testimonial';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Inventory></Inventory>
            <FactArea></FactArea>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;