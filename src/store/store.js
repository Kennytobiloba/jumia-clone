import {configureStore} from '@reduxjs/toolkit'
import CategoryReducer from './CategorySlice'
import ProductReducer from './ProductSlice'
 const store = configureStore ({
    reducer:{
     category:CategoryReducer,
     product:ProductReducer
    }
 })
 export default store