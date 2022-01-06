import React from "react";
import Email from "../images/email.png";
import LinkedIn from "../images/linkedin.png";
import Github from "../images/github.png";

function Contact() {
  return (
    <div className="flex justify-center my-20">
      <ul className="flex-col">
        <li className="flex my-8">
          <img className="w-6 mr-4" alt="" src={Email} />
          <a
            className="underline hover:text-cyan-600"
            href="mailto: dreww.dev@gmail.com"
          >
            Send me an Email
          </a>
        </li>
        <li className="flex my-8">
          <img className="w-6 mr-4" alt="" src={LinkedIn} />
          <a
            className="underline hover:text-cyan-600"
            href="https://www.linkedin.com/in/drewwdev/"
          >
            Follow me on LinkedIn
          </a>
        </li>
        <li className="flex my-8">
          <img className="w-6 mr-4" alt="" src={Github} />
          <a
            className="underline hover:text-cyan-600"
            href="https://github.com/drewwdev"
          >
            Check out my Github
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
