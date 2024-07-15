import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";

import { LuSearch } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <nav className="navbar">
            <div className="nav-list-right">
              <h1>Krist</h1>
            </div>
            <ul className="nav-list">
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeLink" : "")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeLink" : "")}
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeLink" : "")}
                  to="/ourstory"
                >
                  Our Story
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeLink" : "")}
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeLink" : "")}
                  to="/contactus"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="nav-list-left">
              <LuSearch className="nav-item-icon" />
              <FaRegHeart className="nav-item-icon" />
              <RiShoppingBasketLine className="nav-item-icon" />
              <button className="nav-item-btn">Login</button>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
