import React from "react";
import App from "../../App";
import { Link } from "react-router-dom";
import Conferences from "./Conferences";
import './conferences2.css';
import conference1 from './conference1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Home/Footer/Footer";
import '../../Home/Footer/Footer.css';

const Conferences2 =() =>{
    return(
 <div>
       
<div className="conferences2 ">
    <h1 className="fw-bold text-center">
        <span>DECOUVRIR</span> DES NOUVEAUX CONFERENCES
        <div className="underline1"></div>
    </h1>
    
<a href="" className="text-decoration-none">
<div class="card ml-3">
  <div class="row g-0">
    <div class="col-4">
      <img src={conference1} class="img-fluid rounded-start " alt="..."/>
    </div>
    <div class="col-8">
      <div class="card-body ">
        <h4 class="card-title fw-bold">Cyber Security</h4>
        <h6 className="fw-semibold">Présenter par Reblal Zakaria</h6>
        <p className="">Lorem ipsum dolor sit beatae debitis quam, ipsa amet! Consequuntur voluptates quibusdam cupiditate voluptatibus illum autem ab harum?</p>
        <p class="card-text fw-bold"><FontAwesomeIcon icon={faCalendarWeek} className="fa-solid fa-calendar-week"/> 25/05/2023</p>
        <p class="card-text fw-bold"><i class="fa fa-clock me-2"> 20:00</i></p>
        <p class="card-text fw-bold"><FontAwesomeIcon icon={faLocationDot} className="fa-solid fa-location-dot" /> University UM5</p>
      </div>
    </div>
  </div>
</div>
</a>
{/*  */}
<a href="" className="text-decoration-none">
<div class="card mt-5 ml-3 hover-zoom1">
  <div class="row g-0">
    <div class="col-4">
      <img src={conference1} class="img-fluid rounded-start hover-zoom_image1" alt="..."/>
    </div>
    <div class="col-8">
      <div class="card-body ">
        <h4 class="card-title fw-bold">Cyber Security</h4>
        <h6 className="fw-semibold">Présenter par Reblal Zakaria</h6>
        <p className="">Lorem ipsum dolor sit beatae debitis quam, ipsa amet! Consequuntur voluptates quibusdam cupiditate voluptatibus illum autem ab harum?</p>
        <p class="card-text fw-bold"><FontAwesomeIcon icon={faCalendarWeek} className="fa-solid fa-calendar-week"/> 25/05/2023</p>
        <p class="card-text fw-bold"><i class="fa fa-clock me-2"> 20:00</i></p>
        <p class="card-text fw-bold"><FontAwesomeIcon icon={faLocationDot} className="fa-solid fa-location-dot" /> University UM5</p>
      </div>
    </div>
  </div>
</div>
</a>
{/*  */}
<a href="" className="text-decoration-none">
<div class="card mt-5 ml-3 hover-zoom1">
  <div class="row g-0">
    <div class="col-4">
      <img src={conference1} class="img-fluid rounded-start hover-zoom_image1" alt="..."/>
    </div>
    <div class="col-8">
      <div class="card-body ">
        <h4 class="card-title fw-bold">Cyber Security</h4>
        <h6 className="fw-semibold">Présenter par Reblal Zakaria</h6>
        <p className="">Lorem ipsum dolor sit beatae debitis quam, ipsa amet! Consequuntur voluptates quibusdam cupiditate voluptatibus illum autem ab harum?</p>
        <p class="card-text fw-bold"><FontAwesomeIcon icon={faCalendarWeek} className="fa-solid fa-calendar-week"/> 25/05/2023</p>
        <p class="card-text fw-bold"><i class="fa fa-clock me-2"> 20:00</i></p>
        <p class="card-text fw-bold"><FontAwesomeIcon icon={faLocationDot} className="fa-solid fa-location-dot" /> University UM5</p>
      </div>
    </div>
  </div>
</div>
</a>
{/*  */}
<a href="" className="text-decoration-none">
<div class="card mt-5 ml-3 hover-zoom1">
  <div class="row g-0">
    <div class="col-4">
      <img src={conference1} class="img-fluid rounded-start hover-zoom_image1" alt="..."/>
    </div>
    <div class="col-8">
      <div class="card-body ">
        <h4 class="card-title fw-bold">Cyber Security</h4>
        <h6 className="fw-semibold">Présenter par Reblal Zakaria</h6>
        <p className="">Lorem ipsum dolor sit beatae debitis quam, ipsa amet! Consequuntur voluptates quibusdam cupiditate voluptatibus illum autem ab harum?</p>
        <p class="card-text fw-bold"><FontAwesomeIcon icon={faCalendarWeek} className="fa-solid fa-calendar-week"/> 25/05/2023</p>
        <p class="card-text fw-bold"><i class="fa fa-clock me-2"> 20:00</i></p>
        <p class="card-text fw-bold"><FontAwesomeIcon icon={faLocationDot} className="fa-solid fa-location-dot" /> University UM5</p>
      </div>
    </div>
  </div>
</div>
</a>
<div className="container">
 <div className="">   
     <Link class="page-link" to="/Conferences"><p>1</p></Link>
    <Link class="page-link" to="/Conferences2"><p>2</p></Link>
</div>
</div>
</div>
<Footer />
</div>

    );
}
export default Conferences2;