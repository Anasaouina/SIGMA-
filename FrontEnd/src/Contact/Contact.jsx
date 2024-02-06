import React from 'react';
import App from '../App';
import './Contact.css';



const Contact = () => {
    return (
        <div className='contact'>
      <h1 className='text-center fw-bold'>Rejoindre Nous</h1>
      <div className="underline1"></div>
<div class="container">
  <div class="row justify-content-center align-items-center">
    <div class="col-auto">
      <div class="circle">
        <a href="" className='text-decoration-none'>
      <i class="far fa-envelope"></i>
        </a>
      </div>
    </div>
    <div class="col-auto">
      <div class="circle">
        <a href="" className='text-decoration-none'>
      <i class="fab fa-facebook-f"></i>
      </a>
      </div>
    </div>
    <div class="col-auto">
      <div class="circle">
        <a href="" className='text-decoration-none'>
      <i class="fab fa-linkedin-in"></i>
      </a>
      </div>
    </div>
    <div class="col-auto">
      <div class="circle">
        <a href="" className='text-decoration-none'>
        <i class="fab fa-instagram"></i>
      </a>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default Contact;