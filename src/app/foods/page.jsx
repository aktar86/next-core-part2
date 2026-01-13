import FoodCard from "@/components/FoodCard/FoodCard";
import Title from "@/components/Title/Title";
import React from "react";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch/InputSearch";

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

      <div className="my-10 bg-white inline-flex text-black  rounded overflow-hidden outline-0">
        <InputSearch />
      </div>

      <div className=" flex flex-col-reverse md:flex-row gap-4 px-4 py-10">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>

        <div className="w-80 border rounded-2xl p-5 bg-gray-100 text-black">
          <h1 className="text-2xl font-bold">Cart Items</h1>
          <hr />

          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default Foods;
