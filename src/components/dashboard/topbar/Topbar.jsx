import React from 'react'

const Topbar = () => {
  return (
    <header className="topbar">
      <input type="text" placeholder="Search here..." />
      <div className="topbar-right">
        <span>Eng (US)</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="avatar"
        />
      </div>
    </header>
  )
}

export default Topbar