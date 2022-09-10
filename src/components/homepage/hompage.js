import React from 'react'
//import { useState } from 'react';
import './style/homepage.css';
//import $ from 'jquery';

export default function Hompage() {

    //const [displayViewer, setDisplayViewer] = useState("none");
    
    //function showImgView(){

    //}

  return (
    <div className='container'>
          
        <div>
            <p className='st01'>
                Welcome to Menus Zag!
            </p>     
        </div>
        <div className='landing'>
            <div id='paragraphs'>
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
                    <img className='bodyImg' src="./images/menu03.jpg" alt="" />
                    <img className='bodyImg' src="./images/coffe.jpg" alt="" />
                    <img className='bodyImg' src="./images/menu05.jpg" alt="" />
                    <img className='bodyImg' src="./images/coffe2.jpg" alt="" />
                    <img className='bodyImg' src="./images/cafe1.jpg" alt="" />
                    <img className='bodyImg' src="./images/menu02.jpg" alt="" />
                </div>               
            </div>
        </div>

        <div id='menuViewer'>
            <div>
                <span>Name</span>
            </div>
            <div>
                <img className='viewerImg' src="./images/menu04.webp" alt="selected img" />
            </div>
            
            <div>additional</div>

        </div>







        <div className='signupDiv'>
            <a href="/signup" target="_blank" rel="noopener noreferrer">
                Sign Up
            </a>
            <span> Or </span>
            <a href="/signup" target="_blank" rel="noopener noreferrer">
                Log In
            </a>
        </div>
    </div>
  );
}
