import React from "react";
import icon1 from "../assets/img/icon/icon1.png";
import icon2 from "../assets/img/icon/icon2.png";
import icon3 from "../assets/img/icon/icon3.png";
import Swal from "sweetalert2";
import { Carousel, TextInput } from "flowbite-react";

function StorePolicyDetail() {
  const urlPath = "https://happykid-demo.onrender.com"
  // const renderPath = "https://happykid-demo.onrender.com"
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
        <div className="text-4xl font-mono my-12 text-center col-start-5 col-end-9">Payment Methods</div>
        <div className="text-xl font-mono my-12 text-center col-start-6 col-end-8">CUSTOMER CARE</div>
        <div className="font-thin font-mono my-2 text-center col-start-3 col-end-11">
          I’m a customer care section. I’m a great place to write a long text about your company and your services, and, most importantly, how to contact your store with queries.
          Writing a detailed Customer Care policy is a great way to build trust and reassure your customers that they can buy with confidence.
        </div>
        <div className="font-thin font-mono my-4 text-center col-start-3 col-end-11">
          I'm the second paragraph in your customer care section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details
          about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
        </div>

        <div className="text-xl font-mono my-12 text-center col-start-6 col-end-8">PRIVACY & SAFETY</div>
        <div className="font-thin font-mono my-2 text-center col-start-3 col-end-11">
          I’m a privacy & safety policy section. I’m a great place to inform your customers about how you use, store, and protect their personal information. Add details such as
          how you use third-party banking to verify payment, the way you collect data or when will you contact users after their purchase was completed successfully.
        </div>
        <div className="font-thin font-mono my-4 text-center col-start-3 col-end-11">
          Your user’s privacy is of the highest importance to your business, so take the time to write an accurate and detailed policy. Use straightforward language to gain their
          trust and make sure they keep coming back to your site!
        </div>

        <div className="text-xl font-mono my-12 text-center col-start-6 col-end-8">WHOLESALE INQUIRIES</div>
        <div className="font-thin font-mono my-2 text-center col-start-3 col-end-11">
          I’m a wholesale inquiries section. I’m a great place to inform other retailers about how they can sell your stunning products. Use plain language and give as much
          information as possible in order to promote your business and take it to the next level!
        </div>
        <div className="font-thin font-mono my-4 text-center col-start-3 col-end-11">
          I'm the second paragraph in your wholesale inquiries section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add
          details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you
        </div>

        <div className="text-xl font-mono my-12 text-center col-start-6 col-end-8">PAYMENT METHODS</div>
        <div className="font-thin font-mono my-2 text-center col-start-3 col-end-11">
          <div className="mb-20">
            <p>- Credit / Debit Cards</p>
            <p>- PAYPAL</p>
            <p>- Offline Payments</p>
          </div>
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
    </>
  );
}

export default StorePolicyDetail;
