import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    /*<header
      className="header d-flex flex-column align-items-center justify-content-center text-white text-center"
      style={{ backgroundImage: `url(${assets.backgroundImage1})` }}
      id="Header"
    >
      <div className="container text-center py-4 px-3 px-md-5 px-lg-5 text-white">
        <h2 className="display-4 font-weight-bold">Find the Right Part for Every Make and Model</h2>
        <div className="mt-4">
          <button className="btn btn-primary mx-2">Login</button>
          <button className="btn btn-outline-light mx-2">Register</button>
        </div>
      </div>
    </header>*/

    <header className="header" id="Header">
      <div className="header-contents">
        <h2>Find the Right Part for Every Make and Model</h2>

        <div className="button-group">
          <Link to="/login" className="btn btn-primary mx-2">Login</Link>
          <Link to="/register" className="btn btn-outline-light mx-2">Register</Link>
        </div>

      </div>
    </header>
  );
};

export default Header;