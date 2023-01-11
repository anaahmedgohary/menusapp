import axios from "axios";
import React from 'react';
import "./style/signup.css";
import { useEffect, useState } from 'react';
import $ from 'jquery';




// local
// const baseURL = "http://localhost:4000";
const baseURL = "https://menusappback.vercel.app";

export default function RecoverPass()
{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let confirmPass = document.querySelector('#confirmPass');

    function validatePassword()
    {
        if (password !== confirmPass.value)
        {
            confirmPass.setCustomValidity("Passwords Don't Match");
        } else
        {
            confirmPass.setCustomValidity('');
        }
    }


    const handelSubmit = (e) =>
    {
        e.preventDefault();
        //const newuser = {username: "llcoolj", password: "icetea"};

        axios
            .post(`${baseURL}/resetpass/finduser/`, { username: username })
            //.then((req, res) =>
            .then((response) =>
            {
                if (response.status === 200)
                {
                    setUsername(response.data);
                    $('#email-form').hide();
                    $('#password-form').show();
                    axios.post(`${baseURL}/emails/passchangereq`, { username: username })
                        .then(response => { console.log(response.data) })
                        .catch(error => { console.log(error) })
                }

                //setUsername('');
               // window.alert(`${response.data}`);
               // console.log(username);
            })
            .catch(error =>
            {
                console.log(error);
                window.alert('No User Was Found with this Email.');
            });

        
       // setPassword('');
       // window.alert('Thank you for signing up.\ncheck your email inbox.');

        // redirect("/login");
       // window.location.href = '/login';

    }

    function resetPasswordHandler(e)
    {
        e.preventDefault();
        axios
            .post(`${baseURL}/resetpass/updateuser/`, { username, password })
            .then((response) =>
            {
                if (response.status === 200)
                {
                    axios.post(`${baseURL}/emails/passwaschanged`, { username: username })
                        .then(response => { console.log(response.data) })
                        .catch(error => { console.log(error) });
                    
                    setUsername('');
                    setPassword('');
                    confirmPass.value = '';
                    window.alert(`Password was Reset Successfully`);
                    window.location.href = '/login';
                }
            })
            .catch((error) =>
            {
                setUsername('');
                setPassword('');
                console.log(error);
                window.alert('Some Error Was Encountered!');
                window.location.href = '/login';
            })
    }

    //if (!backendData) return "No post!";


    return (
        <div className="container">
            <div className="signupDiv">
                <h6>Password Recovery</h6>
                <div>
                    <form id="email-form" onSubmit={handelSubmit}
                        className="signupForm"
                    >
                        <label className="label-signin" htmlFor="email">
                            E-mail
                        </label>
                        <input type='email' name="username" id="username" required
                            onChange={(e) => { setUsername(e.target.value) }} />
                        {/* <label className="label-signin" htmlFor="password">
                            Password
                        </label>
                        <input type="text" name="password" id="password" required 
                            onChange={(e) => { setPassword(e.target.value) }} /> */}
                        <div>
                            <button
                                className="submit-btn btn btn-info"
                                type="submit"
                            >
                                Reset Password
                            </button>
                        </div>
                    </form>


                    <form id="password-form" style={{display:"none"}} onSubmit={resetPasswordHandler}
                        className="signupForm"
                    >
                        {/* <label className="label-signin" htmlFor="email">
                            New Password
                        </label>
                        <input name="username" id="username" required 
                            onChange={(e) => { setUsername(e.target.value) }} /> */}
                        
                        <label className="label-signin" htmlFor="password">
                            NEW Password
                        </label>
                        <input type="password" name="password" id="password" required
                            onChange={(e) => { setPassword(e.target.value) }} />
                        
                        <input type="password" id="confirmPass" required onChange={validatePassword} />

                        <div>
                            <button
                                className="submit-btn btn btn-info"
                                type="submit"
                            >
                                Confirm Reset
                            </button>
                        </div>
                    </form>

                </div>

                <div>
                    <a
                        className="forgot-pass"
                        href="/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="login page"
                    >
                        Login Now!
                    </a>
                </div>
            </div>




        </div>
    )
}
