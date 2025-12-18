import {React } from 'react'
import '../../../assets/css/sidebar.css';
import { NavLink } from "react-router-dom";

const Sidebar = () => {

  return (
<aside className="sidebar">
      <div className="sidebar-top">
          <img src="/ppa-logo-only.png" alt="Logo" />
          <p className='p'>PPA</p>
      </div>

      <nav className="sidebar-menu">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
        >
          Users
        </NavLink>

        <NavLink 
        to="/a"
        className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
          >
           Orders
        </NavLink>

        <NavLink 
        to="/b"
        className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
          >
           Products
        </NavLink>

        <NavLink 
        to="/c"
        className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
          >
           Settings
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <button className="pro-btn">Log Out</button>
      </div>
    </aside>
  )
}
 
export default Sidebar