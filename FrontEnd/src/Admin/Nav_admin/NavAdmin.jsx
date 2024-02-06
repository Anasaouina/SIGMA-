import React from 'react';
import App from '../../App';
import { Link } from 'react-router-dom';
import './Nav_admin.css';



const NavAdmin = () => {
    return (
<div className='NavAdmin'>
<div class="container-fluid">
    <div class="row">
      <nav class="col-md-3 col-lg-2 sidebar">
        <ul class="nav flex-column">
        <li class="logo_admin">
            <h1 className='text-center fw-bold'>ADMIN USER</h1>
            <div className="underline1"></div>
          </li>
          <li class="nav-item mt-5">
            <Link to="/AdminEvent" class="nav-link active">EVENTS & ASSOCIATION</Link>
          </li>
          <li class="nav-item mt-3">
            <Link to="/AdminFormation" class="nav-link">FORMATIONS</Link>
          </li>
          <li class="nav-item mt-3">
            <Link to="/AdminColloque" class="nav-link">COLLOQUE</Link>
          </li>
          <li class="nav-item mt-3">
            <Link to="/Admin_user" class="nav-link">USERS</Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
        </div>
    );
}

export default NavAdmin;