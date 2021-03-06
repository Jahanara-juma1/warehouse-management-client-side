import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css';
const Services = () => {

const [services, setServices] = useState([]);

   useEffect( ()=>{
       fetch('http://localhost:5000/site')
       .then(res => res.json())
       .then(data => setServices(data));
   }, [])

    return (
        
        <div className='container'>
        <div className='row'>
        <h2 className='services-title mt-5'>Our laptops</h2>
         
        <div className='services-container'>
           
            {
                services.slice(0, 6).map(service => <Service
                  key={service._id}
                  service={service}
                ></Service>)
            }
        </div>
        </div>
        </div>
    );
};

export default Services;