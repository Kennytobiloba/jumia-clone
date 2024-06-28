import React from 'react';
import PropTypes from 'prop-types';
import { getProductSingle, getSingleProductStatus } from '../../store/ProductSlice';
import { Link } from 'react-router-dom';


const CategoryDisplay = ({ products }) => {
    console.log("product",products)
  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="2xl-[80%] mx-auto sm:mt-[15%] lg:mt-[8%] mt-[30%]   min-w-[1200px] lg:w-[90%] overflow-auto ">
      {Object.keys(groupedProducts).map((category, idx) => (
        <div key={idx} className="category-group mb-10">
          <div className='bg-red-500 py-2 flex justify-between'>
          <h2 className="lg:text-3xl md:text-xl text-[20px] font-bold mb-4 capitalize  text-white pl-6 ">{category.replace(/-/g, ' ')}</h2>
          
          </div>
          <div className='grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4'>
            {groupedProducts[category].map(product => (
              <div key={product.id} className="product-card border p-4 rounded-lg bg-white shadow-lg">
                <Link to={`/product/${product?.id}`}  className="">
                <img className='img-cover w-full h-48 object-cover mb-4' src={product.images[0]} alt={product.title} />
                <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                <p className="text-gray-700 mb-2">{product.brand}</p>
                <p className="text-orange-500 font-semibold">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

CategoryDisplay.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired,
};

export default CategoryDisplay;
