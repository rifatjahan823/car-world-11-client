import React from 'react';
import FactArea from '../FactArea/FactArea';
import Service from '../Service/Service';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Welcome from '../Welcome/Welcome';
import Testimonial from '../Testimonial/Testimonial';




const Home = () => {
    return (
        <div  >
            <Banner></Banner>
            <Welcome></Welcome>
            <Inventory></Inventory>
            <FactArea></FactArea>
           <Service></Service>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;