import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;  // Initialize cart with 0 for each product
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart);

    const addToCart = (itemId) => {
        setCartItems(prev => {
            const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
            console.log(updatedCart); // Log updated cart state
            return updatedCart;
        });
    }

    const removeFromCart = (itemId) => {
        setCartItems(prev => {
            const updatedCart = { ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) };
            console.log(updatedCart); // Log updated cart state
            return updatedCart;
        });
    }

    const contextValue = { all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
