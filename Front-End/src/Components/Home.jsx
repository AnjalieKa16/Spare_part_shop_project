import React,{useEffect,useState} from 'react';
import axios from 'axios';


const Home = () => {

  const[totalEmployee,setTotalEmployee]=useState(0);

  useEffect(() => {
   employeeCount()
  }, []);

  const employeeCount=()=>{
    axios.get('http://localhost:3000/auth/employee_count')
    .then(result => {
      if (result.data.status) {
        setTotalEmployee(result.data.Result[0].employee_count);
      } else {
        alert(result.data.error);
      }
    }).catch(err => console.log(err));
  }

  return (
    <div className='p-3 d-flex justify-content-around mt-3'>
      <div className='px-3 pt-2 pb-3 border shadow-sm w-25'> {/* Corrected the class name */}
        <div className='text-center pb-1'>
          <h4>Employees</h4>
        </div>
        <hr />
        <div className='text-center'>
          <h5> Total : {totalEmployee}</h5>
        </div>
      </div>
    </div>
  );
}

export default Home;