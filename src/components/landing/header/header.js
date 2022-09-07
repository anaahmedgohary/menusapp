import React from 'react';
import "./style/header.css";


function LandingHeader() {
  return (
    <div className="container">
      <a className='home-title' title='Homepage' href='./'>
        <h1>Menus Zagazig</h1>
      </a>

      <ul className='small-nav'>
        <li>Reviews</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <nav className="main-nav01">
        <ul>
          
          <li>Restaurants</li>
          <li>Cafes</li>
          <li>Trucks</li>
          <li>Fast Food</li>
          
          
        </ul>
      </nav>
    </div>
  );
}

export default LandingHeader