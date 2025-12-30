import React from "react";
import Logo from "../Logo/Logo";
import Navlink from "../NavLink/Navlink";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-1 px-2 bg-blue-800">
      {/* logo */}
      <div>
        <Logo></Logo>
      </div>
      {/* navbar */}
      <div className="flex justify-between items-center gap-5">
        <div className="space-x-4">
          <Navlink href="/foods"> Foods</Navlink>
          <Navlink href="/reviews"> Reviews</Navlink>
          <Navlink href="/contact"> Contact </Navlink>
        </div>
        <button className="btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Header;
