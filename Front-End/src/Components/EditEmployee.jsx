import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    email: '',
    contact_no: '',
    address: '',
    username: '',
    password: '',
    image: '', // Change to empty string to handle file uploads
  });

  useEffect(() => {
    axios.get('http://localhost:3000/auth/employee/' + id)
      .then(result => {
        setEmployee(result.data.Result); // Set the employee data directly
      }).catch(err => console.log(err));
  }, [id]); // Add dependency array

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

    axios.put('http://localhost:3000/auth/EditEmployee/' + id, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(result => {
        if (result.data.status) {
          navigate('/AdminDashboard/employee'); // Navigate to the employee list after successful update
        } else {
          alert(result.data.error);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center h-80'>
      <div className='p-3 rounded w-50 border'>
        <h2 className='text-center'>Edit Employee</h2>

        <form className='row g-3' onSubmit={handleSubmit}>
          <div className='col-12'>
            <label htmlFor="employeeID" className="form-label">Employee</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="employeeID"
              placeholder='Enter Employee ID'
              value={employee.id} // Bind to state
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
              value={employee.name} // Bind to state
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
              value={employee.email} // Bind to state
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
              value={employee.contact_no} // Bind to state
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
              value={employee.address} // Bind to state
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
              value={employee.username} // Bind to state
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
              value={employee.password} // Bind to state
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
              Edit Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;