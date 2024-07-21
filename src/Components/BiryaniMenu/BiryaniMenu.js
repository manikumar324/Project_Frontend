import React, { useState } from 'react';
import './BiryaniMenu.css';
import DosaCard from '../DosaCard/DosaCard';
import ReactPlayer from "react-player";

const BiryaniMenu = () => {
    const[dosaList,setDosaList]=useState([])

  return (
    <div className="total-dosa-card-container">
        {dosaList.map((dosa,index)=>(
            <DosaCard key={index} dosa={dosa}/>
        ))}
        <div>
            <h3>About Dosa</h3>
            <p>The dosa originated in South India, but its precise geographical origins are unknown. 
                According to food historian K. T. Achaya, references in the Sangam literature suggest 
                that dosa was already in use in the ancient Tamil country around the 1st century CE.[2]
                 However, according to historian P. Thankappan Nair, dosa originated in the town of Udupi 
                 in present-day Karnataka.[3][4] Achaya also states that the earliest written mention of dosa 
                 appears in the 8th-century literature of present-day Tamil Nadu, while the earliest mention of 
                 dosa in Kannada literature appears a century later
            </p>
        </div>
        <div className='player'>
           <ReactPlayer url ="https://youtu.be/NAQth7oOnOI?si=j8xkeFLpMckkQpla" controls = {true}/>
        </div>

    </div>
  )
}

export default BiryaniMenu;