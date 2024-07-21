import React from 'react';
import './RecipeItem.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import { FaRupeeSign } from "react-icons/fa";
import {Toaster, toast} from 'react-hot-toast';


const RecipeItem = ({recipe}) => {
  const{imageUrl,name,rating,price,itemId}=recipe;
  const[color,setColor]=useState(false)
  const colorChange=()=>{
    setColor((color)=>{
      if(color){
        toast("Item removed from favourites",{icon:"😞",
          style: { backgroundColor: '#f8d7da', color: 'red',fontWeight:800 }}
        )
      }
      else{
        toast("Item added to favourites",{icon:"🤩",
          style: { backgroundColor: '#f8d7da', color: 'green',fontWeight:800 },
        })
      }
      return !color;
    })
  }

  const addCart=()=>{
    toast.success("Item added to CART",{icon:"✅",
      style: { backgroundColor: '#fff', color: 'blue',fontWeight:800 },
    })
  }

  return (
   <div>
     <Toaster />
      <div className="recipeitem-container">
      <div>
        <Link><FaHeart className={`${color?"recipe-heart-like":"recipe-heart-dislike"}`} onClick={colorChange}/></Link>
        <div>
          <img src={imageUrl} alt="check" className='set-recipe-item'/>
        </div>
        <p className="recipe-menu-item">{name}</p>
        <div className="menu-rate">
            <p className="item-rating"><FcRating  className="rating-icon"/>{rating}</p>
            <p className="item-price"><FaRupeeSign className="price-icon"/>{price}</p>
        </div>
      </div>
      <div className="set-buttons">
      <button className="btn btn-primary item-button-order" onClick={addCart}>Add Cart</button>
      <Link to={`/recipeslist/${itemId}`}><button className="btn btn-success item-button-view" >View More</button></Link>
      </div>
    </div>
   </div>
  )
}

export default RecipeItem;
