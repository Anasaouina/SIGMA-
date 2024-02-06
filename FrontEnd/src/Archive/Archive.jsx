import React from 'react';
import App from '../App';
import './Archive.css';
import archive1 from './archive.PNG';
import Footer from '../Home/Footer/Footer';
import { Link } from 'react-router-dom';



const Archive = () => {
    return(
    <div className='archive'>
        <div className="d-flex flex-column">
            <h1 className=" fw-bold text-center">LES <span>ARCHIVES</span> DU SIGMA<div className="underline1"></div>
            </h1>
        </div> 
 
<h3 className="fw-bold text-center">Tous les évenemments passer dans notre groupe SIGMA</h3>
<div class="container mt-5">
<div className="row">
    <div class="col-6">
          <div class="card">
            <img src={archive1} class="card-img-top" alt="..."/>
            <div class="card-body text-center">
            <h5 class="card-title fw-bold">Les Derniers Events </h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, magni. Dolor, debitis excepturi, corporis ullam dignissimos, dicta natus id culpa facere amet nesciunt totam necessitatibus recusandae facilis rem magnam nemo.</p>
            <div className="d-grid gap-2">
            <Link to="/ArchiveEvent" className='text-decoration-none text-white'><button class="btn btn-dark text-light fw-bold">VISIT  </button> </Link> 
        </div>
              </div>
          </div>
    </div>


    <div class="col-6 ">
          <div class="card">
            <img src={archive1} class="card-img-top" alt="..."/>
            <div class="card-body text-center">
            <h5 class="card-title fw-bold">Les Derniers Colloque </h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, magni. Dolor, debitis excepturi, corporis ullam dignissimos, dicta natus id culpa facere amet nesciunt totam necessitatibus recusandae facilis rem magnam nemo.</p>
            <div className="d-grid gap-2">
            <Link to="/ArchiveColloque" className='text-decoration-none text-white'><button class="btn btn-dark text-light fw-bold">VISIT  </button> </Link> 
        </div>
              </div>
          </div>
    </div>

</div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" className='d-none d-sm-block' viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="0.5" d="M0,256L1440,256L1440,320L0,320Z"></path></svg>
<Footer />

    </div>
    
    );
}
export default Archive;