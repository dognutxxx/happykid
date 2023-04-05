import React from "react";
import { Outlet } from "react-router-dom";
import { Carousel } from "flowbite-react";
import person from "../assets/img/icon/person.png";
import bucket from "../assets/img/icon/bucket.png";

function Nav() {
  const urlPath = "https://happykid-demo.onrender.com"
  // const urlPath = "http://127.0.0.1:5173"
  return (
    <>
      <div className="">
        {/* <div className="bg-black h-[50px] text-white flex justify-center items-center">Get 10% Off - Use Coupon Code HAPPY123</div> */}
        <div className="h-40 sm:h-40 xl:h-40 2xl:h-40 text-4xl">
          <Carousel>
            <div className="flex h-full items-center justify-center bg-black text-white">Get 10% Off - Use Coupon Code HAPPY123</div>
            <div className="flex h-full items-center justify-center bg-black text-white">Free Shipping Over $50</div>
          </Carousel>
        </div>
        <a href={urlPath} className="font-mono text-black text-6xl flex justify-center items-center h-[150px]">
          h a p p y k i d s
        </a>
        <div className="flex flex-wrap justify-around min-h-full min-w-full">
          <div className="flex flex-row max-w-full ">
            <ul className="lg:flex flex-row flex-none md:grid grid-flow-row auto-cols-fr text-black justify-between items-center my-8">
              <li className="mx-[30px]">
                <a href={urlPath} target="_self" className="hover:text-red-600">
                  Home
                </a>
              </li>
              <li className="mx-[30px]">
                <a href={`${urlPath}/shopCollection`} target="_self" className="hover:text-red-600">
                  Shop Collection
                </a>
              </li>
              <li className="mx-[30px]">
                <a href={`${urlPath}/OurStory`} target="_self" className="hover:text-red-600">
                  Our Story
                </a>
              </li>
              <li className="mx-[30px]">
                <a href={`${urlPath}/contact`} target="_self" className="hover:text-red-600">
                  Contact
                </a>
              </li>
              <div className="flex ml-[4px]">
                <img src={person} alt="" className="object-none" />
                <div className="flex flex-row mx-4 hover:text-purple-600">Login</div>
              </div>

              <div className="flex flex-row mx-4 hover:text-purple-600">
                <img src={bucket} alt="" className="object-none" />
              </div>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
