import {configureStore} from '@reduxjs/toolkit'
import CategoryReducer from './CategorySlice'
import ProductReducer from './ProductSlice'
import cartSliceReducer from './cartSlice'
import searchSliceReducer from './searchSlice'

 const store = configureStore ({
    reducer:{
     category:CategoryReducer,
     product:ProductReducer,
     cart:cartSliceReducer,
     search:searchSliceReducer,
    }
 })
 export default store