import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/Logo.png";
import menu from "../assets/icons/Menu.png";
import shoppingBag from "../assets/icons/shoppingBag.png";
import search from "../assets/icons/Search.png";
import close from "../assets/icons/Close.png";
import down from "../assets/icons/Down.png";
import location from "../assets/icons/Location.png";
import call from "../assets/icons/Call.png";
import twitter from "../assets/icons/Twitter.png";
import youtube from "../assets/icons/YouTube.png";
import instagram from "../assets/icons/Instagram.png";
import Badge from "../common/Badge";
const Header = () => {
  const openCloseMenu = () => {
    document.querySelector(".menu-list").classList.toggle("show");
  };
  const dropDown = (e) => {
    if (e.target.classList.value !== "item-container") {
      let element = e.target;
      element.parentElement.childNodes[2].classList.toggle("show");
      element.parentElement.childNodes[1].classList.toggle("rotate");
    }
  };
  const selectCategory=(e)=>{
    let className=e.target.innerText.toLowerCase()
    document.querySelector(".selected").classList=["selected"]
    document.querySelector(".selected").classList.add(className)
  }
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
            <div className="menu-list-titles" >
              <h3 className="title" onClick={(e)=>selectCategory(e)}>WOMEN</h3>
              <h3 className="title" onClick={(e)=>selectCategory(e)}>MAN</h3>
              <h3 className="title" onClick={(e)=>selectCategory(e)}>KIDS</h3>
            </div>
            <div className="underline">
              <div className="selected">
                <span></span>
              </div>
            </div>
          </div>
          <div className="menu-list-items">
            <div
              className="item-container"
              id="new"
              onClick={(e) => dropDown(e)}
            >
              <h2>New</h2>
              <img src={down} alt="" className="arrowDown" />
              <ul className="item-list">
                <li>Outer</li>
                <li>Dress</li>
                <li>Shirt</li>
              </ul>
            </div>
            <div
              className="item-container"
              id="apparel"
              onClick={(e) => dropDown(e)}
            >
              <h2>Apparel</h2>
              <img src={down} alt="" className="arrowDown" />
              <ul className="item-list">
                <li>Outer</li>
                <li>Dress</li>
                <li>Blouse/Shirt</li>
                <li>T-Shirt</li>
                <li>Knitwear</li>
                <li>Pants</li>
                <li>Denim</li>
                <li>Kids</li>
              </ul>
            </div>
            <div
              className="item-container"
              id="bag"
              onClick={(e) => dropDown(e)}
            >
              <h2>Bag</h2>
              <img src={down} alt="" className="arrowDown" />
              <ul className="item-list">
                <li>Outer</li>
                <li>Dress</li>
                <li>Shirt</li>
              </ul>
            </div>
            <div
              className="item-container"
              id="shoes"
              onClick={(e) => dropDown(e)}
            >
              <h2>Shoes</h2>
              <img src={down} alt="" className="arrowDown" />
              <ul className="item-list">
                <li>Outer</li>
                <li>Dress</li>
                <li>Shirt</li>
              </ul>
            </div>
            <div
              className="item-container"
              id="beauty"
              onClick={(e) => dropDown(e)}
            >
              <h2>Beauty</h2>
              <img src={down} alt="" className="arrowDown" />
              <ul className="item-list">
                <li>Outer</li>
                <li>Dress</li>
                <li>Shirt</li>
              </ul>
            </div>
            <div
              className="item-container"
              id="accessories"
              onClick={(e) => dropDown(e)}
            >
              <h2>Accessories</h2>
              <img src={down} alt="" className="arrowDown" />
              <ul className="item-list">
                <li>Outer</li>
                <li>Dress</li>
                <li>Shirt</li>
              </ul>
            </div>
          </div>
          <div className="address-container">
            <div className="call">
              <img src={call} alt="" />
              <h2>(766) 713-8616</h2>
            </div>
            <div className="location">
              <img src={location} alt="" />
              <h2>Store locator</h2>
            </div>
          </div>
          <Badge/>
          <div className="social">
            <a>
              <img src={twitter} alt="" />
            </a>
            <a>
              <img src={instagram} alt="" />
            </a>
            <a>
              <img src={youtube} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
