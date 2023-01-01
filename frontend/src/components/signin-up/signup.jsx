import axios from "axios";
import React from 'react';
import "./style/signup.css";
import { useEffect, useState } from 'react';
import $ from 'jquery';




// local
//const baseURL = "http://localhost:4000";
const baseURL = "https://menusappback.vercel.app";


export default function SignUp()
{
  
  //const [backendData, setBackendData] = useState([{}]);


  const [post, setPost] = useState(null);

  // useEffect(() =>
  // {
  //   axios.get(`${baseURL}/api/product`).then((response)=> {
  //     setPost(response.data)
  //   })
  // },[])

 // console.log(post);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

     
  const handelSubmit = (e)=>{
    e.preventDefault();
    //const newuser = {username: "llcoolj", password: "icetea"};

    axios
      .post(`${baseURL}/signup/newuser`, { username: username, password: password })
      //.then((req, res) =>
      .then((response) =>
      {
        //setPost(res.data);
        setPost(response.data);
        console.log(response.data);
        if (response.status === 200)
        {
          axios.post(`${baseURL}/emails/welcome`, { username: username })
            .then(response => { console.log(response.data) })
            .catch(error => { console.log(error) })
        }
      })
      .catch(error => { console.log(error) });
    
    setUsername('');
    setPassword('');
    window.alert('Thank you for signing up.\ncheck your email inbox.');

   // redirect("/login");
    window.location.href = '/login';

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
              onChange={(e) => { setUsername(e.target.value)}} />
            <label className="label-signin" htmlFor="password">
              Password
            </label>
            <input type="text" name="password" id="password" required value={password}
              onChange={(e) => { setPassword(e.target.value) }}/>
            <div>
              <button
                className="submit-btn btn btn-info"
                type="submit"
               >
                Sign Up
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
            Already has account!
          </a>
        </div>
      </div>

      


    </div>
  )
}
