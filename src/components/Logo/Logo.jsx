import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <img className="w-30 p-3" src="./logo.png" alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
