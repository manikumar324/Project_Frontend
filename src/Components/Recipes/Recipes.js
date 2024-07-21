import React, { useEffect } from 'react';
import './Recipes.css';
import Cookies from 'js-cookie';
import { useState } from 'react';
import Loader from 'react-loader-spinner';
import NAVBAR from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import RecipeItem from '../RecipeItem/RecipeItem';
import { useNavigate } from 'react-router';

const Recipes = () => {
  const[recipeData,setRecipeData]=useState([]);
  const[loader,setLoader]=useState(true)
  const navigate=useNavigate();

  const jwtToken =Cookies.get("jwt_token");
  useEffect(()=>{
    if(jwtToken === undefined){
        navigate('/user-login',{replace:true})
    }
  },[jwtToken,navigate])

  useEffect(()=>{
    const fetchData=async()=>{
        setTimeout(async ()=>{
          try{
            const response=await fetch("https://food-project-backend-e69n.onrender.com/recipeslist")
            const value=await response.json()
            if(response.ok === true){
                setRecipeData(value)
                setLoader(false)
                console.log(value)
            }
          }
          catch(error){
            console.log("error occured")
          }
        },1500)
    }
    fetchData();
  },[])
  return (
    <div>
      {loader ? 
      (
          <div className='loader'> <Loader type='ThreeDots' color='Blue' height={100} width={150} />
              <img src='https://fc07.deviantart.net/fs70/f/2014/108/a/7/740866509_by_felifee-d7eytbx.gif' className='loader-image' alt='gifhy'/>
          </div>
        ) : (
      <>
      <NAVBAR />
          <div className="Recipes-menu-title">
            <h2 className="menu-title">Feel the taste of food with fun</h2>
          </div>
            
            <div className="set-menu-items">
                {recipeData.map((recipe,index)=>(
                  <RecipeItem key={index} recipe={recipe}/>
                ))}
            </div>
      <Footer />
      </>
      )
      }
    </div>
  )
}

export default Recipes;