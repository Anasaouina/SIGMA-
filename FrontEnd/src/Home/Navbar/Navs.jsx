import React from 'react';
import { Link } from 'react-router-dom';
import App from '../../App';
import Home from '../Home';
import './Navs.css';
import { useRef, useEffect, useState } from "react";
import logo3 from './logo3.png';
import axios from 'axios';
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'


const Navs = ({ isLoggedIn }) => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
      }
      
    return (

  <nav class="navbar navbar-expand-lg navbar-light shadow sticky-top p-0 " >
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
        {/* <img src={logo2} alt="." /> */}
        <Link to="/" className=' text-decoration-none'><img src={logo3} alt="" style={{width:"12rem"}} /></Link>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" >
            <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" class="nav-item text-dark nav-link active">Home</Link>
                <Link to="/Formation" class="nav-item text-dark nav-link">Formation</Link>
                <div class="dropdown">
                    <Link to="/Conferences" class=" dropdown-toggle text-decoration-none text-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Events
                    </Link>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to="/Conferences" class="dropdown-item " href="#">Conférence<br />
                        & association </Link>
                        <Link to="/Colloque" class="dropdown-item" href="#">Colloque</Link>
                     </div>
                </div>
                <div class="dropdown">
                    <Link to="/" class=" dropdown-toggle text-decoration-none text-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Resources
                    </Link>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to="/Archive" class="dropdown-item" href="#">Archives</Link>
                        <Link to="/" class="dropdown-item" href="#">Photos</Link>
                     </div>
                </div>
                <Link to="/Members" class="nav-item nav-link text-dark">Members</Link>
             
                <Link to="/Contact" class="nav-item nav-link text-dark">Contact</Link>
        </div>
        {user && (
            <div class="span">
            <Link to="/Profile" className='text-decoration-none text-dark'><span>{user.fname} {user.lname}</span></Link> 
             <button class="btn btn-danger ml-2 " onClick={handleClick}>Log out</button>
            </div>
            )}
          {!user && (
            <div>
                 <Link to="/Login" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block" id='btn1'>Log In<i class="fa fa-arrow-right ms-3"></i></Link>
            </div>
             )}
        </div>

    </nav>



    );
}

export default Navs;