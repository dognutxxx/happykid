import { Select, Label, Radio } from "flowbite-react";
import React, { useState } from "react";
import CheckBoxFilter from "./CheckBoxFilter";
import RangeSliderDetail from "./RangeSliderDetail";
import FilterbarResposive from "./FilterbarResposive";

const FilterProduct = () => {
  const [isCollection, setIsCollection] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [isColor, setIsColor] = useState(false);
  const [isSize, setIsSize] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSelectChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFilterCollection = () => {
    setIsCollection(!isCollection);
  };
  const handleFilterPrice = () => {
    setIsPrice(!isPrice);
  };
  const handleFilterColor = () => {
    setIsColor(!isColor);
  };
  const handleFilterSize = () => {
    setIsSize(!isSize);
  };

  return (
    <>
      <div className="">
        <ul className="py-6 border-b-2">
          <li className="font-light font-mono text-lg">Filter By</li>
        </ul>

        <ul>
          <li className="py-6 border-b-2">
            <button className=" flex justify-between items-center w-[100%]" onClick={handleFilterCollection}>
              <span>Collection</span>
              <div>{isCollection === false ? <div>+</div> : null}</div>
              {isCollection && (
                <div>
                  <span>-</span>
                </div>
              )}
            </button>
            <div className="">
              {isCollection && (
                <div>
                  <div>All</div>
                  <ul>
                    <li className="hover:text-red-600">T-Shirt</li>
                    <li className="hover:text-red-600">Bodysuit</li>
                  </ul>
                </div>
              )}
            </div>
          </li>

          <li className="py-6 border-b-2">
            <button className="flex justify-between items-center w-[100%]" onClick={handleFilterPrice}>
              <span className="">Price</span>
              <div>{isPrice === false ? <div>+</div> : null}</div>
              {isPrice && (
                <div>
                  <span>-</span>
                </div>
              )}
            </button>
            <div className="">
              {isPrice && (
                <div className="mt-4">
                  <RangeSliderDetail />
                </div>
              )}
            </div>
          </li>

          <li className="py-6 border-b-2">
            <button className="flex justify-between items-center w-[100%]" onClick={handleFilterColor}>
              <span>Color</span>
              <div>{isColor === false ? <div>+</div> : null}</div>
              {isColor && (
                <div>
                  <span>-</span>
                </div>
              )}
            </button>
            <div className="">
              {isColor && (
                <div className="mt-4">
                  <Select value={inputValue} onChange={handleSelectChange}>
                    <option value="green">สีเขียว</option>
                    <option value="red">สีแดง</option>
                  </Select>
                </div>
              )}
            </div>
          </li>

          <li className="py-6 border-b-2">
            <button className="flex justify-between items-center w-[100%]" onClick={handleFilterSize}>
              <span>Size</span>
              <div>{isSize === false ? <div>+</div> : null}</div>
              {isSize && (
                <div>
                  <span>-</span>
                </div>
              )}
            </button>
            <div className="">
              {isSize && (
                <div>
                  <CheckBoxFilter />
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FilterProduct;
