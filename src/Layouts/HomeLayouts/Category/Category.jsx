import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { fetchAsyncCategories, getAllCategories } from '../../../store/CategorySlice';


const Category = () => {
  const dispatch = useDispatch()
  const Category = useSelector(getAllCategories)

   useEffect(() => {
    dispatch(fetchAsyncCategories())
   },[dispatch])
   console.log(Category)

  return (
    <div className='bg-red w-56'>
      {
        Category.map((item, id) => {
          <div key={id}>
            <li>{item.name}</li>


          </div>
        })
      }

    </div>
  )
}

export default Category