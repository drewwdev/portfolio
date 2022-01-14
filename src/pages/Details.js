import React from "react";
import { Link, useParams } from "react-router-dom";
import portfolio from "../data/portfolioData";

function Details() {
  const { slug } = useParams();
  const project = portfolio[slug];
  const { title, url, description, src, alt, technologies } = project;
  return (
    <div className="flex justify-center">
      <div>
        <div className="mx-4">
          <a
            className="bg-cyan-600 hover:bg-cyan-800 px-6 py-2 m-2 text-white"
            href={url}
          >
            View website
          </a>
          <p>Technologies used</p>
          <ul>
            {technologies.map((data) => {
              return <li>{data}</li>;
            })}
          </ul>
        </div>
        <div className="mx-4">
          <h2>{title}</h2>
          <h3>Subtitle</h3>
          <p>{description}</p>
          <div className="flex">
            <div>desktop image</div>
            <div>mobile image</div>
          </div>
          <p>more content</p>
          <div>maybe a youtube video walkthrough</div>
          <Link to="/contact">Contact me</Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
