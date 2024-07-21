import React from 'react';
import './About.css';
import { useState,useEffect } from 'react';
import NAVBAR from '../Navbar/Navbar';
import ReactPlayer from 'react-player';
import Footer from '../Footer/Footer';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';


const About = () => {
  const navigate=useNavigate();
  const jwtToken=Cookies.get("jwt_token");
  useEffect(()=>{
    if(jwtToken === undefined){
      navigate("/user-login")
    }
  })
  
  const [subStatus, setSubStatus] = useState(false);

  const subscribed = () =>{
     const emailele = document.getElementById("mailinput")
     if(emailele.value === ""){
         alert("Enter Your mail")
     }
     else{
      setTimeout(()=>{
        setSubStatus(true)
        setTimeout(() => {
          setSubStatus(false); 
        }, 4000);
      },1000)
       }
    }

  return (
    <div>
        <NAVBAR />
    <div className='about-banner-background'>
       <img src='https://i0.wp.com/www.designlike.com/wp-content/uploads/2018/03/restaurant-1948732_1920.jpg' alt='about-sec' className='about-banner'/>
    </div>
    <div className='about-para-section'>
        <div className='about-headings'>
            <h2 className='about-head'>Eat Smart & Be Healthy !!</h2>
            <p className='about-para'>Indian food is not a monolith but a plethora of regional cuisines. 
              Northern Indian dishes, like butter chicken and naan, are heavily influenced by Persian 
              and Mughal cuisines. In contrast, Southern Indian cuisine, known for dosas and sambar, 
              relies heavily on rice and lentils. Coastal areas, 
              such as Goa and Bengal, offer a rich array of seafood dishes.
            </p>
        </div>
        <div className='about-video'>
          <ReactPlayer url ="https://youtu.be/Mf7LN9V89Hw" controls = {true} className="set-video"/>
          </div>
    </div>
    <div className='total-wcu-section'>
        <h1 className='choose-main-head'>Why Choose Us ?</h1>
        <div className='choose-section'>
            <div className='choose-one'>
                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png" alt="food-service" />
                <h1 className='choose-head'>Food Service</h1>
                <p className='choose-para'>Experience fine dining at the comfort of your home. 
                  All our orders are carefully packed and arranged to give you the nothing less than perfect.</p>
            </div>
      
          <div className='choose-one'>
              <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png" alt="food-service" />
              <h1 className='choose-head'>Fresh Food</h1>
              <p className='choose-para'>The Fresh Food group provides fresh-cut fruits and vegetables
                directly picked from our partner farms and farm houses so that
                you always get them tree to plate.
                </p>
          </div>

          <div className='choose-one'>
              <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png" alt="food-service" />
              <h1 className='choose-head'>Best Offer's</h1>
              <p class = "choose-para"> Food Coupons & Offers upto
                  <span class="offers"> 50% OFF </span>
                    and Exclusive Promo Codes on All Online Food Orders.</p>
          </div>
        </div>
    </div>

    {subStatus ? <div className='sub-con'><img src='https://www.gifcen.com/wp-content/uploads/2022/06/confetti-gif.gif' alt='' className='set-gif'/> <h1 className='set-thanks text-center'>Thanks For Choosing Us</h1></div>:
     <div className='about-search-container'>
      <h4 className='offers-para'>Get Special Offers</h4>
        <div className='search-container'>
          <input
            type='email'
            placeholder='Enter Your Email'
            className='search-input'
            id="mailinput"
          />
          <button type='button' className='search-button' onClick={subscribed}>
            Submit
          </button>
        </div>
        
     </div>
}
    <Footer />
    </div>
  )
}

export default About;