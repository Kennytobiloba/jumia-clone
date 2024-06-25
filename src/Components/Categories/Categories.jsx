import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { fetchAsyncCategories, getAllCategories } from '../../store/CategorySlice';
import { Link } from 'react-router-dom';


const Categories = () => {
    const dispatch = useDispatch()
    const Category = useSelector(getAllCategories)
  
     useEffect(() => {
      dispatch(fetchAsyncCategories())
     },[dispatch])
     
  
  return (
    <div className=' bg-white p-6 rounded-lg   shadow-2xl'>
    {
        Category.slice(0,12).map((category, index) => (
            <ul key={index}>
               <Link to={`category/${category.slug}`} ><li className='my-4 mx-auto'> {category.name}</li></Link>

            </ul>
        ))
    }
        
    </div>
  )
}

export default Categories