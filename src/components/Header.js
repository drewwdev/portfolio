import React from "react";
import { Link } from "react-router-dom";
import header from "../content/header";

function Header() {
  return (
    <div className="sm:flex justify-between m-4 mx-12 text-cyan-600 text-lg font-bold">
      <Link className="hover:text-cyan-800" to="/">
        Drew Wilson
      </Link>
      <div className="flex space-x-4">
        {header.map((data) => {
          return (
            <h1 className=" hover:text-cyan-800 hover:underline">
              <Link to={data.link}>{data.title}</Link>
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
