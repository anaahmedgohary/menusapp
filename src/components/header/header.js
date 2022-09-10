import React from 'react';
import "./style/header.css";


export default function Header() {
  return (
    <div className="container">
      <div className="home-title">
        <a title="Homepage" href="./">
          <img src="./images/home.png" alt="Homepage" />
        </a>
      </div>

      <ul className="small-nav">
        <div className="nav-img-div">
          <a href="https://www.fb.com" target="_blank" rel="noreferrer">
            <img
              className="nav-img"
              src="./images/facebook-circular-logo.png"
              alt="facebook logo"
            />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img
              className="nav-img"
              src="./images/instagram.png"
              alt="instagram logo"
            />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
            <img
              className="nav-img"
              src="./images/tiktok.png"
              alt="tiktok logo"
            />
          </a>
        </div>
        <li>
          <a href="./login">Sign In</a>
        </li>
        <li>
          <a href="./reviews">Reviews</a>
        </li>
        <li>
          <a href="./about">About Us</a>
        </li>
        <li>
          <a href="./contact">Contact</a>
        </li>
      </ul>
      <nav className="main-nav01">
        <ul>
          <li>
            <a href="/restaurants">Restaurants</a>
          </li>
          <li>
            <a href="/cafes">Cafes</a>
          </li>
          <li>
            <a href="/trucks">Trucks</a>
          </li>
          <li>
            <a href="/fastfood">Fast Food</a>
          </li>
        </ul>
      </nav>

      

      

      
    </div>
  );
}

