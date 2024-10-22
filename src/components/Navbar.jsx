import React from "react";
import logo from "../assets/Png.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center bg-gray-700 px-6 py-4 z-40">
      <div>
        <Link to="/">
          <img className="h-16 w-auto" src={logo} alt="Logo" />
        </Link>
      </div>
      {/* Left Side - Navigation Links */}
      <div className="flex gap-6 items-center">
        <Link to="/about" className="text-white hover:text-gray-300">
          About
        </Link>
        <Link to="/designs" className="text-white hover:text-gray-300">
          Designs
        </Link>
        <Link to="/projects" className="text-white hover:text-gray-300">
          Projects
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
