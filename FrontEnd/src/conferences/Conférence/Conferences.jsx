import React, { useState, useEffect } from "react";
import App from "../../App";
import './Conferences.css';
import Conferences2 from "./conferences2";
import conference1 from './conference1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../../Home/Footer/Footer";

const Conferences =() =>{
  const [events , setEvents] = useState([])
  useEffect(()=>{
    getAllEvents();
   }, []);

   const getAllEvents = ()=>{
     fetch("http://localhost:4000/api/event" ,{
       method:"GET",
     })
     .then((res)=>res.json())
       .then((events)=> {
        console.log(events,"data")
         setEvents(events);    
         
        })
   }
    return(
<div>
<div className="conference">
  <div className="topic">
        <div>
            <img src={conference1} id="img-conf" className="d-block" alt="..."/>
                <div className="superpose">
                        <h1 className="fw-bold text-center">
                                <span>DECOUVRIR</span> DES NOUVEAUX CONFERENCES
                        </h1>
                </div>
        </div>
        <div class="search">
  <form class="position-relative d-flex justify-content-center" role="search">
    <label htmlFor="" className="fw-bold"> CONFERENCES <div className="underline1"></div>
    </label>
    <input class="form-control me-2 w-50" type="search" placeholder="Search..." aria-label="Search"/>
    <button class="btn btn-outline-success " type="submit">Search</button>
  </form>
</div>
{events.map(i =>{
    return (
<Link to="/payment" className="text-decoration-none">
<div class="card mt-5 ml-3 hover-zoom1">
  <div class="row g-0">
    <div class="col-4">
      <img src={i.image} class="img-fluid rounded-start hover-zoom_image1" alt="..."/>
    </div>
    <div class="col-8">
      <div class="card-body ">
        <h4 class="card-title fw-bold">{i.title}</h4>
        <h6 className="fw-semibold">{i.presenter}</h6>
        <p className="">{i.description}</p>
        <p class="card-text fw-bold"><FontAwesomeIcon icon={faCalendarWeek} className="fa-solid fa-calendar-week"/> {i.time}</p>
        <p class="card-text fw-bold"><i class="fa fa-clock me-2"> 20.00</i></p>
        <p class="card-text fw-bold"><FontAwesomeIcon icon={faLocationDot} className="fa-solid fa-location-dot" />{i.place} </p>
      </div>
    </div>
  </div>
</div>
</Link>
    )})}
</div>
<div className="svg1">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="0.2" d="M0,64L120,90.7C240,117,480,171,720,165.3C960,160,1200,96,1320,64L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg></div>

</div>











<Footer />
        </div>
        
        );
}
export default Conferences;