import React, { useState } from 'react';
import './Login.css';
import Cookies from 'js-cookie';
import { CiMail } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup/popup';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import NetworkPopup from '../NetworkPopup/NetwokPopup';

const Login = () => {
  const[loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const [isLoginSuccessful, setLoginSuccessful] = useState(false);
  const[isLoginFailure,setLoginFailure]=useState(false)
  const[isNetworkFailure,setNetworkFailure]=useState(false)
  const [data, setData] = useState({
    mail: "",
    password: ""
  });
  const { mail, password } = data;

  const getData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitSuccess = (jwtToken) => {
    // Store the JWT token in a cookie with a 30-day expiration
    Cookies.set('jwt_token', jwtToken, { expires: 30 });
    
    // Optionally, you can redirect to another page or perform additional actions
    console.log('Login successful. Redirect or perform additional actions.');
  };

  const onSubmitFailure = (errorMsg) => {
    // Handle the failure scenario, e.g., display an error message
    console.log('Login failed:', errorMsg);
  };
  const showSuccessPopup = () => {
    setLoginSuccessful(true);
    // setTimeout(() => {
    //   setLoginSuccessful(false);
    // }, 2000);
  };

  const showFailurePopup = () => {
    setLoginFailure(true);
    // setTimeout(() => {
    //   setLoginFailure(false);
    // }, 2000);
  };

  const showNetworkErrorPopup = () => {
    setNetworkFailure(true);
    // setTimeout(() => {
    //   setNetworkFailure(false);
    // }, 2000);
  };

  const clearPopup=()=>{
    setLoginSuccessful(false)
    setData({mail:"",password:""})
   setTimeout(()=>{
    navigate("/Home",{replace:true})
   },1500)
    setLoginFailure(false)
  }

  const handler = async (e) => {
    e.preventDefault();
    setLoading(true)
    const options = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ mail, password }),
    };   

    try {
      const response = await fetch('https://food-project-backend-e69n.onrender.com/login', options);
      const data = await response.json();
     
      if (response.ok === true) {
        // Handle success
        // alert(data.message);
        setTimeout(()=>{
          setLoading(false);
          showSuccessPopup();
         
        },3000)
        
        onSubmitSuccess(data.token); // Pass the JWT token to the success handler
        
      } else {
        // Handle failure
        // alert(data.message);
        setTimeout(()=>{
          showFailurePopup();
          setLoading(false);
        },1500)
        onSubmitFailure(data.message); // Pass the error message to the failure handler
        
      }
    } catch (error) {
      // Handle network or other errors
      showNetworkErrorPopup();
      setLoading(false);
      console.error('An error occurred:', error.message);
    }
  };
  return (
    
    <div className="login-total-container">
        <div className='login-inner-container'>
        <form className='login-from' onSubmit={handler}>
          <IoMdContact className='login-logo'/>
          <h3 className='login-head'>User Login</h3>
          <div>
            <CiMail className='login-icon'/>
            <input type='text' placeholder='Email' className='login-inner-one'
            value={mail} name="mail" onChange={getData}/>
          </div>
          <div>
          <CiUnlock className='login-icon'/>
          <input type='password' placeholder='Password' className='login-inner-one'
          value={password} name="password" onChange={getData}/>
          </div>
          <div className='check-box'>
            <input type='checkbox' id="check" />
            <label className='remember'>Remember Me</label> 
          </div>
          {isLoginFailure && <ErrorPopup onClose={clearPopup}/>}
          {isLoginSuccessful && <Popup onClose={clearPopup}/>}
          {isNetworkFailure && <NetworkPopup />}
          {loading ?<div> <Loader type='Audio' color="red" height={30}/></div>:null}
          <div className='login-third'>
          <button type='submit' name='submit' className='login-inner-button'>LOG IN</button>
          
          </div>
          <Link to="/user-change-password" className='forgot'>Forgot Your Password ?</Link>
          <div className='last-one'>
            <p className='last-para'>Don't have account ?</p>
            <Link to="/" className='create-link'>Click to Register</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;