import React, { useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';
import './Ticket.css';

const TicketsPage = () => {

  const generatePdf = () => {
    const element = document.getElementById('content');
    const opt = {
      margin: 1,
      filename: 'Ticket.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    html2pdf().set(opt).from(element).save();
};
  
  

  return (
    <div id='content'>
    <div className='ticket'>
    <div class="ticket-container">
    <div class="event-ticket">
      <div class="event-header">
        <h2 class="event-title">Event Title</h2>
        <div class="event-icons">
          <i class="fas fa-calendar-alt"></i>
          <i class="fas fa-map-marker-alt"></i>
        </div>
      </div>
      <p class="event-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, mi at iaculis convallis, elit justo dictum tellus, non porta mi nunc nec sapien.</p>
      <div class="event-info">
        <p class="event-date"><i class="fas fa-calendar-alt"></i> Date: January 1, 2024</p>
        <p class="event-location"><i class="fas fa-map-marker-alt"></i> Location: Event Venue</p>
        <p class="event-price"><i class="fas fa-money-bill-wave"></i> Price: $10</p>
      </div>
      <button class="btn btn-primary event-button" id='cmd' onClick={generatePdf}>Buy Tickets</button>
    </div>
  </div>


  </div>




</div>
  );
};

export default TicketsPage;
