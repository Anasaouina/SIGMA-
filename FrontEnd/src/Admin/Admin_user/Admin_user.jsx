import {React, useEffect, useState }from 'react';
import App from '../../App';
import './Admin_user.css';
import NavAdmin from '../Nav_admin/NavAdmin';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

 

const Admin_user = () => {

  const [users, setUsers] = useState([]);
  
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');
  const { user } = useAuthContext();
   if (!user){
    navigate('/login');
   }
  useEffect(() => {
    setUserType(user.userType);
  }, [user.userType, setUserType]);
  
  useEffect(() => {
    if (userType && userType !== 'admin') {
      navigate('/profile');
    }
  }, [userType, navigate]);
  
  useEffect(()=> {
    getAllUsers();
  } ,[] );
 
 
  const getAllUsers = ()=> {
    fetch("http://localhost:4000/api/auth/getAllUsers",{
      method:"GET",
    })
    .then((res)=>res.json())
      .then((allUsers)=> {
        //console.log(allUsers,"data")
        setUsers(allUsers);    
        
       })
  }
  
  const deleteUser=(_id ) => {
    //console.log(_id)

    fetch("http://localhost:4000/api/auth/deleteUser", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({_id})
    }).then((res)=> res.json())
    .then((user) => { 
      alert("deleting",user.fname,user.lname )
      getAllUsers();
    })
  }

    return (
          <div className='Admin_user'>          
          <NavAdmin/>

              <div class="div2">
                <h1 className='fw-bold'>Liste des Users</h1>
              <table className='mt-5' style={{ width: '60rem', borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                      <th style={{ border: '1px solid #dddddd', padding: '5px' }}>Nom</th>
                      <th style={{ border: '1px solid #dddddd',  padding: '5px' }}>Prénom</th>
                      <th style={{ border: '1px solid #dddddd',  padding: '5px' }}>Email</th>
                      <th style={{ border: '1px solid #dddddd',  padding: '5px' }}>Date</th>
                      <th style={{ border: '1px solid #dddddd', padding: '5px' }}>Delete</th>
                    </tr>
                  </thead>
                {users.map(i=>{
                  return (
                  
                  <tbody>
                    <tr>
                      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{i.lname}</td>
                      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{i.fname}</td>
                      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{i.email}</td>
                      <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{i.email}</td>
                      <td style={{ border: '1px solid #dddddd', padding: '8px' }}> <button class='btn btn-danger'onClick={()=>deleteUser(i._id)} >supprimerr</button> </td>
                    </tr>
                  </tbody>
                
                  )
                  })}
                </table>
                </div>
          </div>
    );
}
export default Admin_user;