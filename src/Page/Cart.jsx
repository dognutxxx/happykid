import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [newItems, setNewItems]  = useState();
  const { cart } = useSelector((state) => state);


  useEffect(() => {
    console.log(111);
  },[newItems])

  const sucessAlert = (message) => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "success",
      html: `<p style="font-size:25px">${message}</p>`,
      showConfirmButton: false,
      timer: 3000,
    });
  };

 

  return (
    <>
      {cart.length > 0 ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-start items-between p-2">
                <CartItem cartItems={cart}  setTotalAmount={setTotalAmount} setTotalItem={setTotalItem}/>;             
            </div>
            <div>
              <div className="flex flex-col justify-center items-end p-5 space-y-5">
                <h1 className="font-semibold text-lg text-purple-800">YOUR CART SUMMARY</h1>
                <p>
                  <span className="text-gray-700 font-semibold">Total Items</span> : {totalItem}
                </p>
                <p>
                  {" "}
                  <span className="text-gray-700 font-semibold">Total Price</span> : ${totalAmount}
                </p>

                <button
                  className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3"
                  onClick={() => sucessAlert("Payment Sucess")}
                >
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
            <Link to={"/shopCollection"}>
              <button className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3">
                SHOP NOW
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
