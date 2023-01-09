import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style/logstatus.css";

export default function LogStatus(props)
{

    const [username, setUsername] = useState('');
    let currentUser = JSON.parse(sessionStorage.getItem('loggedinuser'));
    useEffect(() =>
    {
        setUsername(currentUser);
        if (currentUser)
        {
            let logoutDiv = document.getElementById('logout-div');
            logoutDiv.style.display = "block"
        }
    },[])
    
    

    // if (currentUser != null)
    // {
    //     setUsername(currentUser);
    // };
    // local
    // const baseURL = "http://localhost:4000";
    const baseURL = "https://menusappback.vercel.app";

    const logOutHandeler = async () =>
    {
        axios
            .post(`${baseURL}/login/logout`, { username: currentUser })
            .then((response) =>
            {
                console.log(response.data);
                sessionStorage.removeItem('loggedinuser');
                window.alert(response.data);
                window.location.href = '/';
            })
            .catch(err =>
            {
                console.log(err);
                window.alert(err.response.data);
            })
    }

    

    return (
        <div className='container'>


            <div id='logs-div'>
                <div>
                    <div>
                        <a href="/userprofile" className='btn btn-dark'>
                            {username || "Profile"}
                        </a>
                    </div>
                </div>

                <div id='logout-div' style={{display: "none"}}>
                    <div>
                        <button onClick={logOutHandeler} className='btn btn-dark' title='log out'>Log Out</button>
                    </div>
                </div>
            </div>

          

            







        </div>
    )
}

