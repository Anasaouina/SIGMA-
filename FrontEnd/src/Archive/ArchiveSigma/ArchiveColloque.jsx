import React, { useState, useEffect } from 'react';


const ArchiveColloque = () => {
    const [collocs,setCollocs] = useState([]);
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
    return (
        <div>
            <h1 className='text-center mt-4 fw-bold'>LES COLLOQUES</h1>
            <div className='underline1'></div>
            {collocs.map(i => (
            <div className='mt-5'>
                <ul>
                    <li>
                        <h3 className='fw-bold'>{i.title}</h3>
                        <p>{i.more}</p>
                        <a href="">Résume</a>
                    </li>
                    <hr />

                </ul>
            </div>
            ))}
        </div>
    );
}

export default ArchiveColloque;
