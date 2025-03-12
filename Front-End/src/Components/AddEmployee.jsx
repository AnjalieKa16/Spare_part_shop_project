import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    email: '',
    contact_no: '',
    address: '',
    username: '',
    password: '',
    image: null, // Change to null to handle file uploads
  });

  

  useEffect(() => {
    axios.get('http://localhost:3000/auth/')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('id', employee.id);
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('contact_no', employee.contact_no);
    formData.append('address', employee.address);
    formData.append('username', employee.username);
    formData.append('password', employee.password);
    formData.append('image', employee.image);

    axios.post('http://localhost:3000/auth/AddEmployee', formData, { // Ensure the correct endpoint
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(result => {
        if(result.data.status){
            navigate('/AdminDashboard/employee')
        }else{
            alert(result.data.error)
        }
    })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center h-80'>
      <div className='p-3 rounded w-50 border'>
        <h2 className='text-center'>Add Employee</h2>

        <form className='row g-3' onSubmit={handleSubmit}>
          <div className='col-12'>
            <label htmlFor="employeeID" className="form-label">Employee</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="employeeID"
              placeholder='Enter Employee ID'
              onChange={(e) => setEmployee({ ...employee, id: e.target.value })}
            />
          </div>

          <div className='col-12'>
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="name"
              placeholder='Enter Name'
              onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            />
          </div>

          <div className='col-12'>
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control rounded-0"
              id="email"
              placeholder='Enter Email'
              autoComplete='off'
              onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
            />
          </div>

          <div className='col-12'>
            <label htmlFor="contact_no" className="form-label">Contact No</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="contact_no"
              placeholder='Enter Contact Number'
              onChange={(e) => setEmployee({ ...employee, contact_no: e.target.value })}
            />
          </div>

          <div className='col-12'>
            <label htmlFor="emAddress" className="form-label">Address</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="emAddress"
              placeholder='Enter Address'
              onChange={(e) => setEmployee({ ...employee, address: e.target.value })}
            />
          </div>

          <div className='col-12'>
            <label htmlFor="emUsername" className="form-label">UserName</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="emUsername"
              placeholder='Enter UserName'
              onChange={(e) => setEmployee({ ...employee, username: e.target.value })}
            />
          </div>

          <div className='col-12'>
            <label htmlFor="emPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control rounded-0"
              id="emPassword"
              placeholder='Enter Password'
              onChange={(e) => setEmployee({ ...employee, password: e.target.value })}
            />
          </div>

          <div className='col-12'>
            <label className="form-label" htmlFor='emImage'>
              Upload Image
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="emImage"
              name='image'
              onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })}
            />
          </div>

          <div className='col-12 text-center'>
            <button type="submit" className="btn btn-primary rounded-0">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;