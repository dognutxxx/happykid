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
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import Swal from "sweetalert2";
import { ethers } from "ethers";

import CardMyNFT from "./card/CardMyNFT";
import CardShowNFT from "./card/CardShowNFT";

import { useBooking } from "../context/BookingContext";

import { EncryptStorage } from "encrypt-storage";
export const encryptStorage1 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function Header() {
  const { account } = useBetween(Share);
  const { ownerAddress, setOwnerAddress } = useBetween(Share);
  const { tokenID, setTokenID } = useBetween(Share); //id ที่เป็น obj จากการเลือก NFT ID ส่งไปหน้า contractInfo
  console.log("tokenID",tokenID.edition);
  const { opensea, setOpensea } = useBetween(Share);
  const { share, setShare } = useBetween(Share);
  const { info, setInfo } = useBetween(Share);
  const { triptype, setTriptype } = useBetween(Share);
  const { image, setImage } = useBetween(Share);
  console.log("image",image);

  const dateFormat = "YYYY-MM-DD";
  const [form] = Form.useForm();
  const collectionContract = "0xed8d418ebca3fb4afe09f0ce1368cac4db55eacc";

  let navigate = useNavigate();

  const { setAccount } = useBetween(Share);
  const { logout, setLogout } = useBetween(Share);

  const pageLogin = async () => {
    if (!window.ethereum) {
      // Wallet not installed
      alert("Please install Metamask wallet !!");
      return;
    }

    if (window.ethereum) {
      // Listeners
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }

    await ethereum.enable();
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${Number(5).toString(16)}` }],
      // I have used Rinkeby, so switching to network ID 4
    });

    setLogout(true);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let res = await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    let message = "Please sign for identify your own wallet for NFT Ticket";
    let signature = await signer.signMessage(message);
    let address = ethers.utils.verifyMessage(message, signature);
    setAccount(address);

    localStorage.setItem("walletAddress", accounts[0]);
  };

  const LogoutMetamask = () => {
    setLogout(false);
    localStorage.clear();
    window.location.href = "http://127.0.0.1:5173/";
  };

  const [data, setData] = useState([]);

  const { setDataSeclect } = useBooking();
  const { setDataResponse } = useBooking();

  const { checkOpenseaAPI, setCheckOpenseaAPI } = useBetween(Share);
  console.log("checkOpenseaAPI",checkOpenseaAPI);


  const [CID, setCID] = useState("");
  const [metaData, setMetaData] = useState([]);
  const [status, setStatus] = useState(""); //เช็คเรื่องของ NFT ที่ถูกลงทะเบียนแล้ว
  const [contract, setContract] = useState("");
  console.log("contract",contract);
  const [loading, setLoading] = useState(false);

  const errorAlert = (message) => {
    Swal.fire({
      position: "top-center",
      icon: "warning",
      title: "",
      html: `<p style="font-size:25px">${message}</p>`,
      showConfirmButton: false,
      timer: 8000,
    });
  };

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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

  const handleTriptype = (e) => {
    setTriptype(e.target.value);
  };

  const onValuesChange = async (el) => {
    const values = +el.token_id;

    if (values) {
      setTokenID(
        ...metaData.filter((el) => {
          return el.edition == +values;
        })
      );

      const options = { method: "GET" };
      await fetch(
        `https://testnets-api.opensea.io/api/v1/asset/${collectionContract}/${values}/?account_address=${account}`,
        options
      )
        .then((response) => {
          // .then(response => response.json())
          // .then(response => console.log(response))
          // .catch(err => console.error(err));
          console.log("response",response);
          if (response.status === 429) {
            // Handle error here, for example by displaying a message to the user
            console.error("Too many requests. Please try again later.");
            errorAlert("Too many requests. Please select NFT again and wait picture to show");
            return;
          }
          return response.json();
        })
        .then((response) => {
          setImage(response);
          encryptStorage1.setItem("NFT_", JSON.stringify(response));

          // Check if assets array is empty
          if (response) {
            setCheckOpenseaAPI(response.asset_contract?.address);
          } else {
           console.log(err);
          }
        })
        .catch((err) => console.log(err));
    }
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
    await axios
      // .get("https://gateway.pinata.cloud/ipfs/QmSrzMEwwaSXXmtGptAPGN9w3Y2Z6fDC7GSvYeT2CnFVe6/_metadata.json")
      .get(`https://gateway.pinata.cloud/ipfs/${CID}`)
      .then((response) => {
        // console.log("Metadata", response);
        setMetaData(response.data);
      });
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
        // console.log("Filter", response);
        let filter = response.assets;
        if (filter.length == 0) {
          setContract("");
        } else {
          setData(filter);
          // console.log(filter);
          // console.log(filter[0].name);
          setOpensea(filter);
          setContract(filter[0].asset_contract.address);
          setOwnerAddress(account);
        }
      })
      .catch((err) => console.log(err));
  };

  const [bookingPerson, setBookingPerson] = useState(0);

  const checkAmountNFT = async () => {
    await axios.get(`http://localhost:3001/sumAmountTicket/${tokenID.dna}`).then((res) => {
      console.log("RES", res.data);
      if (res.data <= 10) {
        setBookingPerson(res.data);
        console.log("start");
      } else {
        console.log("error");
      }
    });
  };
  checkAmountNFT();

  const onSubmit = async (data) => {
    setDataSeclect(data);
    encryptStorage1.setItem("access_", data);
    encryptStorage1.setItem("airport_", tokenID);

    setTimeout(() => {
      if (checkOpenseaAPI === contract) {
      } else {
        alert(
          "ไม่มี Transaction จาก Opensea API กรุณาติดต่อเจ้าหน้าที่หรือทำการตรวจสอบ Tracsaction บน Blockchain อีกครั้ง Header_copy"
        );
        window.location.reload();
      }
    }, 10);

    if (bookingPerson === 10) {
      errorAlert("This item is limited to 10 person/NFT. Check your NFT Ticket agian");
    } else {
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
              // console.log(dataSearch);
              setDataResponse(dataSearch);

              encryptStorage1.setItem("dataSearch", dataSearch);
              setShare(dataSearch);
              setInfo(data);
              setTimeout(() => {
                if (share != null) {
                  setLoading(false);
                }
                navigate("/flightSearch", { replace: true });
              });
            });
        }, 1500)
        .catch((err) => console.error(err));
    }
  };

  const handleAccountsChanged = () => {
    if (!window.ethereum) {
      // Wallet not installed
      alert("Please install Metamask wallet !!");
      return;
    } else {
      window.ethereum.on("accountsChanged", (newAccount, string) => {
        window.location.reload();
      });
    }
  };

  useEffect(() => {
    handleAccountsChanged();
  }, [account]);

  return (
    <div className="bg-map2">
      {loading ? (
        <div className="flex justify-center h-screen place-items-center bg-black opacity-70">
          <SyncLoader color={"#36d7b7"} loading={loading} size={20} />
        </div>
      ) : (
        <div className="">
          <div className={account ? `hidden` : ``}>
            <div className="">
              <div className="grid h-screen place-items-center">
                {contract === collectionContract ? null : (
                  <div className="grid grid-cols-12 gap-8 w-[100%] text-center justify-center items-center">
                    <div className="col-start-4 col-end-10">
                      {logout === true ? (
                        <button className="bg-map h-[80px] w-[100%] text-3xl  rounded-3xl " onClick={LogoutMetamask}>
                          Signature request . . .
                        </button>
                      ) : (
                        <button
                          className="bg-map5 hover:bg-contain w-[100%] h-[80px] text-3xl  rounded-3xl border"
                          onClick={pageLogin}
                        >
                          Connect Wallet
                        </button>
                      )}
                    </div>

                    <p className="col-start-4 col-end-10">No have NFT Please click to mint</p>

                    <a
                      href="https://penguint-travel.web.app/"
                      target="_blank"
                      className="col-start-6 col-end-8 flex justify-center"
                    >
                      <p className="bg-gradient-to-r from-[#3D73EB] to-[#DE8FFF]  w-[100%] h-[50px] text-lg rounded-3xl flex justify-center items-center">
                        Mint Now
                      </p>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={account ? `grid grid-cols-12 bg-map lg:mx-72 sm:ml-2 rounded-3xl mt-8` : `hidden`}>
            <div className="col-start-2 col-end-4">
              <p className="font-bold text-xl p-4">LIBRARY</p>
            </div>
            <div className="col-start-4 col-end-8">
              <p className="font-bold text-base p-4 text-right ">You have amount : {data.length} NFT Ticket.</p>
            </div>
            <div className="col-start-2 col-end-8 my-6">
              {data.map((el, index) => (
                <CardMyNFT
                  key={index}
                  onClick={() => onValuesChange(el)}
                  name={el?.name}
                  src={el?.image_thumbnail_url}
                  id={el?.token_id}
                />
              ))}
            </div>
            <div className="col-start-9 col-end-12 my-8">
              {tokenID && (
                <span className="">
                  <CardShowNFT
                    name={tokenID?.name}
                    collection={tokenID?.Campaign}
                    departure={tokenID?.Departure}
                    arrival={tokenID?.Arrival}
                    description={tokenID?.description}
                    Class={tokenID?.cabinClass}
                    src={image?.image_thumbnail_url}
                    dna={tokenID?.dna}
                  />
                  {image && 
                  <div className="my-6">
                    <button
                      className="border rounded-full px-4 py-2 bg-white hover:bg-[#FF8C21]"
                      onClick={() => onSubmit(data)}
                    >
                      Let's go
                    </button>
                  </div> }
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
