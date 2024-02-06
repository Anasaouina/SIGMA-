import React, { useEffect, useState } from "react";
import App from "../../App";
import './Colloque.css';
import colloque from "./colloque2.PNG"
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Home/Footer/Footer";
const Colloque =() =>{
  const [collocs, setCollocs]= useState([]);  

  useEffect(()=>{
    getAllCollocs();
   }, []);

  const getAllCollocs = ()=>{
    fetch("http://localhost:4000/api/colloc" ,{
      method:"GET",
    })
    .then((res)=>res.json())
      .then((collocs)=> {
       console.log(collocs,"data")
        setCollocs(collocs);    
        
       })
  }
    return(
        <div className="colloque">
<div>
        <img src={colloque} id="colloque" className="d-block " alt="..."/>
        <div className="texte-superpose">
          <h1 className="fw-bold">
            COLLOQUE SIGMA 2023 
          </h1>
          </div>
        </div>
        <div className="container collo mt-5">
          <div className="row g-5">
            <div
              className="col-lg-6"
              style={{ minHeight: "40px" }}
            >
              <div className="position-relative h-100 mr-1 ">
              <img class="img-fluid w-100 h-100" src={colloque} alt="" style={{objectfit: "cover"}}/>
                {/* Contenu de la première colonne */}
              </div>
            </div>
            <div className="col-lg-6 cc">
              <h1 className="mb-4 mt-4 text-start fw-bold"> LE <span>COLLOQUE</span> SIGMA</h1>
              <p className="mb-4">  
                   Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus odit incidunt ipsa odio, saepe mollitia fugiat, nesciunt tenetur expedita veritatis assumenda molestiae ipsum voluptate quibusdam autem fugit optio ut ratione.
              </p>
            </div>
          </div>
        </div>

<div className="card-collo">
  <h1 className="mt-5 fw-bold">COLLOQUE</h1>
  <div className="underline1"></div>
  {collocs.map(i => (
<div class="row row-cols-1 row-cols-md-2">
  <div class=" col-md-6 mx-auto mt-5">
    <div class="card">
      <img src={i.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h4 class="card-title text-center fw-bold">{i.title}</h4>
        <p class="card-text">{i.description}</p>
      <Link to="" className="fw-bold fs-6">{i.more}</Link>
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
export default Colloque;