import React from 'react'

const Signin = () => {
  return (
    <>
    
      <div class="container">
    {/* <!-- LEFT SIDE --> */}
    <div class="left">
      <div class="logo">Crextio</div>

      <h1>Create an account</h1>
      <p>Sign up and get 30 days free trial</p>

      <label>Full name</label>
      <input type="text" placeholder="Amélie Laurent" />

      <label>Email</label>
      <input type="email" placeholder="amelie@gmail.com" />

      <label>Password</label>
      <input type="password" placeholder="••••••••••••" />

      <button class="primary">Submit</button>

      <div class="social">
        <button> Apple</button>
        <button>Google</button>
      </div>

      <div class="footer">
        Have any account? <a href="#">Sign in</a>
      </div>
    </div>

    {/* <!-- RIGHT SIDE --> */}
    <div class="right">
      <div class="overlay"></div>
    </div>
  </div>
    
    
    </>
  )
}

export default Signin