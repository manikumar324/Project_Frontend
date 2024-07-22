import React,{ useState } from 'react';
import './Signup.css';
import { IoIosContact } from "react-icons/io";
import { CiUnlock } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Popup from '../Popup/popup';
// import ErrorPopup from '../ErrorPopup/ErrorPopup';
// import NetworkPopup from '../NetworkPopup/NetwokPopup';

const Signup = () => {
  const[loading,setLoading]=useState(false)
//   const [isLoginSuccessful, setLoginSuccessful] = useState(false);
//   const[isLoginFailure,setLoginFailure]=useState(false)
//   const[isNetworkFailure,setNetworkFailure]=useState(false)
  const[details,setDetails]=useState({
    name:"",
    email:"",
    pass:""
})
const navigate=useNavigate()
const{name,email,pass}=details;
const changeHandler=(event)=>{
    setDetails({...details,[event.target.name]:event.target.value})
}

// const showSuccessPopup = () => {
//     setLoginSuccessful(true);
//     setTimeout(() => {
//       setLoginSuccessful(false);
//     }, 2000);
//   };

//   const showFailurePopup = () => {
//     setLoginFailure(true);
//     setTimeout(() => {
//       setLoginFailure(false);
//     }, 2000);
//   };

//   const showNetworkErrorPopup = () => {
//     setNetworkFailure(true);
//     setTimeout(() => {
//       setNetworkFailure(false);
//     }, 2000);
//   };

const submitHandler=async (event)=>{
    event.preventDefault();
    setLoading(true)
    console.log(details)

    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ name, email, pass }),
    };

    try{
        const response=await fetch("https://food-project-backend-e69n.onrender.com/signup",options)
        const data=await response.json()
        if(response.ok === true){
            console.log(data)
           setTimeout(()=>{
            setLoading(false)
            alert(data.message)
            navigate("/user-login",{replace:true})
            setDetails({ name: "", email: "", pass: "" });
           },1500)
            
            // showSuccessPopup();
            // setLoading(false);
        }
        else{
            setTimeout(()=>{
              alert(data.message)
              setLoading(false)
            },1500)
            // showFailurePopup();
            // setLoading(false);
        }
    }
    catch(error){
        alert(error.message)
        console.log("Network Error",error.mesage)
        // showNetworkErrorPopup();
        // setLoading(false);
    }
}
  return (
    <div className='signup-total-container'>
      <div className='signup-inner-container'>
        <form className='signup-from' onSubmit={submitHandler}>
          <IoMdContact className='signup-logo'/>
          <h3 className='signup-head'>User Signup</h3>
          <div>
            <IoIosContact className='signup-icon'/>
            <input type='text' placeholder='Username' className='signup-inner-one'
            value={name} name='name' onChange={changeHandler} autoComplete='off'/>
          </div>
          <div>
            <CiMail className='signup-icon'/>
            <input type='email' placeholder='Email' className='signup-inner-one'
            value={email} name='email' onChange={changeHandler} autoComplete='off'/>
          </div>
          <div>
          <CiUnlock className='signup-icon'/>
          <input type='password' placeholder='Password' className='signup-inner-one'
          value={pass} name='pass' onChange={changeHandler}/>
          </div>
          {/* {isLoginFailure && <ErrorPopup />}
          {isLoginSuccessful && <Popup />}
          {isNetworkFailure && <NetworkPopup />} */}
          {loading ?<div> <Loader type='ThreeDots' color="red" height={20}/></div>:null}
          <div className='signup-third'>
          <button type='submit' name='submit' className='signup-inner-button'>SIGN UP</button>
          </div>
          <div className='last-one'>
            <p className='last-para'>Already User ?</p>
            <Link to="/user-login" className='create-link'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;