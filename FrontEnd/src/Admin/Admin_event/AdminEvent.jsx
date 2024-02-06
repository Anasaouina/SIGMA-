import {React, useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import App from '../../App';
import './AdminEvent.css';
import NavAdmin from '../Nav_admin/NavAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import conference1 from './conference1.jpg';
import { useAuthContext } from '../../hooks/useAuthContext';

const AdminEvent = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('')
  const [presenter, setPresnter] = useState('')
  const [description, setDescription] = useState('')
  const [time, setTime] = useState('')
  const [place, setPlace] = useState('')
  const [image, setImage] = useState({})
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
  const createEvent = async() =>{
    // const file = event.target.files[0];
    const event = {title,presenter, description, time,place,image}
    const response = await fetch('/api/event', {
      method: 'POST',
      body: JSON.stringify(event),
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
      setPresnter('')
      setDescription('')
      setTime('')
      setPlace('')
      setImage('')
      setError(null)
      setEmptyFields([])
      //dispatch({type: 'CREATE_EVENT', payload: json})
      getAllEvents();
    }
  }
  const updateEvent= async () =>  {
    
    const event = {title,presenter, description, time,place,image}

    const response = await fetch('/api/event/' + id , {
      method: 'PATCH',
      body: JSON.stringify(event),
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
      setPresnter('')
      setDescription('')
      setTime('')
      setPlace('')
      setImage('')
      setError(null)
      setEmptyFields([])
      //dispatch({type: 'CREATE_EVENT', payload: json})
      getAllEvents()
      setMood('create')
  }
  }

  
    useEffect(()=>{
     getAllEvents();
    }, []);

    const getAllEvents = ()=>{
      fetch("http://localhost:4000/api/event" ,{
        method:"GET",
      })
      .then((res)=>res.json())
        .then((events)=> {
         console.log(events,"data")
          setEvents(events);    
          
         })
    }
    const getEvente = (_id)=> {
      
      fetch("http://localhost:4000/api/event/" + _id, {
        method:"GET",
      })
      .then((res)=>res.json())
        .then((event)=> {
      window.scrollTo(0, 0)
      setTitle(event.title)
      setPresnter(event.presenter)
      setDescription(event.description)
      setTime(event.time)
      setPlace(event.place)
      setImage(event.image)
      setId(event._id.toString())  
      setMood('update');
    })
  }
  const deleteEvent = (_id) =>{

    fetch("http://localhost:4000/api/event/" + _id, {
      method: 'DELETE',
     
    }).then((res)=> res.json())
    .then((event) => { 
      alert("deleting", event.title )
      getAllEvents();
    })

  }
  
    return (
        <div className='AdminEvent1' >
            <NavAdmin/>
        <div className='AdminEvent2'>
            <h1 className='fw-bold mt-5'>Ajouter Events</h1>
            {/* <button class="btn btn-primary mt-2" style={{ marginLeft: "1rem" }}>Ajouter</button>
            <button class="btn btn-secondary mt-2" style={{ marginLeft: "1rem" }}>Modifier</button>
            <button class="btn btn-danger mt-2" style={{ marginLeft: "1rem" }}>Supprimer</button> */}
   
           <div class="card formulaire mt-4">
            <div class="card-body">
              <form  onSubmit={handleSubmit}>
                <div class="form-group">
                  <label for="title">Name Event</label>
                  <input required="" class="form-control" name="title" id="title" type="text"
                   onChange={(e) => setTitle(e.target.value)}
                   value={title}/>
                </div>
                <div class="form-group">
                  <label for="presenter">Présenter par</label>
                  <input required="" class="form-control" name="presenter" id="presenter" type="text"
                   onChange={(e) => setPresnter(e.target.value)}
                   value={presenter}/>
                </div>
                <div class="form-group">
                  <label for="description">Discription</label>
                  <input required="" class="form-control" name="description" id="description" type="text"
                   onChange={(e) => setDescription(e.target.value)}
                   value={description}/>
                </div>
                <div class="form-group">
                  <label for="date">Date</label>
                  <input required="" class="form-control" name="date" id="date" type="text"
                   onChange={(e) => setTime(e.target.value)}
                   value={time}/>
                </div>
                <div class="form-group">
                  <label for="place">place</label>
                  <input required="" class="form-control" name="place" id="place" type="text"
                   onChange={(e) => setPlace(e.target.value)}
                   value={place}/>
                </div>
                <div class="form-group">
                  <label for="image">image</label>
                  <input required="" class="form-control" name="image" id="image" type="file"
                    onChange={convertToBase64}/>
                </div>
                {error && <h5 className="error-message">{error}.</h5>}
                <button class="btn btn-primary mt-2"  onClick={mood==='create'? createEvent : updateEvent} style={{ borderRadius: "5px", width: "6rem" }}>{mood==='create'?'create': 'update'}</button>     
                </form>
            </div>
          </div>
            <h1 className='fw-bold mt-5  text-center'>Liste Events</h1>
            {events.map(i=>{
                  return (
                      
            <div class="card mt-5 ml-3">
              <div class="row g-0">
                <div class="col-4">
                  <img src={conference1} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-8">
                  <div class="card-body ">
                    <h4 class="card-title fw-bold">{i.title}</h4>
                    <h6 className="fw-semibold">Présenter par {i.presenter}</h6>
                    <p className="">{i.description}</p>
                    <p class="card-text fw-bold"><FontAwesomeIcon icon={faCalendarWeek} className="fa-solid fa-calendar-week"/> {i.time}</p>
                    <p class="card-text fw-bold"><i class="fa fa-clock me-2 d-none d-sm-block"> 20:00 </i></p>
                    <p class="card-text fw-bold"><FontAwesomeIcon icon={faLocationDot} className="fa-solid fa-location-dot" />{i.place}</p>
                    {/* <Link to="/updateEvent" class="nav-link active" state={id} > */}
                    <button class="btn btn-secondary mt-2" onClick={()=>getEvente(i._id)} style={{ marginLeft: "1rem" }}>Modifier</button>
                    {/* </Link> */}
                        <button class="btn btn-danger mt-2"onClick={()=>deleteEvent(i._id)} style={{ marginLeft: "1rem" }}>Supprimer</button>
                  </div>
                </div>
              </div>
            </div>
            )})
            }
          </div>

  </div>
    );
}

export default AdminEvent;