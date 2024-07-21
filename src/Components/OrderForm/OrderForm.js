import React, { useEffect, useState } from 'react';
import "./OrderForm.css";
import Loader from 'react-loader-spinner';
import { Toaster,toast } from 'react-hot-toast'; 
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBackCircleSharp } from "react-icons/io5";
const OrderForm = () => {
  const navigate=useNavigate();
  const[show,setShow]=useState(false);
  const[load,setLoad]=useState(true)
  const [item,setItem]=useState({
    name:"",
    number: "",
    address: "",
    pincode:""
  })
  
  useEffect(()=>{
    setTimeout(()=>{
      setLoad(false)
    },1500)
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({...item,[name]: value})
  };

  const handleSelectChange = (e) => {
    setItem(prevItem => ({
      ...prevItem,
      name: e.target.value
    }));
  };

  const resetClick=()=>{
    setItem({name:"",number:"",address:"",pincode:""})
  }

  const cancelOrder=()=>{
    // navigate("/recipes/menu-list",{replace:"true"})
    toast.success("Order Cancel Confirmed")
  }

  const submitOrder=async(e)=>{
    e.preventDefault();
    // alert("order placed succesfully")
    
    console.log(item)
    const {name,number,address,pincode}=item;
    let options={
      "method":"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({name,number,address,pincode})
    };
    const Order_URL="https://food-project-backend-e69n.onrender.com/order-details-list";
    try{
        const response=await fetch(Order_URL,options)
        const data=await response.json();
        if(response.ok){
          console.log(data)
          setTimeout(()=>{
            setLoad(true)
          },1500)
          setShow(true)
        setTimeout(()=>{
        setShow(false)
        setTimeout(()=>{
          navigate("/Home",{return:true})
        },2000)
      },3000)
      setItem({name:"",number:"",address:"",pincode:""})
        }
        else{
          console.log("something is fishy !!")
          toast.error("All Fields Required !!")
        }
    }
    
    catch(error){
      console.log("Network Error",error.message)
    }
  }
  
  return (
    
    <div>
      {load?(
        <div className='loader'> <Loader type='ThreeDots' color='Blue' height={100} width={150} /></div>
      ):
      (
        <div>
      <Link to={"/recipes/menu-list"}><IoArrowBackCircleSharp className='back-icon'/></Link>
      <Toaster />
      {show ? <div className='set-order-success'><img src='https://tpvenue.com/wp-content/uploads/2022/09/02-lottie-tick-01-instant-2.gif' alt='success-gif' className='set-order-size'/>
        <h2 className='order-placed'>Order Placed Succesfully !!</h2></div>:
        <div className='total-order-form-container'>
        <form className='order-form-container'>
        <h1 className='order-form-head'>Fastest Delivery</h1>
          <div className='order-form-one'>
            <label htmlFor='name' className='label-name'>Item Name :</label>
            <select className='form-control' 
            name="name" value={item.name} onChange={handleSelectChange}>
             <option value="">Select Item</option>
            <option value="Egg Dosa">Egg Dosa</option>
            <option value="Bahubali Dosa">Bahubali Dosa</option>
            <option value="Masala Dosa">Masala Dosa</option>
            <option value="Upma Dosa">Upma Dosa</option>
            <option value="Plane Dosa">Plane Dosa</option>
            <option value="paper Dosa">Paper Dosa</option>
            <option value="Spinach Salad">Spinach Salad</option>
            <option value="Waldorf Salad with Grapes">Waldorf Salad with Grapes</option>
            <option value="Strawberry Yogurt Salad">Strawberry Yogurt Salad</option>
            <option value="Summer Berry Salad">Summer Berry Salad</option>
            <option value="Loaded Broccoli Salad">Loaded Broccoli Salad</option>
            <option value="Berry Avocado Salad">Berry Avocado Salad</option>
            <option value="Matka Biryani">Matka Biryani</option>
            <option value="Lollipop Biryani">Lollipop Biryani</option>
            <option value="Roasted Biryani">Roasted Biryani</option>
            <option value="Luknow Murgh Biryani">Luknow Murgh Biryani</option>
            <option value="Hyderabad Biryani">Hyderabad Biryani</option>
            <option value="Special Dham Biryani">Special Dham Biryani</option>
            <option value="Mushroom Noodles">Mushroom Noodles</option>
            <option value="Spicy Miso Beef Noodles">Spicy Miso Beef Noodles</option>
            <option value="Veg Noodles">Veg Noodles</option>
            <option value="EGG JOLLOF NOODLES">EGG JOLLOF NOODLES</option>
            <option value="Gochujang Noodles">Gochujang Noodles</option>
            <option value="Hoisin Chicken Noodles">Hoisin Chicken Noodles</option>
            <option value="Kerala Style Fish Fry">Kerala Style Fish Fry</option>
            <option value="Baked Fish Fry">Baked Fish Fry</option>
            <option value="Roasted Sea Fish Fry">Roasted Sea Fish Fry</option>
            <option value="Spicy Fried Fish">Spicy Fried Fish</option>
            <option value="Battered Fish Fry">Battered Fish Fry</option>
            <option value="Cornmeal Fish Fry">Cornmeal Fish Fry</option>
            <option value="Green Fish Curry">Green Fish Curry</option>
            <option value="Fish Mappas Curry">Fish Mappas Curry</option>
            <option value="Assamese Fish Curry">Assamese Fish Curry</option>
            <option value="Red Hot chill Fish Curry">Red Hot Chill Fish Curry</option>
            <option value="Hilsa Fish Curry">Hilsa Fish Curry</option>
            <option value="Goan Fish Curry">Goan Fish Curry</option>
            <option value="Puree Soup">Puree Soup</option>
            <option value="Mushroom Soup">Mushroom Soup</option>
            <option value="Cream Soup">Cream Soup</option>
            <option value="Veloute Soup">Veloute Soup</option>
            <option value="Vegetable Soup">Vegetable Soup</option>
            <option value="Broth Soup">Broth Soup</option>
            </select>
          </div>
          <div className='order-form-one'>
            <label htmlFor='name'className='label-name'>Mobile No :</label>
            <input type='number' 
            name='number'
            value={item.number}
            placeholder='Mobile Number'
            onChange={handleInputChange} 
            className='form-control'/>
          </div>
          <div className='order-form-one'>
            <label htmlFor='name'className='label-name'>Address :</label>
            <input type='text' 
            name='address'
            value={item.address} 
            placeholder='Enter Address'
            onChange={handleInputChange} 
            className='form-control'/>
          </div>
          <div className='order-form-one'>
            <label htmlFor='name'className='label-name'>Pincode :</label>
            <input type='number' 
            name='pincode'
            value={item.pincode} 
            placeholder='Pincode'
            onChange={handleInputChange} 
            className='form-control'/>
          </div>
          <div className='order-form-buttons'>
       </div>
        </form>
       <div className='order-form-buttons'>
          <button className='btn btn-danger order-button-one' onClick={cancelOrder}>Cancel</button>
          <button className='btn btn-warning order-button-one' onClick={resetClick}>Reset</button>
          <button className='btn btn-success order-button-one' onClick={submitOrder}>Submit</button>
       </div>
    </div>
    }
    </div>
      )}
    </div>
    
  )
}

export default OrderForm;