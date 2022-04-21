import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/Logo.png";
import menu from "../assets/icons/Menu.png";
import shoppingBag from "../assets/icons/shoppingBag.png";
import search from "../assets/icons/Search.png";
import close from "../assets/icons/Close.png";
const Header = () => {
  const openCloseMenu = () => {
    document.querySelector(".menu-list").classList.toggle("show");
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <span className="navbar-icon" onClick={() => openCloseMenu()}>
          <img src={menu} alt="" />
        </span>
        <span className="navbar-logo">
          <img src={logo} alt="openFashionLogo" />
        </span>
        <a className="navbar-icon">
          <img src={search} alt="" />
        </a>
        <a className="navbar-icon">
          <img src={shoppingBag} alt="" />
        </a>
        <div className="menu-list">
          <a className="navbar-icon">
            <img src={close} alt="" onClick={() => openCloseMenu()} />
          </a>
          <div className="menu-list-titles-container">
            <div className="menu-list-titles">
              <h3 className="title">WOMEN</h3>
              <h3 className="title">MAN</h3>
              <h3 className="title">KIDS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
