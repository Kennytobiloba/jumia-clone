import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductDisplay = ({ products, categorySlug }) => {
  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="2xl:w-[80%] w-ful mx-auto mt-8 ">
      {Object.keys(groupedProducts).map((category, idx) => (
        <div key={idx} className="category-group mb-10">
          <div className='bg-red-500  flex justify-between items-center p-2 '>
            <h2 className="lg:text-2xl md:text-xl text-[20px] font-bold mb-4 capitalize text-white pl-6 ">
              {category.replace(/-/g, ' ')}
            </h2>
            <div>
              <Link to={`category/${categorySlug}`}>
                <h2 className='flex items-center justify-center cursor-pointer lg:text-2xl mr-4 md:text-xl text-[20px] font-bold mb-4 capitalize text-white'>
                  See more <span>...</span>
                </h2>
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {groupedProducts[category].map(product => (
              <div key={product.id} className="product-card border p-4 rounded-lg bg-white shadow-lg">
                <Link to={`/product/${product?.id}`}>
                <img className='img-cover w-full h-48 object-cover mb-4' src={product.images[0]} alt={product.title} />
                </Link>
                <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                <p className="text-gray-700 mb-2">{product.brand}</p>
                <p className="text-orange-500 font-semibold">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

ProductDisplay.propTypes = {
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
  categorySlug: PropTypes.string.isRequired,
};

export default ProductDisplay;
