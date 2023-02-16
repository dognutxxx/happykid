import React from "react";
import { usePnrContext } from "../context/PnrContext";
import "antd/dist/antd.css";
import moment from "moment";
import { useBetween } from "use-between";
import Share from "../Page/Share";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { useBooking } from "../context/BookingContext";
import CardShowNFT from "./card/CardShowNFT";
import { TextInput, Label, Select } from "flowbite-react";
import { EncryptStorage } from "encrypt-storage";
import TableBooking from "./card/TableBooking";
import takeoff from "../assets/img/takeoff.png";
import landing from "../assets/img/landing.png";
import airline_img from "../assets/img/airline.png";
import seat from "../assets/img/takeoff.png";

export const encryptStorage1 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function Header({onCloseModal}) {
  const { account } = useBetween(Share);
  const { ownerAddress, setOwnerAddress } = useBetween(Share);
  const { tokenID, setTokenID } = useBetween(Share); //id ที่เป็น obj จากการเลือก NFT ID ส่งไปหน้า contractInfo
  const { opensea, setOpensea } = useBetween(Share);
  const { share, setShare } = useBetween(Share);
  const { info, setInfo } = useBetween(Share);
  const { triptype, setTriptype } = useBetween(Share);
  const { checkOpenseaAPI, setCheckOpenseaAPI } = useBetween(Share);
  const { image, setImage } = useBetween(Share);
  
  const { tripType, setTripType } = usePnrContext("R");

  
  const { adult, setAdult } = usePnrContext("");
  const { infant, setInfant } = usePnrContext("");
  const { child, setChild } = usePnrContext("");
  const { svcClass, setSvcClass } = usePnrContext("");
  const { languageCode, setLanguageCode } = usePnrContext("");
  const { airline, setAirline } = usePnrContext("");
  const { originCode, setOriginCode } = usePnrContext("");
  const { destinationCode, setDestinationCode } = usePnrContext("");
  const { departDate, setDepartDate } = usePnrContext("");
  const { returnDate, setReturnDate } = usePnrContext("");
  const { rbdList, setRBDList } = usePnrContext([]);
  const { adultInfo, childInfo, infantInfo, setAdultInfo, setChildInfo, setInfantInfo } = usePnrContext([]);
  const { bookingPerson, setBookingPerson } = usePnrContext("");


  // console.log(originCode, destinationCode); //log ดูจังหวัด

  // console.log("1", tripType);
  // console.log("2", adult);
  // console.log("3", infant);
  // console.log("4", child);
  // console.log("5", svcClass);
  // console.log("6", languageCode);
  // console.log("7", airline);
  // console.log("8", originCode);
  // console.log("9", destinationCode);
  // console.log("10", departDate);
  // console.log("11", returnDate);
  // console.log("12", rbdList);

  // const azure_url = "https://back-nftant-uat.azurewebsites.net";
  const azure_url = " http://localhost:3001";

  const options = [
    { value: "CNX", label: "Chiang Mai" },
    { value: "BKK", label: "Bangkok" },
    { value: "CEI", label: "Chiang Rai" },
    { value: "HDY", label: "Hat Yai" },
    { value: "KKC", label: "Khon Kaen" },
    { value: "KBV", label: "Krabi" },
    { value: "LPT", label: "Lampang" },
    { value: "KOP", label: "Nakhon Phanom" },
    { value: "NNT", label: "Nan" },
    { value: "PHS", label: "Phitsanulok" },
    { value: "HKT", label: "Phuket" },
    { value: "USM", label: "Koh Samui" },
    { value: "THS", label: "Sukhothai" },
    { value: "URT", label: "Surat Thani" },
    { value: "TST", label: "Trang" },
    { value: "TDX", label: "Trat" },
    { value: "UBP", label: "Ubon Ratchathani" },
    { value: "UTH", label: "Udon Thani" },
  ];

  // const [departure, setDeparture] = useState(options[0].value);
  // const [returnOption, setReturnOption] = useState(options[0].value);

  const handleDepartureChange = (e) => {
    setOriginCode(e.target.value);
  };

  const handleReturnOptionChange = (e) => {
    setDestinationCode(e.target.value);
  };

  const filteredOptions = options.filter((option) => option.value !== originCode);

  const dataSelectDetail = {
    tripType: tripType,
    adult: adult,
    infant: infant,
    child: child,
    svcClass: svcClass,
    languageCode: languageCode,
    airline: [airline],
    originCode: originCode,
    destinationCode: destinationCode,
    departDate: departDate,
    returnDate: returnDate,
    rbdList: rbdList,
  };

  useEffect(() => {
    airlineControl();
  }, [airline]);

  const airlineControl = () => {
    if (airline === "TG") {
      setSvcClass(null);
      setRBDList(["W", "V"]);
    } else {
      setRBDList(null);
    }
  };

  const formatDate = (dateTime) => {
    let date = moment(dateTime).format("YYYY-MM-DD");
    return date;
  };

  const dateFormat = "YYYY-MM-DD";
  // const collectionContract = "0xed8d418ebca3fb4afe09f0ce1368cac4db55eacc";
  // const collectionContract = "0x9530E3088d9A00D5E4772244940728c327474361";
  // const collectionContract = "0xcD6Ead3fA6d767eE83e156Df64beACabF39EB938";
  const collectionContract = "0x7012f084b5F5886b7d6EA1247F080bBcDE39Ee5b";

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

  useEffect(() => {
    setTimeout(() => {
      // onValuesChange();
      fetchPNR();
    }, 500);
  }, []);

  const checkPNR = async () => {
    await axios
      // .get(`http://localhost:3001/tokenid_response?dna=${tokenID.dna}`, {
      .get(`${azure_url}/tokenid_response?dna=${tokenID.dna}`, {
        //Get token จาก server (localhost:3001)
      })
      .then((res) => {
        if (res.data.length > 0) {
          {
            axios
              // .get(`http://localhost:3001/tokenid_response?dna=${tokenID.dna}`, {
              .get(`${azure_url}/tokenid_response?dna=${tokenID.dna}`, {
                //Get token จาก server (localhost:3001)
              })
              .then((res) => {
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

  const checkAmountNFT = async () => {
    // await axios.get(`http://localhost:3001/sumAmountTicket?dna=${tokenID.dna}`).then((res) => {
    await axios.get(`${azure_url}/sumAmountTicket?dna=${tokenID.dna}`).then((res) => {
      if (res.data <= 8) {
        setBookingPerson(res.data);
      }
    });
  };
  checkAmountNFT();

  const onSubmit = async (e) => {
    e.preventDefault();
    setDataSeclect(dataSelectDetail);
    sessionStorage.setItem("dataSelectDetail",JSON.stringify(dataSelectDetail))
    encryptStorage1.setItem("access_", dataSelectDetail);
    encryptStorage1.setItem("airport_", tokenID);

    if (checkOpenseaAPI === contract) {
      // setRegised(true)
    } else {
      alert(
        "ไม่มี Transaction จาก Opensea API กรุณาติดต่อเจ้าหน้าที่หรือทำการตรวจสอบ Tracsaction บน Blockchain อีกครั้ง Heder_OG"
      );
      window.location.reload();
    }
    if (bookingPerson === 8) {
      alert("This item is limited to 8 person/NFT. Check your NFT Ticket agian");
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
        // .post("http://localhost:3001/accesstoken", {
        .post(`${azure_url}/accesstoken`, {
          //Get token จาก server (localhost:3001)
        })
        .then((res) => {
          // console.log(res.data.accessToken);
          axios
            .post(
              // "http://localhost:3001/searchflight",
              `${azure_url}/searchflight`,
              {
                body: dataSelectDetail,
                accessToken: res.data.accessToken,
              },
              {
                headers: res.data.accessToken,
              }
            )
            .then((dataSearch) => {
              onCloseModal();
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

  // const onValuesChange = async (el) => {
  //   const values = +el.token_id;

  //   if (values) {
  //     setTokenID(
  //       ...metaData.filter((el) => {
  //         return el.edition == +values;
  //       })
  //     );

  //     const options = { method: "GET" };
  //     await fetch(
  //       `https://testnets-api.opensea.io/api/v1/asset/${collectionContract}/${values}/?account_address=${account}`,
  //       options
  //     )
  //       .then((response) => {
  //         // .then(response => response.json())
  //         // .then(response => console.log(response))
  //         // .catch(err => console.error(err));
  //         console.log("response",response);
  //         if (response.status === 429) {
  //           // Handle error here, for example by displaying a message to the user
  //           console.error("Too many requests. Please try again later.");
  //           errorAlert("Too many requests. Please select NFT again and wait picture to show");
  //           return;
  //         }
  //         return response.json();
  //       })
  //       .then((response) => {
  //         setImage(response);
  //         encryptStorage1.setItem("NFT_", JSON.stringify(response));

  //         // Check if assets array is empty
  //         if (response) {
  //           setCheckOpenseaAPI(response.asset_contract?.address);
  //         } else {
  //          console.log(err);
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        // .get(`http://localhost:3001/pinata`, {
        .get(`${azure_url}/pinata`, {
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

  const dateCalenda = new Date().toISOString().split("T")[0];

  const datepicker = true;

  const [historyNFT, setHistoryNFT] = useState([]);
  // console.log(historyNFT);

  const fetchPNR = async () => {
    // await axios.get(`http://localhost:3001/fetchPNR?dna=${tokenID.dna}`).then((response) => {
    await axios.get(`${azure_url}/fetchPNR?dna=${tokenID.dna}`).then((response) => {
      setHistoryNFT(response.data);
    });
  };

  const [searchFlight, setSearchFlight] = useState(true);
  const adultPassenger = [];
  const childPassenger = [];
  const infantPassenger = [];

  // const checkRoundTrip = () => {
  //   if(tripType === "R") {
  //     return (adult*2) + (child*2) + (infant*2);
  //   } else {
  //     return adult + child + infant;
  //   }
  // }
  // console.log(checkRoundTrip());

  useEffect(() => {
    if (tripType != "R") {
      if (adult_ + child_ + infant_  + bookingPerson > 8) {
        // console.log("segment",adult_ + child_ + infant_  + bookingPerson );
        setSearchFlight(false);
        return alert("limited to 8 person/flight.");
      } else {
        if (adult < infant) {
          setSearchFlight(false);
          return alert("There must be at least as many adults as babies");
        } else {
          setSearchFlight(true);
        }

        // if (adult === 1 && infant > 0) {
        //   setSearchFlight(true);
        //   return alert("There cannot be children if there is only 1 adult.");
        // }

        if (adult_ + child_ + infant_ > 8) {
          setSearchFlight(false);
          return alert("The total number of adults, children, and babies cannot be greater than 8.");
        }

        setAdultInfo(adultPassenger);
        setChildInfo(childPassenger);
        setInfantInfo(infantPassenger);
      
      }
    } else {
      if (adult_ * 2 + child_ * 2 + infant_ * 2 + bookingPerson> 8) {
        // console.log("segment",adult_ * 2 + child_ * 2 + infant_ * 2 + bookingPerson );
        setSearchFlight(false);
        return alert("limited to 8 person/flight.");
      } else {
        if (adult < infant) {
          setSearchFlight(false);
          return alert("There must be at least as many adults as babies");
        } else {
          setSearchFlight(true);
        }

        // if (adult === 1 && infant > 0) {
        //   setSearchFlight(true);
        //   return alert("There cannot be children if there is only 1 adult.");
        // }

        if (adult_ * 2 + child_ * 2 + infant_ * 2 > 8) {
          setSearchFlight(false);
          return alert("The total number of adults, children, and babies cannot be greater than 8.");
        }

        setAdultInfo(adultPassenger);
        setChildInfo(childPassenger);
        setInfantInfo(infantPassenger);
      }
    }
  }, [adult, child, infant, tripType]);

 

  const child_ = Number(child);
  const infant_ = Number(infant);
  const adult_ = Number(adult);

  for (let i = 1; i <= adult_; i++) {
    adultPassenger.push({
      id: Number(i),
      paxType: "ADT",
      title: "Mr",
      firstname: "",
      middlename: "",
      lastname: "",
      birthday: "",
      email: "",
      telNo: "",
      passportNumber: "",
      passportIssuingDate: "",
      passportExpiryDate: "",
      passportIssuingCountry: "",
      passportNationality: "",
      frequencyFlyerAirline: null,
      frequencyFlyerNumber: null,
      seatRequest: null,
      mealRequest: null,
      travelWithAdultID: 0,
      netRefund: 0,
      agentRefund: 0,
      refundAmount: 0,
      tickNoRefund: null,
      remarkRefund: null,
      StatusRefund: false,
      netReissue: 0,
      agentReissue: 0,
      reissueSelling: 0,
      tickNoReissueOld: null,
      tickNoReissueNew: null,
      remarkReissue: null,
      StatusReissue: false,
    });
  }

  for (let i = 1; i <= child_; i++) {
    childPassenger.push({
      id: Number(i),
      paxType: "CHD",
      title: "MSTR",
      firstname: "",
      middlename: "",
      lastname: "",
      birthday: "",
      email: "",
      telNo: "",
      passportNumber: "",
      passportIssuingDate: "",
      passportExpiryDate: "",
      passportIssuingCountry: "",
      passportNationality: "",
      frequencyFlyerAirline: null,
      frequencyFlyerNumber: null,
      seatRequest: null,
      mealRequest: null,
      travelWithAdultID: 0,
      netRefund: 0,
      agentRefund: 0,
      refundAmount: 0,
      tickNoRefund: null,
      remarkRefund: null,
      StatusRefund: false,
      netReissue: 0,
      agentReissue: 0,
      reissueSelling: 0,
      tickNoReissueOld: null,
      tickNoReissueNew: null,
      remarkReissue: null,
      StatusReissue: false,
    });
  }

  for (let i = 1; i <= infant_; i++) {
    infantPassenger.push({
      id: Number(i),
      paxType: "INF",
      title: "MSTR",
      firstname: "",
      middlename: "",
      lastname: "",
      birthday: "",
      email: "",
      telNo: "",
      passportNumber: "",
      passportIssuingDate: "",
      passportExpiryDate: "",
      passportIssuingCountry: "",
      passportNationality: "",
      frequencyFlyerAirline: null,
      frequencyFlyerNumber: null,
      seatRequest: null,
      mealRequest: null,
      travelWithAdultID: 0,
      netRefund: 0,
      agentRefund: 0,
      refundAmount: 0,
      tickNoRefund: null,
      remarkRefund: null,
      StatusRefund: false,
      netReissue: 0,
      agentReissue: 0,
      reissueSelling: 0,
      tickNoReissueOld: null,
      tickNoReissueNew: null,
      remarkReissue: null,
      StatusReissue: false,
    });
  }

  return (
    <div className="bg-map2 ">
      {loading ? (
        <div className="flex justify-center h-screen place-items-center bg-black opacity-70">
          <SyncLoader color={"#36d7b7"} loading={loading} size={20} />
        </div>
      ) : (
        <div
          className={
            account ? `grid grid-cols-12 bg-map2 lg:mx-20 sm:ml-2 rounded-3xl mt-8 shadow-2xl border` : `hidden`
          }
        >
          <div className="col-start-2 col-end-5 my-4">
            {tokenID && (
              <span className="">
                <CardShowNFT
                  name={tokenID.name}
                  collection={tokenID.Campaign}
                  departure={tokenID.Departure}
                  arrival={tokenID.Arrival}
                  description={tokenID.description}
                  Class={tokenID.cabinClass}
                  src={image.image_thumbnail_url}
                  dna={tokenID.dna}
                  bookingPerson={bookingPerson}
                />
              </span>
            )}
          </div>

          <div className="col-start-5 col-end-12 my-4 ml-8">
            <h1 className="text-xl mb-4 font-bold">BOOK YOUR FLIGHT</h1>
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-12 gap-4 shadow p-2 rounded-2xl">
                <div className="col-start-1 col-end-5">
                  <div id="select" className="">
                    <div className="">
                      <Label htmlFor="small" value="Trip type" />
                    </div>
                    <Select
                      id="small"
                      required={true}
                      sizing=""
                      onChange={(e) => {
                        setTripType(e.target.value);
                      }}
                    >
                      {Object.keys(tokenID).length > 0
                        ? tokenID.TripType.map((el, index) => {
                            return (
                              <option key={index} value={el.value}>
                                {el.tripType}
                              </option>
                            );
                          })
                        : ""}
                    </Select>
                  </div>
                </div>

                <div className="col-start-5 col-end-9" hidden>
                  <div id="select">
                    <div className="">
                      <Label htmlFor="small" value="Languages" />
                    </div>
                    <Select
                      id="small"
                      required={true}
                      sizing=""
                      onChange={(e) => {
                        setLanguageCode(e.target.value);
                      }}
                    >
                      <option value="en">English</option>
                      <option value="th">Thai</option>
                    </Select>
                  </div>
                </div>

                <div className="col-start-1 col-end-7">
                  <div id="select">
                    <div className="flex items-center">
                      {/* <img src="assets/img/takeoff.png" alt="takeoff" className="mx-2 my-1" /> */}
                      <img src={takeoff} alt="takeoff" className="mx-2 my-1" />

                      <Label htmlFor="small" value="From" />
                    </div>
                    {/* <Select
                      id="small"
                      required={true}
                      sizing=""
                      onChange={(e) => {
                        setOriginCode(e.target.value);
                      }}
                    >
                      {Object.keys(tokenID).length > 0
                        ? tokenID.Departure.map((el, index) => {
                            return (
                              <option key={index} value={el.value}>
                                {el.AirportName}
                              </option>
                            );
                          })
                        : ""}
                    </Select> */}
                    <Select id="small" required={true} sizing="" value={originCode} onChange={handleDepartureChange}>
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>

                <div className="col-start-7 col-end-13">
                  <div id="select">
                    <div className="flex items-center">
                      <img src={landing} alt="landing" className="mx-2 my-1" />
                      <Label htmlFor="small" value="To" />
                    </div>
                    {/* <Select
                      id="small"
                      required={true}
                      sizing=""
                      onChange={(e) => {
                        setDestinationCode(e.target.value);
                      }}
                    >
                      {Object.keys(tokenID).length > 0
                        ? tokenID.Arrival.map((el, index) => {
                            return (
                              <option key={index} value={el.value}>
                                {el.AirportName}
                              </option>
                            );
                          })
                        : ""}
                    </Select> */}
                    <Select
                      id="small"
                      required={true}
                      sizing=""
                      value={destinationCode}
                      onChange={handleReturnOptionChange}
                    >
                      {" "}
                      {filteredOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>

                <div className="col-start-1 col-end-7">
                  <div className="">
                    <Label htmlFor="small" value="Departure Date" />
                  </div>
                  <TextInput
                    id="small"
                    type="date"
                    min={dateCalenda}
                    name="date"
                    max=""
                    sizing=""
                    required={true}
                    onChange={(e) => setDepartDate(e.target.value)}
                  />
                </div>

                {tripType === "R" ? (
                  <div className="col-start-7 col-end-13">
                    <div className="">
                      <Label htmlFor="small" value="Return Date" />
                    </div>
                    <TextInput
                      id="small"
                      type="date"
                      sizing=""
                      min={dateCalenda}
                      max=""
                      required={true}
                      onChange={(e) => setReturnDate(e.target.value)}
                    />
                  </div>
                ) : null}

                <div className="col-start-1 col-end-4">
                  <div id="select">
                    <div className="">
                      <Label htmlFor="small" value="adult (12+ years old)" />
                    </div>
                    <Select
                      id="small"
                      required={true}
                      sizing=""
                      onChange={(e) => {
                        setAdult(e.target.value);
                      }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </Select>
                  </div>
                </div>

                <div className="col-start-4 col-end-7">
                  <div id="select">
                    <div className="">
                      <Label htmlFor="small" value="child (2-12 years old)" />
                    </div>
                    <Select
                      id="small"
                      required={true}
                      sizing=""
                      onChange={(e) => {
                        setChild(e.target.value);
                      }}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </Select>
                  </div>
                </div>

                <div className="col-start-7 col-end-10">
                  <div id="select">
                    <div className="">
                      <Label htmlFor="small" value="infant (0-2 years old)" />
                    </div>
                    <Select
                      id="small"
                      required={true}
                      sizing=""
                      onChange={(e) => {
                        setInfant(e.target.value);
                      }}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </Select>
                  </div>
                </div>

                <div className="col-start-1 col-end-7">
                  <div id="select">
                    <div className="flex  items-center">
                      <img src={airline_img} alt="airline" className="mx-2 my-2" />
                      <Label htmlFor="small" value="Airlines" />
                    </div>
                    <Select
                      id="small"
                      required={true}
                      sizing=""
                      onChange={(e) => {
                        setAirline(e.target.value);
                      }}
                    >
                      <option value="ALL">All Airlines</option>
                      <option value="TG">Thai Airways International</option>
                    </Select>
                  </div>
                </div>

                {airline === "TG" ? null : (
                  <div className="col-start-7 col-end-13">
                    <div id="select">
                      <div className="flex  items-center">
                        <img src={seat} alt="seat" className="mx-2 my-1" />
                        <Label htmlFor="small" value="Class" />
                      </div>
                      <Select
                        id="small"
                        required={true}
                        sizing=""
                        onChange={(e) => {
                          setSvcClass(e.target.value);
                        }}
                      >
                        {Object.keys(tokenID).length > 0
                          ? tokenID.cabinClass.map((el, index) => {
                              return (
                                <option key={index} value={el.value}>
                                  {el.cabinClass_type}
                                </option>
                              );
                            })
                          : ""}
                      </Select>
                    </div>
                  </div>
                )}

                {searchFlight === true ? (
                  <div className="flex gap-4 col-start-4 col-end-10 my-4 p-2">
                    <button
                      className="md:w-[200%] lg:w-[100%]  border rounded-full bg-gradient-to-r from-[#3D73EB] to-[#DE8FFF] h-[50px] sm:text-sm lg:text-lg hover:shadow-lg"
                      type="submit"
                    >
                      Search Flight
                    </button>

                    {/* <button
                      className="md:w-[200%] lg:w-[100%] border rounded-full  h-[50px] sm:text-sm lg:text-lg hover:shadow-lg"
                      type="button"
                      // onClick={() => window.location.href = "http://127.0.0.1:5173/"}
                      onClick={onCloseModal}
                    >
                      Back
                    </button> */}
                  </div>
                ) : (
                  <div className="col-start-5 col-end-9 my-4">
                    <button
                      disabled
                      className="w-[100%] border rounded-full bg-gray-200 h-[50px] text-lg text-gray-50"
                      type="submit"
                    >
                      Search Flight
                    </button>
                  </div>
                )}
              </div>
            </form>

            {/* <div className="my-4">
              <TableBooking historyNFT={historyNFT} />
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
