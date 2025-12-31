import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Image Skeleton (Matching your image height) */}
      <div className="w-full h-64 bg-gray-200 animate-pulse" />

      <div className="p-5 flex-1 flex flex-col gap-4">
        {/* Title and Price Row */}
        <div className="flex justify-between items-center gap-4">
          <div className="h-6 bg-gray-200 rounded-md w-2/3 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded-md w-12 animate-pulse" />
        </div>

        {/* Category/Description Skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-100 rounded-md w-1/2 animate-pulse" />
        </div>

        {/* Buttons Row (Matching your Add to Cart & Details) */}
        <div className="flex gap-3 mt-auto pt-2">
          <div className="h-10 bg-gray-200 rounded-xl flex-[2] animate-pulse" />
          <div className="h-10 bg-gray-200 rounded-xl flex-1 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
