import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./style/userprofile.css";
import $ from 'jquery';

// encrypto
import CryptoJS from "crypto-js";

export default function UserProfile()
{
    // local
    // const baseURL = "http://localhost:4000";
    const baseURL = "https://menusappback.vercel.app";
    
    let currentUser = JSON.parse(sessionStorage.getItem('loggedinuser'));
    const [email, setEmail] = useState('');
    useEffect(() =>
    {
        if (currentUser)
        {
            setEmail(currentUser);
        }
    }, []);

    // user profile info variables
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('');
    const [restaurant, setRestaurant] = useState('');
   // const email = currentUser || null;
    // const infoPost = { name, birthday, phone, city, restaurant, email };

    
    
    
    //encryption
    const [enc, setEnc] = useState('')    
    // useEffect(() =>
    // {
    //     axios.get(`${baseURL}/userinfo/encrypto`)
    //         .then(async response =>
    //         {
    //             const bytes = CryptoJS.AES.decrypt(response.data, secret_key);
    //             const welll = await JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    //             console.log(welll);
    //             setEnc(welll);
    //             // cryptr.decrypt(response.data);
    //         })
    // }, []);

    // get saved info
    //encryption
    const secret_key = 'QfT2UQMIF4jaHilY2DNvXECSns0tctaI';
    async function getUserInfo()
    {
        const email = await currentUser || null;
        axios
            .post(`${baseURL}/userinfo/getinfo`, { email: email })
            .then(async response =>
            {
                //console.log(response.data);
                if (response.status === 200)
                {
                    const bytes = CryptoJS.AES.decrypt(response.data, secret_key);
                    const info =  JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

                    setName(info.name);
                    setBirthday(info.birthday);
                    setPhone(info.phone);
                    setCity(info.city);
                    setRestaurant(info.restaurant);
                } else
                {
                    console.log('no user found')
                }
            }).catch(err => console.log(err))
    };
    useEffect(() =>
    {
        getUserInfo();
    }, []);


    // send info save button
    const infoPost = { name: name, birthday: birthday, phone: phone, city: city, restaurant: restaurant, email: email };
    async function saveUpdateInfo(e)
    {
        
        axios
            .post(`${baseURL}/userinfo/updateinfo`, infoPost)
            .then(response =>
            {
                console.log(response.data);
                window.alert(response.data);
                cancelChanges();
            }).catch(err => console.log(err))
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
        $('#save-changes').show();
        $('#cancel-changes-btn').show();
        $(e.target).hide()
    };
    // for cancel changes btn
    function cancelChanges()
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
        let cancelBtn = document.querySelector('#cancel-changes-btn');
        cancelBtn.style.display = 'none';
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
                        <p className='col-3'>{email || 'user Email'} </p>
                    </div>
                </div>
                
                <div className='user-info d-grid gap-2'>
                    
                    <div className='border p-1'>
                        <label className='col-4' htmlFor="">Name:</label>
                        <input className='col-4 infoInput' id='profile-name' type="text" value={name} readOnly
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>
                    <div className='border p-1'>
                        <label className='col-4' htmlFor="">Birthday:</label>
                        <input className='col-4 infoInput' id='profile-birthday' type="date" value={birthday} readOnly
                            onChange={(e) => { setBirthday(e.target.value)}}
                        />
                    </div>
                    <div className='border p-1'>
                        <label className='col-4' htmlFor="">Phone:</label>
                        <input className='col-4 infoInput' id='profile-phone' type="tel" value={phone} readOnly
                            onChange={(e) => { setPhone(e.target.value) }}
                        />
                    </div>
                    <div className='border p-1'>
                        <label className='col-4' htmlFor="">City:</label>
                        <input className='col-4 infoInput' id='profile-city' type="text" value={city} readOnly
                            onChange={(e) => { setCity(e.target.value) }}
                        />
                    </div>
                    <div className='border p-1'>
                        <label className='col-4' htmlFor="">Favourite restaurant:</label>
                        <input className='col-4 infoInput' id='profile-city' type="text" value={restaurant} readOnly
                            onChange={(e) => { setRestaurant(e.target.value) }}
                        />
                    </div>


                    <div>
                        <button id='save-changes' onClick={saveUpdateInfo} style={{ display: 'none' }} className='col-2'>
                            Save
                        </button>
                        <button id='cancel-changes-btn' style={{display:'none'}} onClick={cancelChanges}>
                            Cancel
                        </button>
                    </div>

                    <div>
                        <button id='Edit-info-btn' className='col-3 btn btn-primary' onClick={editUserInfo}>
                            Edit
                        </button>
                    </div>
                </div>
                
            </div>
          
            

            {/* <div>
                <h2>{ enc || 'undefined'}</h2>
        </div> */}





          
    </div>
  )
}

