import React from 'react'
import './Login.css'
import Img from "./loginbg.jpeg"
function Login() {
    return(
        <div class="wrapper">
            <img src={Img} />
        <div class="login-box">
          <form action="">
            <h2>Login</h2>
      
            <div class="input-box">
              <span class="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
      
            <div class="input-box">
              <span class="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
      
            <div class="remember-forgot">
              <label><input type="checkbox" /> Remember me</label>
              <a href="#">Forgot Password?</a>
            </div>
      
            <button type="submit">Login</button>
      
            <div class="register-link">
              <p>Don't have an account? 
                <a href="/Signup.html">Register</a> <br />
              </p>
            </div>
            
          </form>
        </div>
      
      </div>
    )

}
 
export default Login;