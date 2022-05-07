import React from 'react';
import Deployment from '../../Deployment/Deployment';
import Product from '../../Product/Product';

import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Product></Product>
           <Services></Services>
           <Deployment></Deployment>
         </div>
    );
};

export default Home;


