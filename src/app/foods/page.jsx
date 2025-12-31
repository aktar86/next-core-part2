import FoodCard from "@/components/FoodCard/FoodCard";
import Title from "@/components/Title/Title";
import React from "react";

const Foods = async () => {
  const data = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const foodData = await data.json();

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const foods = foodData.foods;
  console.log(foods);

  return (
    <div>
      <Title>This is Foods page</Title>
      <p>Total Foods Data: {foods.length}</p>

      <div className="container mx-auto px-4 py-10">
        {/* Grid-cols setup: 1 (mobile), 2 (tablet), 3 (laptop), 4 (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foods;
