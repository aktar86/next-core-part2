"use client";
import { CartContext } from "@/context/CartContext";
import React, { use, useState } from "react";

const AddToCartBtn = ({ food }) => {
  const [inCart, setInCart] = useState(false);

  const { addToCart } = use(CartContext);

  const handleAddToCart = () => {
    addToCart(food);
    setInCart(true);
  };
  return (
    <button
      onClick={handleAddToCart}
      disabled={inCart}
      className={`flex-2 bg-orange-500  text-white font-semibold py-2.5 rounded-xl transition-colors duration-200 shadow-md shadow-orange-100 ${
        inCart ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600 "
      }`}
    >
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default AddToCartBtn;
