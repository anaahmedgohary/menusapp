import React from "react";
import { useState } from "react";
import "./style/restaurants.css";
// import $ from 'jquery';
// import TextField from "@mui/material/TextField";
import restaurantsData from "./restaurantsData.json";

export default function Restaurants()
{
  const [searchValue, setSearchValue] = useState("");

  // function changeInput(e)
  // {
  //   setSearchValue(e.target.val());
  //   //setVisibility('flex')
  // }

  // const [visibility, setVisibility] = useState("flex");



  return (
    <div className="container">
      <div>
        <h2>Menus for Restaurants</h2>
      </div>

      <div id="seachBarDiv">
        <div className="tube-div">
          <input
            id="searchInput"
            type="search"
            name="searchInput"
            placeholder="Search/Filter"
            ///////////////////////////////////////////////////////////////////
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <div id="searchIcon">
            <span id="searchLogo"></span>
            <span id="searchLogoHand"></span>
          </div>
        </div>
      </div>

      <section className="restaurants-filters"></section>

      <section className="container restaurants-menus">
        {restaurantsData
          .filter((val) => {
            if (searchValue === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return val;
            }
            return false;
          })
          .map((val, key) => {
            return (
              <div className="menu-element">
                <div className="title">{val.name}</div>
                <div className="img-div">
                  <img className="menu-img" src={val.img} alt="" />
                  <p className="description">{val.description}</p>
                </div>
                <div className="link">
                  <a
                    className="ordering-link"
                    href={val.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}
