import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="sm:flex justify-between m-4 mx-12 text-cyan-600 text-lg font-bold">
      <Link className="hover:text-cyan-800" to="/">
        Drew Wilson
      </Link>
      <ul className="flex space-x-4">
        <li className="hover:text-cyan-800 hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-cyan-800 hover:underline">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="hover:text-cyan-800 hover:underline">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:text-cyan-800 hover:underline">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
