import React from "react";
import { Carousel, TextInput } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import icon1 from "../assets/img/icon/icon1.png";
import icon2 from "../assets/img/icon/icon2.png";
import icon3 from "../assets/img/icon/icon3.png";
import ProductSliderInfo from "./ProductSlider";

function ImgSlider() {
  const urlPath = "https://happykid-demo.web.app";
  // const urlPath = "http://127.0.0.1:5173"
  useEffect(() => {
    getNewArrival();
  }, []);
  const [goodsData, setGoodsData] = useState();
  console.log("goodsData", goodsData);

  const xx = goodsData;

  const getNewArrival = async () => {
    try {
      await axios.get("https://skillkamp-api.com/v1/api/products/new_arrivals").then((res) => {
        setGoodsData(res.data.detail.data.catalog.category.productsWithMetaData.list);
      });
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  };

  const onValuesChange = () => {
    console.log("value change");
  };

  const sucessAlert = (message) => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "success",
      html: `<p style="font-size:25px">${message}</p>`,
      showConfirmButton: false,
      timer: 3000,
    });
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  const subscribe = () => {
    sucessAlert("Subscribe Complete");
  };

  return (
    <>
      <div className="h-96 sm:h-96 xl:h-80 2xl:h-96">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-banner1"></div>
          <div className="flex h-full items-center justify-center bg-banner2"></div>
          <div className="flex h-full items-center justify-center bg-banner3">
            <a href={`${urlPath}/shopCollection`} alt="" className="border border-black p-4">
              Shop Now
            </a>
          </div>
        </Carousel>
      </div>
      <div className="flex justify-center items-center text-4xl font-mono mt-16">New Arrivals</div>
      <ProductSliderInfo product={goodsData} />
      <div className="flex justify-center my-5">
        <button className="text-center bg-black text-white hover:bg-[#D2461C] p-2 rounded-sm">Shop All</button>
      </div>
      <div className="flex justify-center items-center mb-5 text-3xl h-[80px] font-mono">happy kid</div>
      <div className="flex justify-around items-center mb-5 h-[160px]">
        <div>
          <ul>
            <li>
              <Link to="/" className="navbar-item hover:text-red-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shopCollection" className="navbar-item hover:text-red-600">
                Shop Collection
              </Link>
            </li>
            <li>
              <Link to="/OurStory" className="hover:text-red-600 navbar-item">
                Our Story
              </Link>
            </li>
            <Link to="/contact" className="hover:text-red-600 navbar-item">
              Contact
            </Link>
          </ul>
        </div>
        <div className="">
          <span className="flex gap-6">
            <img src={icon1} alt="icon1" />
            <img src={icon2} alt="icon2" />
            <img src={icon3} alt="icon3" />
          </span>
        </div>
        <div>
        <ul>
            <li>
              <Link to="/ShipReturn">Shipping & Returns</Link>
            </li>
            <li>
              <Link to="/StorePolicy">Store Policy</Link>
            </li>
            <li>
              <Link to="/PaymentMethods">Payment Methods</Link>
            </li>
            <li>
              <Link to="/FAQ">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center font-thin items-center mb-5 text-2xl h-[70px] ">Join Our Mailing List</div>

      <div className="w-100% flex justify-center items-center mb-4">
        <TextInput id="email4" type="email" placeholder="name@gmail.com" required={true} />
        <button className="bg-black text-white mx-4 p-2 rounded-sm " onClick={() => subscribe()}>
          Subscribe Now
        </button>
      </div>
    </>
  );
}

export default ImgSlider;
