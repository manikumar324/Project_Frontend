import React from 'react';
import { useState } from 'react';
import './password.css';
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router';


const UpdatePassword = () => {
  // const[loader,setLoader]=useState(true)
  const navigate=useNavigate();
  const[data,setData]=useState({
    email:"",
    password:"",
    confirmPassword:""
  })
  const{email,password,confirmPassword}=data;

  const checkData=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  const submitHandler=async(event)=>{
    event.preventDefault();

    const options={
      method:"PUT",
      headers: { 'Content-type': 'application/json' },
      body : JSON.stringify({email,password,confirmPassword}),
    }

    try{
      const response=await fetch(`https://food-project-backend-e69n.onrender.com/${email}`,options)
      const data=await response.json()
      console.log(data)
      if(response.ok){
        toast.success("Password Updated Successfully !!")
        setTimeout(()=>{
          navigate('/user-login',{return:true})
        },1500)
      }
      else{

        toast.error("Password Do Not Match")

      }
      
    }
    catch(error){
      toast.error("Required All Fields")
    }
  }
  return (
    <div>
      <Toaster />
      <div className='pass-total-container'>
      <div className='pass-inner-container'>
        <form className='pass-from' onSubmit={submitHandler}>
          <CiLock className='pass-logo'/>
          <h3 className='pass-head'>Change Password</h3>
          {/* <Spinner animation="border" role="dots" size="sm"></Spinner> */}
          <div>
            <CiMail className='pass-icon'/>
            <input type='email' 
            placeholder="Registered Email"
            className='pass-inner-one'
            value={email} 
            name='email' 
            onChange={checkData}/>
          </div>
          <div>
            <CiMail className='pass-icon'/>
            <input type='password' 
            placeholder='New Password' 
            className='pass-inner-one'
            value={password} 
            name='password' 
            onChange={checkData}/>
          </div>
          <div>
          <CiLock className='pass-icon'/>
          <input type='password' 
          placeholder='Confirm Password' 
          className='pass-inner-one'
          value={confirmPassword} 
          name='confirmPassword' 
          onChange={checkData}/>
          </div>
          <div className='pass-third'>
          <button type='submit' name='submit' className='pass-inner-button'>Update Password</button>
          {/* <div>
          <Link>Click to Log in</Link>
          </div> */}
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default UpdatePassword;


