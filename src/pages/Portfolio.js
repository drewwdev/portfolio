import React from "react";
import portfolio from "../data/portfolioData";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <p className="font-bold text-center mt-20 text-4xl">
        Front-End Development Portfolio
      </p>
      <div className="flex justify-center">
        <ul className="flex-col">
          {Object.entries(portfolio).map(
            ([slug, { title, url, description, alt, mobilesrc }]) => {
              return (
                <li key={slug} className="sm:flex my-8">
                  <div className="w-96 my-8">
                    <a href={url} className="font-bold underline">
                      {title}
                    </a>
                    {description}
                  </div>
                  <Link to={`/portfolio/${slug}`}>
                    <img className="w-96" alt={alt} src={mobilesrc} />
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
