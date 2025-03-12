import React from 'react'
import './ExploreCategory.css'
import { category_list } from '../assets/assets'

const ExploreCategory = () => {
  return (
    <div className='exploreCategory' id = 'exploreCategory'>
      <h1>Explore Categories</h1>
      <div className='explore_categoryList'>
        {category_list.map((item,index) => {
            return(
                <div key={index} className='category'>
                  <img src={item.category_image} alt='category' />
                  <h3>{item.category_name}</h3>  
                </div>
            
            )
        }
        )}

      </div>
</div>
  )
}

export default ExploreCategory