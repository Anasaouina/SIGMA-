import {React, useState , useEffect} from 'react';
import App from '../../App';
import './AdminColloque.css';
import NavAdmin from '../Nav_admin/NavAdmin';
import { Link, useNavigate } from 'react-router-dom';
import colloque from './colloque.PNG';
import { useAuthContext } from '../../hooks/useAuthContext';


const AdminColloque = () => {
  const [collocs, setCollocs] = useState([]);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [more, setMore] = useState()
  const [image, setImage] = useState()
  const [error, setError] = useState(null)
  const [mood, setMood] = useState('create')
  const [emptyFields, setEmptyFields] = useState([])
  const [id , setId] = useState()
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');
  const { user } = useAuthContext();
 
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

  const createColloc = async() =>{
    

    const colloc = {title,description,more,image}

    const response = await fetch('/api/colloc', {
      method: 'POST',
      body: JSON.stringify(colloc),
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
      setDescription('')
      setMore('')
      setImage('')
      setError(null)
      setEmptyFields([])
      //dispatch({type: 'CREATE_EVENT', payload: json})
      getAllCollocs();
    }
  }
  const updateColloc= async () =>  {
    
    const colloc = {title,description,more,image}

    const response = await fetch('/api/colloc/' + id , {
      method: 'PATCH',
      body: JSON.stringify(colloc),
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
      setDescription('')
      setMore('')
      setImage('')
      setError(null)
      setEmptyFields([])
      //dispatch({type: 'CREATE_EVENT', payload: json})
      getAllCollocs();
   
      setMood('create')
  }
  }

  
    useEffect(()=>{
     getAllCollocs();
    }, []);

    const getAllCollocs = ()=>{
      fetch("http://localhost:4000/api/colloc" ,{
        method:"GET",
      })
      .then((res)=>res.json())
        .then((collocs)=> {
         console.log(collocs,"data")
          setCollocs(collocs);    
          
         })
    }
    const getColloc = (_id)=> {
      
      fetch("http://localhost:4000/api/colloc/" + _id, {
        method:"GET",
      })
      .then((res)=>res.json())
        .then((colloc)=> {
          
      window.scrollTo(0, 0)
      setTitle(colloc.title)
      setDescription(colloc.description)
      setMore(colloc.more)
      setImage(colloc.image)
      setId(colloc._id.toString())  
      setMood('update');
    })
  }
  const deleteColloc = (_id) =>{

    fetch("http://localhost:4000/api/colloc/" + _id, {
      method: 'DELETE',
     
    }).then((res)=> res.json())
    .then((colloc) => { 
      alert("deleting", colloc.title )
      getAllCollocs();
    })

  }

    return (
        <div>
            <div className='AdminColloque1'>
            <NavAdmin/>
<div className='AdminColloque2'>
<h1 className='fw-bold mt-5' >Ajouter des Colloques</h1>
            <div class="card formulaire ">
  <div class="card-body">
    <form  onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="title">Name Colloque</label>
        <input required="" class="form-control" name="title" id="title" type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}/>
      </div>
      <div class="form-group">
        <label for="description">Discription</label>
        <input required="" class="form-control" name="description" id="description" type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}/>
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input required="" class="form-control" name="image" id="image" type="file"
         onChange={convertToBase64}
        />
      </div>
      <div class="form-group">
        <label for="more">more</label>
        <input required="" class="form-control" name="more" id="more" type="text"
        onChange={(e) => setMore(e.target.value)}
        value={more}/>
      </div>
      {error && <h5 className="error-message">{error}.</h5>}
      <button class="btn btn-primary mt-2"  onClick={mood==='create'? createColloc : updateColloc} style={{ borderRadius: "5px", width: "6rem" }}>{mood==='create'?'create': 'update'}</button>  
      </form>
  </div>
</div>

<h2 className='fw-bold mt-5 text-center'>Liste des Colloques</h2>
<div className="container">
  <div className="row">
  {collocs.map(i => (
<div class="col-md-4 mx-auto mt-5">
    <div class="card">
      {/* image tag */}
      <img height={300} width={200} src={i.image} class="card-img-top" alt="..."/>
      <div class="card-body">
      <h4 class="card-title text-center fw-bold">{i.title} </h4>
        <p class="card-text"> { i.description }</p>
      <Link to="" className="fw-bold fs-6">Lire Plus</Link>
      </div>
      <button className="btn btn-secondary btn-custom" onClick={() => getColloc(i._id)}>Modifier</button>
      <button className="btn btn-danger mt-2 btn-custom" onClick={() => deleteColloc(i._id)}>Supprimer</button>
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

export default AdminColloque;