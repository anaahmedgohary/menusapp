import React from 'react';
import "./style/header.css";


function LandingHeader() {
  return (
    <div className="container">
      <h3 className="home-title">
        <a title="Homepage" href="./">
          Menus Zagazig
        </a>
      </h3>
      <ul>
        <li></li>
      </ul>

      <ul className="small-nav">
        <div className='nav-img-div'>
          <a href='https://www.fb.com' target="_blank" rel='noreferrer'>
            <img className='nav-img' src="./images/facebook.png" alt="facebook logo" />
          </a>
          <a href='https://www.instagram.com' target="_blank" rel='noreferrer'>
            <img className='nav-img' src="./images/instagram.png" alt="instagram logo" />
          </a>
          <a href='https://www.tiktok.com' target="_blank" rel='noreferrer'>
            <img className='nav-img' src="./images/tiktok.png" alt="tiktok logo" />
          </a>
        </div>
        <li><a href="./reviews">Reviews</a></li>
        <li><a href="./about">About Us</a></li>
        <li><a href="./contact">Contact</a></li>
      </ul>
      <nav className="main-nav01">
        <ul>
          <li><a href="restaurants">Restaurants</a></li>
          <li><a href="cafes">Cafes</a></li>
          <li><a href="trucks">Trucks</a></li>
          <li><a href="fastfood">Fast Food</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default LandingHeader