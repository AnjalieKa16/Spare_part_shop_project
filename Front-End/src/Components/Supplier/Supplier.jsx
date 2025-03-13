import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Supplier = () => {
  const [supplier, setSupplier] = useState([]);
  const navigate = useNavigate();  // For navigation to Edit Supplier if needed

  useEffect(() => {
    axios.get('http://localhost:3000/auth/supplier')  // Ensure the correct endpoint  
      .then(result => {
        if (result.data.status) {
          setSupplier(result.data.Result);
        } else {
          alert(result.data.error);
        }
      }).catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/auth/delete_supplier/' + id)
      .then(result => {
        if (result.data.status) {
          window.location.reload();  // to refresh the list after deletion
        } else {
          alert(result.data.error);
        }
      }).catch(err => console.log(err));
  };

  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3>Suppliers</h3>
      </div>
      <Link to='/AdminDashboard/AddSuppliers' className='btn btn-success'>
        Add Supplier
      </Link>
      <div className='mt-3'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Supplier ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {supplier.map((supplier) => (
              <tr key={supplier.id}>
                <td>{supplier.id}</td>
                <td>{supplier.name}</td>
                <td>{supplier.email}</td>
                <td>{supplier.address}</td>
                <td>{supplier.contact_no}</td>
                <td>
                  <Link to={`/AdminDashboard/EditSupplier/${supplier.id}`} 
                    className='btn btn-primary me-2'>
                    Edit
                  </Link>

                  <button className='btn btn-danger ms-2' 
                    onClick={() => handleDelete(supplier.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Supplier;
