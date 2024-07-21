import React from 'react';
import './DosaCard.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import { FaRupeeSign } from "react-icons/fa";
import {Toaster, toast} from 'react-hot-toast';

// import { useParams } from 'react-router-dom';

const DosaCard = ({listItem}) => {
  const{imageUrl,name,rating,price}=listItem;
  const[color,setColor]=useState(false);
  const[show,setShow]=useState(false);
  // const{itemId}=useParams();
  const colorChange=()=>{
    setColor((color=>{
      if(color){
        toast("Item removed from favourites",{icon:"😞",
          style: { backgroundColor: '#f8d7da', color: '#721c24',fontWeight:800 }}
        )
      }
      else{
        toast("Item added to favourites",{icon:"🤩",
          style: { backgroundColor: '#f8d7da', color: '#721c24',fontWeight:800 },
        })
      }
      return !color;
    }))
  }
  const makeOrder=()=>{
    setShow(true)
    setTimeout(()=>{
      setShow(false)
    },4000)
  }
  return (
    
   <div>
    <Toaster />
    
    <div>
      {show ? <div className='set-order-success'><img src='https://tpvenue.com/wp-content/uploads/2022/09/02-lottie-tick-01-instant-2.gif' alt='success-gif' className='set-order-size'/>
      <h2 className='order-placed'>Order Placed Succesfully !!</h2></div> :
          <div className="item-container">
            <div>
                <Link to="#"><FaHeart className={`${color?"heart-like":"heart-dislike"}`} onClick={colorChange}/></Link>
                <div>
                  <img src={imageUrl} alt="check" className='set-item'/>
                </div>
                  <p className="menu-item">{name}</p>
                <div className="menu-rate">
                    <p className="item-rating"><FcRating  className="rating-icon"/>{rating}</p>
                    <p className="item-price"><FaRupeeSign className="price-icon"/>{price}</p>
                </div>
            </div>
            <Link to={`/item-order-form`}><button className="btn btn-primary item-button-order" onClick={makeOrder}>Order Now</button></Link>
          </div>
      }
      </div>
   </div>
    
  )
}

export default DosaCard;