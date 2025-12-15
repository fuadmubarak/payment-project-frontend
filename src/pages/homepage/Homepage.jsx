import React from 'react'
import '../../assets/css/homepage.css';
import Navbar from "../../components/navigation/Navbar";

const Homepage = () => {


  return (
    <>
    <title>PPA</title>
    <Navbar />

    <div class="main" >
    <h2>Welcome to the Landing Page!</h2>
    <div class="main2">
        <p>More content here...</p>
    </div>
    </div>

      

    </>
  )
}

export default Homepage