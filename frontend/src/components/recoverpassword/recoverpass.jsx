import axios from "axios";
import React from 'react';
import "./style/signup.css";
import { useEffect, useState } from 'react';
import $ from 'jquery';




// local
//const baseURL = "http://localhost:4000";
const baseURL = "https://menusappback.vercel.app";


export default function RecoverPass()
{

    //const [backendData, setBackendData] = useState([{}]);


    // useEffect(() =>
    // {
    //   axios.get(`${baseURL}/api/product`).then((response)=> {
    //     setPost(response.data)
    //   })
    // },[])

    // console.log(post);

    const [username, setUsername] = useState("");
  //  const [password, setPassword] = useState("");


    const handelSubmit = (e) =>
    {
        e.preventDefault();
        //const newuser = {username: "llcoolj", password: "icetea"};

        axios
            .post(`${baseURL}/recoverpass/confirmemail`, { username: username })
            //.then((req, res) =>
            .then((response) =>
            {
                console.log(response.data);
                // if (response.status === 200)
                // {
                //     axios.post(`${baseURL}/emails/passrecovery`, { username: username })
                //         .then(response => { console.log(response.data) })
                //         .catch(error => { console.log(error) })
                // }

                setUsername('');
                window.alert(`${response.body}`);
            })
            .catch(error =>
            {
                console.log(error);
                window.alert('catch error in frontend');
            });

        
       // setPassword('');
       // window.alert('Thank you for signing up.\ncheck your email inbox.');

        // redirect("/login");
       // window.location.href = '/login';

    }

    //if (!backendData) return "No post!";


    return (
        <div className="container">
            <div className="signupDiv">
                <h6>Sign Up</h6>
                <div>
                    <form onSubmit={handelSubmit}
                        className="signupForm"
                    >
                        <label className="label-signin" htmlFor="email">
                            E-mail
                        </label>
                        <input name="username" id="username" required value={username}
                            onChange={(e) => { setUsername(e.target.value) }} />
                        {/* <label className="label-signin" htmlFor="password">
                            Password
                        </label>
                        <input type="text" name="password" id="password" required value={password}
                            onChange={(e) => { setPassword(e.target.value) }} /> */}
                        <div>
                            <button
                                className="submit-btn btn btn-info"
                                type="submit"
                            >
                                Recover Password
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
