import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    category_id: '',
    category_name: ''
  });

  useEffect(() => {
    axios.get('http://localhost:3000/auth/category/' + id)
      .then(result => {
        setCategory(result.data.Result); // Set the employee data directly
      }).catch(err => console.log(err));
  }, [id]); // Add dependency array

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('category_id', category.category_id);
    formData.append('category_name', category.category_name);
   

    axios.put('http://localhost:3000/auth/EditCategory/' + id, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(result => {
        if (result.data.status) {
          navigate('/AdminDashboard/category'); // Navigate to the employee list after successful update
        } else {
          alert(result.data.error);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center h-80'>
      <div className='p-3 rounded w-50 border'>
        <h2 className='text-center'>Edit Category</h2>

        <form className='row g-3' onSubmit={handleSubmit}>
          <div className='col-12'>
            <label htmlFor="categoryID" className="form-label">Category</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="categoryID"
              placeholder='Enter category ID'
              value={category.category_id} // Bind to state
              onChange={(e) => setCategory({ ...category, category_id: e.target.value })}
            />
          </div>

          <div className='col-12'>
            <label htmlFor="category_name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="category_name"
              placeholder='Enter Name'
              value={category.category_name} // Bind to state
              onChange={(e) => setCategory({ ...category, category_name: e.target.value })}
            />
          </div>

          

          <div className='col-12 text-center'>
            <button type="submit" className="btn btn-primary rounded-0">
              Edit Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCategory;