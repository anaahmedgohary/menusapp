import React from 'react';
import './style/restaurants.css';

export default function Restaurants() {
  return (
    <div>
        <div>
            <h2>My restaurants</h2>
        </div>
        
        <div id='seachBarDiv'>
          <div className="tube-div">
            <input id="searchInput" type="search" name="" />
            <button id="searchButton">
              <span id="searchLogo"></span>
              <span id="searchLogoHand"></span>
            </button>
          </div>
        </div>

    </div>
  )
}
