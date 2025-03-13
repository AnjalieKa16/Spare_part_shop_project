import React, { useContext } from 'react'
import './SparePartItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const SparePartItem = ({id,name,price,description,image}) => {
     
    //const [itemCount,setItemCount]= useState(0)
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='Spare-part-item'>
        <div className='Spare-part-image-container'>

            <img className='Spare-part-image' src={image} alt='' />    

            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
                : <div className='Spare-part-item-counter'>

                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
                
                </div>

            }
            
        </div>

        <div className='item-information'>
            <p>{name}</p>
            <img src={assets.rating_starts}/>
        </div>

        <p className='spare-part-desc'>{description}</p>
        <p className='spare-part-price'>{price}</p>

    </div>
  )
}

export default SparePartItem