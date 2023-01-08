import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LogStatus(props)
{

    const [username, setUsername] = useState('');
    let currentUser = JSON.parse(sessionStorage.getItem('loggedinuser'));
    useEffect(() =>
    {
        setUsername(currentUser);
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
            .post(`${baseURL}/logout`, { username: username })
            .then((response) =>
            {
                console.log(response.data);
                sessionStorage.removeItem('loggedinuser');
                window.alert(response.data);
               // window.location.href = '/';
            })
            .catch(err =>
            {
                console.log(err);
                window.alert(err.response.data);
            })
    }

    

    return (
        <div className='container'>

            <div className='row d-flex text-center'>

                <div className='col-12 text-center'>
                    <div>
                        <a className='btn btn-dark' href="/login" title='login'>Login</a>
                    </div>

                </div>

                <div className='col-12 d-flex'>
                    <div className='col-6'>
                        <div>
                            <a href="/userprofile" className='btn btn-dark' target="_blank" rel="noopener noreferrer">
                                {username || "no user loggedin"}
                            </a>
                        </div>
                    </div>
                    
                    <div className='col-6'>
                        <div>
                            <button onClick={logOutHandeler} className='btn btn-dark' title='log out'>Log Out</button>
                        </div>
                    </div>
                </div>

            </div>

            







        </div>
    )
}

