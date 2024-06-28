import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);
    } else {
        return [];
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
}

const initialState = {
    carts: fetchFromLocalStorage(),
    itemsCount: 0,
    totalAmount: 0,
    isCartMessageOn: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemInCart = state.carts.find(item => item.id === action.payload.id);

            if (isItemInCart) {
                state.carts = state.carts.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity;
                        item.totalPrice = item.quantity * item.price;
                    }
                    return item;
                });
            } else {
                state.carts.push({ ...action.payload, totalPrice: action.payload.quantity * action.payload.price });
            }
            storeInLocalStorage(state.carts);
            cartSlice.caseReducers.getCartTotal(state);
        },
        setCartMessageOn: (state) => {
            state.isCartMessageOn = true;
        },
        setCartMessageOff: (state) => {
            state.isCartMessageOn = false;
        },
        removeFromCart: (state, action) => {
            state.carts = state.carts.filter(item => item.id !== action.payload);
            storeInLocalStorage(state.carts);
            cartSlice.caseReducers.getCartTotal(state);
        },
        decreaseCartQuantity: (state, action) => {
            state.carts = state.carts.map(item => {
                if (item.id === action.payload) {
                    item.quantity -= 1;
                    item.totalPrice = item.quantity * item.price;
                }
                return item.quantity > 0 ? item : null;
            }).filter(item => item !== null);
            storeInLocalStorage(state.carts);
            cartSlice.caseReducers.getCartTotal(state);
        },
        increaseCartQuantity: (state, action) => {
            state.carts = state.carts.map(item => {
                if (item.id === action.payload) {
                    item.quantity += 1;
                    item.totalPrice = item.quantity * item.price;
                }
                return item;
            });
            storeInLocalStorage(state.carts);
            cartSlice.caseReducers.getCartTotal(state);
        },
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => cartTotal + cartItem.totalPrice, 0);
            state.itemsCount = state.carts.reduce((count, cartItem) => count + cartItem.quantity, 0);
        },
        clearCart: (state) => {
            state.carts = [];
            storeInLocalStorage(state.carts);
            cartSlice.caseReducers.getCartTotal(state);
        },
    }
});

export const {
    addToCart,
    setCartMessageOff,
    setCartMessageOn,
    clearCart,
    removeFromCart,
    decreaseCartQuantity,
    increaseCartQuantity,
    getCartTotal,
} = cartSlice.actions;

export const getAllCarts = (state) => state.cart.carts;
export const getCartItemsCount = (state) => state.cart.itemsCount;
export const getCartTotalAmount = (state) => state.cart.totalAmount;
export const getCartMessageStatus = (state) => state.cart.isCartMessageOn;

export default cartSlice.reducer;
