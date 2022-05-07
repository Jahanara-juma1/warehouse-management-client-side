import React, { useEffect, useState } from 'react';
import Service from '../../Home/Home/Service/Service';

const Checkout = () => {
    

        const [services, setServices] = useState([]);
        
           useEffect( ()=>{
               fetch('http://localhost:5000/site')
               .then(res => res.json())
               .then(data => setServices(data));
           }, [])
        
            return (
                
                <div className='container'>
                <div className='row'>
                <h2 className='services-title mt-5'>New items</h2>
                 
                <div className='services-container'>
                   
                    {
                        services.map(service => <Service
                          key={service._id}
                          service={service}
                        ></Service>)
                    }
                </div>
                </div>
                </div>
            );
        };

export default Checkout;


