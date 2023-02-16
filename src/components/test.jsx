import React from "react";
import imgDep from "../assets/img/departure.png";
import imgArr from "../assets/img/landing.png";
import imgTransfer from "../assets/img/transfer.png";
import User from "../assets/img/user.png";
import Window from "../assets/img/window.png";
import imgCalenda from "../assets/img/calenda.png";
import { Form, Button, DatePicker } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import { useBetween } from "use-between";
import Share from "../Page/Share";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { useBooking } from "../context/BookingContext";

import { EncryptStorage } from "encrypt-storage";
export const encryptStorage1 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function Header() {
  const { account } = useBetween(Share);
  const { ownerAddress, setOwnerAddress } = useBetween(Share);
  const { tokenID, setTokenID } = useBetween(Share); //id ที่เป็น obj จากการเลือก NFT ID ส่งไปหน้า contractInfo
  const { opensea, setOpensea } = useBetween(Share);
  const { share, setShare } = useBetween(Share);
  const { info, setInfo } = useBetween(Share);
  const { triptype, setTriptype } = useBetween(Share);
  const { checkOpenseaAPI, setCheckOpenseaAPI } = useBetween(Share);

  const dateFormat = "YYYY-MM-DD";
  const [form] = Form.useForm();
  const collectionContract = "0xed8d418ebca3fb4afe09f0ce1368cac4db55eacc";
  let navigate = useNavigate();

  const [data, setData] = useState([]);

  const { setDataSeclect } = useBooking();
  const { setDataResponse } = useBooking();

  const [CID, setCID] = useState("");
  const [metaData, setMetaData] = useState([]);
  const [status, setStatus] = useState(""); //เช็คเรื่องของ NFT ที่ถูกลงทะเบียนแล้ว
  // const [regised, setRegised] = useState(false)
  const [contract, setContract] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    setTimeout(() => {
      onValuesChange();
    }, 500);
  }, []);

  const checkPNR = async () => {
    await axios
      .get(`http://localhost:3001/read/single/${tokenID.dna}`, {
        //Get token จาก server (localhost:3001)
      })
      .then((res) => {
        if (res.data.length > 0) {
          {
            axios
              .get(`http://localhost:3001/status/single/${tokenID.dna}`, {
                //Get token จาก server (localhost:3001)
              })
              .then((res) => {
                // console.log(res.data);
                setStatus(res.data[0].active);
                // console.log("พบ PNR ออกตั๋วไม่ได้");
              });
          }
        } else {
          setStatus(false);
        }
      });
  };
  checkPNR();

  const onSubmit = async (data) => {
    setDataSeclect(data);
    encryptStorage1.setItem("access_", data);
    encryptStorage1.setItem("airport_", tokenID);

    if (checkOpenseaAPI === contract) {
      // setRegised(true)
    } else {
      alert(
        "ไม่มี Transaction จาก Opensea API กรุณาติดต่อเจ้าหน้าที่หรือทำการตรวจสอบ Tracsaction บน Blockchain อีกครั้ง"
      );
      window.location.reload();
    }
    if (status === 0) {
      alert("NFT is Ticketed Check your NFT Ticket agian");
      // setRegised(false)
    } else {
      data.airline = [data.airline];
      data.returnDate = moment(data.returnDate).format("YYYY-MM-DD");
      data.departDate = moment(data.departDate).format("YYYY-MM-DD");
      data.child = Number(data.child);
      data.infant = Number(data.infant);
      data.adult = Number(data.adult);
      setLoading(true);

      await axios
        .post("http://localhost:3001/accesstoken", {
          //Get token จาก server (localhost:3001)
        })
        .then((res) => {
          // console.log(res.data.accessToken);
          axios
            .post(
              "http://localhost:3001/searchflight",
              {
                body: data,
                accessToken: res.data.accessToken,
              },
              {
                headers: res.data.accessToken,
              }
            )
            .then((dataSearch) => {
              console.log(dataSearch);
              setDataResponse(dataSearch);
              encryptStorage1.setItem("dataSearch", dataSearch);
              setShare(dataSearch);
              setInfo(data);
              setTimeout(() => {
                if (share != null) {
                  setLoading(false);
                }
                navigate("/Booking", { replace: true }), 8000;
              });
            });
        }, [])
        .catch((err) => console.error(err));
    }
  };

  const handleTriptype = (e) => {
    setTriptype(e.target.value);
  };

  const onValuesChange = () => {
    // value.nftID = Number(value.nftID)
    // const values = +e.target.value;

    const options = { method: "GET" };
    fetch(
      `https://testnets-api.opensea.io/api/v1/assets?owner=${account}&token_ids=${tokenID.edition}&asset_contract_address=${collectionContract}&order_direction=desc&offset=0&limit=30&include_orders=false`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        response.assets == [] ? null : setCheckOpenseaAPI(response.assets[0].asset_contract.address);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3001/pinata`, {
          //Get token จาก server (localhost:3001)
        })
        .then((res) => {
          setCID(res.data[0].tel);
        });
    };
    fetchData();
  }, []);

  const connect = async () => {
    getData();
  };

  useEffect(() => {
    if (account) {
      connect();
    }
  }, [account]);

  const getData = async () => {
    const options = { method: "GET", headers: { Accept: "Application/json" } };

    await fetch(
      `https://testnets-api.opensea.io/api/v1/assets?owner=${account}&asset_contract_address=${collectionContract}&order_direction=desc&offset=0&limit=30&include_orders=false`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let filter = response.assets;
        if (filter.length == 0) {
          setContract("");
        } else {
          setData(filter);
          // console.log(filter);
          // console.log(filter[0].asset_contract.address);
          setOpensea(filter);
          setContract(filter[0].asset_contract.address);
          setOwnerAddress(account);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleAccountsChanged = () => {
    window.ethereum.on("accountsChanged", (newAccount, string) => {
      window.location.reload();
    });
  };

  useEffect(() => {
    handleAccountsChanged();
  }, [account]);

  // console.log(loading);

  return (
    <div className="bg-map">
      {loading ? (
        <div className="flex justify-center h-screen place-items-center bg-black opacity-70">
          <SyncLoader color={"#36d7b7"} loading={loading} size={20} />
        </div>
      ) : (
        <div className="w-screen h-screen bg-map text-center">
          {account === "" ? (
            <div className="font-light p-2 text-lg lg:text-2xl flex justify-center items-center container mx-auto h-[5rem] my-4 text-black ">
              {account === "" ? "Please connect Metamask (Ethereum Chain)" : null}
            </div>
          ) : null}

          {contract === collectionContract ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="justify-center">
                <div className="bg grid grid-cols-1 mx-[0.5rem] md:mx-[2rem]">
                  <div className="">
                    <div className="mx-4">
                      <div className="my-4 lg:grid lg:grid-rows-2 lg:grid-flow-col grid grid-rows-3 grid-flow-col">
                        <div className="flex justify-center items-center lg:flex lg:justify-center lg:mx-2 lg:my-2 lg:items-center lg:col-start-1 lg:row-end-2">
                          <img src={imgTransfer} width="25" className="mx-[1rem]" />
                          <select
                            className="text-center text-lg p-2 rounded-full w-[15rem]"
                            {...register("tripType", { required: true })}
                            aria-invalid={errors.tripType ? "true" : "false"}
                            onChange={handleTriptype}
                          >
                            {/* <option value="" disabled selected>
                              TypeTrip
                            </option> */}
                            {Object.keys(tokenID).length > 0
                              ? tokenID.TripType.map((el, index) => {
                                  return (
                                    <option key={index} value={el.value}>
                                      {el.tripType}
                                    </option>
                                  );
                                })
                              : ""}
                          </select>
                          {errors.tripType?.type === "required" && (
                            <p className="p-1 text-rose-900 text-2xl" role="alert">
                              *
                            </p>
                          )}
                        </div>

                        {/* <img src={User} width="25" className='mx-3' /> */}
                        <div className="flex justify-center items-center lg:flex lg:justify-center lg:items-center col-start-1 row-end-2 lg:col-start-2 lg:row-end-2">
                          <img src={User} width="25" className="mx-[1rem]" />
                          <select
                            className="text-center text-lg p-2 rounded-full w-[15rem]"
                            {...register("adult", { required: true })}
                            aria-invalid={errors.adult ? "true" : "false"}
                          >
                            {/* <option value="" disabled selected>adult</option>
                                                        <option value="0">0</option> */}
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                          {errors.adult?.type === "required" && (
                            <p className="p-1 text-rose-900 text-2xl" role="alert">
                              *
                            </p>
                          )}
                        </div>

                        {/* <img src="~/static/flight-search/Direction.png" width="25"> */}

                        {/* <img src={User} width="25" className='mx-3' /> */}
                        <div
                          className={
                            account
                              ? `hidden`
                              : "flex justify-center items-center lg:flex lg:justify-center lg:items-center col-start-1 row-end-4 lg:col-start-4 lg:row-end-2"
                          }
                        >
                          <img src={User} width="25" className="mx-[1rem]" />
                          <select
                            className="text-center text-lg p-2 rounded-full w-[15rem]"
                            {...register("infant", { required: true })}
                            aria-invalid={errors.infant ? "true" : "false"}
                          >
                            {/* <option value="" disabled selected>infant</option> */}
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                          {errors.infant?.type === "required" && (
                            <p className="p-1 text-rose-900 text-2xl" role="alert">
                              *
                            </p>
                          )}
                        </div>

                        <div
                          className={
                            account
                              ? `hidden`
                              : "flex justify-center items-center lg:flex lg:justify-center lg:items-center col-start-1 row-end-3 lg:col-start-3 lg:row-end-2"
                          }
                        >
                          <img src={User} width="25" className="mx-[1rem]" />
                          <select
                            className="text-center text-lg p-2 rounded-full w-[15rem]"
                            {...register("child", { required: true })}
                            aria-invalid={errors.child ? "true" : "false"}
                          >
                            {/* <option value="" disabled selected>child</option> */}
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                          {errors.child?.type === "required" && (
                            <p className="p-1 text-rose-900 text-2xl" role="alert">
                              *
                            </p>
                          )}
                        </div>

                        {/* <img src={Window} width="25" className='mr-3 lg:mx-3' /> */}
                        <div className="flex justify-center items-center lg:flex lg:justify-center lg:items-center lg:col-start-1 lg:row-end-3">
                          <img src={Window} width="25" className="mx-[1rem] my-[1rem]" />
                          <select
                            className="text-center text-lg p-2 rounded-full w-[15rem]"
                            {...register("svcClass", { required: true })}
                            aria-invalid={errors.svcClass ? "true" : "false"}
                          >
                            {/* <option value="" disabled selected>
                              Class
                            </option> */}
                            {Object.keys(tokenID).length > 0
                              ? tokenID.cabinClass.map((el, index) => {
                                  return (
                                    <option key={index} value={el.value}>
                                      {el.cabinClass_type}
                                    </option>
                                  );
                                })
                              : ""}
                          </select>
                          {errors.svcClass?.type === "required" && (
                            <p className="p-1 text-rose-900 text-2xl" role="alert">
                              *
                            </p>
                          )}
                        </div>

                        {/* <img src="~/static/flight-search/flight.png" width="25"> */}

                        {/* <img src={Window} width="25" className='mx-3' /> */}
                        <div className="flex justify-center items-center lg:flex lg:justify-center lg:items-center lg:col-start-3 lg:row-end-3">
                          <img src={Window} width="25" className="mx-[1rem] my-[1rem]" />
                          <select
                            className="text-center text-lg p-2 rounded-full w-[15rem]"
                            {...register("languageCode", { required: true })}
                            aria-invalid={errors.languageCode ? "true" : "false"}
                          >
                            {/* <option value="" disabled selected>Language</option> */}
                            <option value="en">English</option>
                            <option value="th">Thai</option>
                          </select>
                          {errors.languageCode?.type === "required" && (
                            <p className="p-1 text-rose-900 text-2xl" role="alert">
                              *
                            </p>
                          )}
                        </div>

                        <div className="flex justify-center items-center lg:flex lg:justify-center lg:items-center lg:col-start-2 lg:row-end-3">
                          <img src={Window} width="25" className="mx-[1rem] my-[1rem]" />
                          <select
                            className="text-center text-lg p-2 rounded-full w-[15rem]"
                            {...register("airline", { required: true })}
                            aria-invalid={errors.airline ? "true" : "false"}
                          >
                            <option value="ALL">All Airlines</option>
                            <option value="TG">Thai Airways International</option>
                            <option value="PG">Bangkok Airways</option>
                            <option value="WE">Thai Smaile</option>
                            <option value="NH">Thai Nippon Airways</option>
                          </select>

                          {errors.airline?.type === "required" && (
                            <p className="p-1 text-rose-900 text-2xl" role="alert">
                              *
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center py-2 my-1 mx-4 bg-white border-4 border-black rounded-full">
                      <div className="w-1/2 border-r-4 border-black">
                        {/* <img src={imgDep} width="25" /> */}
                        <div className="flex justify-start items-center">
                          <img src={imgDep} width="25" className="mx-[1rem] my-[1rem]" />
                          <select
                            className="text-center p-2 border lg:ml-[10rem] lg:mr-[0.5rem] rounded-full w-[15rem]"
                            {...register("originCode", { required: true })}
                            aria-invalid={errors.originCode ? "true" : "false"}
                          >
                            {/* <option value="" disabled selected>
                              Departure Terminal
                            </option> */}
                            {Object.keys(tokenID).length > 0
                              ? tokenID.Departure.map((el, index) => {
                                  return (
                                    <option key={index} value={el.value}>
                                      {el.AirportName}
                                    </option>
                                  );
                                })
                              : ""}
                          </select>
                          {errors.originCode?.type === "required" && (
                            <p className="p-1 text-rose-900 text-2xl" role="alert">
                              *
                            </p>
                          )}
                        </div>
                      </div>

                      {
                        <div className="w-1/2 ">
                          {/* <img src={imgArr} width="25" /> */}
                          <div className="flex justify-start items-center mr-4">
                            <img src={imgArr} width="25" className="mx-[1rem] my-[1rem]" />
                            <select
                              className="text-center p-2 border mx-auto lg:ml-[10rem] lg:mr-[0.5rem] rounded-full w-[15rem]"
                              {...register("destinationCode", {
                                required: true,
                              })}
                              aria-invalid={errors.destinationCode ? "true" : "false"}
                            >
                              {/* <option value="" disabled selected>
                                Arrival Terminal
                              </option> */}
                              {Object.keys(tokenID).length > 0
                                ? tokenID.Arrival.map((el, index) => {
                                    return (
                                      <option key={index} value={el.value}>
                                        {el.AirportName}
                                      </option>
                                    );
                                  })
                                : ""}
                            </select>
                            {errors.destinationCode?.type === "required" && (
                              <p className="p-1 text-rose-900 text-2xl" role="alert">
                                *
                              </p>
                            )}
                          </div>
                        </div>
                      }
                    </div>

                    <div className="flex items-center py-2 my-1 mx-4 bg-white border-4 border-black rounded-full">
                      <div className="w-1/2 border-r-4 border-black">
                        {/* <img src={imgDep} width="25" /> */}
                        <div className="flex justify-center items-center mr-4">
                          <img src={imgCalenda} width="25" className="mx-[1rem] my-[1rem]" />
                          <Controller
                            control={control}
                            name="departDate"
                            render={({ field }) => (
                              <DatePicker
                                className="text-center"
                                placeholderText="Select date"
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                              />
                            )}
                          />
                        </div>
                      </div>

                      <div className="w-1/2 ">
                        {/* <img src={imgArr} width="25" /> */}
                        <div className="flex justify-center items-center mr-4">
                          <img src={imgCalenda} width="25" className="mx-[1rem] my-[1rem]" />
                          <Controller
                            control={control}
                            name="returnDate"
                            render={({ field }) => (
                              <DatePicker
                                className="text-center"
                                placeholderText="Select date"
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <div className="my-[2rem]">
                        <Button loading={loading} type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Header;
