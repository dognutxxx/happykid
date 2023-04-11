import React from "react";
import { Outlet } from "react-router-dom";
import { Carousel } from "flowbite-react";
import person from "../assets/img/icon/person.png";
import bucket from "../assets/img/icon/bucket.png";
import { Link } from "react-router-dom";
import Menubar from "./Menubar";

function Nav() {
  const urlPath = "https://happykid-demo.web.app";
  // const urlPath = "http://127.0.0.1:5173"
  return (
    <>
      <div className="h-40 sm:h-40 xl:h-40 2xl:h-40 text-4xl">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-black text-white text-2xl lg:text-4xl">Get 10% Off - Use Coupon Code HAPPY123</div>
          <div className="flex h-full items-center justify-center bg-black text-white text-2xl lg:text-4xl">Free Shipping Over $50</div>
        </Carousel>
      </div>

      <Menubar />

      <a href={urlPath} className="mx-4 border-b border-gray-200 tracking-widest font-mono text-black text-4xl lg:text-6xl flex justify-center items-center h-[150px]">
        <p className="">happy kids</p>
      </a>
      <Outlet />
    </>
  );
}

export default Nav;
