import React from 'react'
import '../../assets/css/sign-in.css';

const Signin = () => {
  return (
    <>
      <div class="container">

    <div class="image-section"></div>

    <div class="form-section">
      <div class="logo">PPA</div>

      <h1>Sign in</h1>
      <p class="t-subtitle">Welcome to PPA Dashboard!</p>
      <p class="subtitle">Manage financial activities, members, and transactions securely.</p>

      <form class="form-input-section">
        <p class="form-subtitle">Email</p>
        <input type="email" placeholder="Email" required />
        <p class="form-subtitle">Password</p>
        <input type="password" placeholder="Password" required />

        <button type="submit">Sign in</button>
      </form>
    </div>

  </div>
    
    </>
  )
}

export default Signin