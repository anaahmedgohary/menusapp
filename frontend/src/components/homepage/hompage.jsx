import React, { useEffect } from 'react'
 import { useState } from 'react';
import './style/homepage.css';
import $ from 'jquery';

export default function Hompage() {

    const [imgSrc, setImgSrc] = useState("");
    function showImgView(e){
        $("#menuViewer").css("display", "flex");
        setImgSrc(e.target.src);
        //console.log(e.target.src);
  }

  useEffect(() =>
  {
    //nextImgBtn();
  }, [imgSrc]);


  function prevImgBtn()
  {
    let currentimgSrc = imgSrc;
    let galimags = document.querySelectorAll('.bodyImg');
    let galimagsArr = Array.from(galimags);
    let currentImg = galimagsArr.find(img => img.src == currentimgSrc);
    let currentImgIndex = galimagsArr.indexOf(currentImg);
    if (currentImgIndex > 0)
    {
      let nextImageIndex = currentImgIndex - 1;
      let nextImage = galimagsArr[nextImageIndex];
      let nextImgSrc = nextImage.src;
      setImgSrc(nextImgSrc);
    } else
    {
      let nextImage = galimagsArr[7];
      let nextImgSrc = nextImage.src;
      setImgSrc(nextImgSrc);
    }

  }

  function nextImgBtn()
  {
    let currentimgSrc = imgSrc;
    let galimags = document.querySelectorAll('.bodyImg');
    let galimagsArr = Array.from(galimags);
    let currentImg = galimagsArr.find(img => img.src == currentimgSrc);
    let currentImgIndex = galimagsArr.indexOf(currentImg);
    if (currentImgIndex < 7)
    {
      let nextImageIndex = currentImgIndex + 1;
      let nextImage = galimagsArr[nextImageIndex];
      let nextImgSrc = nextImage.src;
      setImgSrc(nextImgSrc);
    } else
    {
      let nextImage = galimagsArr[0];
      let nextImgSrc = nextImage.src;
      setImgSrc(nextImgSrc);
    }

  }

  return (
    <div className="container">
      <div>
        <p className="welcom-line">Welcome to Menus app!</p>
      </div>
      <div className="landing">
        <div className="paragraphs">
          <p>
            We are proud to provide all the Menus you will ever need in your city
            . Our database include restaurans, cafes, bakeries and
            fast food menus.
          </p>
          <p></p>
          <p>We keep our menus updated at least once a week.</p>
          <div className="signupIn">
            <a className="signupLink" href="/signup">
              Sign Up
            </a>
            <a className="loginLink" href="/login">
              Log In
            </a>
          </div>
        </div>
        <div id="bodyImgs" className=''>
          <p>Featured Menus</p>
          <div className="menusGallery">
            <img
              onClick={showImgView}
              className="bodyImg"
              src="./images/menu03.jpg"
              alt=""
            />
            <img
              onClick={showImgView}
              className="bodyImg"
              src="./images/coffe.jpg"
              alt=""
            />
            <img
              onClick={showImgView}
              className="bodyImg"
              src="./images/menu05.jpg"
              alt=""
            />
            <img
              onClick={showImgView}
              className="bodyImg"
              src="./images/coffe2.jpg"
              alt=""
            />
            <img
              onClick={showImgView}
              className="bodyImg"
              src="./images/cafe1.jpg"
              alt=""
            />
            <img
              onClick={showImgView}
              className="bodyImg"
              src="./images/menu01.jpg"
              alt=""
            />
            <img
              onClick={showImgView}
              className="bodyImg"
              src="./images/tallm.png"
              alt=""
            />
            <img
              onClick={showImgView}
              className="bodyImg"
              src="./images/sweets.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div id="menuViewer"
        onClick={(e) =>
        { 
          let modal = document.getElementById('menuViewer');
          (e.target == modal) ? $("#menuViewer").hide() : false;
        }}>
        <div>
          <button
            id="closeView"
            className="btn btn-danger btn-sm"
            title="Close"
            onClick={() => {
              $("#menuViewer").hide();
            }}
          >
            X
          </button>
        </div>

        <div className='inmodalDiv'>
          <img
            id="clickedImg"
            className="viewerImg"
            src={imgSrc}
            alt="selected img"
          />
        </div>

        <div className='galNavBtn galPrevBtn inmodalDiv'>
          <button id='previousButton' title='PREVIOUS' onClick={prevImgBtn}>
            <i className="fa-solid fa-chevron-left fa-3x"></i>
          </button>
        </div>

        {/* <div className="infobar inmodalDiv">
          <span>Name of Menu</span>

          <p>
            <a href="/menus">More Info</a>
          </p>
          <span className="popupInfo">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            voluptatibus quia quis pariatur amet odio! Ea doloremque delectus
            perspiciatis impedit iure, iste facilis natus eius incidunt aliquid
            nisi molestiae explicabo.
          </span>
        </div> */}

        <div className='galNavBtn galnextBtn inmodalDiv'>
          <button id='nextButton' title='NEXT' onClick={nextImgBtn}>
            <i className="fa-solid fa-chevron-right fa-3x"></i>
          </button>
        </div>

      </div>

      
    </div>
  );
}
