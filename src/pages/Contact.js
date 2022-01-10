import React from "react";
import contact from "../content/contact";

function Contact() {
  return (
    <div className="flex flex-col items-center my-20">
      <p className="font-bold text-4xl">Contact me</p>
      <ul className="flex-col">
        {contact.map((data) => {
          return (
            <li className="flex my-8">
              <img className="w-6 mr-4" alt="" src={data.src} />
              <a className="underline hover:text-cyan-600" href={data.href}>
                {data.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Contact;
