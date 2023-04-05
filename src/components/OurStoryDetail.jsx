import React from "react";
import icon1 from "../assets/img/icon/icon1.png";
import icon2 from "../assets/img/icon/icon2.png";
import icon3 from "../assets/img/icon/icon3.png";
import Swal from "sweetalert2";
import { Carousel, TextInput } from "flowbite-react";

function OurStoryDetail() {
  const urlPath = "https://happykid-demo.onrender.com"
  // const urlPath = "http://127.0.0.1:5173/"
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
    <div>
      <div className="h-[600px] bg-banner4"></div>
      <div className="grid grid-cols-12">
        <div className="text-4xl font-mono my-12 text-center col-start-6 col-end-8">Our Story</div>
        <div className="font-thin font-mono my-2 text-center col-start-4 col-end-10">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make
          changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about
          you.
        </div>
        <div className="font-thin font-mono my-4 text-center col-start-4 col-end-10">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make
          changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about
          you.
        </div>
      </div>
      <div className="border-t boder-4 flex justify-center items-center mb-5 text-3xl h-[80px] font-mono">happy kid</div>
      <div className="flex justify-around items-center mb-5 h-[160px]">
        <div>
        <ul>
            <li>
              <a href={urlPath}>Home</a>
            </li>
            <li>
              <a href={`${urlPath}/shopCollection`}>Shop Collection</a>
            </li>
            <li>
              <a href={`${urlPath}/OurStory`}>Our Story</a>
            </li>
            <li>
              <a href={`${urlPath}/contact`}>Contact</a>
            </li>
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
              <a href={`${urlPath}/ShipReturn`}>Shipping & Returns</a>
            </li>
            <li>
              <a href={`${urlPath}/StorePolicy`}>Store Policy</a>
            </li>
            <li>
              <a href={`${urlPath}/PaymentMethods`}>Payment Methods</a>
            </li>
            <li>
              <a href={`${urlPath}/FAQ`}>FAQ</a>
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
    </div>
  );
}

export default OurStoryDetail;
