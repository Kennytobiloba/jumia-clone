import {configureStore} from '@reduxjs/toolkit'
import CategoryReducer from './CategorySlice'
import ProductReducer from './ProductSlice'
import cartSliceReducer from './cartSlice'
 const store = configureStore ({
    reducer:{
     category:CategoryReducer,
     product:ProductReducer,
     cart:cartSliceReducer,
    }
 })
 export default store