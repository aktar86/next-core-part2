"use client";
import React from "react";
import Title from "../Title/Title";

const Banner = () => {
  const handleBtn = () => {
    alert("clicked");
  };
  return (
    <div className="w-full  py-20 bg-blue-400 text-center">
      <Title>This is Home Components</Title>

      <button onClick={handleBtn} className="btn-primary  mt-5">
        Show More
      </button>
    </div>
  );
};

export default Banner;
