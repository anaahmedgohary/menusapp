import React from 'react'
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

  return (
    <div className='container'>
          
        <div>
            <p className='st01'>
                Welcome to Menus Zag!
            </p>     
        </div>
        <div className='landing'>
            <div className='paragraphs'>
                <p>
                    We are proud to provide all the Menus you 
                    will ever need in the city of
                    Zagazig. 
                    Our database include menus of restaurans,
                    cafs, food trucks and fast food shops.
                </p>
                <p>
                
                </p>
                <p>
                    We keep our menus updated at least once a week.
                </p>
            </div>
            <div id='bodyImgs'>
                <p>Featured Menus</p>
                <div className='menusGallery'>
                    <img onClick={showImgView} className='bodyImg' src="./images/menu03.jpg" alt="" />
                    <img onClick={showImgView} className='bodyImg' src="./images/coffe.jpg" alt="" />
                    <img onClick={showImgView} className='bodyImg' src="./images/menu05.jpg" alt="" />
                    <img onClick={showImgView} className='bodyImg' src="./images/coffe2.jpg" alt="" />
                    <img onClick={showImgView} className='bodyImg' src="./images/cafe1.jpg" alt="" />
                    <img onClick={showImgView} className='bodyImg' src="./images/menu01.jpg" alt="" />
                    <img onClick={showImgView} className='bodyImg' src="./images/tallm.png" alt="" />
                    <img onClick={showImgView} className='bodyImg' src="./images/sweets.png" alt="" />
                </div>               
            </div>
        </div>

        <div id='menuViewer'>
            
            <button id='closeView' className='btn btn-danger btn-sm' title='Close' onClick={()=>{$("#menuViewer").hide()}}>X</button>
            
            
            <div>
                <img id='clickedImg' className='viewerImg' src={imgSrc} alt="selected img" />
            </div>
            <div className='infobar'>
                <span >Name of Menu</span>
                
                <p><a href="/menus">More Info</a></p>
                <span className='popupInfo'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex voluptatibus quia quis pariatur amet odio! Ea doloremque delectus perspiciatis impedit iure, iste facilis natus eius incidunt aliquid nisi molestiae explicabo.</span>
            </div>

        </div>







        <div className='signupDiv'>
            <a className='signupLink' href="/signup">
                Sign Up
            </a>
            <a className='loginLink' href="/login">
                Log In
            </a>
        </div>
    </div>
  );
}
