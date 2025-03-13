import React, { useState } from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar/Navbar';
import ExploreCategory from '../Components/ExploreCategory';
import SparePartDisplay from '../Components/SparePartDisplay/SparePartDisplay';
import Footer from '../Components/Footer/Footer';

const HomePage = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
      <Navbar/>
      <Header/>
      <ExploreCategory category={category} setCategory={setCategory}/> {/* Fixed here */}
      <SparePartDisplay category ={category} />
      <Footer/>

      {/*<div className="container mt-3">
      </div>
      <footer className="text-center mt-4">
        <p>© 2025 Prasad Motors. All rights reserved.</p>
      </footer>*/}
    </div>
  );
};

export default HomePage;