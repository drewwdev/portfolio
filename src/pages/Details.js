import React from "react";
import { useParams } from "react-router-dom";
import Portfolio from "./Portfolio";

function Details() {
  const { slug } = useParams();
  const project = Portfolio[slug];
  const { title, description } = project;
  return (
    <div className="flex justify-center">
      <div>
        <div className="mx-4">
          <button>View website</button>
          <p>Technologies used</p>
          <ul>
            <li>Technology 1</li>
            <li>Technology 2</li>
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
          <button>Contact me</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
