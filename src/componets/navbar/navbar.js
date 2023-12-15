import React from 'react'
import menu_icon from '../icons/menu-left.svg';
import logo from '../icons/Logo_icon.png';
import search_icon from '../icons/search.svg';
import setting_icon from '../icons/setting.svg';
import './navbar.css';
const Navbar = () => {
  return (

    <div className="container">
      <div className="menu">
        <button><img src={menu_icon} /></button>
      </div>

      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="search-box">
        <img src={search_icon} alt="" />
        <input type="text" placeholder='Search' />
      </div>

      <div className="login-signup">
        <button>Login/SignUp</button>
      </div>
      <div className="settings">
        <button><img src={setting_icon} alt="" /></button>
      </div>
    </div>
  )
}

export default Navbar;






