import React, { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import NAVBAR from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  const jwtToken=Cookies.get("jwt_token");
  useEffect(()=>{
    if(jwtToken === undefined){
      navigate("/user-login")
    }
  })

  return (
    <div>
      <NAVBAR />
      <div className="set-carousal">
          <div className="set-home-para">
            <h3 className="home-para">Experience the real taste of food with FRIENDS 
            <img src='https://wallpapercave.com/wp/wp10322952.jpg' alt="logo" className='set-logo'/>RESTAURANT</h3>
            <br /><br />
            <Link to="/recipes/menu-list"><button className="explore-button-1">Explore Menu</button></Link>
          </div>
          <div className="total-carousal-container">
            <Carousel>
              <Carousel.Item>
                <img src="https://wallpapercave.com/wp/wp3495545.jpg" alt="pizza" className="set-pizza"/>
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://th.bing.com/th/id/OIP.mOJi6XlOmHbU2xeVsxX9UgHaEo?rs=1&pid=ImgDetMain" alt="fish" className="set-fish"/>
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://wallpapercave.com/wp/wp7556067.jpg" alt="chicken-birani" className="set-chicken"/>
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://th.bing.com/th/id/OIP.-dQHE7Xs3Q4GHdsmNL0WDQHaE7?rs=1&pid=ImgDetMain" alt="burger" className="set-burger"/>
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://krishijagran.com/media/1961/dosa-idli.jpg" alt="breakfast" className="set-breakfast"/>
              </Carousel.Item>
            </Carousel>
          </div>
          <Link to="/recipes/menu-list"><button className="explore-button-2">Explore Menu</button></Link>
        </div>
      <Footer />
    </div>
  )
}

export default Home;