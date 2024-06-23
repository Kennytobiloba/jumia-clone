import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // Make sure to import from react-router-dom
import { fetchAsyncProductsOfCategory, getAllProductsByCategory, getCategoryProductsStatus } from '../../store/CategorySlice';
import { STATUS } from '../../Utils/status';

const SingleCategory = () => {
  const dispatch = useDispatch();
  const { category } = useParams();  // Correctly extracts the category parameter from the URL
  const productsOfCategory = useSelector(getAllProductsByCategory);
  const categoryProductStatus = useSelector(getCategoryProductsStatus);

  useEffect(() => {
    console.log('Current category:', category);  // Log the current category to check its value
    if (category) {
      dispatch(fetchAsyncProductsOfCategory(category));  // Only dispatch if category is defined
    }
  }, [dispatch, category]);

  useEffect(() => {
    console.log('Products of Category:', productsOfCategory); // Log the Redux state
  }, [productsOfCategory]);

  if (categoryProductStatus === STATUS.LOADING) {
    return <div>Loading...</div>;
  }

  if (categoryProductStatus === STATUS.FAILED) {
    return <div>Failed to load products.</div>;
  }

  return (
    <div>
      <h1>Products in {category}</h1>
      {productsOfCategory.length > 0 ? (
        productsOfCategory.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))
      ) : (
        <div>No products found for this category.</div>
      )}
    </div>
  );
};

export default SingleCategory;
