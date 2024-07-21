import React, { useState,useEffect,useRef } from 'react';
import './Navbar.css';
import Cookies from 'js-cookie';
import Loader from 'react-loader-spinner';
import { useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NAVBAR = () => {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const logOut = () => {
    setLoad(true);
    setTimeout(() => {
      Cookies.remove("jwt_token");
      setLoad(false);
      navigate("/user-login", { replace: true });
    }, 2000);
  };

  const about = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      navigate("/recipes/about", { replace: true });
    }, 2000);
  };

  const home = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      navigate("/", { replace: true });
    }, 2000);
  };
  const navRef=useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        navRef.current?.classList.toggle("nav-dark", window.scrollY >= 80);
    })
},[])

  return (
    <Navbar className="navbar-container" expand="lg" ref={navRef}>
      <Container>
        <Navbar.Brand href="/" className="nav-logo">
          <img src='https://wallpapercave.com/wp/wp10322952.jpg' className="set-nav-logo" alt='nav-logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggle'/>
        <Navbar.Collapse id="basic-navbar-nav">
          {load ? <Loader type="ThreeDots" height={50} width={100} color={"white"} /> : ""}
          <Nav className="nav-links-setting">
            <Nav.Link className="nav-link-one" onClick={home}>Home</Nav.Link>
            <Nav.Link className="nav-link-one" href="/recipes-about-section" onClick={about}>About</Nav.Link>
            <Nav.Link className="nav-link-one" href="/recipes/menu-list">Recipes</Nav.Link>
            <Nav.Link className="nav-link-one" onClick={logOut}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NAVBAR;
