import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate =useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3000/auth/employee')  // Ensure the correct endpoint  
      .then(result => {
        if (result.data.status) {
          setEmployees(result.data.Result);
        } else {
          alert(result.data.error);
        }
      }).catch(err => console.log(err));
  }, []);

  const handleDelete=(id)=>{
    axios.delete('http://localhost:3000/auth/delete_employee/'+id)
    .then(result => {
      if (result.data.status) {
        //navigate('/AdminDashboard/employee')
        window.location.reload() // to avoid reload manually
      }else{
        alert(result.data.Error)
      }

  })
}

  return (
    <div className='px-5 mt-3'> {/* Fix class name typo */}
      <div className='d-flex justify-content-center'>
        <h3>Employees</h3>
      </div>
      <Link to='/AdminDashboard/AddEmployee' className='btn btn-success'>
        Add Employee
      </Link>
      <div className='mt-3'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Username</th>
              <th>Contact</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
                <td>{employee.username}</td>
                <td>{employee.contact_no}</td>
                <td><img src={`http://localhost:3000/images/${employee.image}`} alt='Employee' style={{ width: '50px', height: '50px' }} /></td>
                <td>
                  <Link to={`/AdminDashboard/EditEmployee/${employee.id}`} 
                   className='btn btn-primary me-2'>Edit</Link> {/* Fix the Link path */}

                  <button className='btn btn-danger ms-2' 
                  onClick={() => handleDelete(employee.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;