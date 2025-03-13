import logosparep from './logo1.jpg'
import backgroundImage1 from './backgroundImage1.jpg'
import searchIcon from './search_Image.jpg'
import basket from './basket.jpg'
import brake from './brake_set.jpg'
import filter from './filter.png'
import Electrical_Electronics from './Electrical&Electronics.jpg'
import LubricantsFluids from './EngineOil.jpg'
import Lightnings from './Lightnings.jpg'


/*import basket from './basket.jpg'
import background1 from './backgrond1.jpg'

import Honda_Genuine_Spark_Plug_12290_RBJ_003 from 'Honda_Genuine_Spark_Plug_12290_RBJ_003.jpg'
import mitsubizi from 'mitsubizi'
import Toyota_Genuine_Motor_Oil_10W_30 from 'Toyota_Genuine_Motor_Oil_10W_30'
*/

export const assets = {
    logosparep,
    backgroundImage1,
    searchIcon,
    basket
}


export const category_list=[
    
    {
        category_name: 'Brakes',
        category_image: brake
    },
    
    {
        category_name: 'Filters',
        category_image: filter
    },

    {
        category_name: 'Electrical & Electronics',
        category_image: Electrical_Electronics
    },
    
    {
        category_name: 'Lubricants & Fluids',
        category_image: LubricantsFluids
    },
    
    {
        category_name: 'Lightnings',
        category_image: Lightnings   
    }
]