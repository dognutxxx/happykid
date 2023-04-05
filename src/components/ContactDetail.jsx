import React from "react";
import icon1 from "../assets/img/icon/icon1.png";
import icon2 from "../assets/img/icon/icon2.png";
import icon3 from "../assets/img/icon/icon3.png";
import Swal from "sweetalert2";
import { TextInput, Label, Button } from "flowbite-react";

function ContactDetail() {
  const urlPath = "https://happykid-demo.onrender.com"
  // const urlPath = "http://127.0.0.1:5173"
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
      <div className="flex justify-center items-center h-[80px] font-mono text-4xl mt-12">Contact Us</div>
      <div className="grid grid-cols-12 text-center font-mono my-8">
        <div className="col-start-3 col-end-5">
          <p className="my-8">VISIT US</p>
          <p className="">500 Terry Francois St.</p>
          <p className="">San Francisco, CA 94158 </p>
          <p className="">123-456-7890</p>
        </div>

        <div className="col-start-6 col-end-8">
          <p className="my-8">OPENING HOURS</p>
          <p className="">Mon - Fri: 7am - 10pm</p>
          <p className="">​​Saturday: 8am - 10pm</p>
          <p className="">Sunday: 8am - 11pm</p>
        </div>

        <div className="col-start-9 col-end-11">
          <p className="my-8">CUSTOMER SERVICE</p>
          <p className="">1-800-000-000</p>
          <p className="">123-456-7890</p>
          <p className="">info@mysite.com</p>
        </div>
      </div>
      <div className="h-[50px] flex justify-center items-center my-20">
        <p>FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE</p>
      </div>

      <div className="">
        <form className="grid grid-cols-12 gap-2 items-center">
          <div className="col-start-3 col-end-7">
            <div className="">
              <Label htmlfor="FirstName" value="FirstName" />
            </div>
            <TextInput id="FirstName" type="text" placeholder="" required={true} />
          </div>
          <div className="col-start-7 col-end-11">
            <div className="">
              <Label htmlfor="LastName" value="LastName" />
            </div>
            <TextInput id="LastName" type="text" placeholder="" required={true} />
          </div>
          <div className="col-start-3 col-end-11">
            <div className="">
              <Label htmlfor="Email" value="Email" />
            </div>
            <TextInput id="email" type="email" placeholder="" required={true} />
          </div>
          <div className="col-start-3 col-end-11">
            <div className="">
              <Label htmlfor="Subject" value="Subject" />
            </div>
            <TextInput id="subject" type="text" placeholder="" required={true} />
          </div>
          <div className="col-start-3 col-end-11">
            <label for="message" className="text-sm font-medium text-gray-900 dark:text-white">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <div className="mt-12 mb-4 col-start-3 col-end-8">
            <Button className="" type="submit">
              Submit
            </Button>
          </div>
        </form>
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
      <div className="flex justify-center items-center mt-8">© 2035 by happy kids. Powered and secured by Wix</div>
    </div>
  );
}

export default ContactDetail;
