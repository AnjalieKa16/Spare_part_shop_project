import React, { useState } from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar/Navbar';
import ExploreCategory from '../Components/ExploreCategory';
import SparePartDisplay from '../Components/SparePartDisplay/SparePartDisplay';
import Footer from '../Components/Footer/Footer';
import Search from '../Components/Search';

const HomePage = () => {

  const [category,setCategory] = useState("All");

  const [showSearch, setShowSearch] = useState(false); // << control Search visibility

  const handleSearchClick = () => {
    setShowSearch(prev => !prev); // Toggle Search component
  };

  return (
    <div>
      <Navbar onSearchClick={handleSearchClick}/>
      <Header/>
      <ExploreCategory category={category} setCategory={setCategory}/> {/* Fixed here */}
      {showSearch && <Search />} {/* Conditional rendering of Search component */}
      <SparePartDisplay category ={category} />
      <Footer/>

   
    </div>
  );
};

export default HomePage;