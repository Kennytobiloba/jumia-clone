import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCarts, removeFromCart, decreaseCartQuantity, increaseCartQuantity, getCartTotalAmount, getCartItemsCount, getCartTotal, clearCart } from '../../store/cartSlice';

const Cart = () => {
    const cart = useSelector(getAllCarts);
    const totalAmount = useSelector(getCartTotalAmount);
    const itemsCount = useSelector(getCartItemsCount);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart, dispatch]);

    console.log("cart items", cart);
    console.log("total amount", totalAmount);
    console.log("items count", itemsCount);

    return (
        <div className="p-6 mt-10 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">MY CART</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto bg-white border border-gray-200">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-4 border-b border-gray-300">Product Image</th>
                            <th className="py-3 px-4 border-b border-gray-300">Title</th>
                            <th className="py-3 px-4 border-b border-gray-300">Price</th>
                            <th className="py-3 px-4 border-b border-gray-300">Quantity</th>
                            <th className="py-3 px-4 border-b border-gray-300">Total</th>
                            <th className="py-3 px-4 border-b border-gray-300">Increase</th>
                            <th className="py-3 px-4 border-b border-gray-300">Decrease</th>
                            <th className="py-3 px-4 border-b border-gray-300">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, id) => (
                            <tr key={id} className="bg-white border-b border-gray-300">
                                <td className="py-3 px-4 border-r border-gray-300">
                                    <img className="w-16 h-16 object-cover" src={item.images[0]} alt={item.title} />
                                </td>
                                <td className="py-3 px-4 border-r border-gray-300">{item.title}</td>
                                <td className="py-3 px-4 border-r border-gray-300">${item.price.toFixed(2)}</td>
                                <td className="py-3 px-4 border-r border-gray-300">{item.quantity}</td>
                                <td className="py-3 px-4 border-r border-gray-300">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </td>
                                <td className="py-3 px-4 border-r border-gray-300">
                                    <button
                                        onClick={() => dispatch(increaseCartQuantity(item.id))}
                                        className="bg-green-500 hover:bg-green-600 py-2 px-4 text-white rounded"
                                    >
                                        Increase
                                    </button>
                                </td>
                                <td className="py-3 px-4 border-r border-gray-300">
                                    <button
                                        onClick={() => dispatch(decreaseCartQuantity(item.id))}
                                        className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 text-white rounded"
                                    >
                                        Decrease
                                    </button>
                                </td>
                                <td className="py-3 px-4 border-gray-300">
                                    <button
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                        className="bg-red-500 hover:bg-red-600 py-2 px-4 text-white rounded"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-8 text-right">
                <h2 className="text-xl font-bold">Total Items: {itemsCount}</h2>
                <h2 className="text-xl font-bold">Total Amount: ${totalAmount.toFixed(2)}</h2>
                <button
                    onClick={() => dispatch(clearCart())}
                    className="bg-red-500 hover:bg-red-600 py-2 px-4 text-white rounded mt-4"
                >
                    Clear Cart
                </button>
            </div>
        </div>
    );
}

export default Cart;
