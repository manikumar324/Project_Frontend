import React from 'react';
import './popup.css';

const Popup = ({onClose}) => {
    const rightImg="https://th.bing.com/th/id/R.ea856edcae5d730ecaedab12be7c3756?rik=%2f6wSGz%2ba4iiQaQ&riu=http%3a%2f%2farfoldingstock.com%2fimg%2fcheck.png&ehk=jR04LXQwX%2fZTJrAC5fVYXuLJTytQd%2fhqBzRozYG%2fCyg%3d&risl=&pid=ImgRaw&r=0";
  return (
    <div className="popup-total-container">
        <div className='popup-inner-container'>
        <img src={rightImg} alt="right-img" className='popup-set-img'/>
            <p className='popup-para'>Log In Successfully !!</p>
            <button className='pop-btn' onClick={onClose}>OK</button>
        </div>
        
    </div>
  )
}

export default Popup;