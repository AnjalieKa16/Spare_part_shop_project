import React, { useState } from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar/Navbar';
import ExploreCategory from '../Components/ExploreCategory';

const HomePage = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
      <Navbar/>
      <Header/>
      <ExploreCategory category={category} setCategory={setCategory}/> {/* Fixed here */}
      <div className="container mt-3">
        {/* Add any additional content here */}
      </div>
      <footer className="text-center mt-4">
        <p>© 2025 Prasad Motors. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;