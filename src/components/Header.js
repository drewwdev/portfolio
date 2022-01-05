import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between m-4 mx-12 text-cyan-600 text-lg font-bold">
      <Link to="/">Drew Wilson</Link>
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
