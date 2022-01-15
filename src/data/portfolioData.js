import ReactocatMobile from "../images/reacto-cats-mobile.png";
import ReactocatDesktop from "../images/reacto-cats-desktop.png";
import CryptotickerMobile from "../images/cryptoticker-mobile.png";
import CryptotickerDesktop from "../images/cryptoticker-desktop.png";
import CoffeeCrumbsMobile from "../images/coffee-crumbs-mobile.png";
import CoffeeCrumbsDesktop from "../images/coffee-crumbs-desktop.png";
import Portfolio from "../images/lighthouse.png";
import PortfolioDesktop from "../images/portfolio-desktop.png";

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
    mobilesrc: ReactocatMobile,
    desktopsrc: ReactocatDesktop,
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
    mobilesrc: CryptotickerMobile,
    desktopsrc: CryptotickerDesktop,
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
    mobilesrc: CoffeeCrumbsMobile,
    desktopsrc: CoffeeCrumbsDesktop,
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
    mobilesrc: Portfolio,
    desktopsrc: PortfolioDesktop,
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
