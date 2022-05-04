import React from 'react';
import FactArea from '../FactArea/FactArea';
import Service from '../Service/Service';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Welcome from '../Welcome/Welcome';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Inventory></Inventory>
            <FactArea></FactArea>
           <Service></Service>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;