import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';
import Footer from '../Footer/Footer';
import Search from '../Search';

const Navbar = ({ onSearchClick }) => {
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
              <a className="nav-link" href='#footer'>Contact Us</a>
            </li>
          </ul>

          {/* Nav Icons */}
          <div className="navbar-right d-flex align-items-center">
            
            <span onClick={onSearchClick} style={{ cursor: 'pointer' }}>
            <img src={assets.search_line} alt="Search" className="navbar-icon" />
            </span>

          <span className="position-relative d-inline-block ms-3">
            <Link to="/cart">
            <img
              src={assets.shopping_cart}
              alt="Cart"
              className="navbar-icon"
              width="30"
              height="30"
            />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            0
          {/*<span className="visually-hidden">cart items</span>*/}
          </span>
            </Link>
          </span>

          <span className='position-relative d-inline-block ms-3'>
            <Link to="/login">
            <img src={assets.user} alt="user" className="navbar-icon" />
            </Link>
          </span>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;