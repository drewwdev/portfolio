import React from "react";

function Footer() {
  return (
    <div className="mt-auto bg-slate-700 text-white h-auto">
      <div className="flex sm:mx-40 justify-center">
        <img
          className="w-40 h-40 mx-4 my-8 rounded-full"
          alt="Headshot of Drew Wilson"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQE1pJH8HvpsYQ/profile-displayphoto-shrink_800_800/0/1633964417957?e=1646870400&v=beta&t=VqJFqMtKKB3MiNxbrnrKdtmp7TPSs_eiBgjcU5fQcK8"
        />
        <div className="flex-col">
          <p className="flex flex-wrap my-8">
            I am a front-end web developer who enjoys building dynamic web
            applications that are functional and accessible.
          </p>
          <ul className="">
            <li>
              <a className="underline" href="https://github.com/drewwdev">
                Github
              </a>
            </li>
            <li>
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
