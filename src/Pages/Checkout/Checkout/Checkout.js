import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>
            <form>
                <input className='w-100 mb-2' type="text" name="name" placeholder='name' required />
                <br />
                <input className='w-100 mb-2' type="email" name="email" placeholder='email' required />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name}name="service" placeholder='service' required />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order"></input>
            </form>
        </div>
    );
};

export default Checkout;






// import React, { useEffect, useState } from 'react';
// import Service from '../../Home/Home/Service/Service';

// const Checkout = () => {
    

//         const [services, setServices] = useState([]);
        
//            useEffect( ()=>{
//                fetch('http://localhost:5000/site')
//                .then(res => res.json())
//                .then(data => setServices(data));
//            }, [])
        
//             return (
                
//                 <div className='container'>
//                 <div className='row'>
//                 <h2 className='services-title mt-5'>New items</h2>
                 
//                 <div className='services-container'>
                   
//                     {
//                         services.map(service => <Service
//                           key={service._id}
//                           service={service}
//                         ></Service>)
//                     }
//                 </div>
//                 </div>
//                 </div>
//             );
//         };

// export default Checkout;
