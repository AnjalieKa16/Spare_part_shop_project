import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Category = () => {
  const [category, setCategory] = useState([]); // Fixed typo in state variable
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3000/auth/category') // Ensure the correct endpoint
      .then((result) => {
        if (result.data.status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      axios
        .delete('http://localhost:3000/auth/delete_category/' + id)
        .then((result) => {
          if (result.data.status) {
            setCategory((prev) => prev.filter((cat) => cat.category_id !== id));
          } else {
            alert(result.data.error || 'Failed to delete category.');
          }
        })
        .catch((err) => {
          console.error('Error deleting category:', err);
          alert('Failed to delete category. Please try again later.');
        });
    }
  };

  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3>Categories</h3> {/* Updated heading */}
      </div>
      <Link to='/AdminDashboard/AddCategory' className='btn btn-success'>
        Add Category
      </Link>
      <div className='mt-3'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Category ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
         {/* <tbody>
            {category.map((cat) => ( // Fixed state variable name
              <tr key={cat.category_id}>
                <td>{cat.category_id}</td>
                <td>{cat.category_name}</td>
                <td>
                  <Link
                    to={`/AdminDashboard/EditCategory/${cat.category_id}`} // Updated Link path
                    className='btn btn-primary me-2'
                  >
                    Edit
                  </Link>
                  <button
                    className='btn btn-danger ms-2'
                    onClick={() => handleDelete(cat.category_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>*/}

          <tbody>
  {category.length > 0 ? (
    category.map((cat) => (
      <tr key={cat.category_id}>
        <td>{cat.category_id}</td>
        <td>{cat.category_name}</td>
        <td>
          <Link
            to={`/AdminDashboard/EditCategory/${cat.category_id}`}
            className='btn btn-primary me-2'
          >
            Edit
          </Link>
          <button
            className='btn btn-danger ms-2'
            onClick={() => handleDelete(cat.category_id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="3" className="text-center">
        No categories available.
      </td>
    </tr>
  )}
</tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;