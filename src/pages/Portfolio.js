import React from "react";
import portfolio from "../content/portfolio";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <p className="font-bold text-center mt-20 text-4xl">
        Front-End Development Portfolio
      </p>
      <div className="flex justify-center">
        <ul className="flex-col">
          {portfolio.map((data) => {
            return (
              <li className="sm:flex my-8">
                <div className="w-96 my-8">
                  <a href={data.link} className="font-bold underline">
                    {data.title}
                  </a>
                  {data.description}
                </div>
                <Link to={data.slug}>
                  <img className="w-96" alt={data.alt} src={data.src} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
