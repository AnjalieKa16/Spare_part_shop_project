import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddSuppliers = () => {
  const [supplier, setSupplier] = useState({
    id: '',
    name: '',
    email: '',
    contact_no: '',
    address: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('id', supplier.id);
    formData.append('name', supplier.name);
    formData.append('email', supplier.email);
    formData.append('contact_no', supplier.contact_no);
    formData.append('address', supplier.address);

    axios.post('http://localhost:3000/auth/AddSuppliers', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(result => {
        if (result.data.status) {
          navigate('/AdminDashboard/Suppliers');  // Navigate back to the Supplier list
        } else {
          alert(result.data.error);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center h-80'>
      <div className='p-3 rounded w-50 border'>
        <h2 className='text-center'>Add Supplier</h2>

        <form 
        className='row g-3' onSubmit={handleSubmit}>
          <div className='col-12'>
            <label htmlFor="supplierID" className="form-label">Supplier ID</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="supplierID"
              placeholder='Enter Supplier ID'
              onChange={(e) => setSupplier({ ...supplier, id: e.target.value })}
            />
          </div>

          <div className='col-12'>
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="name"
              placeholder='Enter Name'
              onChange={(e) => setSupplier({ ...supplier, name: e.target.value })}
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
              onChange={(e) => setSupplier({ ...supplier, email: e.target.value })}
            />
          </div>

          <div className='col-12'>
            <label htmlFor="contact_no" className="form-label">Contact No</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="contact_no"
              placeholder='Enter Contact Number'
              onChange={(e) => setSupplier({ ...supplier, contact_no: e.target.value })}
            />
          </div>

          <div className='col-12'>
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="address"
              placeholder='Enter Address'
              onChange={(e) => setSupplier({ ...supplier, address: e.target.value })}
            />
          </div>

          <div className='col-12 text-center'>
            <button type="submit" className="btn btn-primary rounded-0">
              Add Supplier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSuppliers;
