import React from "react";
import { Carousel, Button, Modal } from "flowbite-react";
import { useState } from "react";
import imgGoods1 from "../assets/img/newArrive/Product1.png";
import imgGoods2 from "../assets/img/newArrive/Product2.png";
import imgGoods3 from "../assets/img/newArrive/Product3.png";
import imgGoods4 from "../assets/img/newArrive/Product4.png";
import imgGoods5 from "../assets/img/newArrive/Product5.png";
import imgGoods6 from "../assets/img/newArrive/Product6.png";
import imgGoods7 from "../assets/img/newArrive/Product7.png";
import imgGoods8 from "../assets/img/newArrive/Product8.png";
import imgGoods9 from "../assets/img/newArrive/Product9.png";
import imgGoods10 from "../assets/img/newArrive/Product10.png";
import imgGoods11 from "../assets/img/newArrive/Product11.png";
import imgGoods12 from "../assets/img/newArrive/Product12.png";

function ProductSlider({ product }) {
  const [popupcontent, setpopupcontent] = useState([]);
  const changecontent = (el) => {
    setpopupcontent([el]);
  };
  return (
    <>
      <div className="">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            {product?.map((el, index) => {
              return (
                <div className="" key={index}>
                  <img src={el.media[0].title} alt="" />
                  <p>I'm Product</p>
                  <p>{el.formattedPrice}</p>
                  <button onClick={() => changecontent(el)}>Add to Card</button>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="">
        <p>
          {popupcontent.map((pop, index) => {
            return (
              <div className="" key={index}>
                <p>name: {pop.id}</p>
                <p>pricessssssssssssssssssssssssssss:</p>
                <p>Detail:</p>
              </div>
            );
          })}
        </p>
      </div>
    </>
  );
}

export default ProductSlider;
