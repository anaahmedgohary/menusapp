import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./style/userprofile.css";

export default function UserProfile()
{
    
    // local
    // const baseURL = "http://localhost:4000";
    const baseURL = "https://menusappback.vercel.app";
    
    let currentUser = JSON.parse(sessionStorage.getItem('loggedinuser'));
    const [username, setUsername] = useState('');
    useEffect(() =>
    {
        if (currentUser)
        {
            setUsername(currentUser);
        }
    }, []);

    // user profile info variables
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('');
    const [restaurant, setRestaurant] = useState('');
    const email = currentUser || null;
    const infoPost = { name, birthday, phone, city, restaurant, email };

    // get saved info
    async function getUserInfo()
    {
        axios
            .post(`${baseURL}/userinfo/getinfo`, infoPost)
            .then(response =>
            {
                console.log(response.data);
            })

    }
    useEffect(() =>
    {
        getUserInfo();
    }, []);
    // send info save button
    async function saveUpdateInfo(e)
    {
        e.preventDefault();
        axios
            .post(`${baseURL}/userinfo/updateinfo`, infoPost)
            .then(response =>
            {
                console.log(response.data);
                window.alert(response.data);
            })
    }

    // for edit info button
    function editUserInfo(e)
    {
        // let bdayInp = document.querySelector('#user-birthday');
        // bdayInp.removeAttribute('readonly');
        let editFields = document.querySelectorAll('.infoInput');
        editFields.forEach((item, index) =>
        {
            item.removeAttribute('readonly');
        })
        // control buttons
        let saveBtn = document.querySelector('#save-changes');
        saveBtn.style.display = 'block';
        let cancelBtn = document.querySelector('#cancel-changes-btn');
        cancelBtn.style.display = 'block';
        e.target.style.display = 'none';
    };
    // for cancel changes btn
    function cancelChanges(e)
    {
        let editFields = document.querySelectorAll('.infoInput');
        editFields.forEach((item, index) =>
        {
            item.readOnly = true;
        })
        // control buttons
        let editBtn = document.querySelector('#Edit-info-btn');
        editBtn.style.display = 'block';
        let saveBtn = document.querySelector('#save-changes');
        saveBtn.style.display = 'none';
        e.target.style.display = 'none';
    }
    
    return (
        <div>
          
            <div className='container'>
                <div className='profileHeader'>
                    <div className='user-img'>
                        <img src="" alt="user-pic" />
                    </div>
                    <div className='user-email row gap-2'>
                        <label className='col-2' htmlFor="">Email:</label>
                        <p className='col-3'>{username || 'username'} </p>
                    </div>
                </div>
                
                <div className='user-info d-grid gap-2'>
                    
                    <div className='border p-1'>
                        <label className='col-4' htmlFor="">Name:</label>
                        <input className='col-4 infoInput' id='profile-name' type="text" readOnly
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>
                    <div className='border p-1'>
                        <label className='col-4' htmlFor="">Birthday:</label>
                        <input className='col-4 infoInput' id='profile-birthday' type="date" readOnly
                            onChange={(e) => { setBirthday(e.target.value)}}
                        />
                    </div>
                    <div className='border p-1'>
                        <label className='col-4' htmlFor="">Phone:</label>
                        <input className='col-4 infoInput' id='profile-phone' type="number" readOnly
                            onChange={(e) => { setPhone(e.target.value) }}
                        />
                    </div>
                    <div className='border p-1'>
                        <label className='col-4' htmlFor="">City:</label>
                        <input className='col-4 infoInput' id='profile-city' type="text" readOnly
                            onChange={(e) => { setCity(e.target.value) }}
                        />
                    </div>
                    <div className='border p-1'>
                        <label className='col-4' htmlFor="">Favourite restaurant:</label>
                        <input className='col-4 infoInput' id='profile-city' type="text" readOnly
                            onChange={(e) => { setRestaurant(e.target.value) }}
                        />
                    </div>


                    <div>
                        <button id='save-changes' style={{ display: 'none' }} className='col-2'>
                            Save
                        </button>
                        <button id='cancel-changes-btn' style={{display:'none'}} onClick={cancelChanges}>
                            Cancel
                        </button>
                    </div>

                    <div>
                        <button id='Edit-info-btn' className='col-3' onClick={editUserInfo}>
                            Edit
                        </button>
                    </div>
                </div>
                
            </div>
          
            







          
    </div>
  )
}

