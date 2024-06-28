import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductSingle, fetchAsyncProductSingle } from "../../store/ProductSlice";
import { addToCart, getCartMessageStatus, setCartMessageOff, setCartMessageOn } from "../../store/cartSlice";
import CartMessage from "../../Components/CartMessage/CartMessage";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const singleProduct = useSelector(getProductSingle);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const cartMessageStatus = useSelector(getCartMessageStatus);

  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));

    if(cartMessageStatus){
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
  }, [cartMessageStatus]);

  useEffect(() => {
    console.log("singleProduct", singleProduct);
  }, [singleProduct]);

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if(tempQty > singleProduct?.stock) tempQty = singleProduct?.stock;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if(tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  const addToCartHandler = (singleProduct) => {
    let discountedPrice = singleProduct?.price - (singleProduct?.price * (singleProduct?.discountPercentage / 100));
    let totalPrice = quantity * discountedPrice;

    dispatch(addToCart({ ...singleProduct, quantity: quantity, totalPrice, discountedPrice }));
    dispatch(setCartMessageOn(true));
  };

  if (!singleProduct) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4 mt-8">
      <h1 className="text-3xl font-bold text-center mb-8">Single Product</h1>
      <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          {singleProduct.images && singleProduct.images.length > 0 ? (
            <img
              src={singleProduct.images[0]}
              alt={singleProduct.name}
              className="w-full h-auto rounded-lg"
            />
          ) : (
            <p className="text-center text-gray-600">No Image Available</p>
          )}
        </div>
        <div className="md:col-span-2 flex flex-col">
          <h2 className="text-2xl font-semibold mb-2">{singleProduct.name}</h2>
          <p className="text-xl font-bold text-red-600 mb-4">
            Price: ${singleProduct.price}
          </p>
          <div className="text-lg mb-4">
            <p><span className="font-semibold">Brand:</span> {singleProduct.brand}</p>
            <p><span className="font-semibold">Name:</span> {singleProduct.title}</p>
            <p><span className="font-semibold">Category:</span> {singleProduct.category}</p>
            <p><span className="font-semibold">Availability:</span> {singleProduct.availabilityStatus}</p>
            <p><span className="font-semibold">Rating:</span> {singleProduct.rating}</p>
            <p><span className="font-semibold">Return Policy:</span> {singleProduct.returnPolicy}</p>
            <p><span className="font-semibold">Shipping Information:</span> {singleProduct.shippingInformation}</p>
            <p><span className="font-semibold">Warranty Information:</span> {singleProduct.warrantyInformation}</p>
          </div>
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-700 mb-4">{singleProduct.description}</p>
          <div className="mt-4 flex items-center">
            <button
              onClick={decreaseQty}
              className="bg-gray-300 text-gray-800 px-3 py-2 rounded-l-md hover:bg-gray-400 transition duration-300"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border-t border-b border-gray-300 text-center w-16"
              min="1"
            />
            <button
              onClick={increaseQty}
              className="bg-gray-300 text-gray-800 px-3 py-2 rounded-r-md hover:bg-gray-400 transition duration-300"
            >
              +
            </button>
          </div>
          <div className="mt-4 block space-x-4">
           
            <button
              onClick={() => addToCartHandler(singleProduct)}
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300 flex-1"
            >
                Add to Cart
            </button>
          </div>
        </div>
      </div>
      {cartMessageStatus && <CartMessage />}
    </div>
  );
};

export default SingleProduct;
