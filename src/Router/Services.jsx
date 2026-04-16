import React from "react";
import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div className="container">
      <div className="page">
        <h1>Services Page</h1>
        <ul className="services-list">
          <li><Link to="web-development">Web Development</Link></li>
          <li><Link to="app-development">App Development</Link></li>
          <li><Link to="ui-ux-design">UI/UX Design</Link></li>
        </ul>

        <div className="service-box">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Services;