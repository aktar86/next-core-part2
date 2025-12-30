import Link from "next/link";
import React from "react";

const NotFound404 = () => {
  return (
    <div className="w-full min-h-[calc(100vh-121px)] flex flex-col justify-center items-center">
      <h1 className="text-5xl text-red-500 font-bold">404</h1>
      <p>Page Not Found</p>
      <Link href="/" className="btn-primary mt-5">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound404;
