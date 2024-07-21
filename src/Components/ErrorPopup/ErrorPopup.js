import React from 'react';
import './ErrorPopup.css';

const ErrorPopup = ({onClose}) => {
    const ErrorImg="https://www.freeiconspng.com/uploads/shiny-metal-red-error-image-designs-1.png";
  return (
    <div className="error-popup-total-container">
        <div className='error-popup-inner-container'>
        <img src={ErrorImg} alt="Error-img" className='error-popup-set-img'/>
            <p className='error-popup-para'>Invalid</p>
            <p className='error-popup-para-2'>Email / Password</p>
            <button className="error-btn" onClick={onClose}>OK</button>
        </div>
    </div>
  )
}

export default ErrorPopup;