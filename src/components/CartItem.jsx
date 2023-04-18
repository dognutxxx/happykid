import React, { useState } from "react";
import { Delete } from "@mui/icons-material";
import { remove } from "./redux/Slices/cartSlices";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CartItem = ({ setTotalAmount, setTotalItem, cartItems }) => {
  console.log("CartItems", cartItems);

  const [products, setProducts] = useState(cartItems);
  console.log(products);

  const handleIncrement = (productId) => {
    const updatedProducts = products.map((product) => (product.id === productId ? { ...product, quanlity: product.quanlity + 1 } : product));
    setProducts(updatedProducts);
  };

  const handleDecrement = (productId) => {
    const updatedProducts = products.map((product) => (product.id === productId && product.quanlity > 0 ? { ...product, quanlity: product.quanlity - 1 } : product));
    setProducts(updatedProducts);
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    dispatch(remove(productId));
  };

  const calculateSubtotal = (item) => {
    return item.price * item.quanlity;
  };

  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  // const removeItemFromCart = () => {
  //   dispatch(remove(item.id));
  // };

  useEffect(() => {
    setTotalItem(totalQuantity);
    setTotalAmount(totalPrice);
  }, [products]);

  const totalQuantity = products.reduce((total, product) => total + product.quanlity, 0);
  const totalPrice = products.reduce((total, product) => total + calculateSubtotal(product), 0);

  return (
    <>
      {products.length > 0 ? (
        <div className="flex items-center p-5 justify-between bg-violet-200 mt-2 mb-2 rounded-xl">
          <div className="flex p-3">
            <div className="ml-10 self-start space-y-5">
              {products.map((item) => {
                return (
                  <>
                    <div className="flex mx-6">
                      <img key={item.id} src={item.image} className="h-28 rounded-lg" alt="" />

                      <div className="mx-6">
                        <h1 className="text-xl text-purple-700 font-semibold">{item.title}</h1>
                        <p>${item.price}</p>
                        <button onClick={() => handleIncrement(item.id)}>+</button>
                        <span className="mx-2">{item.quanlity}</span>
                        <button onClick={() => handleDecrement(item.id)}>-</button>
                        <div>
                          <span>Total: {calculateSubtotal(item)}</span>
                        </div>
                        <button
                          className="my-6 bg-purple-300 hover:bg-purple-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
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

export default CartItem;
