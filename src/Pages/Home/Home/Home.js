import React from 'react';
import FactArea from '../FactArea/FactArea';
import Service from '../Service/Service';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Welcome from '../Welcome/Welcome';
import Testimonial from '../Testimonial/Testimonial';
import WareHouseAds from '../WarehouseAds/WareHouseAds';




const Home = () => {
    return (
        <div  >
            <Banner></Banner>
            <Welcome></Welcome>
            <Inventory></Inventory>
           <FactArea></FactArea>
           <Service></Service>
           <Testimonial></Testimonial>
           <WareHouseAds></WareHouseAds>
        </div>
    );
};

export default Home;