import React from "react";
import { Link, useParams } from "react-router-dom";
import portfolio from "../data/portfolioData";

function Details() {
  const { slug } = useParams();
  const project = portfolio[slug];
  const { title, url, description, mobilesrc, desktopsrc, alt, technologies } =
    project;
  return (
    <div className="flex justify-center w-auto mx-12 mt-20 sm:mx-44">
      <div className="w-96">
        <a
          className="px-6 py-2 m-2 text-white bg-cyan-600 hover:bg-cyan-800 whitespace-nowrap"
          href={url}
        >
          View website
        </a>
        <p className="mt-4">Technologies used</p>
        <ul className="mt-4 list-disc">
          {technologies.map((data) => {
            return <li>{data}</li>;
          })}
        </ul>
      </div>
      <div className="mx-4 w-96">
        <h2 className="text-2xl font-bold">{title}</h2>
        <h3>{description}</h3>
        <div className="md:flex-col">
          <img w="" h="" className="m-4" src={desktopsrc} alt={alt} />
          <img w="" h="" className="m-4" src={mobilesrc} alt={alt} />
        </div>
        <div className="flex-col my-4 text-center">
          <Link
            className="px-6 py-2 m-2 text-white hover:text-cyan-600 bg-cyan-600 hover:bg-cyan-800 whitespace-nowrap"
            to="/contact"
          >
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
