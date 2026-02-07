"use client";
import React from "react";

const FeedbackBtn = ({ feedback }) => {
  console.log(feedback);
  const id = feedback._id;
  console.log(id);
  //   update
  const handleUpdate = (id) => {
    alert(id);
  };

  const handleDelete = (id) => {
    alert(id);
  };
  return (
    <div className="flex justify-between items-center mt-5">
      <button
        onClick={() => handleUpdate(id)}
        className="bg-blue-500 px-5 py-1 rounded-2xl"
      >
        update
      </button>
      <button
        onClick={() => handleDelete(id)}
        className="bg-red-500 px-5 py-1 rounded-2xl"
      >
        Delete
      </button>
    </div>
  );
};

export default FeedbackBtn;
