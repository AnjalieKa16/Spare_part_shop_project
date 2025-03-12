import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
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