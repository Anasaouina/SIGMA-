import React, { useState, useEffect } from 'react';

const ArchiveEvent = () => {
    const [events , setEvents]= useState([])
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
    return (
        <div>
            <h1 className='text-center mt-4 fw-bold'>LES EVENEMENTS</h1>
            <div className='underline1'></div>
            {events.map(i=>{
                  return (
            <div className='mt-5'>
                <ul>
                    <li>
                        <h3 className='fw-bold'>{i.title}</h3>
                        <p>{i.time}</p>
                        <a href="">Résume</a>
                    </li>
                    <hr />
 
                </ul>
            </div>
                  )})}
        </div>
    );
}

export default ArchiveEvent;
