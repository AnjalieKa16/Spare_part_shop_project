import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FaUser, FaLock } from 'react-icons/fa';
import './login.css'
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


const Login = () => {

  const[values, setValues] = useState({
    username:'',
    password:''
  })

  const [error, setError]= useState(null)
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post('http://localhost:3000/auth/adminlogin',values)
    .then(result => {
      if(result.data.loginStatus){
        navigate('/AdminDashboard')
      } else{
        setError(result.data.Error)
      }
    })
    .catch(err =>console.log(err)
    )
  }

  return (
    // Outer div to center the login form on the screen using Bootstrap classes
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      {/* Inner div for the login form, styled with padding, border, and rounded corners */}
      <div className='p-3 rounded w-30 border loginForm'>
      <div className='text-danger'>
        {error && error}
      </div>
        <h2>Login</h2>
        <br></br>

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="input-container">
          <FaUser className="icon" />
            <input 
              type='text' 
              name='username' 
              autoComplete='off' 
              placeholder='Username' 
              onChange={(e) => setValues({...values, username:e.target.value})}
              className='input-field'

            />
          </div>

          <br></br>

          {/* Password Field */}
          <div className="input-container">
          <FaLock className="icon" />
            <input 
              type='password' 
              name='Password' 
              autoComplete='off' 
              placeholder='Password' 
              onChange={(e) => setValues({...values, password:e.target.value})}
              className='input-field' 
            />
          </div>

          {/* Login Button */}
          <button type="submit" className='login-button'>Login</button>

          {/* Forgot Password */}
          <div className="mt-3">
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          {/* Register Link */}
          <p className="register-link mt-2">
            Do not have an account? <a href="/register">Register Now</a>
            {/*Link to="/register">Register Now</Link>*/}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
