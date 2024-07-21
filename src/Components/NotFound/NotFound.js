import React from 'react';
import './NotFound.css';

const NotFound = () => {
    const NotFoundImg="https://www.secured.gulf-action.com/images/pagenot_found.png";
    return (
      <div className="Notfound-container">
        <img src={NotFoundImg} alt="Notfound-img" className="set-notfound"/>
      </div>
    )
}

export default NotFound;