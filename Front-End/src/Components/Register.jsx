import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert("You must agree to the Terms and Conditions!");
      return;
    }
    console.log("Form Data Submitted:", formData);
  };

  return (
    
    <div className="register-container">
      <h2>Customer Register</h2>

      <br></br>

      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>First Name :</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name :</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email Address :</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Contact :</label>
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address :</label>
          <textarea name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>User Name :</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password :</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Re-enter password :</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>

        <br></br>

        <div className="form-group checkbox">
          <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
          <span>
            I have read and agreed to the <a href="#" className="terms-link">Terms and Conditions</a>
          </span>
        </div>

        <button type="submit" className={`register-button ${!formData.agreeTerms ? "disabled" : ""}`} disabled={!formData.agreeTerms}>
          Register
        </button>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
