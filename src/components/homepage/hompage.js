import React from 'react'

import './style/homepage.css';

export default function Hompage() {
  return (
    <div className='container'>
          
        <div>
            <p className='st01'>
                Welcome to Menus Zag!
            </p>     
        </div>
        <div className='paragraph01'>
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








        <div>
        <a href="/signup" target="_blank" rel="noopener noreferrer">
            <button>Sign Up</button>
        </a>
        </div>
    </div>
  );
}
