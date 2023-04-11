import { useState } from "react"; // import state
import person from "../assets/img/icon/person.png";
import bucket from "../assets/img/icon/bucket.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Menubar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center lg:justify-center justify-end border-b border-gray-400 py-8 mx-6">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <div className="flex">
                <img src={person} alt="" className="object-none" />
                <Link to="/SocialLogin" className="flex flex-row mx-4 text-xl">
                  Log In
                </Link>
              </div>
              <li className="mx-[30px]">
                <Link to="/" className="navbar-item hover:text-red-600 text-xl" onClick={() => setIsNavOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="mx-[30px]">
                <Link to="/shopCollection" className="navbar-item hover:text-red-600 text-xl" onClick={() => setIsNavOpen(false)}>
                  Shop Collection
                </Link>
              </li>
              <li className="mx-[30px]">
                <Link to="/OurStory" className="navbar-item hover:text-red-600 text-xl" onClick={() => setIsNavOpen(false)}>
                  Our Story
                </Link>
              </li>
              <li className="mx-[30px]">
                <Link to="/contact" className="navbar-item hover:text-red-600 text-xl" onClick={() => setIsNavOpen(false)}>
                  Contact
                </Link>
              </li>

              <div className="flex flex-row mx-4 hover:text-purple-600">
                <img src={bucket} alt="" className="object-none" />
              </div>
            </ul>
          </div>
        </section>

        <div></div>
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li data-testid="li" className="">
            <Link to="/" className="navbar-item hover:text-red-600">
              Home
            </Link>
          </li>
          <li className="mx-[30px]">
            <Link to="/shopCollection" className="navbar-item hover:text-red-600">
              Shop Collection
            </Link>
          </li>
          <li className="mx-[30px]">
            <Link to="/OurStory" className="navbar-item hover:text-red-600">
              Our Story
            </Link>
          </li>
          <li className="mx-[30px]">
            <Link to="/contact" className="navbar-item hover:text-red-600">
              Contact
            </Link>
          </li>
          <div className="flex ml-[4px] items-center">
            <img src={person} alt="" className="object-none" />
            <Link to="/SocialLogin" className="flex flex-row ml-2 mr-8">
              Login
            </Link>
            <Navbar />
          </div>

          {/* <div className="flex flex-row mx-4 hover:text-purple-600">
          
          </div> */}
        </ul>
      </nav>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
