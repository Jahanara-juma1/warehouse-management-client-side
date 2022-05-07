import React from 'react';
import './Deployment.css';

const Deployment = () => {
    return (
        <div className='container p-5'>
            <h2 className='text-title  text-center'>Deployment Services</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      
      <div class="card-body">
        <h5 class="card-title">Deploy PCs with greater speed and less effort</h5>
        <p>* End-to-end PC deployment</p>
        <p>* 24x7 onsite installation</p>
        <p>* System management, software imaging and configuration</p>
        <button className='btn-primary'>Explore</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      
      <div class="card-body">
        <h5 class="card-title">Provision in the factory, manage from the cloud</h5>
        <h6>Dell Connected Provisioning delivers pre-configured, ready to work devices faster and easier.</h6>
        <p>* Simplify IT deployment and management</p>
        <p>* Leverage the cloud to speed up device configuration</p>
        <p>* PC set up is as fast and easy as setting up a new phone</p>
        <button className='btn-primary'>Explore</button>
      </div>
    </div>
  </div>
  
  <div class="col">
    <div class="card h-100">
      
      <div class="card-body">
        <h5 class="card-title">Our experts perform hardware and software configurations</h5>
        <h6>Performing hardware and software integration on new systems can be frustrating, complex and costly. Our configuration experts are here to help.</h6>
        <p>Reduce deployment time and ensure consistency</p>
        <p>Load image, configure BIOS, apply asset tags and more</p>
        
        <button className='btn-primary'>Explore</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Deployment;