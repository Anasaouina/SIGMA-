import React from "react";
import App from '../../App';
import './Carousel.css';
import carousel5 from './carousel-5.PNG';



const Carousel = () => {
    // Référence à la div cible pour le défilement
    const targetDivRef = React.useRef(null);
    // Fonction pour effectuer le défilement vers la div cible
    const scrollToTargetDiv = () => {
      if (targetDivRef && targetDivRef.current) {
        window.scrollTo({
          top: targetDivRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    };

    return (
      <div>
      <div>
        <img src={carousel5} id="img1" className="d-block " alt="..."/>
        <div className="texte-superpose">
          <h1 className="fw-bold animate_animated animate_fadeInDown">
            Groupement d'études en Signal, Image Multimédia et Applications.
          </h1>
          <button
            type="button"
            className="btn btn-info btn-lg"
            id="btn"
            onClick={scrollToTargetDiv} // Appel de la fonction de défilement lors du clic sur le bouton
          >
            Voir Plus
          </button>
         <a href="#scrollspyHeading1"> <button
            type="button"
            className="btn btn-info btn-lg ml-4 bg-light text-dark border-white"
            id="btn"
             // Appel de la fonction de défilement lors du clic sur le bouton
          >
            Events
          </button>
          </a>
          </div>
        </div>

        {/* Référence à la div cible pour le défilement */}
        <div ref={targetDivRef}></div>
      </div>
    );
  };
  
  export default Carousel;