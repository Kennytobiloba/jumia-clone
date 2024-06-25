import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductSingle, fetchAsyncProductSingle } from "../../store/ProductSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const singleProduct = useSelector(getProductSingle);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchAsyncProductSingle(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    console.log("singleProduct", singleProduct);
  }, [singleProduct]);

  return (
    <div>
      <h1>Single Product</h1>
      {singleProduct ? (
        <div>
          <h2>{singleProduct.name}</h2>
          <p>{singleProduct.description}</p>
          <p>Price: {singleProduct.price}</p>
           <img src={singleProduct.images} alt="" />
          {/* Add more product details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;
