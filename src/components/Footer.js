import React from "react";
import headshot from "../images/headshot.jpg";

function Footer() {
  return (
    <div className="h-auto mt-auto text-white bg-slate-700">
      <div className="flex justify-center sm:mx-40">
        <img
          w=""
          h=""
          className="w-40 h-40 mx-4 my-8 rounded-full"
          alt="Headshot of Drew Wilson"
          src={headshot}
        />
        <div className="flex-col">
          <p className="flex flex-wrap my-8">
            I am a front-end web developer who enjoys building dynamic web
            applications that are functional and accessible.
          </p>
          <ul className="my-8">
            <li className="my-2">
              <a className="underline" href="https://github.com/drewwdev">
                Github
              </a>
            </li>
            <li className="my-2">
              <a
                className="underline"
                href="https://www.linkedin.com/in/drewwdev/"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
