import React from "react";
import { Carousel, Button, Modal, Label, Select } from "flowbite-react";
import { useState } from "react";
import axios from "axios";
import SelectNumber from "./AmountSelect";
import { useStore } from "../context/StoreContext";
import imgGoods1 from "../assets/img/newArrive/Product1.png";
import imgGoods2 from "../assets/img/newArrive/Product2.png";
import imgGoods3 from "../assets/img/newArrive/Product3.png";
import imgGoods4 from "../assets/img/newArrive/Product4.png";
import imgGoods5 from "../assets/img/newArrive/Product5.png";
import imgGoods6 from "../assets/img/newArrive/Product6.png";
import imgGoods7 from "../assets/img/newArrive/Product7.png";
import imgGoods8 from "../assets/img/newArrive/Product8.png";
// import imgGoods7 from "../assets/img/newArrive/Product7.png";
// import imgGoods8 from "../assets/img/newArrive/Product8.png";
// import imgGoods9 from "../assets/img/newArrive/Product9.png";
// import imgGoods10 from "../assets/img/newArrive/Product10.png";
// import imgGoods11 from "../assets/img/newArrive/Product11.png";
// import imgGoods12 from "../assets/img/newArrive/Product12.png";

function ProductSlider({ product }) {
  const [show0, setShow0] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);

  const [newArriveItem3, setNewArriveItem3] = useState([]);
  const [newArriveItem2, setNewArriveItem2] = useState([]);
  const [newArriveItem4, setNewArriveItem4] = useState([]);
  const [newArriveItem5, setNewArriveItem5] = useState([]);
  const [newArriveItem0, setNewArriveItem0] = useState([]);
  const [newArriveItem1, setNewArriveItem1] = useState([]);
  const [newArriveItem7, setNewArriveItem7] = useState([]);
  const [newArriveItem8, setNewArriveItem8] = useState([]);

  const { selectedColor3, setSelectedColor3 } = useStore();
  const { selectedColor2, setSelectedColor2 } = useStore();
  const { selectedColor4, setSelectedColor4 } = useStore();
  const { selectedColor5, setSelectedColor5 } = useStore();
  const { selectedColor, setSelectedColor } = useStore();
  const { selectedColor1, setSelectedColor1 } = useStore();

  const handleColorChange = (event) => {
    setSelectedColor2(event.target.value);
    setSelectedColor3(event.target.value);
    setSelectedColor4(event.target.value);
    setSelectedColor5(event.target.value);
    setSelectedColor(event.target.value);
    setSelectedColor1(event.target.value);
  };

  const onClick0 = async () => {
    setShow0(true);
    try {
      await axios.get(`https://skillkamp-api.com/v1/api/products/details/00001`).then((res) => {
        console.log(res.data.detail.data.catalog.product);
        // setNewArriveItem0(res.data.detail.data.catalog.category.productsWithMetaData.list);
        setNewArriveItem0(res.data.detail.data.catalog.product);
      });
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  };

  const onClose0 = () => {
    setShow0(false);
  };

  const onClick1 = async () => {
    setShow1(true);
    try {
      await axios.get(`https://skillkamp-api.com/v1/api/products/details/00002`).then((res) => {
        console.log(res.data.detail.data.catalog.product);
        // setNewArriveItem0(res.data.detail.data.catalog.category.productsWithMetaData.list);
        setNewArriveItem1(res.data.detail.data.catalog.product);
      });
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  };

  const onClose1 = () => {
    setShow1(false);
  };

  const onClick2 = async () => {
    setShow2(true);
    try {
      await axios.get(`https://skillkamp-api.com/v1/api/products/details/00003`).then((res) => {
        console.log(res.data.detail.data.catalog.product);
        // setNewArriveItem0(res.data.detail.data.catalog.category.productsWithMetaData.list);
        setNewArriveItem2(res.data.detail.data.catalog.product);
      });
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  };

  const onClose2 = () => {
    setShow2(false);
  };

  const onClick3 = async () => {
    setShow3(true);
    try {
      await axios.get(`https://skillkamp-api.com/v1/api/products/details/00004`).then((res) => {
        console.log(res.data.detail.data.catalog.product);
        // setNewArriveItem0(res.data.detail.data.catalog.category.productsWithMetaData.list);
        setNewArriveItem3(res.data.detail.data.catalog.product);
      });
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  };

  const onClose3 = () => {
    setShow3(false);
  };

  const onClick4 = async () => {
    setShow4(true);
    try {
      await axios.get(`https://skillkamp-api.com/v1/api/products/details/00004`).then((res) => {
        console.log(res.data.detail.data.catalog.product);
        // setNewArriveItem0(res.data.detail.data.catalog.category.productsWithMetaData.list);
        setNewArriveItem4(res.data.detail.data.catalog.product);
      });
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  };

  const onClose4 = () => {
    setShow4(false);
  };

  const onClick5 = async () => {
    setShow5(true);
    try {
      await axios.get(`https://skillkamp-api.com/v1/api/products/details/00005`).then((res) => {
        console.log(res.data.detail.data.catalog.product);
        // setNewArriveItem0(res.data.detail.data.catalog.category.productsWithMetaData.list);
        setNewArriveItem5(res.data.detail.data.catalog.product);
      });
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  };

  const onClose5 = () => {
    setShow5(false);
  };

  

  return (
    <>
      <div className="h-[500px] flex items-center my-[30px]">
        <Carousel>
          <div className="justify-center gap-4 grid grid-cols px-20 font-mono">
            <div className="col-start-1 col-end-2 text-center">
              <img src={imgGoods1} alt="icon1" />
              <button className="w-[80%] bg-white hover:bg-blue-600 text-white rounded">Quick View</button>
              <p className="my-2">{product ? product[0].name : null}</p>
              <p className="my-4">{product ? product[0].formattedDiscountedPrice : null}</p>
              <React.Fragment>
                <div className="flex justify-center">
                  <Button size="xs" outline={true} gradientDuoTone="purpleToPink" onClick={onClick0}>
                    Add to Card
                  </Button>
                </div>
                <Modal show={show0} onClose={onClose0} size="4xl">
                  <Modal.Body>
                    <div className="space-y-6 grid grid-cols-8">
                      <img src={imgGoods1} alt="" className=" col-start-1 col-end-5 text-base leading-relaxed text-gray-500 dark:text-gray-400" />
                      <p className=" col-start-5 col-end-9text-base leading-relaxed text-gray-500 dark:text-gray-400">1231312</p>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={onClick0}>I accept</Button>
                    <Button color="gray" onClick={onClose0}>
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </React.Fragment>
            </div>

            <div className="col-start-3 col-end-4 text-center">
              <img src={imgGoods2} alt="icon2" />
              <button className="w-[80%] bg-white hover:bg-blue-600 text-white rounded">Quick View</button>
              <p className="my-2">{product ? product[1].name : null}</p>
              <p className="my-4">{product ? product[1].formattedDiscountedPrice : null}</p>
              <React.Fragment>
                <div className="flex justify-center">
                  <Button size="xs" outline={true} gradientDuoTone="purpleToPink" onClick={onClick1}>
                    Add to Card
                  </Button>
                </div>
                <Modal show={show1} onClose={onClose1} size="4xl">
                  <Modal.Header>Terms of Service</Modal.Header>
                  <Modal.Body>
                    <div className="space-y-6">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">Item1</p>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">Item1</p>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={onClick1}>I accept</Button>
                    <Button color="gray" onClick={onClose1}>
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </React.Fragment>
            </div>

            <div className="col-start-4 col-end-5 text-center">
              <img src={imgGoods3} alt="icon3" />
              <button className="w-[80%] bg-white hover:bg-blue-600 text-white rounded">Quick View</button>
              <p className="my-2">{product ? product[2].name : null}</p>
              <p className="my-4">{product ? product[2].formattedDiscountedPrice : null}</p>
              <React.Fragment>
                <div className="flex justify-center">
                  <Button size="xs" outline={true} gradientDuoTone="purpleToPink" onClick={onClick2}>
                    Add to Card
                  </Button>
                </div>
                <Modal show={show2} onClose={onClose2} size="4xl">
                  <Modal.Body>
                    <div className="space-y-6 grid grid-cols-8 text-mono">
                      {selectedColor2 === "red" ? (
                        <img src={imgGoods3} alt="" className=" col-start-1 col-end-5 text-base leading-relaxed text-gray-500 dark:text-gray-400" />
                      ) : (
                        <img src={imgGoods3} alt="" className=" col-start-1 col-end-5 text-base leading-relaxed text-gray-500 dark:text-gray-400" />
                      )}

                      <div className=" col-start-5 col-end-9 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <h2 className="text-2xl">{newArriveItem2.name}</h2>
                        <p className="my-4">{newArriveItem2.formattedDiscountedPrice}</p>
                        <div className="flex items-center">
                          <label className="">
                            <input className="mr-2" type="radio" name="color" value="red" checked={selectedColor2 === "red"} onChange={handleColorChange} />
                            ลายด่างสีฟ้า
                          </label>
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

                        <Button size="lg" outline={true} gradientDuoTone="purpleToPink" onClick="">
                          Add to Card
                        </Button>
                        <div className="mt-6 text-sm">
                          <a href="" className="underline">
                            View More Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    {/* <Button onClick={onClick0}>I accept</Button> */}
                    <Button color="gray" onClick={onClose2}>
                      Back
                    </Button>
                  </Modal.Footer>
                </Modal>
              </React.Fragment>
            </div>

            <div className=" col-start-5 col-end-6 text-center">
              <img src={imgGoods4} alt="icon4" />
              <button className="w-[80%] bg-white hover:bg-blue-600 text-white rounded">Quick View</button>
              <p className="my-2">{product ? product[3].name : null}</p>
              <p className="my-4">{product ? product[3].formattedDiscountedPrice : null}</p>
              <React.Fragment>
                <div className="flex justify-center">
                  <Button size="xs" outline={true} gradientDuoTone="purpleToPink" onClick={onClick3}>
                    Add to Card
                  </Button>
                </div>
                <Modal show={show3} onClose={onClose3} size="4xl">
                  <Modal.Body>
                    <div className="space-y-6 grid grid-cols-8 text-mono">
                
                        <img src={imgGoods4} alt="" className=" col-start-1 col-end-5 text-base leading-relaxed text-gray-500 dark:text-gray-400" />
                     

                      <div className=" col-start-5 col-end-9 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <h2 className="text-2xl">{newArriveItem2.name}</h2>
                        <p className="my-4">{newArriveItem2.formattedDiscountedPrice}</p>
                        <div className="flex items-center">
                          <label className="">
                            <input className="mr-2" type="radio" name="color" value="red" checked={selectedColor3 === "red"} onChange={handleColorChange} />
                            ลายตั้งสีส้ม
                          </label>
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

                        <Button size="lg" outline={true} gradientDuoTone="purpleToPink" onClick="">
                          Add to Card
                        </Button>
                        <div className="mt-6 text-sm">
                          <a href="" className="underline">
                            View More Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    {/* <Button onClick={onClick0}>I accept</Button> */}
                    <Button color="gray" onClick={onClose3}>
                      Back
                    </Button>
                  </Modal.Footer>
                </Modal>
              </React.Fragment>
            </div>
          </div>

          <div className="justify-center gap-4 grid grid-cols px-20 font-mono">
            <div className="col-start-1 col-end-2 text-center">
              <img src={imgGoods5} alt="icon1" />
              <button className="w-[80%] bg-white hover:bg-blue-600 text-white rounded">Quick View</button>
              <p className="my-2">{product ? product[4].name : null}</p>
              <div className="my-4">{product ? product[4].formattedDiscountedPrice : null}</div>
              <React.Fragment>
                <div className="flex justify-center">
                  <Button size="xs" outline={true} gradientDuoTone="purpleToPink" onClick={onClick4}>
                    Add to Card
                  </Button>
                </div>
                <Modal show={show4} onClose={onClose4} size="4xl">
                  <Modal.Body>
                    <div className="space-y-6 grid grid-cols-8 text-mono">
                      <img src={imgGoods5} alt="" className=" col-start-1 col-end-5 text-base leading-relaxed text-gray-500 dark:text-gray-400" />
                      <div className=" col-start-5 col-end-9 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <h2 className="text-2xl">{newArriveItem4.name}</h2>
                        <p className="my-4">{newArriveItem4.formattedDiscountedPrice}</p>
                        <div className="flex items-center">
                          <label className="">
                            <input className="mr-2" type="radio" name="color" value="pink" checked={selectedColor4 === "pink"} onChange={handleColorChange} />
                            ลายตารางขาว-ดำ
                          </label>
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

                        <Button size="lg" outline={true} gradientDuoTone="purpleToPink" onClick="">
                          Add to Card
                        </Button>
                        <div className="mt-6 text-sm">
                          <a href="" className="underline">
                            View More Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    {/* <Button onClick={onClick0}>I accept</Button> */}
                    <Button color="gray" onClick={onClose4}>
                      Back
                    </Button>
                  </Modal.Footer>
                </Modal>
              </React.Fragment>
            </div>

            <div className="col-start-3 col-end-4 text-center">
              <img src={imgGoods6} alt="icon2" />
              <button className="w-[80%] bg-white hover:bg-blue-600 text-white rounded">Quick View</button>
              <p className="my-2">{product ? product[5].name : null}</p>
              <p className="my-4">{product ? product[5].formattedDiscountedPrice : null}</p>
              <React.Fragment>
                <div className="flex justify-center">
                  <Button size="xs" outline={true} gradientDuoTone="purpleToPink" onClick={onClick5}>
                    Add to Card
                  </Button>
                </div>
                <Modal show={show5} onClose={onClose5} size="4xl">
                  <Modal.Body>
                    <div className="space-y-6 grid grid-cols-8 text-mono">
                      <img src={imgGoods6} alt="" className=" col-start-1 col-end-5 text-base leading-relaxed text-gray-500 dark:text-gray-400" />

                      <div className=" col-start-5 col-end-9 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <h2 className="text-2xl">{newArriveItem5.name}</h2>
                        <p className="my-4">{newArriveItem5.formattedDiscountedPrice}</p>
                        <div className="flex items-center">
                          <label className="">
                            <input className="mr-2" type="radio" name="color" value="dark" checked={selectedColor5 === "dark"} onChange={handleColorChange} />
                            ลายไม้หินอ่อน
                          </label>
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

                        <Button size="lg" outline={true} gradientDuoTone="purpleToPink" onClick="">
                          Add to Card
                        </Button>
                        <div className="mt-6 text-sm">
                          <a href="" className="underline">
                            View More Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    {/* <Button onClick={onClick0}>I accept</Button> */}
                    <Button color="gray" onClick={onClose5}>
                      Back
                    </Button>
                  </Modal.Footer>
                </Modal>
              </React.Fragment>
            </div>

            <div className="col-start-4 col-end-5 text-center">
              <img src={imgGoods7} alt="icon3" />
              <button className="w-[80%] bg-white hover:bg-blue-600 text-white rounded">Quick View</button>
              <p className="my-2">{product ? product[0].name : null}</p>
              <p className="my-4">{product ? product[0].formattedDiscountedPrice : null}</p>
              <React.Fragment>
                <div className="flex justify-center">
                  <Button size="xs" outline={true} gradientDuoTone="purpleToPink" onClick={onClick0}>
                    Add to Card
                  </Button>
                </div>
                <Modal show={show0} onClose={onClose0} size="4xl">
                  <Modal.Body>
                    <div className="space-y-6 grid grid-cols-8 text-mono">
                      <img src={imgGoods7} alt="" className=" col-start-1 col-end-5 text-base leading-relaxed text-gray-500 dark:text-gray-400" />

                      <div className=" col-start-5 col-end-9 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <h2 className="text-2xl">{newArriveItem0.name}</h2>
                        <p className="my-4">{newArriveItem0.formattedDiscountedPrice}</p>
                        <div className="flex items-center">
                          <label className="">
                            <input className="mr-2" type="radio" name="color" value="red" checked={selectedColor === "red"} onChange={handleColorChange} />
                            ลายไม้หินอ่อน-สีฟ้า
                          </label>
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

                        <Button size="lg" outline={true} gradientDuoTone="purpleToPink" onClick="">
                          Add to Card
                        </Button>
                        <div className="mt-6 text-sm">
                          <a href="" className="underline">
                            View More Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    {/* <Button onClick={onClick0}>I accept</Button> */}
                    <Button color="gray" onClick={onClose0}>
                      Back
                    </Button>
                  </Modal.Footer>
                </Modal>
              </React.Fragment>
            </div>

            <div className=" col-start-5 col-end-6 text-center">
              <img src={imgGoods8} alt="icon4" />
              <button className="w-[80%] bg-white hover:bg-blue-600 text-white rounded">Quick View</button>
              <p className="my-2">{product ? product[1].name : null}</p>
              <p className="my-4">{product ? product[1].formattedDiscountedPrice : null}</p>
              <React.Fragment>
                <div className="flex justify-center">
                  <Button size="xs" outline={true} gradientDuoTone="purpleToPink" onClick={onClick1}>
                    Add to Card
                  </Button>
                </div>
                <Modal show={show1} onClose={onClose1} size="4xl">
                  <Modal.Body>
                    <div className="space-y-6 grid grid-cols-8 text-mono">
                     
                        <img src={imgGoods8} alt="" className=" col-start-1 col-end-5 text-base leading-relaxed text-gray-500 dark:text-gray-400" />
                  

                      <div className=" col-start-5 col-end-9 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <h2 className="text-2xl">{newArriveItem1.name}</h2>
                        <p className="my-4">{newArriveItem1.formattedDiscountedPrice}</p>
                        <div className="flex items-center">
                          <label className="">
                            <input className="mr-2" type="radio" name="color" value="blue" checked={selectedColor1 === "blue"} onChange={handleColorChange} />
                            ลาย Polkadot - สีส้ม
                          </label>
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

                        <Button size="lg" outline={true} gradientDuoTone="purpleToPink" onClick="">
                          Add to Card
                        </Button>
                        <div className="mt-6 text-sm">
                          <a href="" className="underline">
                            View More Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    {/* <Button onClick={onClick0}>I accept</Button> */}
                    <Button color="gray" onClick={onClose1}>
                      Back
                    </Button>
                  </Modal.Footer>
                </Modal>
              </React.Fragment>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default ProductSlider;
