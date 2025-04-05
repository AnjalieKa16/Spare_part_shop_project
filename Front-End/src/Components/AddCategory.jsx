import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const [category, setCategory] = useState({
    category_id: '',
    category_name: ''
  });

  

  useEffect(() => {
    axios.get('http://localhost:3000/auth') // Ensure the correct endpoint
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

    // Basic validation
    if (!category.category_id || !category.category_name) {
        alert('Both Category ID and Name are required.');
        return;
      }

    const formData = new FormData();
    formData.append('category_id', category.category_id);
    formData.append('category_name', category.category_name);
 

    axios.post('http://localhost:3000/auth/AddCategory', formData, { // Ensure the correct endpoint
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(result => {
        console.log('Response:', result.data); // Debugging
        if(result.data.status){
            navigate('/AdminDashboard/category')
        }else{
            alert(result.data.error || 'An error occurred while adding the category.')
        }
    })
      .catch(err => {
        console.error('Error:', err);
        alert('Failed to add category. Please try again later.');
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center h-80'>
      <div className='p-3 rounded w-50 border'>
        <h2 className='text-center'>Add Category</h2>

        <form className='row g-3' onSubmit={handleSubmit}>
        
          <div className='col-12'>
            <label htmlFor="categoryID" className="form-label">Category</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="categoryID"
              placeholder='Enter Category ID'
              value={category.category_id}
              onChange={(e) => setCategory({ ...category, category_id: e.target.value })}
            />
          </div>

          <div className='col-12'>
            <label htmlFor="category_name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="category_name"
              placeholder='Enter Category Name'
              value={category.category_name}
              onChange={(e) => setCategory({ ...category, category_name: e.target.value })}
            />
          </div>

          

          <div className='col-12 text-center'>
            <button type="submit" className="btn btn-primary rounded-0">
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCategory;