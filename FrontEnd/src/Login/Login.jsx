import React, { useState } from "react";
import "./Login.css";
import loginIMG from "./login1.PNG";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await login(email, password);
  };

  return (
    <div className="login">
      <section class="vh-10">
        <div class="container py-5 h-200">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src={loginIMG} class="img-fluid" alt="Phone image" />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <h1 className="text-center fw-bold">LOGIN</h1>
                <div className="underline mt-2"></div>

                <div class="form-outline mb-4 mt-5">
                  <input
                    type="email"
                    id="email"
                    class="form-control form-control-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label class="form-label mt-1" for="email">
                    Email address
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    class="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && <h5 className="error-message">{error}.</h5>}
                  <label class="form-label mt-1" for="password">
                    Password
                  </label>
                </div>

                <button type="submit" class="btn btn-lg btn-block btn-move">
                  Login
                </button>
                <div className="mt-3">
                  <p>
                    Crée votre Compte <Link to="/Signup">Sign Up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
