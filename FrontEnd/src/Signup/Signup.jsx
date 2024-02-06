import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSignup } from "../hooks/useSignup"
import './Signup.css';
import signupImG from './signupImG.jpeg'



const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password, lname, fname )

  };

  return (
    <div className='signup'>
<section class="">
  <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundcolor: "hsl(0, 0%, 96%)"}}>
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0 para">
          <img src={signupImG} alt="" />
        </div>
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card">
            <div class="card-body py-5 px-md-5">
              <h1 className='fw-bold text-center'>Sign Up</h1>
              <div className="underline mt-2"></div>
              <form onSubmit={handleSubmit}>
                <div class="row mt-5">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <label class="form-label" for="fname">First name</label>
                      <input type="text" id="fname" class="form-control" value={fname}
                onChange={(e) => setFname(e.target.value)}/>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <label class="form-label" for="lname">Last name</label>
                      <input type="text" id="lname" class="form-control" value={lname}
                onChange={(e) => setLname(e.target.value)}
/>
                    </div>
                  </div>
                </div>

                <div class="form-outline mb-4">
                <label class="form-label" for="email">Email address</label>
                  <input type="email" id="email" class="form-control" value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete='off'/>
                </div>

                <div class="form-outline mb-4">
                <label class="form-label" for="password">Password</label>
                  <input type="password" id="password" class="form-control" value={password}
                onChange={(e) => setPassword(e.target.value)} />
                 {error && <h5 className="error-message">{error}.</h5>}
                </div>
                <button type="submit" class="btn text-white btn-block mt-3" disabled={isLoading}>
                  Sign up
                </button>
                <div className="mt-3">
                <Link to="/Login">Login</Link>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






    </div>
  );

}
export default Signup;
