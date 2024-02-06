import {Reactn , useEffect, useState} from 'react';
import App from '../../App';
import './AdminFormation.css';
import NavAdmin from '../Nav_admin/NavAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMusic, faUser} from '@fortawesome/free-solid-svg-icons'
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons"; 
import { faClockFour } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import about5 from './conference1.jpg';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../hooks/useAuthContext';

const AdminFormation = () => {
  const [formations, setFormations] = useState([]);
  const [title, setTitle] = useState('')
  const [prix, setPrix] = useState('')
  const [duree, setDuree] = useState('')
  const [time, setTime] = useState('')
  const [students, setStudents] = useState('')
  const [image, setImage] = useState()
  const [error, setError] = useState(null)
  const [mood, setMood] = useState('create')
  const [emptyFields, setEmptyFields] = useState([])
  const [id , setId] = useState()
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

  const handleSubmit = async (e) => {
   
    e.preventDefault()
  }
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

  const createFormation = async() =>{
    // // const file = event.target.files[0];
    // const formData = new FormData();
    // formData.append('image', image);

    const formation = {title,duree,prix, time,students,image}

    const response = await fetch('/api/formation', {
      method: 'POST',
      body: JSON.stringify(formation),
      headers: {
        'Content-Type': 'application/json',
       // 'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setTitle('')
      setDuree('')
      setPrix('')
      setTime('')
      setStudents('')
      setImage('')
      setError(null)
      setEmptyFields([])
      //dispatch({type: 'CREATE_EVENT', payload: json})
      getAllFormations();
    }
  }
  const updateFormation= async () =>  {
    
    const formation = {title,duree,prix, time,students,image}

    const response = await fetch('/api/formation/' + id , {
      method: 'PATCH',
      body: JSON.stringify(formation),
      headers: {
        'Content-Type': 'application/json',
       // 'Authorization': `Bearer ${user.token}`
      } 
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
        setTitle('')
        setDuree('')
        setPrix('')
        setTime('')
        setStudents('')
        setImage('')
        setError(null)
        setEmptyFields([])
      //dispatch({type: 'CREATE_EVENT', payload: json})
      getAllFormations()
      setMood('create')
  }
  }

  
    useEffect(()=>{
     getAllFormations();
    }, []);

    const getAllFormations = ()=>{
      fetch("http://localhost:4000/api/formation" ,{
        method:"GET",
      })
      .then((res)=>res.json())
        .then((formations)=> {
         console.log(formations,"data")
          setFormations(formations);    
          
         })
    }
    const getformation = (_id)=> {
      
      fetch("http://localhost:4000/api/formation/" + _id, {
        method:"GET",
      })
      .then((res)=>res.json())
        .then((formation)=> {
          
      window.scrollTo(0, 0)
      setTitle(formation.title)
      setDuree(formation.duree)
      setPrix(formation.prix)
      setTime(formation.time)
      setStudents(formation.students)
      setImage(formation.image)
      setId(formation._id.toString())  
      setMood('update');
    })
  }
  const deleteFormation = (_id) =>{

    fetch("http://localhost:4000/api/formation/" + _id, {
      method: 'DELETE',
     
    }).then((res)=> res.json())
    .then((formation) => { 
      alert("deleting", formation.title )
      getAllFormations();
    })

  }
    return (
        <div>
            <div className='AdminFormation1'>
            <NavAdmin/>
<div className='AdminFormation2'>
            <h1 className='fw-bold mt-5 ' >Ajouter des Formations</h1>
            <div class="card formulaire ">
  <div class="card-body">
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="title">Name Event</label>
        <input required="" class="form-control" name="title" id="title" type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}/>
      </div>
      <div class="form-group">
        <label for="duree">durée</label>
        <input required="" class="form-control" name="duree" id="duree" type="text"
        onChange={(e) => setDuree(e.target.value)}
        value={duree}/>
      </div>
      <div class="form-group">
        <label for="prix">prix</label>
        <input required="" class="form-control" name="prix" id="prix" type="text"
        onChange={(e) => setPrix(e.target.value)}
        value={prix}/>
      </div>
      <div class="form-group">
        <label for="time">Date/week</label>
        <input required="" class="form-control" name="time" id="time" type="text"
        onChange={(e) => setTime(e.target.value)}
        value={time}/>
      </div>
      <div class="form-group">
        <label for="students">students</label>
        <input required="" class="form-control" name="students" id="students" type="text"
        onChange={(e) => setStudents(e.target.value)}
        value={students}/>
      </div>
      <div class="form-group">
        <label for="image">image</label>
        <input required="" class="form-control" name="image" id="image" type="file"
        onChange={convertToBase64}/>
      </div>
      <button class="btn btn-primary mt-2" onClick={mood==='create'? createFormation : updateFormation} style={{ borderRadius: "5px", width: "6rem" }}>{mood==='create'?'create': 'update'}</button>     
      </form>
  </div>
</div>
<h2 className='fw-bold mt-5 text-center'>Liste des Formations</h2>


<div className="container">
  <div className="row">
    {formations.map(i => (
      <div key={i._id} className="col-4 mt-5">
        <div className="card">
          <div>
            <img src={about5} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">{i.title}</h5>
              <i>{i.duree}</i> <FontAwesomeIcon icon={faCalendarWeek} className="fa-solid fa-calendar-week" /><br />
              <div className="text-center d-none d-sm-block" id="icons">
                <FontAwesomeIcon icon={faStar} className="fa-sharp fa-solid fa-star" style={{ color: "#d1e916" }} />
                <FontAwesomeIcon icon={faStar} className="fa-sharp fa-solid fa-star" style={{ color: "#d1e916" }} />
                <FontAwesomeIcon icon={faStar} className="fa-sharp fa-solid fa-star" style={{ color: "#d1e916" }} />
                <FontAwesomeIcon icon={faStar} className="fa-sharp fa-solid fa-star" style={{ color: "#d1e916" }} />
                <FontAwesomeIcon icon={faStar} className="fa-sharp fa-solid fa-star" style={{ color: "#d1e916" }} /> (15)
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-dark text-light fw-bold btn-custom" type="submit">
                  {i.prix} <FontAwesomeIcon icon={faEuroSign} className="fa-sharp fa-regular fa-euro-sign" />
                </button>
              </div>
              <div className="position-relative d-flex mt-2">
                <small className="flex-fill text-center py-2"><i className="fa fa-clock text-primary me-2"></i>{i.time}</small>
                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>{i.students}</small>
              </div>
              <div className="d-grid gap-2 buttonsupp">
                <button className="btn btn-secondary btn-custom" onClick={() => getformation(i._id)}>Modifier</button>
                <button className="btn btn-danger mt-2 btn-custom" onClick={() => deleteFormation(i._id)}>Supprimer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>






   
</div>
</div>
</div>
    );
}

export default AdminFormation;