import React from "react";
import FilterProduct from "./FilterProduct";
import AllProduct from "./AllProduct";
import Swal from "sweetalert2";
import { TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import icon1 from "../assets/img/icon/icon1.png";
import icon2 from "../assets/img/icon/icon2.png";
import icon3 from "../assets/img/icon/icon3.png";

function CollectionDetail() {
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
      <div className="h-[150px] p-4 flex justify-center items-center">
        <h1 className="tracking-widest text-mono text-2xl text-center">Shop Collection</h1>
      </div>
      <div className="sm:grid-grid-cols-2 lg:grid grid-cols-12 gap-4 mx-20">
        <div className="col-start-1 col-end-3 ">
          <FilterProduct />
        </div>
        <div className="col-start-3 col-end-13">
          <div className="mb-6">
            <AllProduct />
          </div>
        </div>
      </div>
      <div className="border-t boder-4 flex justify-center items-center mb-5 text-3xl h-[80px] font-mono">happy kid</div>
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

export default CollectionDetail;
