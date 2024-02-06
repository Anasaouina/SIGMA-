import { Component, Fragment, useState, useEffect } from 'react';
import { BrowserRouter ,Routes ,Route, useNavigate , Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'
import './App.css';
import Home from './Home/Home';
import Navs from './Home/Navbar/Navs';
import Formation from './Courses/Formations/Formation';
import Footer from './Home/Footer/Footer';
import Conferences from './conferences/Conférence/Conferences';
import Conferences2 from './conferences/Conférence/conferences2';
import Members from './Members/Membre/Members';
import Colloque from './colloque/Colloque/Colloque';
import Liveconf from './conferences/Conférence/Liveconf';
import Archive from './Archive/Archive';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Profile from './profilUser/Profile';
import Payment from './Paypal/Payment';
import TicketsPage from './Paypal/TicketsPage ';
import NavAdmin from './Admin/Nav_admin/NavAdmin';
import Admin_user from './Admin/Admin_user/Admin_user';
import AdminEvent from './Admin/Admin_event/AdminEvent';
import AdminFormation from './Admin/Admin_formation/AdminFormation';
import AdminColloque from './Admin/Admin_colloque/AdminColloque';
import ArchiveColloque from './Archive/ArchiveSigma/ArchiveColloque';
import ArchiveEvent from './Archive/ArchiveSigma/ArchiveEvent';
import Contact from './Contact/Contact';


function App() {
  
  
 
 
    
 

  const{user}= useAuthContext();
  
   
  return (
<BrowserRouter >
    <Navs />  
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Formation" exact element={<Formation />}/>
        <Route path="/Conferences" exact element={<Conferences />}/>
        <Route path="/Conferences2" exact element={<Conferences2 />}/>
        <Route path="/Members" exact element={<Members />}/>
        <Route path="/Colloque" exact element={<Colloque />}/>
        <Route path="/Liveconf" exact element={<Liveconf />}/>
        <Route path="/Archive" exact element={<Archive />}/>
        <Route path="/Login" exact element={ !user ? <Login />:  <Navigate to="/profile"/> }/>
        <Route path="/Signup" exact element={!user ? <Signup />:  <Navigate to="/profile"/>}/>
        <Route path="/Profile" exact element={ user ? <Profile />:  <Navigate to="/login"/> }/>
        <Route path="/Payment" exact element={<Payment />}/>
        <Route path="/TicketsPage" exact element={<TicketsPage />}/>
        <Route path="/Admin_user" exact element={ user ? < Admin_user /> :  <Navigate to="/login"/>}/> 
        <Route path="/AdminEvent" exact element={ user ? < AdminEvent />:  <Navigate to="/login"/> }/>
        <Route path="/AdminFormation" exact element={  user ?< AdminFormation />:  <Navigate to="/login"/>}/>
        <Route path="/AdminColloque" exact element={  user ?<AdminColloque />:  <Navigate to="/login"/>} />
        <Route path="/ArchiveColloque" exact element={<ArchiveColloque />}/>
        <Route path="/ArchiveEvent" exact element={<ArchiveEvent />}/>
        <Route path="/Contact" exact element={<Contact />}/>
      </Routes>
</BrowserRouter>

  );
}

export default App;
