import React, { useState, useEffect } from 'react';
import './Profile.css';
import Navs from '../Home/Navbar/Navs';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../hooks/useAuthContext';

const Profile = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');
  const { user } = useAuthContext();
  const [id, setUserid] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [ville, setVille] = useState('');
  const [phone, setPhone] = useState('');
  const [pays, setPays] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    setUserType(user.userType);
  }, [user.userType]);

  useEffect(() => {
    if (userType && userType === 'admin') {
      navigate('/Admin_user');
    }
  }, [userType, navigate]);
  
  useEffect(() => {
    setFname(user.fname);
    setLname(user.lname);
    setEmail(user.email);
    setUserid(user._id);
  }, [user]);
  function convertToBase64(e){
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () =>{
      setImage(reader.result);
    };
    reader.onerror = error=>{
      console.log("error : ", error)
    }
  }
  const updateUser = async () => {
    const updatedUser = {
      fname,
      lname,
      email,
      ville,
      phone,
      pays,
      image,
    };

    const response = await fetch('/api/auth/' + id, {
      method: 'PATCH',
      body: JSON.stringify(updatedUser),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
    });

    
  };


  return (

    <div className='profile'>
      <div class="container">
       <div class="main-body">

          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <form action="">
                      <label htmlFor="image">
                    <img src={ user.image || "https://bootdey.com/img/Content/avatar/avatar7.png"}  alt="Admin" class="rounded-circle" width="150"/>
                    </label>
                    <input type="file" onChange={convertToBase64} id='image'/>
                    </form>
                    <div class="mt-3">
                      {/* NAME USER */}
                      <h4 className='text-uppercase'>{user.fname } {user.lname}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <h4 className='text-center fw-semibold mt-2'>SIGMA MEDIA</h4>
                <div className="underline mt-1"></div>
                <ul class="list-group list-group-flush">
                  <a href="" className='text-decoration-none'>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail mr-2 icon-inline text-danger"><path d="M3 6l9 6 9-6"></path><path d="M21 18H3"></path><path d="M21 6h-2l-9 7L5 6H3"></path></svg>Email</h6>
                      <span class="text-secondary"></span>
                    </li>
                  </a>
                  <a href="" className='text-decoration-none'>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span class="text-secondary"></span>
                  </li>
                  </a>
                  <a href="" className='text-decoration-none'>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span class="text-secondary"></span>
                  </li>
                  </a>
                  <a href="" className='text-decoration-none'>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                      <span class="text-secondary"></span>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                  <div class="form-group">
                    <label for="nome" className='fw-medium'>Nom</label>
                      <input required="" class="form-control" name="Nom" id="Nom" type="text" disabled={true}
                      
                      value={user.lname}/>
                  </div>
                  <div class="form-group">
                    <label for="Prénom" className='fw-medium'>Prénom</label>
                    <input required="" class="form-control" name="Prénom" id="Prénom" type="text" disabled={true}
                    
                    value={user.fname}/>
                  </div>
                  </div>
                  <div class="form-group">
                    <label for="Email" className='fw-medium'>Email</label>
                    <input required="" class="form-control" name="Email" id="Email" type="text" disabled={true}
                    
                    value={user.email}/>
                  </div>
                <div class="form-group">
                  <label for="Phone" className='fw-medium'>Phone</label>
                  <input required="" class="form-control" name="Phone" id="Phone" type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}/>
                </div>

                <div class="form-group">
                  <label for="Ville" className='fw-medium'>Ville</label>
                  <input required="" class="form-control" name="Ville" id="Ville" type="text"
                  onChange={(e) => setVille(e.target.value)}
                  value={ville}/>
                </div>

                <div class="form-group">
                  <label for="Pays" className='fw-medium'>Pays</label>
                  <input required="" class="form-control" name="Pays" id="Pays" type="text"
                  onChange={(e) => setPays(e.target.value)}
                  value={pays}/>
                </div>
                <button class="btn text-white mt-2" onClick={updateUser} style={{ borderRadius: "5px", width: "6rem", backgroundColor:"var(--majorelle-blue)", bordercolor: "var(--majorelle-blue)" }}>Modifier</button>     

            </div>
          </div> 


    
        </div>
        </div>
        </div>
        </div>
        </div>
      
        
  );
}

export default Profile;