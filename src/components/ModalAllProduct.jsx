import React from "react";
import { Button, Modal, Label, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import imgGoods1 from "../assets/img/newArrive/Product1.png";
import imgGoods2 from "../assets/img/newArrive/Product2.png";
import SelectNumber from "./AmountSelect";
import ModalRightSumModal from "./ModalRightSumModal";



const ModalAllProduct = ({ name, discount, price, sku, imgItem1, imgItem2, product }) => {

  //   console.log("newProduct", newProduct);
  const handleAddtoCard = () => {
    setShowModal(true);
  };
  const [showModal, setShowModal] = useState(false);

  const [selectedColor, setSelectedColor] = useState("red");
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <Button size="lg" outline={true} gradientDuoTone="purpleToPink" onClick={handleAddtoCard}>
          Add to Card
        </Button>

        <Modal show={showModal} onClose={onClose} size="4xl">
          <Modal.Body>
            <div className="space-y-6 grid grid-cols-8 text-mono">
              {imgItem1.length === 2 ? (
                <div className=" col-start-1 col-end-5 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {selectedColor === "red" ? <img src={imgItem1[0].url} /> : <img src={imgItem1[1].url} />}
                </div>
              ) : (
                <div className=" col-start-1 col-end-5 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <img src={imgItem2} />
                </div>
              )}

              <div className=" col-start-5 col-end-9 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <h2 className="text-2xl">{name}</h2>
                <p className="my-4">
                  <div className="">
                    {price === discount ? (
                      <span className="">{discount}</span>
                    ) : (
                      <span className="flex justify-left gap-2">
                        <p className="line-through">{price}</p>
                        <span className="">{discount}</span>
                      </span>
                    )}
                  </div>
                  <div className="my-4">SKU: {sku}</div>
                </p>
                <div className="flex items-center">
                  <label className="">
                    <input className="mr-2" type="radio" name="color" value="red" checked={selectedColor === "red"} onChange={handleColorChange} />
                    Red
                  </label>
                  {imgItem1.length === 2 ? (
                    <label className="mx-4">
                      <input className="mr-2" type="radio" name="color" value="green" checked={selectedColor === "green"} onChange={handleColorChange} />
                      Green
                    </label>
                  ) : null}
                </div>
                <div id="select" className="my-4">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="Select Size" />
                  </div>
                  <Select id="countries" required={true} placeholder="Select">
                    <option disabled>Select</option>
                    <option>12-18 months</option>
                    <option>18-24 months</option>
                    <option>2 years</option>
                    <option>3 years</option>
                  </Select>
                </div>
                <div>
                  <SelectNumber />
                </div>

                <ModalRightSumModal productToRightModal={product}/>

                <div className="mt-6 text-sm">
                  <a href="" className="underline">
                    View More Details
                  </a>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="gray" onClick={onClose}>
              Back
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ModalAllProduct;
