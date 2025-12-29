import React from "react";

const Title = ({ children }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-600">{children}</h1>
    </div>
  );
};

export default Title;
