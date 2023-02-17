import React from "react";
import logo from "../assets/moneyapp-logo.png";
const Navbar = () => {
  return (
    <div className="bg-white border-b-[0.7px] border-b-solid border-b-[#DCE2EA] ">
      <div className="max-w-7xl mx-auto ">
        <img className="md:m-5 m-2" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
