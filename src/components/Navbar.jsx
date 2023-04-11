import React from "react";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <>
      <div className="flex list-none items-center space-x-6 mr-5 text-gray-700 -tracking-tighterr font-semibold">
        <Link to={"/cart"}>
          <div className="relative">
            <ShoppingBasket className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200" />

            {cart.length > 0 && (
              <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                {cart.length}
              </div>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
