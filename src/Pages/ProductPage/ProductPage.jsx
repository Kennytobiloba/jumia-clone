import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from '../../store/ProductSlice';
import { getAllCategories } from '../../store/CategorySlice';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';
import { STATUS } from '../../Utils/status';
import Loader from '../../Components/Loader/Loader';

const ProductPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncProducts(50));
  }, [dispatch]);

  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);
  console.log("productsssssss", products)

  if (products.length === 0 || categories.length === 0) {
    return <div>Loading...</div>; // or handle loading state appropriately
  }

  const catProductsOne = products.filter(product => product.category === categories[0].slug);
  const catProductsTwo = products.filter(product => product.category === categories[1].slug);
  const catProductsThree = products.filter(product => product.category === categories[2].slug);
  const catProductsFour = products.filter(product => product.category === categories[3].slug);

  return (
    <div className='w-full'>
       <ProductDisplay products={catProductsFour} categorySlug={categories[3].slug} />
      <ProductDisplay products={catProductsOne} categorySlug={categories[0].slug} />
      <ProductDisplay products={catProductsTwo} categorySlug={categories[1].slug} />
      <ProductDisplay products={catProductsThree} categorySlug={categories[2].slug} />
      <ProductDisplay products={catProductsFour} categorySlug={categories[3].slug} />
    </div>
  );
};

export default ProductPage;
