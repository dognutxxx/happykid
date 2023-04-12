import React from "react";
import { add, remove } from "../redux/Slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add({...item,quanlity:1}));
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
  };

  return (
    <>
      <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center border-2 border-purple-200 gap-3 p-4 h-[360px] mt-10 ml-5  rounded-xl">
        <div className="h-[180px]">
          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        </div>
        <div>
          <h1 className="truncate w-40 mt-3 text-gray-700 font-semibold text-lg text-center">{item.title}</h1>
        </div>
        <div className="flex items-center justify-between w-full mt-5">
          {cart.some((p) => p.id === item.id) ? (
            <button
              className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
              onClick={removeFromCart}
            >
              Remove item
            </button>
          ) : (
            <button
              className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
              onClick={addToCart}
            >
              Add to cart
            </button>
          )}
          {item.fullprice === item.price ? (
            <div>${item.price}</div>
          ) : (
            <div>
              <p className="line-through">${item.fullprice} </p>
              <p>${item.price}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
