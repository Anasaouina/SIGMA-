import React, { useState } from "react";
import App from "../../App";
import './Formation.css';
import Footer from "../../Home/Footer/Footer";
import Formation1 from './formation1.jpg';
import Formation3 from './Formation3.PNG';
import Formation4 from './Formation4.PNG';
import Formation5 from './Formation5.PNG';
import about5 from '../../Home/services/about20.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMusic, faUser} from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons"; 
import { faClockFour } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Formation =()=>{
    const [formations , setFormations] = useState([]);
    const scrollIn = React.useRef(null);
    // Fonction pour effectuer le défilement vers la div cible
    const scrollToIn = () => {
      if (scrollIn && scrollIn.current) {
        window.scrollTo({
          top: scrollIn.current.offsetTop,
          behavior: "smooth",
        });
      }
    };
    useEffect(()=>{
        getAllFormations();
       }, []);
    const getAllFormations = ()=>{
        fetch("http://localhost:4000/api/formation" ,{
          method:"GET",
        })
        .then((res)=>res.json())
          .then((formations)=> {
          // console.log(formations,"data")
            setFormations(formations);    
            
           })
      }
    
    return(
    // en tete
<div className="formation">
    <div class="container">
        <div className="d-flex flex-column">
            <h1 className="mt-5 fw-bold"><span>Obtenir</span> ton Certificat pour continuer vos rêves </h1> 
            <button type="button" onClick={scrollToIn}  className="btn btn-info btn-lg " id="btn1"> Voir Plus </button>
        </div> 
    <div>
        <div class="img-container">
            <img src={Formation1} alt="Image" />
        </div>
        </div>
    </div>
   {/* partie avec video */}
    <div className="video mt-4">
    <div className="col-lg-6">
              <h1 className="mb-4 fw-bold">Prêt à donner un nouvel élan à votre carrière ?</h1>
              <p className="mb-4">  
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
    </div>
    <div className="col-lg-3">
        <iframe width="560" height="315" className="" src="https://www.youtube.com/embed/nx99v_MZliY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</div>  

{/*  */}
<div className="info container">
    <div className="col-4">
        <div class="card">
            <img src={Formation4} class="card-img-top mx-auto" style={{width:"15rem"}} alt="..."/>
                <div class="card-body">
                    <h3 className="text-center fw-bold pt-2">NEW SKILLS</h3>
                    <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        </div>
    </div>

    <div className="col-4">
        <div class="card">
            <img src={Formation3} class="card-img-top mx-auto" style={{width:"20rem"}}  alt="..."/>
                <div class="card-body">
                    <h3 className="text-center fw-bold">CERTIFICAT EN LIGNE</h3>
                    <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        </div>
    </div>

    <div className="col-4">
        <div class="card">
            <img src={Formation5} class="card-img-top mx-auto" style={{width:"20rem"}} alt="..."/>
                <div class="card-body">
                    <h3 className="text-center fw-bold pt-2">QUALITY COURSES</h3>
                    <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        </div>
    </div>
</div>








{/* les cours */}
<div ref={scrollIn}></div>
    <h1 className="cc text-center fw-bold">Différents <span style={{color:"var(--majorelle-blue)"}}>Formations</span> Certifiante à Obtenir</h1>
    
    <div className="underline1"></div>
    
    <div className="cours row">
  {formations.map((i) => (
    <div className="col-4 mt-5" key={i.id}>
      <div className="card hover-zoom">
        <img src={i.image} className="card-img-top hover-zoom_image" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{i.title}</h5>
          <i>{i.duree} </i> <FontAwesomeIcon icon={faCalendarWeek} className="fa-solid fa-calendar-week" /><br />
          <div className="text-center" id="icons">
            <FontAwesomeIcon icon={faStar} className="fa-sharp fa-solid fa-star" style={{ color: "#d1e916" }} />
            <FontAwesomeIcon icon={faStar} className="fa-sharp fa-solid fa-star" style={{ color: "#d1e916" }} />
            <FontAwesomeIcon icon={faStar} className="fa-sharp fa-solid fa-star" style={{ color: "#d1e916" }} />
            <FontAwesomeIcon icon={faStar} className="fa-sharp fa-solid fa-star" style={{ color: "#d1e916" }} />
            <FontAwesomeIcon icon={faStarHalfStroke} className="fa-sharp fa-solid fa-star-half-stroke" style={{ color: "#d1e916" }} /> (15)
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-dark text-light fw-bold" type="submit">VISIT <FontAwesomeIcon icon={faEuroSign} className="fa-sharp fa-regular fa-euro-sign" /></button>
          </div>
          <div className="position-relative d-flex mt-2">
            <small className="flex-fill text-center py-2"><i className="fa fa-clock text-primary me-2"></i>{i.time} h/week</small>
            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>{i.students} Students</small>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    
   

<Footer />
    </div>
    );
}
export default Formation;