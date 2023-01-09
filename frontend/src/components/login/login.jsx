import axios from "axios";
import React from 'react';
import "./style/signin.css";
import { useState } from 'react';
import $ from 'jquery';




//const baseURL = "http://localhost:4000";
const baseURL = "https://menusappback.vercel.app";


export default function LogIn()
{
  
  //const [backendData, setBackendData] = useState([{}]);


 // const [post, setPost] = useState(null);

  // useEffect(() =>
  // {
  //   axios.get(`${baseURL}/api/product`).then((response)=> {
  //     setPost(response.data)
  //   })
  // },[])

 // console.log(post);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 // const [logStatus, setLogStatus] = useState("loggedout");

     
  const handelSubmit = async (e)=>{
    e.preventDefault();
    //const newuser = {username: "llcoolj", password: "icetea"};

    axios
      .post(`${baseURL}/login/authuser`, { username: username, password: password })
      .then(response =>
      {
        console.log(response.data);
        if (response.status === 200)
        {
          axios.post(`${baseURL}/emails/loginalert`, { username: username })
            .then(response => { console.log(response.data) })
            .catch(error => { console.log(error) })
          
          // redirect
        //  setLogStatus('loggedin')
          sessionStorage.setItem('loggedinuser', JSON.stringify(username));
         // setUsername('');
         // setPassword('');
          window.alert('Thank you.\n You are now logged in.');
          window.location.href = '/';
        } 
        
      })
      .catch(error =>
      {
        console.log(error);
        window.alert('Incorrect username or password.\ntry again.');
      });
  }

  //if (!backendData) return "No post!";

  return (
    <div className="container">
      <div id="signupDiv" className="signinDiv">
        <h6>Log in</h6>
        <div>
          <form onSubmit={handelSubmit}
            className="signinForm"
          >
            <label className="label-signin" htmlFor="email">
              E-mail
            </label>
            <input type="email" name="username" id="username" required
              onChange={(e) => { setUsername(e.target.value)}} />
            <label className="label-signin" htmlFor="password">
              Password
            </label>
            <input type="password" name="password" id="password" required
              onChange={(e) => { setPassword(e.target.value) }}/>
            <div>
              <button
                className="submit-btn btn btn-success"
                type="submit"
                >
                Log in
              </button>
            </div>
          </form>
        </div>
        <div>
          <a
            className="forgot-pass"
            href="/recoverpassword"
            title="Reset your password"
          >
            forgot password ?
          </a>
          <div>
            <a
              className="forgot-pass"
              href="/signup"
              title="Sign Up"
            >
              don't have account ?
            </a>
          </div>
        </div>
        
      </div>

      {/* <div className='displayNode'>
        <div>
          {(typeof backendData.users === 'undefined') ?
            (<h2>Loading</h2>) :
              (backendData.users.map((user, i) => (<p key={i}>{user}</p>)
              )
             )
          }
        </div>
      </div> */}

      {/* <div>
        <h1>{post.username}</h1>
        <p>{post.password}</p>
        <button onClick={handelSubmit}>Create Post</button>
      </div> */}
    </div>
  )
}
