import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Reactocat from "../images/reacto-cats.png";
import Cryptoticker from "../images/cryptoticker.png";
import CoffeeCrumbs from "../images/coffee-crumbs.png";

function Portfolio() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <p className="font-bold text-center mt-20 text-4xl">
        Front-End Development Portfolio
      </p>
      <div className="flex justify-center">
        <ul className="flex-col">
          <li className="sm:flex my-8">
            <div className="w-96 my-8">
              <a
                href="https://dwilson-reactocats.netlify.app/"
                className="font-bold underline"
              >
                Reactocats
              </a>
              <p>
                This is a clone website that I made at Suncoast Developer's
                Guild as a homework assignment. It is based off of{" "}
                <a
                  className="underline font-bold"
                  href="https://octodex.github.com"
                >
                  this
                </a>{" "}
                site by Github. It was made with mobile first design in mind.
              </p>
            </div>
            <img
              className="w-96"
              alt="Screenshot of cloned website."
              src={Reactocat}
            />
          </li>

          <li className="sm:flex my-8">
            <div className="w-96 my-8">
              <a
                href="https://dwilson-cryptotracker.netlify.app/"
                className="font-bold underline"
              >
                CryptoTicker
              </a>
              <p>
                This is a crypto tracking website that I made at Suncoast
                Developer's Guild as a homework assignment. It pulls JSON data
                from{" "}
                <a
                  className="underline font-bold"
                  href="https://api.coincap.io/v2/assets"
                >
                  this
                </a>{" "}
                crypto API. It was made with mobile first design in mind as
                well.
              </p>
            </div>
            <img
              className="w-96"
              alt="Screenshot of cryptotracking website."
              src={Cryptoticker}
            />
          </li>

          <li className="sm:flex my-8">
            <div className="w-96 my-8">
              <a
                href="https://bakeriesandcoffeeshops.herokuapp.com/"
                className="font-bold underline"
              >
                Coffee Crumbs
              </a>
              <p>
                This is a full stack CRUD web application that I made at
                Suncoast Developer's Guild as a homework assignment. It was made
                with mobile first design in mind as well.
              </p>
            </div>
            <img
              className="w-96"
              alt="Screenshot of Coffee Crumbs website."
              src={CoffeeCrumbs}
            />
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
