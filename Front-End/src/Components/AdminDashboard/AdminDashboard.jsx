import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
/*import { FaUsers, FaClipboardList, FaMoneyBill, FaTruck, FaUserTie } from "react-icons/fa";*/
import { FaUsers, FaBox, FaClipboardList, FaTruck, FaUserTie, FaChartBar } from "react-icons/fa";
import axios from 'axios';
import { Link, Outlet } from "react-router-dom";
import './AdminDashboard.css'

const AdminDashboard = () => {
  // State to store the dashboard data
  const [data, setData] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalEmployees: 0,
    totalSuppliers: 0,
  });

  // Fetch data from the server when the component mounts
  useEffect(() => {
    axios.get('http://localhost:3000/api/dashboard')
      .then(response => {
        setData(response.data); // Set the data from the server
      })
      .catch(error => {
        console.error('Error fetching dashboard data', error);
      });
  }, []); // Empty array ensures this runs only once when the component mounts

  const [activeMenu, setActiveMenu] = useState(""); // Track active menu item

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? "" : menu); // Toggle active state on click
  };

  return ( 

  /*  
  <div className = "container-fauid">
    <div className="row flex-no-wrap">
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
    <Link 
    to="/AdminDashboard" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <span className="fs-5 d-none d-sm-inline">Prasad Mordors</span>
    </Link>
    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" 
    id="menu"> 

    <li className="w-100">
    <Link 
    to="/AdminDashboard" 
    className="nav-link text-white align-middle px-0">
    <i className="fa-4 bi-speedometer ms-2"></i>
     <span className="ms-2 d-none d-sm-inline">Dashboard</span>
    </Link>
    </li>

    <li className="w-100">
    <Link 
    to="/AdminDashboard/employee" 
    className="nav-link text-white align-middle px-0">
    <i className="fa-4 bi-speedometer ms-2"></i>
     <span className="ms-2 d-none d-sm-inline">Employee</span>
    </Link>
    </li>

    <li className="w-100">
    <Link 
    to="/AdminDashboard/Products" 
    className="nav-link text-white align-middle px-0">
    <i className="fa-4 bi-speedometer ms-2"></i>
     <span className="ms-2 d-none d-sm-inline">Products</span>
    </Link>
    </li>

    <li className="w-100">
    <Link 
    to="/AdminDashboard/Orders" 
    className="nav-link text-white align-middle px-0">
    <i className="fa-4 bi-speedometer ms-2"></i>
     <span className="ms-2 d-none d-sm-inline">Orders</span>
    </Link>
    </li>

    <li className="w-100">
    <Link 
    to="/AdminDashboard/Suppliers" 
    className="nav-link text-white align-middle px-0">
    <i className="fa-4 bi-speedometer ms-2"></i>
     <span className="ms-2 d-none d-sm-inline">Suppliers</span>
    </Link>
    </li>

    <li className="w-100">
    <Link 
    to="/AdminDashboard/Delivery Services" 
    className="nav-link text-white align-middle px-0">
    <i className="fa-4 bi-speedometer ms-2"></i>
     <span className="ms-2 d-none d-sm-inline">Delivery Services</span>
    </Link>
    </li>
      
    </ul>


    </div>
    </div>

    <div className="col p-0 m-0">
      <div className="p-2 d-flex justify-content-center shadow-sm bg-light"> 
      <h4>Dashboard </h4>
      </div>
      <Outlet/>
    </div>


    </div>
  </div>
    */
  <div className="container-fauid">
  <div className="row flex-no-wrap">
    {/* Sidebar */}
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark sidebar">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <Link to="/AdminDashboard" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">Prasad Mortors</span>
        </Link>

        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu"> 
          <li className="w-100">
            <Link to="/AdminDashboard" className="nav-link text-white align-middle px-0">
              <FaChartBar className="ms-2" /> <span className="ms-2 d-none d-sm-inline">Dashboard</span>
            </Link>
          </li>
          <li className="w-100">
            <Link to="/AdminDashboard/employee" className="nav-link text-white align-middle px-0">
              <FaUsers className="ms-2" /> <span className="ms-2 d-none d-sm-inline">Employee</span>
            </Link>
          </li>
          <li className="w-100">
            <Link to="/AdminDashboard/Products" className="nav-link text-white align-middle px-0">
              <FaBox className="ms-2" /> <span className="ms-2 d-none d-sm-inline">Products</span>
            </Link>
          </li>
          <li className="w-100">
            <Link to="/AdminDashboard/Orders" className="nav-link text-white align-middle px-0">
              <FaClipboardList className="ms-2" /> <span className="ms-2 d-none d-sm-inline">Orders</span>
            </Link>
          </li>
          <li className="w-100">
            <Link to="/AdminDashboard/Suppliers" className="nav-link text-white align-middle px-0">
              <FaUserTie className="ms-2" /> <span className="ms-2 d-none d-sm-inline">Suppliers</span>
            </Link>
          </li>
          <li className="w-100">
            <Link to="/AdminDashboard/DeliveryServices" className="nav-link text-white align-middle px-0">
              <FaTruck className="ms-2" /> <span className="ms-2 d-none d-sm-inline">Delivery Services</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>

    {/* Main Content */}
    <div className="col p-0 m-0"style={{ backgroundColor: "#f8f9fa", color: "black", minHeight: "100vh", padding: "20px" }}>
      <div className="p-2 d-flex justify-content-center shadow-sm bg-light"> 
        <h4>Dashboard</h4>
      </div>
      <Outlet/>
    </div>
  </div>
</div>
  );
};

export default AdminDashboard;


