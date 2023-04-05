import React from "react";
import icon1 from "../assets/img/icon/icon1.png";
import icon2 from "../assets/img/icon/icon2.png";
import icon3 from "../assets/img/icon/icon3.png";
import Swal from "sweetalert2";
import { TextInput, Accordion } from "flowbite-react";

function FAQDetail() {
  const urlPath = "https://happykid-demo.web.app"
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
    <>
      <div className="grid grid-cols-12">
        <div className="text-4xl font-mono my-12 text-center col-start-5 col-end-9">FAQ</div>
        <div className="col-start-3 col-end-11 mb-16">
          <Accordion alwaysOpen={true}>
            <Accordion.Panel>
              <Accordion.Title>How do I add a new question & answer?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p className="mb-4">1. Click “Manage FAQs” button</p>
                  <p className="mb-4">2. From your site’s dashboard you can add, edit and manage all your questions and answers</p>
                  <p className="mb-4">2. From your site’s dashboard you can add, edit and manage all your questions and answers</p>
                  <p className="mb-4">3. Each question and answer should be added to a category</p>
                  <p className="">4. Save and publish.</p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Can I insert an image, video, or gif in my FAQ?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">Yes. To add media follow these steps:</p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p className="my-4">1. Enter the app’s Settings</p>
                  <p className="mb-4">2. Click on the “Manage FAQs” button</p>
                  <p className="mb-4">3. Select the question you would like to add media to</p>
                  <p className="mb-4">4. When editing your answer click on the camera, video, or GIF icon</p>
                  <p className="">5. Add media from your library.</p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>How do I edit or remove the “FAQ” title?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  You can edit the title from the Settings tab in the app. If you don’t want to display the title, simply disable the Title under “Info to Display”.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
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

export default FAQDetail;
