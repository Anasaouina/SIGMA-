import React from "react";
import App from "../../App";
import team1 from "../../Home/services/team-1.jpg";
import './Members.css'
import members1 from "./members1.PNG";
import Footer from "../../Home/Footer/Footer";
const Members=()=>{
    return(
<div className="Memberss">
<div class="container">
        <div className="d-flex flex-column tous-members">
        <h1 class="text-center fw-bold"><span>MEMBRES</span> DU SIGMA</h1>
        <div className="underline1"></div>
        </div> 
    <div>
        <div class="img-container">
            <img src={members1} alt="Image" />
        </div>
        </div>
    </div>


      <h6 className="text-center fw-light mt-5 ">TOUS LES MEMBERS DU GROUPE SIGMA</h6>

    <div class="container groupe ">
      <div class="row">
        <div class="col-sm-4">
          <div class="card ">
            <img src={team1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">ZAKARIA REBLAL</h5>
              <p class="card-text text-center fw-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-facebook-f" ></i></a>          
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-linkedin" ></i></a>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fas fa-envelope" ></i></a>
              </div>
          </div>
        </div>
        <div class="col-sm-4" >
          <div class="card ">
            <img src={team1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">ACHRAF HAKIMI</h5>
              <p class="card-text text-center fw-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-facebook-f" ></i></a>          
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-linkedin" ></i></a>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fas fa-envelope"></i></a>
              </div>
          </div>
        </div>
        <div class="col-sm-4 " >
          <div class="card ">
            <img src={team1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">YOUSSEF NESIRI</h5>
              <p class="card-text text-center fw-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-facebook-f"></i></a>          
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-linkedin"></i></a>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fas fa-envelope"></i></a>
             </div>
          </div>
        </div>
        <div class="col-sm-4 mt-5">
          <div class="card ">
            <img src={team1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">ZAKARIA REBLAL</h5>
              <p class="card-text text-center fw-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-facebook-f" ></i></a>          
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-linkedin" ></i></a>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fas fa-envelope" ></i></a>
              </div>
          </div>
        </div>
        <div class="col-sm-4 mt-5 ">
          <div class="card ">
            <img src={team1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">ZAKARIA REBLAL</h5>
              <p class="card-text text-center fw-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-facebook-f" ></i></a>          
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-linkedin" ></i></a>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fas fa-envelope" ></i></a>
              </div>
          </div>
        </div>
        <div class="col-sm-4 mt-5">
          <div class="card ">
            <img src={team1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">ZAKARIA REBLAL</h5>
              <p class="card-text text-center fw-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-facebook-f" ></i></a>          
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-linkedin" ></i></a>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fas fa-envelope" ></i></a>
              </div>
          </div>
        </div>
        <div class="col-sm-4 mt-5">
          <div class="card ">
            <img src={team1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">ZAKARIA REBLAL</h5>
              <p class="card-text text-center fw-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-facebook-f" ></i></a>          
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-linkedin" ></i></a>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fas fa-envelope" ></i></a>
              </div>
          </div>
        </div>
        <div class="col-sm-4 mt-5">
          <div class="card ">
            <img src={team1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">ZAKARIA REBLAL</h5>
              <p class="card-text text-center fw-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-facebook-f" ></i></a>          
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-linkedin" ></i></a>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fas fa-envelope" ></i></a>
              </div>
          </div>
        </div>
        <div class="col-sm-4 mt-5">
          <div class="card ">
            <img src={team1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">ZAKARIA REBLAL</h5>
              <p class="card-text text-center fw-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-facebook-f" ></i></a>          
              <a href="" class="btn btn-lg btn-light col-4"><i class="fab fa-linkedin" ></i></a>
              <a href="" class="btn btn-lg btn-light col-4"><i class="fas fa-envelope" ></i></a>
              </div>
          </div>
        </div>
        
      </div>
    </div>



    <Footer />
</div>
    );
}
export default Members;