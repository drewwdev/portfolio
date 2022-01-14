import Reactocat from "../images/reacto-cats.png";
import Cryptoticker from "../images/cryptoticker.png";
import CoffeeCrumbs from "../images/coffee-crumbs.png";
import Portfolio from "../images/lighthouse.png";

const portfolio = [
  {
    title: "Reactocats",
    url: "https://dwilson-reactocats.netlify.app/",
    description: (
      <p>
        This is a clone website that I made at Suncoast Developer's Guild as a
        homework assignment. It is based off of{" "}
        <a className="underline font-bold" href="https://octodex.github.com">
          this
        </a>{" "}
        site by Github. It was made with mobile first design in mind.
      </p>
    ),
    src: Reactocat,
    slug: "reactocats",
    alt: "Screenshot of cloned website.",
    technologies: ["React", "Javascript", "Typescript", "SCSS", "HTML", "CSS"],
  },
  {
    title: "CryptoTicker",
    url: "https://dwilson-cryptotracker.netlify.app",
    description: (
      <p>
        This is a crypto tracking website that I made at Suncoast Developer's
        Guild as a homework assignment. It pulls JSON data from{" "}
        <a
          className="underline font-bold"
          href="https://api.coincap.io/v2/assets"
        >
          this
        </a>{" "}
        crypto API. It was made with mobile first design in mind as well.
      </p>
    ),
    src: Cryptoticker,
    slug: "cryptoticker",
    alt: "Screenshot of cryptotracking website.",
    technologies: [
      "React Hooks",
      "Fetch",
      "Typescript",
      "SCSS",
      "Javascript",
      "HTML",
    ],
  },
  {
    title: "Coffee Crumbs",
    url: "https://bakeriesandcoffeeshops.herokuapp.com",
    description: (
      <p>
        This is a full stack CRUD web application that I made at Suncoast
        Developer's Guild as a homework assignment. It uses React as well. It
        was made with mobile first design in mind as well.
      </p>
    ),
    src: CoffeeCrumbs,
    slug: "coffee-crumbs",
    alt: "Screenshot of Coffee Crumbs website.",
    technologies: [
      "React Hooks",
      "Fetch",
      "API",
      "C#",
      "Typescript",
      "HTML",
      "SCSS",
      "Javascript",
      "SQL",
    ],
  },
  {
    title: "This portfolio",
    url: "https://dreww.dev",
    description: (
      <p>
        I just wanted to point out that this portfolio site scores a 100 across
        the board in Google's Lighthouse tool.
      </p>
    ),
    src: Portfolio,
    slug: "portfolio",
    alt: "Screenshot of Google Lighthouse report for my portfolio",
    technologies: [
      "Javascript",
      "React Hooks",
      "React Router V6",
      "HTML",
      "TailwindCSS",
    ],
  },
];

export default portfolio;
