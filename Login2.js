import React from "react";

function Login2() {
    return (
        <div classNameName="wrapper">

        <div className="login-box">
          <form action="">
            <h2>Login</h2>
      
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
      
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
      
            <div className="remember-forgot">
              <label><input type="checkbox" /> Remember me</label>
              <a href="#">Forgot Password?</a>
            </div>
      
            <button type="submit">Login</button>
      
            <div className="register-link">
              <p>Don't have an account? 
                <a href="/Signup.html">Register</a> <br />
              </p>
            </div>
            
          </form>
        </div>
      
      </div>
    )
}
export default Login2;