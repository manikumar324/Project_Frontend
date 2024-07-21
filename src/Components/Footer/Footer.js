import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner-container">
        <div className="footer-inner-one">
          <h1 className="footer-head-one">ABOUT COMPANY</h1>
          <p className="footer-para">Here You can get the variety and delicious
          food items from north to south.All items are available for door delivery.</p>
        </div>
        <div className="footer-inner-two">
          <h1 className="footer-head-two">USEFUL LINKS</h1>
          <div className="footer-links">
            <Link className="link-one">www.amazon.in</Link><br />
            <Link className="link-one">www.flipkart.com</Link><br/>
            <Link className="link-one">www.gmail.com</Link><br />
            <Link className="link-one">www.info@gmail.com</Link><br />
            <Link className="link-one">www.help@gmail.com</Link><br />
          </div>
        </div>
        <div className="footer-inner-four">
          <h1 className="footer-head-four">ABOUT US</h1>
          <div className="footer-links">
            <Link className="link-one">company.info@gmail.com</Link><br />
            <Link className="link-one">Trems & Conditions</Link><br/>
            <Link className="link-one">Get.help@gmail.com</Link><br />
            <Link className="link-one">Questions</Link><br />
            <Link className="link-one">check@gmail.com</Link><br />
          </div>
        </div>
        <div className="footer-inner-three">
          <h1 className="footer-head-three">CONTACT</h1>
            <div className="footer-three-inner-one">
              <IoHomeOutline className="home-icon"/>
              <p className="icon-one">Nandhyal.518124.AP</p>
            </div>
            <div className="footer-three-inner-two">
              <FiPhone className="home-icon"/>
              <p className="icon-two"> +91 630 - 258 - 5352</p>
            </div>
            <div className="footer-three-inner-three">
              <MdOutlineMailOutline className="home-icon"/>
              <p className="icon-three">friendsrestaurent29@gmail.com</p>
            </div>
        </div>
      </div>
      <div className="footer-last-container">
        <div className="footer-inner-last">
          <p className="footer-last-para">&copy; 2024 Copyright : <span className="footer-span">friends_restaurent.com</span></p>
          <div className="footer-icons">
            <Link to="https://instagram.com/mani_kumar_17?igshid=MzNlNGNkZWQ4Mg==" target="_blank" className="insta-icon"><FaInstagram /></Link>
            <Link to="https://www.linkedin.com/in/manikumar-nakka-541b99253" target="_blank" className="link-icon"><FaLinkedinIn /></Link>
            <Link to="https://www.facebook.com/manikumar.nakka.5" target="_blank" className="face-icon"><FaFacebookF /></Link>
            <Link to="" className="twi-icon"><FaTwitter /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;