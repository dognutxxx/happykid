import { Select, Label, Radio } from "flowbite-react";
import React, { useState} from "react";
import { productsItem } from "../data";
import { useStore } from "../context/StoreContext";

const FilterProduct = () => {
  const [isCollection, setIsCollection] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [isColor, setIsColor] = useState(false);
  const [isSize, setIsSize] = useState(false);

  const [resetCategory, setResetCategory] = useState("All")
  const [resetColor, setResetColor] = useState("All")
  const [resetSize, setResetSize] = useState("All")
  const [resetPrice, setResetPrice] = useState("All")

  const {newProduct, setNewProduct} = useStore(productsItem);
  

  const clearFilter = () => {
    setResetCategory("All")
    setResetColor("All")
    setResetColor("All")
    setResetPrice("All")
    setNewProduct(productsItem)
  }

  const filterPrice = (e) => {
    setResetPrice(e.target.value)
    const filterPrice = productsItem.filter((item) => {
      if(e.target.value === "All"){
        return productsItem
      }
      return item.price === Number(e.target.value);
    });
    setNewProduct(filterPrice);
  };

  const filterCategory = (e) => {
    setResetCategory(e.target.value)
    const filterCategory = productsItem.filter((item) => {
      if(e.target.value === "All"){
        return productsItem
      }
      return item.category === e.target.value;
    });
    setNewProduct(filterCategory);
  };

  const filterColor = (e) => {
    setResetColor(e.target.value)
    const filterColor = productsItem.filter((item) => {
      if(e.target.value === "All"){
        return productsItem
      }
      return item.color === e.target.value;
    });
    setNewProduct(filterColor);
  };

  const filterSize = (e) => {
    setResetSize(e.target.value)
    const filterSize = productsItem.filter((item) => {
      if(e.target.value === "All"){
        return productsItem
      }
      return item.size === e.target.value;
    });
    setNewProduct(filterSize);
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
                <div className="mt-4">
                  <Select value={resetCategory} onChange={filterCategory}>
                    <option value="All">All</option>
                    <option value="Tshirts">T-Shirt</option>
                    <option value="Bodysuits">Bodysuits</option>
                  </Select>
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
                  <Select value={resetPrice}  onChange={filterPrice}>
                    <option value="All">All Prices</option>
                    <option value="17.99">17.99</option>
                    <option value="19.99">19.99</option>
                  </Select>
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
                  <Select  value={resetColor} onChange={filterColor}>
                    <option value="All">All Color</option>
                    <option value="blue">blue</option>
                    <option value="cream">cream</option>
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
                  {/* <CheckBoxFilter /> */}
                  <Select  value={resetSize} onChange={filterSize}>
                    <option value="All">All Size</option>
                    <option value="0-3m">0-3 months</option>
                    <option value="3-6m">3-6 months</option>
                    <option value="6-12m">6-12 months</option>
                    <option value="12-18m">12-18 months</option>
                    <option value="18-24m">18-24 months</option>
                    <option value="2y">2 years</option>
                    <option value="3y">3 years</option>
                  </Select>
                </div>
              )}
            </div>
          </li>
          <button className="my-6" onClick={clearFilter}>X Clear Filter</button>
        </ul>
      </div>
    </>
  );
};

export default FilterProduct;
