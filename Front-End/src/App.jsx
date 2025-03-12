import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";*/
 
import Login from './Components/Login'
import Register from './Components/Register';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import Home from './Components/Home';
import Employee from './Components/Employee';
import Products from './Components/Products';
import Orders from './Components/Orders';
import Suppliers from './Components/Suppliers';
import DeliveryServices from './Components/DeliveryServices';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Header from './Components/Header'; // Import the Header component
import HomePage from './Pages/HomePage';



//import Navbar from './Components/Navbar/navbar';

// Create a routes/paths
 
/*
const router = createBrowserRouter([
  {
    path: "/login",
    element: <div><Login/></div>
  },
  
  {
    path: "/register",
    element:<div><Register /></div> 
  },

  {
    path: "/AdminDashboard",
    element:<div><AdminDashboard /></div> 
  },


])*/


function App() {
 /*
  return (

    <div className='app'>
     
    {/*
    <Login />
    <Register/>
    <Dashboard/> 
    <Navbar/>

    </div>
    
  }
    
  )*/

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}></Route>
        {/*<Route index element={<Header />} /> */}{/* Use Header component for the home page */}
        <Route path="/login" element={<Login />}></Route> 
        <Route path="/register" element={<Register />}></Route> 
        <Route path="/AdminDashboard" element={<AdminDashboard />} >
          <Route path='' element={<Home/>}></Route>
          <Route path='/AdminDashboard/employee' element={<Employee/>}></Route>
          <Route path='/AdminDashboard/products' element={<Products/>}></Route>
          <Route path='/AdminDashboard/orders' element={<Orders/>}></Route>
          <Route path='/AdminDashboard/suppliers' element={<Suppliers/>}></Route>
          <Route path='/AdminDashboard/deliveryServices' element={<DeliveryServices/>}></Route>
          <Route path='/AdminDashboard/AddEmployee' element={<AddEmployee/>}></Route>
          <Route path='/AdminDashboard/EditEmployee/:id' element={<EditEmployee/>}></Route>

        </Route>
          
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
