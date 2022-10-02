import React from 'react';
import "./style/signin.css";

export default function SignIn() {
  return (
    <div className="container">
      <div id="signupDiv">
        <h6>Sign Up</h6>
        <div>
          <form action="" method="post" id="signinForm">
            <label className="label-signin" htmlFor="email">
              E-mail
            </label>
            <input type="email" name="email" id="email" required />
            <label className="label-signin" htmlFor="password">
              Password
            </label>
            <input type="text" name="password" id="password" required />
            <div>
              <input
                className="submit-btn btn btn-success"
                type="submit"
                value="Log In"
              />
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
    </div>
  );
}
