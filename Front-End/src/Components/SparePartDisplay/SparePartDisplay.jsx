import React, { useContext } from 'react'
import './SparePartDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import SparePartItem from '../SparePartItem/SparePartItem'


const SparePartDisplay = ({category}) => {

    const {spare_parts_list} = useContext(StoreContext)

  return (
    <div className='Spare_Part_Display' id='Spare_Part_Display'>
    <h2>Featured Products</h2>
        <div className='spare-parts-list-display'>
            {spare_parts_list.map((item,index)=>{

              if(category==='All' || category===item.category ){

                return <SparePartItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image }/>

              }
                
            })
            }
        </div>
    </div>
  )
}

export default SparePartDisplay