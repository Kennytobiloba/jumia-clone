import  { useState } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';

import { useDispatch, useSelector } from 'react-redux';



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className=' w-full fixed bg-white top-0 h-24 left-0 right-0    flex items-center shadow-lg '>
      {/*   */}
      <div className='md:min-w-[700px]  pl-8 lg:pl-0 mx-auto 2xl:w-[80%] lg:w-[90%] min-w-[900px] flex justify-between items-center gap-6'>
        <div className='lg:max-w-[170px] max-w-[120px]'>
          <img src={assets.Logo} alt="" className='w-full h-full' />
        </div>
        <div className='block text-3xl text-orange-500 md:hidden' onClick={toggleMenu}>
          <i className="fa-solid fa-bars-staggered"></i>
        </div>
        {/* search section */}
        <div className='flex flex-1 gap-8 items-center justify-center'>
          <div className='flex gap-2 w-[60%] items-center justify-center'>
            <div className='flex w-full items-center rounded-md border-2 border-black overflow-hidden bg-white px-6 lg:h-12 h-10'>
              <button className='mr-2'><i className="fa-solid fa-magnifying-glass"></i></button>
              <input type="text" placeholder='Search Products, brand, Category'
               className='lg:text-[18px] text-[14px] w-[100%] py-2 px-2 border-none focus:outline-none'
                onChange={(e) => handleSearchTerm(e)} />
            </div>
            <Link to={`search/${searchTerm}`}>
            <button className='bg-orange-400 cursor-pointer px-6 text-center inline-flex
             py-2 max-h-[60px] text-white font-bold text-[18px] capitalize rounded-md'>Search</button>
             </Link>
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
      <div className='absolute top-24 md:hidden w-[50%] ml-6 '>
       {menuOpen && (
        <Categories/>
        )}
       </div>
    </div>
  );
}

export default Navbar;
