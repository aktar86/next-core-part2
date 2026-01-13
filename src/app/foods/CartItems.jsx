"use client";

import { CartContext } from "@/context/CartContext";
import React, { useContext } from "react";

const CartItems = () => {
  const { cart } = useContext(CartContext);

  console.log(cart);

  return <div className="mt-5">{cart.length} Items Added</div>;
};

export default CartItems;
