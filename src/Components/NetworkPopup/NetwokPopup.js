import React from 'react';
import './NetworkPopup.css';

const NetworkPopup = () => {
    const ErrorImg="https://www.freeiconspng.com/uploads/shiny-metal-red-error-image-designs-1.png";
  return (
    <div className="network-popup-total-container">
        <div className='network-popup-inner-container'>
        <img src={ErrorImg} alt="Error-img" className='network-popup-set-img'/>
            <p className='network-popup-para'>Network Error</p>
        </div>
    </div>
  )
}

export default NetworkPopup;