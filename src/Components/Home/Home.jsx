import React from 'react'
import Categories from '../Categories/Categories'
import Swipers from '../Swiper/Swipers'
import Side from '../Side/Side'
import ProductPage from '../../Pages/ProductPage/ProductPage'

const Home = () => {
  return (
  
    <div className=' home mt-20 overflow-x-auto'>
      <div className='2xl:w-[80%]  mx-auto grid grid-cols-5  min-w-[1200px] lg:w-[90%] overflow-x-auto '>
        <div className='px-6 py-6 w-full'>
     
        <Categories/>
        </div>

        <div className='mt-8 2xl:col-span-3 col-span-4  '>
         <Swipers/>
        </div> 

        <div className=' mt-8 2xl:block hidden'>
         <Side/>

        </div>
         

        </div>
       <div className='2xl:w-[100%]  mx-auto  min-w-[1200px] lg:w-[90%]'>
       <ProductPage/> 
       </div>
          
    </div>
    
    
  )
}

export default Home