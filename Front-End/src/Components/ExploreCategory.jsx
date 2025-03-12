import React from 'react';
import './ExploreCategory.css';
import { category_list } from '../assets/assets';

const ExploreCategory = () => {
  console.log('Category List:', category_list); // Debugging: Log the category list

  return (
    <div className='exploreCategory' id='exploreCategory'>
      <h1>Explore Categories</h1>
      <div className='explore_categoryList'>
        {category_list.map((item, index) => {
          console.log('Category Item:', item); // Debugging: Log each category item
          return (
            <div key={index} className='category'>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreCategory;