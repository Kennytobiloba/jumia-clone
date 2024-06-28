import React from 'react'
import Categories from '../Categories/Categories'
import Swipers from '../Swiper/Swipers'
import Side from '../Side/Side'
import ProductPage from '../../Pages/ProductPage/ProductPage'

const Home = () => {
  return (
  
    <div className=' overflow-hidden  flex flex-col '>
      <div className='2xl:w-[80%] lg:w-[98%] md:w-[98%] w-[98%]  gap-2   mx-auto grid grid-cols-1 md:grid-cols-8  lg:grid-cols-5 mt-20 pt-8     '>
       <div className='w-full h-full md:block hidden md:col-span-2 lg:col-span-1  '>
     
        <Categories/>
        </div>

        <div className=' 2xl:col-span-3 md:col-span-6  lg:col-span-4 -z-50 md:h-full h-[60vh] '>
         <Swipers/>
        </div> 

        <div className='  2xl:block hidden h-full bg-red-500'>
         <Side/>

        </div>
         

        </div>
       <div className=' 2xl:w-full lg:w-[98%] md:w-[98%] mx-auto w-[98%]'>
       <ProductPage/> 
       </div>
          
    </div>
    
    
  )
}

export default Home