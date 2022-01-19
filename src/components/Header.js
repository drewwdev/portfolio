import React from "react";
import { Link } from "react-router-dom";
import header from "../data/headerData";

function Header() {
  return (
    <div className="justify-between m-4 mx-12 text-lg font-bold sm:flex text-cyan-600">
      <Link className="hover:text-cyan-800" to="/">
        Drew Wilson
      </Link>
      <div className="flex space-x-4">
        {header.map((data) => {
          return (
            <h1
              key={data.title}
              className=" hover:text-cyan-800 hover:underline"
            >
              <Link to={data.link}>{data.title}</Link>
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
