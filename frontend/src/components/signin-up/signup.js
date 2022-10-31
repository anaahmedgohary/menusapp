import axios from "axios";
import React from 'react';
import "./style/signin.css";
import { useEffect, useState } from 'react';




//const baseURL = "http://localhost:5000/mylam";
const baseURL = "/mylam/1";


export default function SignUp()
{
  
  //const [backendData, setBackendData] = useState([{}]);


  const [post, setPost] = useState(null);

  useEffect(() =>
  {
    // `${baseURL}/1`
    axios.get('/mylam/1').then((response)=> {
      setPost(response.data)
     // console.log(post);
    })
  },[])

  console.log(post);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

     
  const handelSubmit = (e)=>{
    e.preventDefault();
    //const newuser = {username: "llcoolj", password: "icetea"};

    axios
      .post(baseURL, {username: username, password: password})
      .then((req, res) =>
      {
        setPost(res.data);
       
      })
  }

  //if (!backendData) return "No post!";
  

  return (
    <div className="container">
      <div id="signupDiv">
        <h6>Sign Up</h6>
        <div>
          <form onSubmit={handelSubmit}
            id="signinForm"
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
                className="submit-btn btn btn-success"
                type="submit"
                id='submit-btn'
                >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div>
          <a
            className="forgot-pass"
            href="./forgotpass"
            target="_blank"
            rel="noopener noreferrer"
          >
            forgot password ?
          </a>
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

      
      <div>
        <h2>{username}</h2>
        <h2>{password}</h2>
      </div>

    </div>
  )
}
