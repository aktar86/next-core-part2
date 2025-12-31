import FoodCardSkeleton from "@/components/FoodCardSkaleton.jsx/FoodCardSkaleton";
import React from "react";

const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10">
      {/* Grid structure matching your Foods page */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(12)].map((_, i) => (
          <FoodCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default Loading;
