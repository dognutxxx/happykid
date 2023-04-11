import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, Label, Select } from "flowbite-react";
import imgGoods1 from "../assets/img/newArrive/Product1.png";
import imgGoods2 from "../assets/img/newArrive/Product2.png";
import SelectNumber from "./AmountSelect";
import ModalAllProduct from "./ModalAllProduct";

const AllProduct = () => {
  useEffect(() => {
    getAllProduct();
  }, []);

  const [showModal, setShowModal] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const onClose = () => {
    setShowModal(false);
  };

  const [allProduct, setAllProduct] = useState([]);
  console.log(allProduct);

  const handleAddtoCard = () => {
    setShowModal(true);
  };

  const getAllProduct = async () => {
    try {
      await axios.get("https://skillkamp-api.com/v1/api/products/").then((res) => {
        setAllProduct(res.data.detail.data.catalog.category.productsWithMetaData.list);
      });
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="sm:grid grid-cols-2 lg:grid grid-cols-3 gap-4">
        {allProduct.map((item, id) => {
          console.log(allProduct);
          return (
            <div key={id}>
              <a href="" alt="icon">
                <img src={item.media[0].url} alt="iconImg" />
              </a>
              <div className="flex justify-center">{item.name}</div>
              <div className="flex justify-center items-center gap-2 my-2">
                {item.formattedPrice === item.formattedDiscountedPrice ? (
                  <span className="flex justify-center">{item.formattedPrice}</span>
                ) : (
                  <span className="flex justify-center gap-2">
                    <p className="line-through">{item.formattedPrice}</p>
                    {item.formattedDiscountedPrice}
                  </span>
                )}
              </div>
              <div className="flex justify-center">
                <ModalAllProduct
                  name={item.name}
                  discount={item.formattedDiscountedPrice}
                  price={item.formattedPrice}
                  sku={item.sku}
                  imgItem1={item.media}
                  imgItem2={item.media[0].url}
                  product={item}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllProduct;
