import React from 'react';
import FactArea from '../../FactArea/FactArea';
import Service from '../../Service/Service';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Inventory></Inventory>
            <FactArea></FactArea>
           <Service></Service>
        </div>
    );
};

export default Home;