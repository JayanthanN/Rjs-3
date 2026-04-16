import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>

      <div className="container">
        <div className="page">
          <h2>Welcome to the Home Page</h2>
          
        </div>
      </div>
    </>
  );
};

export default Home;
