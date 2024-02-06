import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const Payment = () => {
    const navigate = useNavigate();
    
    useEffect (()=> {
        window.paypal.Buttons({
             createOrder: (data, actions)=> {
                 return actions.order.create({
                     purchase_units: [{
                         amount: {
                             value: 50.00 ,
                         }
                     }]
                 });
             } ,
             onApprove: (data, actions)=> {
                 return actions.order.capture().then(details => {
                    alert('Merci d\'acheter la Formation !');
                    navigate('/TicketsPage');
                });  
             },
         })
         .render('.paypal-button')
         }, [])


    return (
        
        <div className='container'>
            <div className=' mt-5'>
                <div className='paypal-button'>
                </div>
           </div>
         </div>
    );
}

export default Payment;
