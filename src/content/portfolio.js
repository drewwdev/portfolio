import Reactocat from "../images/reacto-cats.png";
import Cryptoticker from "../images/cryptoticker.png";
import CoffeeCrumbs from "../images/coffee-crumbs.png";
import Portfolio from "../images/lighthouse.png";

const portfolio = [
  {
    title: "Reactocats",
    link: "https://dwilson-reactocats.netlify.app/",
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
  },
  {
    title: "CryptoTicker",
    link: "https://dwilson-cryptotracker.netlify.app",
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
  },
  {
    title: "Coffee Crumbs",
    link: "https://bakeriesandcoffeeshops.herokuapp.com",
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
  },
  {
    title: "This portfolio",
    link: "https://dreww.dev",
    description: (
      <p>
        I just wanted to point out that this portfolio site scores a 100 across
        the board in Google's Lighthouse tool.
      </p>
    ),
    src: Portfolio,
    slug: "portfolio",
    alt: "Screenshot of Google Lighthouse report for my portfolio",
  },
];

export default portfolio;