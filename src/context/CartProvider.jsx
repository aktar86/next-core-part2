"use client";
import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [item, ...prev]);
  };

  const cartInfo = { cart, addToCart };

  return (
    <>
      <CartContext value={cartInfo}>{children}</CartContext>
    </>
  );
};

export default CartProvider;
