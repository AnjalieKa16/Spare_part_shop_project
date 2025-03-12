import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={assets.logosparep} alt="Prasad Motors" className="navbar-logo" />
          Prasad Motors
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="navbar-right d-flex align-items-center">
            <img src={assets.searchIcon} alt="Search" className="navbar-icon" />
            <img src={assets.basket} alt="Basket" className="navbar-icon ms-3" />
            <div className="dot"></div>
            <button className="btn btn-outline-light ms-3">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;