import Link from "next/link";
import React from "react";

// ১. Data Fetching Function (eta default export hobe na)
const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const data = await res.json();
  return data.details;
};

// ২. Main Page Component (eta oboshshoi export default hote hobe)
const FoodCardDetails = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return <p className="text-center py-10">Food not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:py-10">
      {/* Back Button */}
      <Link
        href="/foods"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-6 transition-all"
      >
        Back to Menu
      </Link>

      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
        {/* 1. Full Width Image Section */}
        <div className="relative w-full h-[300px] md:h-[450px]">
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-2xl shadow-lg">
            <span className="text-2xl font-black text-orange-500">
              ${food.price}
            </span>
          </div>
        </div>

        {/* 2. Content Section (Downside) */}
        <div className="p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              {food.category}
            </span>
            <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              {food.area} Origin
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            {food.title}
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-10 border-l-4 border-orange-500 pl-6 italic">
            "Experience the finest flavors of {food.area}. This{" "}
            {food.category.toLowerCase()} dish is crafted with passion and
            authentic spices to ensure a memorable meal."
          </p>

          {/* 3. Both Buttons (Downside) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-black text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-95">
              Add to Cart
            </button>

            {food.video && (
              <a
                href={food.video}
                target="_blank"
                className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-95"
              >
                Watch Recipe
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Error-ti dukanor jonno nicher line-ti check korun
export default FoodCardDetails;
