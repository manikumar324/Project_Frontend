import React, { useEffect, useState } from 'react';
import './DosaMenu.css';
import DosaCard from '../DosaCard/DosaCard';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { IoArrowBackCircleSharp } from "react-icons/io5";

const DosaMenu = () => {
    const[menuList,setMenuList]=useState([]);
    const[load,setLoad]=useState(true)
    const{itemId}=useParams();
    useEffect(()=>{
        const getCardData=async()=>{
           setTimeout(async()=>{
            try{
                const response=await fetch(`https://food-project-backend-e69n.onrender.com/recipeslist/${itemId}`)
                const data=await response.json()
                console.log(data)
                if(response.ok === true){
                    setLoad(false)
                    setMenuList(data)
                }
                else{
                    setLoad(false)
                }
            }
            catch(error){
                setLoad(false)
            }

           },2000)
        }
       
        getCardData();
    },[itemId])

    

  return (
    <div>
        
        {load ? (
             <div className='loader'> <Loader type='ThreeDots' color='Blue' height={100} width={150} />
             <img src='https://fc07.deviantart.net/fs70/f/2014/108/a/7/740866509_by_felifee-d7eytbx.gif' className='loader-image' alt='giphy'/>
            </div>
        ):
        (
            <div>
                {menuList.length === 0 ? (
                    <p>No Items Found .....</p>
                ) : (
                    <div className='total-icon-container'>
                        <Link to={"/recipes/menu-list"}><IoArrowBackCircleSharp className='back-icon'/></Link>
                        <div className="total-dosa-card-container">
                            {menuList.map((listItem, index) => (
                                <DosaCard key={index} listItem={listItem} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
}
    </div>

  )
}

export default DosaMenu;