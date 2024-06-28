import React from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='w-full bg-white fixed top-0 h-24 left-0 right-0 overflow-x-auto custom-scrollbar shadow-lg z-50 flex  items-center'>
      <div className='md:min-w-[700px] pl-8 lg:pl-0 mx-auto 2xl:w-[80%] lg:w-[90%] min-w-[900px] flex justify-between items-center gap-6'>
        <div className='lg:max-w-[170px] max-w-[120px] '>
          <img src={assets.Logo} alt="" className='w-full h-full' />
        </div>
        {/* search section */}
        <div className='flex flex-1 gap-8 items-center justify-center'>
          <div className='flex gap-2 w-[60%] items-center justify-center'>
            <div className='flex w-full items-center rounded-md border-2 border-black overflow-hidden bg-white px-6 lg:h-12 h-10'>
              <button className='mr-2'><i className="fa-solid fa-magnifying-glass"></i></button>
              <input type="text" placeholder='Search Products, brand, Category' className='lg:text-[18px] text-[14px] w-[100%] py-2 px-2 border-none focus:outline-none' />
            </div>
            <button className='bg-orange-400 cursor-pointer px-6 text-center inline-flex py-2 max-h-[60px] text-white font-bold text-[18px] capitalize rounded-md'>Search</button>
          </div>
          {/* search section end */}
          <div className='flex gap-6'>
            <div className='lg:text-[22px] text-[18px]'>
              <div className='flex gap-2 cursor-pointer items-center'>
                <i className="fa-solid fa-user hover:text-orange-400"></i>
                <h3 className='hover:text-orange-400'>Account</h3>
              </div>
            </div>
            <div className='lg:text-[22px] text-[18px]'>
              <div className=''>
                <Link to="/cart" className='flex gap-2 cursor-pointer items-center'>
                <i className="fa-regular fa-circle-question hover:text-orange-400"></i>
                <h3 className='hover:text-orange-400'>Cart</h3>
                </Link>
              </div>
            </div>
            <div className='lg:text-[22px] text-[18px]'>
              <div className='flex gap-2 cursor-pointer items-center'>
               
                <i className="fa-solid fa-cart-shopping hover:text-orange-400"></i>
                <h3 className='hover:text-orange-400'>Help</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
