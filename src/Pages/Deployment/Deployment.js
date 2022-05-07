import React from 'react';
import './Deployment.css';

const Deployment = () => {
    return (
        <div className='container p-5'>
            <h2 className='text-title  text-center'>Deployment Services</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
    <img src="https://media.istockphoto.com/photos/african-american-college-girl-using-laptop-learning-online-outdoors-picture-id1342036694?b=1&k=20&m=1342036694&s=170667a&w=0&h=7OjTICmuyCu1_vWXtMFR2g0zHOOtd-3PzwGrpQOqrCc=" class="card-img-top" alt="" />
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
    <img src="https://media.istockphoto.com/photos/productivity-powered-by-digital-technology-picture-id1330965067?b=1&k=20&m=1330965067&s=170667a&w=0&h=ys_MV3zYkn2HJCtHC4s_03Sz1MUC2BZv6PcDdk__XSc=" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">Provision in the factory, manage from the cloud</h5>
        <h6>Dell Connected Provisioning delivers pre-configured, ready to work devices faster and easier.</h6>
        <p>* Simplify IT deployment and management</p>
        <p>* Leverage the cloud to speed up device configuration</p>
        <button className='btn-primary'>Explore</button>
      </div>
    </div>
  </div>
  
  <div class="col">
    <div class="card h-100">
    <img src="https://media.istockphoto.com/photos/woman-working-at-home-and-reading-emails-on-her-laptop-picture-id1330800043?b=1&k=20&m=1330800043&s=170667a&w=0&h=YFuYLYWLnt1tpr90BxNWSgTE3yse4XUUml0jSTI2A9g=" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">Our experts perform hardware and software configurations</h5>
        <h6>Performing hardware and software integration on new systems can be frustrating, complex and costly. Our configuration experts are here to help.</h6>
        <p>* Reduce deployment time and ensure consistency</p>
        <p>* Load image, configure BIOS, apply asset tags and more</p>
        
        <button className='btn-primary'>Explore</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Deployment;