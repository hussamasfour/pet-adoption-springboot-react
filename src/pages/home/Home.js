import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <header>
      <div className="header-content text-white">
        <div className="header-content-inner">
          <h1>Pet Adoption</h1>
          <p>Your best friend is wating for you</p>
          <Link to="/explore" className="btn  btn-lg explore-btn">
            Help Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Home;
