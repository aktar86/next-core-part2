import Link from "next/link";
import React from "react";
import AddToCartBtn from "../Buttons/AddToCartBtn";

const FoodCard = ({ food }) => {
  const { id, catId, title, category, foodImg, price } = food;

  return (
    <div className="group bg-white text-black overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Image Section with Hover Zoom */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          src={foodImg}
          alt={title}
        />
        {/* Category Badge */}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
          {category}
        </span>
      </div>

      <div className="p-5">
        {/* Title & Price */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-gray-800 line-clamp-1">
            {title}
          </h3>
          <span className="text-xl font-bold text-orange-600">${price}</span>
        </div>

        {/* Description or Rating (Optional Placeholder) */}
        <p className="text-gray-500 text-sm mb-5">
          Deliciously prepared fresh{" "}
          <span className="text-orange-600">{category}</span> with premium
          ingredients.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <AddToCartBtn food={food} />
          <button
            href={`/foods/${id}`}
            className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-2.5 rounded-xl transition-colors duration-200"
          >
            <Link href={`/foods/${id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

// line-clamp-1
