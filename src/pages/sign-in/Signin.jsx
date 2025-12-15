import React from 'react'
import '../../assets/css/sign-in.css';

const Signin = () => {
  return (
    <>
    
    <div class="auth-card">

    {/* <!-- LEFT IMAGE PLACEHOLDER --> */}
    <div class="auth-image">
      {/* <!-- Image will go here later --> */}
    </div>

    {/* <!-- RIGHT FORM --> */}
    <div class="auth-form">
      <div class="logo">Crextio</div>

      <h1>Create an account</h1>
      <p class="subtitle">Sign up and get 30 days free trial</p>

      <form>
        <label>Full name</label>
        <input type="text" placeholder="Amélie Laurent" />

        <label>Email</label>
        <input type="email" placeholder="amelie@gmail.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••••••" />

        <button type="submit" class="primary">Submit</button>

        <div class="divider">
          <button type="button" class="social">Apple</button>
          <button type="button" class="social">Google</button>
        </div>
      </form>

      <p class="footer">
        Have any account? <a href="google">Sign in</a>
      </p>
    </div>

  </div>
    
    
    </>
  )
}

export default Signin