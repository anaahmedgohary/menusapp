import React from 'react';
import "./style/signin.css";

export default function SignIn() {
  return (
    <div>
      <div>
        <button>Show Signin</button>
      </div>
      <div id="signupDiv">
        <h6>Sign In</h6>
        <div>
          <form action="" method="post" id="signinForm">
            <label className="label-signin" htmlFor="E-mail">
              E-mail
            </label>
            <input type="email" name="email" id="email" />
            <label className="label-signin" htmlFor="Password">
              Password
            </label>
            <input type="text" name="password" id="password" />
            <div>
              <input type="submit" value="Log In" />
            </div>
          </form>
        </div>
        <div>
          <a href="./forgotpass" target="_blank" rel="noopener noreferrer">
            forgot password ?
          </a>
        </div>
      </div>
    </div>
  );
}
