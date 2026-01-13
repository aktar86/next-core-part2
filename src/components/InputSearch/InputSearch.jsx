"use client";
import React from "react";

const InputSearch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value.trim();
    console.log(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          placeholder="Enter Food Name"
          className="p-2 outline-0 border-0"
        />
        <button className="bg-orange-500 p-2 text-white">Search</button>
      </form>
    </div>
  );
};

export default InputSearch;
