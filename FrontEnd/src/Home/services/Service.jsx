import {useState , React, useEffect } from "react";
import App from '../../App';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMusic, faUser} from '@fortawesome/free-solid-svg-icons'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import about from './about1.jpg'
import about5 from './about20.jpg'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons"; 
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { faClockFour } from "@fortawesome/free-solid-svg-icons";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import team1 from './team-1.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from 'react';
import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";
import actus from './actus.PNG'



const Services = () => {
  const [events, setEvents] = useState([]);
  const [mapEvents , setMapEvents]= useState([])
  const [mapFormation , setMapFormation]=useState([])
  const [formations, setFormations]= useState([])
  const targetDivRef = useRef(null);
  const myElementRef = useRef(null);

  useEffect(() => {
    const getAllEvents = () => {
      fetch('http://localhost:4000/api/event', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((events) => {
          console.log(events, 'data');
          setEvents(events);
        });
    };

    getAllEvents();
  

    const getAllFormation = () => {
      fetch('http://localhost:4000/api/formation', {
      method: 'GET',
      })
      .then((res) => res.json())
      .then((formations) => {
        console.log(formations, 'data');
        setFormations(formations);
      });
    };

    getAllFormation();
  }, []);

  useEffect(() => {
   
      setMapEvents(events.slice(-3));
   

    
    
      setMapFormation(formations.slice(-3));
   

    
  }, [events]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });

    return () => {
      AOS.refresh();
    };
  }, []);


  return (
    <div className="service">
<div className="container about_us">
{/* les catégories */}
<div className="container categories mt-5 g-5">
    <h1 class="mt-1 text-center fw-bold">les Catégories des Evénements</h1>
    <div className="underline1"></div>
  <div class="container px-4" ref={myElementRef} data-aos="zoom-in"  data-aos-easing="linear" data-aos-duration="2000">
   <div class="row gx-3">
     <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4 mt-4 text-center">
      <div class="p-3 border bg-light" ><i className="d-none d-sm-block"><FontAwesomeIcon icon={faMusic} className="fa-sharp fa-solid mr-3" size="xl" style={{color: "var(--majorelle-blue)"}} /></i>
       <p>MUSIC</p></div>
     </div>
     <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-4 text-center">
       <div class="p-3 border bg-light"><i className="d-none d-sm-block"><FontAwesomeIcon icon={faFutbol} className="fa-sharp fa-regular fa-futbol mr-3" size="xl" style={{color: "var(--majorelle-blue)"}} /></i>
       <p>SPORT</p></div>
     </div>
     <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-4 text-center">
       <div class="p-3 border bg-light"><i className="d-none d-sm-block"><FontAwesomeIcon icon={faLaptopCode} className="fa-regular fa-laptop-code mr-3" size="xl" style={{color: "var(--majorelle-blue)"}} /></i>
       <p>Informatique</p> </div>
     </div>
     <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-4 text-center">
       <div class="p-3 border bg-light"><i className="d-none d-sm-block"><FontAwesomeIcon icon={faUsers} className="fa-sharp fa-solid fa-users mr-3" size="xl" style={{color: "var(--majorelle-blue)"}} /></i>
       <p>Networking events</p> 
</div>
     </div>
     <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-4 text-center">
       <div class="p-3 border bg-light"><i className="d-none d-sm-block"><FontAwesomeIcon icon={faUserGraduate} className="fa-sharp fa-light fa-user-graduate mr-3"  size="xl" style={{color: "var(--majorelle-blue)"}} /></i>
       <p>Colloque</p></div>
     </div>
     <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-4 text-center">
       <div class="p-3 border bg-light"><i className="d-none d-sm-block"><FontAwesomeIcon icon={faPersonChalkboard} className="fa-sharp fa-solid fa-person-chalkboard mr-3" size="xl" style={{color: "var(--majorelle-blue)"}} /></i>
       <p>Conferences</p></div>
     </div>
   </div>
 </div>
</div>
{/* ABOUT  */}
<div className="container-xxl py-5 mt-3" id="animated-element">
        <div className="container abo">
          <div className="row g-5">
            <div
              className="col-lg-6"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100 mr-1">
              <img class="img-fluid w-100 h-100" src={about} alt="" style={{objectfit: "cover"}}/>
                {/* Contenu de la première colonne */}
              </div>
            </div>
            <div className="col-lg-6 ss">
              <h2 className=" fw-semibold text-center fs-4 mt-3" >
                About Us
              </h2>
              <div className="underline1"></div>
              <h1 className="mb-4 mt-4 text-start fw-bold">BIENVENU AU SIGMA</h1>
              <p className="mb-4">  
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
            <a href="https://discord.gg/Gwc7RpJQ" target="_blank" className="text-decoration-none">  
          <button class="cssbuttons-io-button">Link Discord
  <div class="icon">
  <i class="fab fa-discord"></i>
  </div>
  </button></a>
            </div>
          </div>
        </div>
      {/* Référence à la div cible pour le défilement */}
      <div ref={targetDivRef}></div>
    </div>
    </div>
{/* event speaker */}
<section className="team" id="scrollspyHeading1">
  <div className="container">
    <div className=" section-title">
    <h2 style={{color: "var(--dark)"}}>EVENT SPEAKERS</h2>
    <div className="underline"></div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facilis voluptate corrupti iste explicabo quod labore! Provident illum dolor mollitia, quam atque harum, ea earum autem, est cupiditate pariatur aliquam?</p>
    </div>
    <div className="row">
      <div className="row">
      <div className="col-lg-6 mt-4 zakaria" ref={myElementRef} data-aos="fade-right"  data-aos-easing="linear" data-aos-duration="2000">
        <div className="member d-flex align-items-start">
          <div className="teampic">
            <img src={team1} alt="" className="img-fluid" />
          </div>
          <div className="member-info">
            <h4>ZAKARIA REBLAL</h4>
            <span>Front-end dev</span>
            <p>Lorem, ipsum dolor. Beatae facere, iure maiores corrupti saepe rem rerum minus culpa, perspiciatis in voluptate?</p>
          
          <div className="social">
            <a href="" class="btn btn-sm-square btn-light mx-1"><i class="fab fa-facebook-f" ></i></a>
            <a href="" class="btn btn-sm-square btn-light mx-1"><i class="fab fa-instagram"></i></a>
            <a href="" class="btn btn-sm-square btn-light mx-1"><i class="fab fa-linkedin"></i></a>
          </div>
        <Link to="/Conferences"><button type="button" class="btn btn-info mt-3">Voir Plus</button></Link>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mt-4" ref={myElementRef} data-aos="fade-left"data-aos-easing="linear" data-aos-duration="2000">
        <div className="member d-flex align-items-start">
          <div className="teampic">
            <img src={team1} alt="" className="img-fluid"/>
          </div>
          <div className="member-info">
            <h4>ANAS AOUINA</h4>
            <span>Back-end dev</span>
            <p>Lorem, ipsum dolor. Beatae facere, iure maiores corrupti saepe rem rerum minus culpa, perspiciatis in voluptate?</p>
          
          <div className="social">
            <a href="" class="btn btn-sm-square btn-light mx-1"><i class="fab fa-facebook-f" ></i></a>
            <a href="" class="btn btn-sm-square btn-light mx-1"><i class="fab fa-instagram" ></i></a>
            <a href="" class="btn btn-sm-square btn-light mx-1"><i class="fab fa-linkedin"></i></a>
          </div>
          <Link to="/Conferences"><button type="button" class="btn btn-info mt-3">Voir Plus</button></Link>
        </div>
        </div>
      </div>
    </div>
 <div className="row">
      <div className="col-lg-6 mt-4" ref={myElementRef} data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">
        <div className="member d-flex align-items-start">
          <div className="teampic">
            <img src={team1} alt="" className="img-fluid"/>
          </div>
          <div className="member-info">
            <h4>ZAKARIA REBLAL</h4>
            <span>Front-end dev</span>
            <p>Lorem, ipsum dolor. Beatae facere, iure maiores corrupti saepe rem rerum minus culpa, perspiciatis in voluptate?</p>
          
          <div className="social">
            <a href="" class="btn btn-sm-square btn-light mx-1"><i class="fab fa-facebook-f" ></i></a>
            <a href="" class="btn btn-sm-square btn-light mx-1"><i class="fab fa-instagram" ></i></a>
            <a href="" class="btn btn-sm-square btn-light mx-1"><i class="fab fa-linkedin"></i></a>
          </div>
          <Link to="/Conferences"><button type="button" class="btn btn-info mt-3">Voir Plus</button></Link>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mt-4" ref={myElementRef} data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2000">
        <div className="member d-flex align-items-start">
          <div className="teampic">
            <img src={team1} alt="" className="img-fluid"/>
          </div>
          <div className="member-info">
            <h4>ANAS AOUINA</h4>
            <span>Back-end dev</span>
            <p>Lorem, ipsum dolor. Beatae facere, iure maiores corrupti saepe rem rerum minus culpa, perspiciatis in voluptate?</p>
          
          <div className="social">
            <a href="" class="btn btn-sm-square btn-light mx-1"><i class="fab fa-facebook-f" ></i></a>
            <a href="" class="btn btn-sm-square btn-light mx-1"><i class="fab fa-instagram"></i></a>
            <a href="" class="btn btn-sm-square btn-light mx-1"><i class="fab fa-linkedin"></i></a>
          </div>
          <Link to="/Conferences"><button type="button" class="btn btn-info mt-3">Voir Plus</button></Link>
        </div >
      </div>
        </div>


    </div>

    </div>
  
  </div>
</section>
<div className="d-flex justify-content-center" id="voir_plus" >
    <Link to="/Conferences" className="text-center mt-2">
      <button class="cta">
        <span>Voir plus</span>
      </button>
    </Link>
    </div>

{/* actualité */}
<div className="container actus">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="position-relative h-100 mr-1 mt-5">
              <img class="img-fluid w-80" src={actus} alt="" style={{objectfit: "cover"}}/>
              </div>
            </div>
            <div className="col-lg-6 ac">
              <h1 className="mb-4 text-start fw-bold">Les actualités du SIGMA </h1>
               {mapEvents.map(i=>{
                return( 
              <div>
              <a href=""><h4 className="fw-bold">{i.title}</h4></a>
              <p><i className="icon02"><FontAwesomeIcon icon={faCalendarWeek} className="fa-solid fa-calendar-week "/></i>  {i.time}
              <i class="fa fa-clock text-dark ml-3"> 12:30</i></p>
              <p className="mt-1">{i.description}</p>
              </div>
             ) } )} 
             
 </div>   
</div>
</div>

{/* courses */}

<div className="container">
<div ref={myElementRef} data-aos="fade-up" data-aos-easing="linear"  data-aos-duration="2000" >
<div className="container courses" >
        <div className="text-center mt-5 mb-5" >
          <h3 className="fw-bold" style={{color: "var(--dark)"}}>Formation Certifiantes</h3>
          <div className="underline1"></div>
          <p className="text-center fs-5 mt-4 fw-light">Notre Groupe offre plusieurs formations Certifiantes de hauts niveaux pour améliorer votre compétence et intégre ou marcher du travaille.</p> 
        </div>      
  </div>
   
  <div className="row courses1">
  {mapFormation.map((i) => {
    return (
      <div class="col-sm-4">
        <div class="card shadow-lg hover-zoom">
          <img src={i.image} class="card-img-top hover-zoom_image" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title fw-bold">{i.title}</h5>
            <i>{i.duree}</i> <FontAwesomeIcon icon={faCalendarWeek} className="fa-solid fa-calendar-week" /><br />
            <div className="text-center d-none d-sm-block" id="icons">
              <FontAwesomeIcon icon={faStar} className="fa-sharp fa-solid fa-star" style={{ color: "#d1e916" }} />
              <FontAwesomeIcon icon={faStar} className="fa-sharp fa-solid fa-star" style={{ color: "#d1e916" }} />
              <FontAwesomeIcon icon={faStar} className="fa-sharp fa-solid fa-star" style={{ color: "#d1e916" }} />
              <FontAwesomeIcon icon={faStar} className="fa-sharp fa-solid fa-star" style={{ color: "#d1e916" }} />
              <FontAwesomeIcon icon={faStar} className="fa-sharp fa-solid fa-star" style={{ color: "#d1e916" }} /> (15)
            </div>
            <Link to="/Payment" target="_blank" className="text-decoration-none">
              <div className="d-grid gap-2">
                <button class="btn btn-dark text-light fw-bold" type="submit">{i.prix} <FontAwesomeIcon icon={faEuroSign} className="fa-sharp fa-regular fa-euro-sign" /></button>
              </div>
            </Link>
            <div class="position-relative d-flex mt-2">
              <small class="flex-fill text-center  py-2"><i class="fa fa-clock text-primary me-2"></i>{i.time}</small>
              <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>{i.students}</small>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>


</div>


  {/* button voir plus pour formation  */}
<div id="voir_plus">
  <Link to="/Formation" className="d-flex justify-content-center text-decoration-none mt-4">
    <button class="cta">
  <span>Voir plus</span>
</button>
</Link>
</div>
</div>



{/* members */}
<div className="mem">
<h1 class="text-center animation fw-bold" style={{color: "var(--dark)"}}>MEMBRES DU SIGMA</h1>
<div className="underline1"></div>
</div>
    <div class="container groupe mt-5">
      <div class="row">
        <div class="col-sm-4">
          <div class="card shadow-lg">
          <div className="teampic">
            <img src={team1} class="card-img-top" alt="..."/>
            </div>
            <div class="card-body">
              <h5 class="card-title text-center fw-bold fs-3">ZAKARIA REBLAL</h5>
              <p class="card-text text-center fw-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe excepturi totam reprehenderit, adipisci autem quis itaque eligendi, nemo quidem incidunt ut neque optio perspiciatis assumenda aliquam, veniam harum obcaecati blanditiis.</p>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-facebook-f" ></i></a>          
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-linkedin" ></i></a>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fas fa-envelope" ></i></a>
              </div>
          </div>
        </div>
        <div class="col-sm-4" >
          <div class="card shadow-lg">
          <div className="teampic">
            <img src={team1} class="card-img-top" alt="..."/>
            </div>
            <div class="card-body">
              <h5 class="card-title text-center fw-bold fs-3">ZAKARIA REBLAL</h5>
              <p class="card-text text-center fw-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe excepturi totam reprehenderit, adipisci autem quis itaque eligendi, nemo quidem incidunt ut neque optio perspiciatis assumenda aliquam, veniam harum obcaecati blanditiis.</p>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-facebook-f" ></i></a>          
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-linkedin" ></i></a>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fas fa-envelope"></i></a>
              </div>
          </div>
        </div>
        <div class="col-sm-4" >
          <div class="card shadow-lg">
          <div className="teampic">
            <img src={team1} class="card-img-top" alt="..."/>
            </div>
            <div class="card-body">
              <h5 class="card-title text-center fw-bold fs-3">ANAS AOUINA</h5>
              <p class="card-text text-center fw-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint blanditiis modi eum ipsum enim illum nostrum dolores corporis asperiores totam facilis pariatur impedit cupiditate, id quibusdam! Quisquam expedita ut vel.</p>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-facebook-f"></i></a>          
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-linkedin"></i></a>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fas fa-envelope"></i></a>
             </div>
          </div>
        </div>

      </div>
    </div>
  <div id="voir_plus">
    <Link to="/Members" className="d-flex justify-content-center text-decoration-none mt-4">
  <button class="cta">  
  <span>Voir plus</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px" className="d-none d-sm-block">
  </svg>
</button>

</Link>
</div>
  <div className="svg1 d-none d-sm-block">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="0.2" d="M0,224L720,256L1440,160L1440,320L720,320L0,320Z"></path></svg>
</div>



</div>      
        );
}
export default Services;