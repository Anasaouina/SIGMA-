import React from "react";

import './Footer.css';


const Footer =()=>{
    return(
        <div>
    <footer class="container-fluid bg-dark text-light footer pt-2  wow ">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-4 col-md-6">
                    <h4 class="text-white mb-3 text-center fw-bold">About SIGMA</h4>
                    <div className="underline1 "></div>
                  <p className="text-center mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente incidunt, iusto vero eius voluptas repellendus praesentium maxime qui explicabo doloribus cum blanditiis enim consequuntur quasi atque, vitae dolore odit provident?</p>
                </div>
                <div class="col-lg-4 col-md-6 text-center">
                    <h4 class="text-white mb-3 fw-bold">Contact</h4>
                    <div className="underline1 "></div>
                    <p class="mb-2 mt-3"><i class="fa fa-envelope me-3"></i>sigma@gmail.com</p>
                    <div class="pt-2 d-flex justify-content-center align-items-center">
                        <a class="btn btn-outline-light btn-social mx-2" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social mx-2" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social mx-2" href=""><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-outline-light btn-social mx-2" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h4 class="text-white text-center mb-3 fw-bold">Joindre Nous</h4>
                    <div className="underline1 "></div>
                    <p className="mt-3">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div class="position-relative" >
                        <input class="form-control border-0 w-80 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" class="btn btn-light py-2 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
</footer>
            <div class="copyright">
                    <div class=" text-center fs-5 fw-light copy">
                      2023 &copy; SIGMA<br/><br/>
            </div>
    </div>


        </div>
    );
}
export default Footer ;