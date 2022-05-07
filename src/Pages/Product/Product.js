import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <div className='container '>
            <div className="product-container d-flex">
           <div className='text'>
               <h2 className='text-danger'>Laptop Buying Guide</h2>

               <h2><span className='text-primary'>Essential tips to choose the right PC</span></h2>
               <p>We are here to help you figure out the best laptops for you depending upon your needs. </p>
               <button className='p-1 btn-primary'>See More</button>
           </div>
           <div className='w-50 h-50 p-5 '>
               <img src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
           </div>
        </div>
    );
};

export default Product;