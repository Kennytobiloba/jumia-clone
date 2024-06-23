import {configureStore} from '@reduxjs/toolkit'
import CategoryReducer from './CategorySlice'

 const store = configureStore ({
    reducer:{
     category:CategoryReducer
    }
 })
 export default store