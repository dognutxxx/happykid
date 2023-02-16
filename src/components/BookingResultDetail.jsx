import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { getAccess } from "../services/localStorage";
import moment from "moment";
import Swal from "sweetalert2";
import { useDepartureSelectedContext } from "../context/DepartureSelectedContext";
import { useReturnSelectedContext } from "../context/ReturnSelectedContext";
import { usePassengerContractInfoContext } from "../context/PassengerContractInfoContext";
import { useContractDetailContext } from "../context/ContractDetailContext";
import { useResultBookingObjContext } from "../context/ResultBookingObjContext";
import { useNavigate } from "react-router-dom";
import { useFinalDirectDepartureContext } from "../context/FinalDirectDepartureContext";
import { useFinalOneStopDepartureContext } from "../context/FinalOneStopDepartureContext";
import { useFinalDirectReturnContext } from "../context/FinalDirectReturnContext";
import { useFinalOneStopReturnContext } from "../context/FinalOneStopReturnContext";
import { usePnrContext } from "../context/PnrContext";
import SyncLoader from "react-spinners/SyncLoader";
import { Button, Modal, TextInput, Label, Select } from "flowbite-react";

import { EncryptStorage } from "encrypt-storage";
const encryptStorage2 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function contractInfo_copy() {
  const [status, setStatus] = useState(false);
  console.log("status",status);
  const [resBooking, setResBooking] = useState("");

  const accesstripType = localStorage.access_;
  const valueTypeTrip = encryptStorage2.decryptString(accesstripType);

  const access = JSON.parse(valueTypeTrip);
  console.log("acess", access);

  const typeType_ = JSON.parse(valueTypeTrip);
  const typeTrip = typeType_.tripType;
  console.log("typeTrip", typeTrip);

  const airport = localStorage.airport_;
  const valueAirport = encryptStorage2.decryptString(airport);

  const valueAirport_ = JSON.parse(valueAirport);

  const dna = valueAirport_.dna;

  const [loading, setLoading] = useState(false);

  //PNR
  const { setDataSearch } = usePnrContext();

  const {bookingPerson} = usePnrContext(0);

  const typeOfTrip = () => {
    if (typeTrip === "R") {
      return "Round";
    } else {
      return "One-Way";
    }
  };
  console.log(typeOfTrip());

  const adult = Number(access.adult)
  const child = Number(access.child)
  const infant = Number(access.infant)
  const count = adult + child + infant


  //Contract Detail
  const { inputTitleContract } = useContractDetailContext();
  const { inputFirstNameContract } = useContractDetailContext();
  const { inputMiddleNameContract } = useContractDetailContext();
  const { inputLastNameContract } = useContractDetailContext();
  const { inputDateOfBirthContract } = useContractDetailContext();
  const { inputNationalityContract } = useContractDetailContext();
  const { inputMobilePhoneContract } = useContractDetailContext();
  const { inputEmailContract } = useContractDetailContext();
  const { inputPassportNumberContract } = useContractDetailContext();
  const { inputCountryOfIssueContract } = useContractDetailContext();
  const { inputExpiryDateContract } = useContractDetailContext();

  //Passenger Detail
  const { inputTitle } = usePassengerContractInfoContext();
  const { inputFirstName } = usePassengerContractInfoContext();
  const { inputMiddleName } = usePassengerContractInfoContext();
  const { inputLastName } = usePassengerContractInfoContext();
  const { inputDateOfBirth } = usePassengerContractInfoContext();
  const { inputNationality } = usePassengerContractInfoContext();
  const { inputMobilePhone } = usePassengerContractInfoContext();
  const { inputEmail } = usePassengerContractInfoContext();
  const { inputPassportNumber } = usePassengerContractInfoContext();
  const { inputCountryOfIssue } = usePassengerContractInfoContext();
  const { inputIssueDate } = usePassengerContractInfoContext();
  const { inputExpiryDate } = usePassengerContractInfoContext();

  //Departure result
  const { airline } = useDepartureSelectedContext();
  const { timeDuration } = useDepartureSelectedContext();
  const { departureNameCity } = useDepartureSelectedContext();
  const { arriveNameCity } = useDepartureSelectedContext();
  const { departureCodeCity } = useDepartureSelectedContext();
  const { arriveCodeCity } = useDepartureSelectedContext();
  const { departureDateTime } = useDepartureSelectedContext();
  const { arriveDateTime } = useDepartureSelectedContext();
  const { src } = useDepartureSelectedContext();
  const { oneStopCity } = useDepartureSelectedContext();
  const { departureDateTimeSeq1 } = useDepartureSelectedContext();
  const { departureDateTimeSeq2 } = useDepartureSelectedContext();
  const { arriveCodeCitySeq1 } = useDepartureSelectedContext();

  //Return result
  const { airline2 } = useReturnSelectedContext();
  const { timeDuration2 } = useReturnSelectedContext();
  const { departureNameCity2 } = useReturnSelectedContext();
  const { arriveNameCity2 } = useReturnSelectedContext();
  const { departureCodeCity2 } = useReturnSelectedContext();
  const { arriveCodeCity2 } = useReturnSelectedContext();
  const { departureDateTime2 } = useReturnSelectedContext();
  const { arriveDateTime2 } = useReturnSelectedContext();
  const { src2 } = useReturnSelectedContext();
  const { oneStopCity2 } = useReturnSelectedContext();
  const { oneStopCodeCity2 } = useReturnSelectedContext();
  const { departureDateTimeSeq1_2 } = useReturnSelectedContext();
  const { departureDateTimeSeq2_2 } = useReturnSelectedContext();

  //ResultBookingObjContext
  const { onewayDirectObjBooking } = useResultBookingObjContext();
  const { onewayOneStopObjBooking } = useResultBookingObjContext();
  const { roundDir_DirObjBookingInfo } = useResultBookingObjContext();
  const { roundDir_OneObjBookingInfo } = useResultBookingObjContext();
  const { roundOne_OneObjBookingInfo } = useResultBookingObjContext();
  const { roundOne_DirObjBookingInfo } = useResultBookingObjContext();

  console.log("OneWay_Dir", onewayDirectObjBooking);
  console.log("OneWay_OneStop", onewayOneStopObjBooking);
  console.log("Round_Dir-Dir", roundDir_DirObjBookingInfo);
  console.log("Round_Dir-OneStop ", roundDir_OneObjBookingInfo);
  console.log("Round_OneStop-OneStop  ", roundOne_OneObjBookingInfo);
  console.log("Round_OneStop-Dir ", roundOne_DirObjBookingInfo);

  const { depDirectSeq_s1 } = useFinalDirectDepartureContext();
  const { depOneStopSeq_s1 } = useFinalOneStopDepartureContext();
  const { depOneStopSeq_s2 } = useFinalOneStopDepartureContext();
  const { returnDirectSeq_s1 } = useFinalDirectReturnContext();
  const { returnOneStopSeq_s1 } = useFinalOneStopReturnContext();
  const { returnOneStopSeq_s2 } = useFinalOneStopReturnContext();

  // console.log(depDirectSeq_s1);
  // console.log(depOneStopSeq_s1);
  // console.log(depOneStopSeq_s2);
  // console.log(returnDirectSeq_s1);
  // console.log(returnOneStopSeq_s1);
  // console.log(returnOneStopSeq_s2);

  const formatted_date = () => {
    var result = "";
    var d = new Date();
    result +=
      d.getFullYear() +
      "-" +
      (d.getMonth() + 1) +
      "-" +
      d.getDate() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      ":" +
      d.getSeconds();
    return result;
  };

  const totalTime = timeDuration?.slice(0, 2) + "hr " + timeDuration?.slice(2) + "m";
  const totalTime2 = timeDuration2?.slice(0, 2) + "hr " + timeDuration2?.slice(2) + "m";

  const checkPNR = async () => {
    await axios
      .get(`http://localhost:3001/read/single/${dna}`, {
        //Get token จาก server (localhost:3001)
      })
      .then((res) => {
        if (res.data.length === 0) {
          // console.log("Status OK");
        } else {
          {
            axios
              .get(`http://localhost:3001/status/single/${dna}`, {
                //Get token จาก server (localhost:3001)
              })
              .then((res) => {
                setStatus(res.data[0].active);
              });
          }
        }
      });
  };
  checkPNR();

  const findFlight = () => {
    if (onewayDirectObjBooking) {
      return onewayDirectObjBooking[0];
    } else if (onewayOneStopObjBooking) {
      return onewayOneStopObjBooking[0];
    } else if (roundDir_DirObjBookingInfo) {
      return roundDir_DirObjBookingInfo[0];
    } else if (roundDir_OneObjBookingInfo) {
      return roundDir_OneObjBookingInfo[0];
    } else if (roundOne_OneObjBookingInfo) {
      return roundOne_OneObjBookingInfo[0];
    } else if (roundOne_DirObjBookingInfo) {
      return roundOne_DirObjBookingInfo[0];
    } else {
      console.log("error");
    }
  };

  const apiBody = findFlight();

  const dataNFTDetail = localStorage.NFT_;
  const value_ = encryptStorage2.decryptString(dataNFTDetail);
  const nftImg = JSON.parse(value_).image_thumbnail_url;
  const nftName = JSON.parse(value_).name;

  let navigate = useNavigate();

  const wallet = localStorage.walletAddress;
  // const value = encryptStorage2.decryptString(wallet);

  const sucessAlert = (message) => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "success",
      html: `<p style="font-size:25px">${message}</p>`,
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const errorAlert = (message) => {
    Swal.fire({
      position: "top-center",
      icon: "error",
      title: "Something Wrong",
      html: `<p style="font-size:25px">${message}</p>`,
      showConfirmButton: false,
      timer: 10000,
    });
  };

  const valueTypeTrip_ = JSON.parse(valueTypeTrip);
  console.log(valueTypeTrip_);

  const findAirportCodeDep = () => {
    const airportDep = valueAirport_.Departure?.filter((el) => {
      return el.value === valueTypeTrip_.originCode;
    });
    return airportDep[0].AirportName;
  };
  console.log(findAirportCodeDep());

  const findAirportCodeArr = () => {
    const airportArr = valueAirport_.Arrival?.filter((el) => {
      return el.value === valueTypeTrip_.destinationCode;
    });
    return airportArr[0].AirportName;
  };
  console.log(findAirportCodeArr());

  const finalTicket = async () => {
    try {
      setLoading(true);
      const accessToken = await axios.post("http://localhost:3001/accesstoken");
      const dataSearch = await axios.post(
        "http://localhost:3001/bookingInfo",
        {
          body: apiBody,
          accessToken: accessToken.data.accessToken,
        },
        {
          headers: accessToken.data.accessToken,
        }
      );
      setDataSearch(dataSearch.data.recordLocator);

      if (bookingPerson <= 10) { 
        const pnr = await axios.post("http://localhost:3001/create", {
          pnr: `${dataSearch.data.recordLocator}`,
          dna: `${dna}`,
          datetime: `${formatted_date()}`,
          active: false,
          address: `${wallet}`,
          departureTrip: `${access.originCode}`,
          departureCity: `${findAirportCodeDep()}`,
          arrivalTrip: `${access.destinationCode}`,
          arrivalCity: `${findAirportCodeArr()}`,
          type: `${typeOfTrip()}`,
          person: `${count}`,
        });
        sucessAlert("การออกตั๋วเสร็จสิ้น");
        localStorage.clear();
        navigate("/finalticket", { replace: true });
      } else {
        localStorage.clear();
        errorAlert("Already NFT actived, Please contract admin or reserve again");
        navigate("/", { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [show, setShow] = useState();

  const onClick = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  const { adultInfo } = usePnrContext();
  const { childInfo } = usePnrContext();
  const { infantInfo } = usePnrContext();

  var adultsSection = [];
  for (let i = 0; i < adultInfo.length; i++) {
    console.log(i);
    adultsSection.push(
      <div>
        <div className="">
          <div className="my-4 block bg-map rounded-lg p-2">
            <Label htmlFor="small" value={`Adult passenger no. ${i + 1}`} />
          </div>
          <div className="flex w-full p-2 gap-6 ">
            <div id="select">
              <div className="font-semibold text-[#4E1311]">Name</div>
              {adultInfo[i]?.title} {adultInfo[i]?.firstName} {adultInfo[i]?.middlename} {adultInfo[i]?.lastname}
            </div>
          </div>

          <div className="flex w-full p-2 gap-12">
            <div>
              <div className="w-[100%] font-semibold text-[#4E1311]">Date of birth</div>
              {adultInfo[i]?.birthday}
            </div>

            <div>
              <div className="font-semibold text-[#4E1311]">Mobile Phone</div>

              {adultInfo[i]?.telNo}
            </div>
            <div>
              <div className="font-semibold text-[#4E1311]">Email</div>
              {adultInfo[i]?.email}
            </div>
          </div>

          {/* <div>
                      <div className="mb-2 block mt-4">
                        <Label htmlFor="small" value="Passport Number" />
                      </div>
                      <TextInput
                        id="small"
                        type="text"
                        sizing=""
                        required={true}
                        onChange={(e) => setInputPassportNumber(e.target.value)}
                      />
                      <p className="text-xs my-2">
                        For passengers below 18 years old, you may enter another valid ID number (e.g. birth
                        certificate, student ID) or date of birth (ddmmyyyy)
                      </p>
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="small" value="CountryIssue" />
                      </div>
                      <Select
                        id="small"
                        required={true}
                        sizing=""
                        onChange={(e) => setInputCountryOfIssue(e.target.value)}
                      >
                        <option disabled value="">
                          Country
                        </option>
                        <option value="TH">Thailand</option>
                        <option value="ENG">English</option>
                      </Select>
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="small" value="Issue Date" />
                      </div>
                      <TextInput
                        id="small"
                        type="date"
                        sizing=""
                        required={true}
                        onChange={(e) => setinputIssueDate(e.target.value)}
                      />
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="small" value="Expiry Date" />
                      </div>
                      <TextInput
                        id="small"
                        type="date"
                        sizing=""
                        required={true}
                        onChange={(e) => setinputExpiryDate(e.target.value)}
                      />
                    </div> */}
        </div>
        <hr></hr>
      </div>
    );
  }

  var childsSection = [];
  for (let i = 0; i < childInfo.length; i++) {
    console.log(i);
    childsSection.push(
      <div>
        <div className="">
          <div className="my-4 block bg-map rounded-lg p-2">
            <Label htmlFor="small" value={`child passenger no. ${i + 1}`} />
          </div>
          <div className="flex w-full p-2 gap-6 ">
            <div id="select">
              <div className="font-semibold text-[#4E1311]">Name</div>
              {childInfo[i]?.title} {childInfo[i]?.firstName} {childInfo[i]?.middlename} {childInfo[i]?.lastname}
            </div>
          </div>

          <div className="flex w-full p-2 gap-12">
            <div>
              <div className="w-[100%] font-semibold text-[#4E1311]">Date of birth</div>
              {childInfo[i]?.birthday}
            </div>

            <div>
              <div className="font-semibold text-[#4E1311]">Mobile Phone</div>

              {childInfo[i]?.telNo}
            </div>
            <div>
              <div className="font-semibold text-[#4E1311]">Email</div>
              {childInfo[i]?.email}
            </div>
          </div>

          {/* <div>
                      <div className="mb-2 block mt-4">
                        <Label htmlFor="small" value="Passport Number" />
                      </div>
                      <TextInput
                        id="small"
                        type="text"
                        sizing=""
                        required={true}
                        onChange={(e) => setInputPassportNumber(e.target.value)}
                      />
                      <p className="text-xs my-2">
                        For passengers below 18 years old, you may enter another valid ID number (e.g. birth
                        certificate, student ID) or date of birth (ddmmyyyy)
                      </p>
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="small" value="CountryIssue" />
                      </div>
                      <Select
                        id="small"
                        required={true}
                        sizing=""
                        onChange={(e) => setInputCountryOfIssue(e.target.value)}
                      >
                        <option disabled value="">
                          Country
                        </option>
                        <option value="TH">Thailand</option>
                        <option value="ENG">English</option>
                      </Select>
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="small" value="Issue Date" />
                      </div>
                      <TextInput
                        id="small"
                        type="date"
                        sizing=""
                        required={true}
                        onChange={(e) => setinputIssueDate(e.target.value)}
                      />
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="small" value="Expiry Date" />
                      </div>
                      <TextInput
                        id="small"
                        type="date"
                        sizing=""
                        required={true}
                        onChange={(e) => setinputExpiryDate(e.target.value)}
                      />
                    </div> */}
        </div>
        <hr></hr>
      </div>
    );
  }

  var infantsSection = [];
  for (let i = 0; i < infantInfo.length; i++) {
    console.log(i);
    infantsSection.push(
      <div>
        <div className="">
          <div className="my-4 block bg-map rounded-lg p-2">
            <Label htmlFor="small" value={`Infant passenger no. ${i + 1}`} />
          </div>
          <div className="flex w-full p-2 gap-6 ">
            <div id="select">
              <div className="font-semibold text-[#4E1311]">Name</div>
              {infantInfo[i]?.title} {infantInfo[i]?.firstName} {infantInfo[i]?.middlename} {infantInfo[i]?.lastname}
            </div>
          </div>

          <div className="flex w-full p-2 gap-12">
            <div>
              <div className="w-[100%] font-semibold text-[#4E1311]">Date of birth</div>
              {infantInfo[i]?.birthday}
            </div>

            <div>
              <div className="font-semibold text-[#4E1311]">Mobile Phone</div>

              {infantInfo[i]?.telNo}
            </div>
            <div>
              <div className="font-semibold text-[#4E1311]">Email</div>
              {infantInfo[i]?.email}
            </div>
          </div>

          {/* <div>
                      <div className="mb-2 block mt-4">
                        <Label htmlFor="small" value="Passport Number" />
                      </div>
                      <TextInput
                        id="small"
                        type="text"
                        sizing=""
                        required={true}
                        onChange={(e) => setInputPassportNumber(e.target.value)}
                      />
                      <p className="text-xs my-2">
                        For passengers below 18 years old, you may enter another valid ID number (e.g. birth
                        certificate, student ID) or date of birth (ddmmyyyy)
                      </p>
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="small" value="CountryIssue" />
                      </div>
                      <Select
                        id="small"
                        required={true}
                        sizing=""
                        onChange={(e) => setInputCountryOfIssue(e.target.value)}
                      >
                        <option disabled value="">
                          Country
                        </option>
                        <option value="TH">Thailand</option>
                        <option value="ENG">English</option>
                      </Select>
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="small" value="Issue Date" />
                      </div>
                      <TextInput
                        id="small"
                        type="date"
                        sizing=""
                        required={true}
                        onChange={(e) => setinputIssueDate(e.target.value)}
                      />
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="small" value="Expiry Date" />
                      </div>
                      <TextInput
                        id="small"
                        type="date"
                        sizing=""
                        required={true}
                        onChange={(e) => setinputExpiryDate(e.target.value)}
                      />
                    </div> */}
        </div>
        <hr></hr>
      </div>
    );
  }

  return (
    <div className="h-[100%] min-h-screen">
      {loading ? (
        <div className="bg-map flex justify-center h-screen place-items-center ">
          <SyncLoader className="" color={"#36d7b7"} loading={loading} size={20} />
        </div>
      ) : (
        <div className="grid grid-rows-1 mx-2 lg:mx-36">
          <div className="flex flex-row justify-between items-center">
            <p className="font-bold text-2xl mx-16 p-2">Flight Detail</p>
          </div>

          <div className="">
            <div className="border flex justify-center p-2 mx-4 lg:mx-16 my-auto">
              <div className="p-2 w-[300px] h-full">
                <>
                  <img className="w-full" src={nftImg} alt="" />
                </>
                <h2 className="my-4">NFT Ticket : {nftName} </h2>
              </div>

              <div className="border rounded-xl w-full p-2">
                <div className="text-lg">
                  <p className="bg-gray-100 text-[#FAA819] font-bold">Departure</p>
                  <p className="text-[#828282]">
                    {moment(access.departureDate).format("dddd")}, {moment(access.departureDate).format("DD-MMM-YYYY")}
                  </p>

                  {oneStopCity ? (
                    <p className="text-[#828282] font-bold text-start">One Stop Flight</p>
                  ) : (
                    <p className="text-[#828282] text-start font-bold">Direct Flight</p>
                  )}
                </div>
                <p className="text-lg text-[#828282]">{totalTime}</p>

                <div className="my-4">
                  <img className="" src={src} alt="" />
                  <div className="font-semibold">{airline}</div>
                </div>

                <div className="flex w-[100%] my-6 text-lg">
                  <div className="flex flex-col justify-between font-semibold w-[80px]">
                    <p className="">{departureDateTime}</p>
                    {oneStopCity ? <p className="">{departureDateTimeSeq1}</p> : <p className="">{arriveDateTime}</p>}
                  </div>
                  <div className="mx-2">
                    <svg width="33" height="113" viewBox="0 0 33 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16.5" cy="5" r="5" transform="rotate(90 16.5 5)" fill="#FAA819" />
                      <path d="M16.5 10L16.5 40" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M28.5071 44.4929C27.9132 43.899 26.8868 43.8406 25.538 44.324C24.6105 44.6565 23.6377 45.2137 23.1723 45.6792L19.4345 49.417L7.13066 47.4844L4 50.6151L14.2295 54.6219L10.9451 57.9064L6.28335 58.1794L4.04805 60.4147L9.10708 62.8558L7.6898 64.2731L8.7269 65.3102L10.1423 63.8948L12.5858 68.9514L14.8206 66.7166L15.0936 62.0549L18.4332 58.7153L22.4392 68.9428L25.5698 65.8121L23.6377 53.5107L27.3208 49.8276C27.7862 49.3622 28.3435 48.3893 28.676 47.4618C29.1594 46.1134 29.101 45.0867 28.5071 44.4929ZM6.62236 50.0671L7.64023 49.0492L18.1514 50.7001L15.3615 53.49L6.62236 50.0671ZM24.0051 65.3027L22.9873 66.3205L19.5651 57.5835L22.3545 54.794L24.0051 65.3027ZM27.2953 46.967C27.0151 47.7488 26.552 48.5223 26.2837 48.7906L13.6621 61.4123L13.3891 66.074L13.0083 66.4547L11.2407 62.7966L12.5157 61.5215L11.4786 60.4844L10.2057 61.7573L6.54575 59.9913L6.92603 59.6111L11.5877 59.3381L24.2094 46.7163C24.4777 46.448 25.2512 45.985 26.033 45.7047C26.9205 45.3865 27.3914 45.4515 27.47 45.53C27.5484 45.6086 27.6135 46.0794 27.2953 46.967Z"
                        fill="#FAA819"
                      />
                      <path
                        d="M16.5 72.9517L16.5 102.952"
                        stroke="#FAA819"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="16.5" cy="107.952" r="5" transform="rotate(90 16.5 107.952)" fill="#FAA819" />
                    </svg>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="flex font-semibold">
                      <p className="">{departureNameCity}</p>
                    </div>

                    <div className="flex font-semibold">
                      {oneStopCity ? (
                        <p className="">{oneStopCity}</p>
                      ) : (
                        <p className="font-semibold">{arriveNameCity}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between mx-16">
                    <p className="text-[#828282]">({departureCodeCity})</p>
                    {oneStopCity ? (
                      <p className="text-[#828282]">({arriveCodeCitySeq1})</p>
                    ) : (
                      <p className="text-[#828282]">({arriveCodeCity})</p>
                    )}
                  </div>
                </div>
                {oneStopCity ? (
                  <div className="flex w-[100%] my-6 text-lg">
                    <div className="flex flex-col justify-between font-semibold w-[81px]">
                      <p className="">{departureDateTimeSeq2}</p>
                      <p className="">{arriveDateTime}</p>
                    </div>
                    <div className="mx-2">
                      <svg width="33" height="113" viewBox="0 0 33 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16.5" cy="5" r="5" transform="rotate(90 16.5 5)" fill="#FAA819" />
                        <path d="M16.5 10L16.5 40" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                          d="M28.5071 44.4929C27.9132 43.899 26.8868 43.8406 25.538 44.324C24.6105 44.6565 23.6377 45.2137 23.1723 45.6792L19.4345 49.417L7.13066 47.4844L4 50.6151L14.2295 54.6219L10.9451 57.9064L6.28335 58.1794L4.04805 60.4147L9.10708 62.8558L7.6898 64.2731L8.7269 65.3102L10.1423 63.8948L12.5858 68.9514L14.8206 66.7166L15.0936 62.0549L18.4332 58.7153L22.4392 68.9428L25.5698 65.8121L23.6377 53.5107L27.3208 49.8276C27.7862 49.3622 28.3435 48.3893 28.676 47.4618C29.1594 46.1134 29.101 45.0867 28.5071 44.4929ZM6.62236 50.0671L7.64023 49.0492L18.1514 50.7001L15.3615 53.49L6.62236 50.0671ZM24.0051 65.3027L22.9873 66.3205L19.5651 57.5835L22.3545 54.794L24.0051 65.3027ZM27.2953 46.967C27.0151 47.7488 26.552 48.5223 26.2837 48.7906L13.6621 61.4123L13.3891 66.074L13.0083 66.4547L11.2407 62.7966L12.5157 61.5215L11.4786 60.4844L10.2057 61.7573L6.54575 59.9913L6.92603 59.6111L11.5877 59.3381L24.2094 46.7163C24.4777 46.448 25.2512 45.985 26.033 45.7047C26.9205 45.3865 27.3914 45.4515 27.47 45.53C27.5484 45.6086 27.6135 46.0794 27.2953 46.967Z"
                          fill="#FAA819"
                        />
                        <path
                          d="M16.5 72.9517L16.5 102.952"
                          stroke="#FAA819"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="16.5" cy="107.952" r="5" transform="rotate(90 16.5 107.952)" fill="#FAA819" />
                      </svg>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="flex">
                        <div className="text-[#828282]">Stop to change plane in {oneStopCity}</div>
                      </div>

                      <div className="flex ">
                        <p className="font-semibold">{arriveNameCity}</p>
                        <p className="text-[#828282] mx-16">({arriveCodeCity})</p>
                      </div>
                    </div>
                  </div>
                ) : null}

                <hr></hr>

                {typeTrip === "R" ? (
                  <div className="my-4 text-lg">
                    <p className="bg-gray-100 text-[#FAA819] font-bold">Return</p>
                    <p className="text-[#828282]">
                      {moment(access.returnDate).format("dddd")}, {moment(access.returnDate).format("DD-MMM-YYYY")}
                    </p>
                    {oneStopCity2 ? (
                      <p className="text-[#828282] font-bold text-start">One Stop Flight</p>
                    ) : (
                      <p className="text-[#828282] text-start font-bold">Direct Flight</p>
                    )}
                    <p className="text-lg text-[#828282]">{totalTime2}</p>
                  </div>
                ) : null}

                {typeTrip === "R" ? (
                  <div className="my-4">
                    <img className="" src={src2} alt="" />
                    <div className="font-semibold">{airline2}</div>
                  </div>
                ) : null}

                {typeTrip === "R" ? (
                  <div className="flex w-[100%] my-2 text-lg">
                    <div className="flex flex-col justify-between font-semibold w-[81px]">
                      <p className="">{departureDateTime2}</p>
                      {oneStopCity2 ? (
                        <p className="">{departureDateTimeSeq1_2}</p>
                      ) : (
                        <p className="">{arriveDateTime2}</p>
                      )}
                    </div>
                    <div className="mx-2">
                      <svg width="33" height="113" viewBox="0 0 33 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16.5" cy="5" r="5" transform="rotate(90 16.5 5)" fill="#FAA819" />
                        <path d="M16.5 10L16.5 40" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                          d="M28.5071 44.4929C27.9132 43.899 26.8868 43.8406 25.538 44.324C24.6105 44.6565 23.6377 45.2137 23.1723 45.6792L19.4345 49.417L7.13066 47.4844L4 50.6151L14.2295 54.6219L10.9451 57.9064L6.28335 58.1794L4.04805 60.4147L9.10708 62.8558L7.6898 64.2731L8.7269 65.3102L10.1423 63.8948L12.5858 68.9514L14.8206 66.7166L15.0936 62.0549L18.4332 58.7153L22.4392 68.9428L25.5698 65.8121L23.6377 53.5107L27.3208 49.8276C27.7862 49.3622 28.3435 48.3893 28.676 47.4618C29.1594 46.1134 29.101 45.0867 28.5071 44.4929ZM6.62236 50.0671L7.64023 49.0492L18.1514 50.7001L15.3615 53.49L6.62236 50.0671ZM24.0051 65.3027L22.9873 66.3205L19.5651 57.5835L22.3545 54.794L24.0051 65.3027ZM27.2953 46.967C27.0151 47.7488 26.552 48.5223 26.2837 48.7906L13.6621 61.4123L13.3891 66.074L13.0083 66.4547L11.2407 62.7966L12.5157 61.5215L11.4786 60.4844L10.2057 61.7573L6.54575 59.9913L6.92603 59.6111L11.5877 59.3381L24.2094 46.7163C24.4777 46.448 25.2512 45.985 26.033 45.7047C26.9205 45.3865 27.3914 45.4515 27.47 45.53C27.5484 45.6086 27.6135 46.0794 27.2953 46.967Z"
                          fill="#FAA819"
                        />
                        <path
                          d="M16.5 72.9517L16.5 102.952"
                          stroke="#FAA819"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="16.5" cy="107.952" r="5" transform="rotate(90 16.5 107.952)" fill="#FAA819" />
                      </svg>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="flex font-semibold">
                        <p className="">{departureNameCity2}</p>
                      </div>
                      <p className=""></p>
                      <div className="flex font-semibold">
                        {oneStopCity2 ? (
                          <p className="">{oneStopCity2}</p>
                        ) : (
                          <p className="font-semibold">{arriveNameCity2}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col justify-between mx-16">
                      <p className="text-[#828282]">({departureCodeCity2})</p>
                      {oneStopCity2 ? (
                        <p className="text-[#828282]">({oneStopCodeCity2})</p>
                      ) : (
                        <p className="text-[#828282]">({arriveCodeCity2})</p>
                      )}
                    </div>
                  </div>
                ) : null}

                {oneStopCity2 ? (
                  <div className="flex w-[100%] my-2 text-lg">
                    <div className="flex flex-col justify-between font-semibold w-[81px]">
                      <p className="">{departureDateTimeSeq2_2}</p>
                      <p className="">{arriveDateTime2}</p>
                    </div>
                    <div className="mx-2">
                      <svg width="33" height="113" viewBox="0 0 33 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16.5" cy="5" r="5" transform="rotate(90 16.5 5)" fill="#FAA819" />
                        <path d="M16.5 10L16.5 40" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                          d="M28.5071 44.4929C27.9132 43.899 26.8868 43.8406 25.538 44.324C24.6105 44.6565 23.6377 45.2137 23.1723 45.6792L19.4345 49.417L7.13066 47.4844L4 50.6151L14.2295 54.6219L10.9451 57.9064L6.28335 58.1794L4.04805 60.4147L9.10708 62.8558L7.6898 64.2731L8.7269 65.3102L10.1423 63.8948L12.5858 68.9514L14.8206 66.7166L15.0936 62.0549L18.4332 58.7153L22.4392 68.9428L25.5698 65.8121L23.6377 53.5107L27.3208 49.8276C27.7862 49.3622 28.3435 48.3893 28.676 47.4618C29.1594 46.1134 29.101 45.0867 28.5071 44.4929ZM6.62236 50.0671L7.64023 49.0492L18.1514 50.7001L15.3615 53.49L6.62236 50.0671ZM24.0051 65.3027L22.9873 66.3205L19.5651 57.5835L22.3545 54.794L24.0051 65.3027ZM27.2953 46.967C27.0151 47.7488 26.552 48.5223 26.2837 48.7906L13.6621 61.4123L13.3891 66.074L13.0083 66.4547L11.2407 62.7966L12.5157 61.5215L11.4786 60.4844L10.2057 61.7573L6.54575 59.9913L6.92603 59.6111L11.5877 59.3381L24.2094 46.7163C24.4777 46.448 25.2512 45.985 26.033 45.7047C26.9205 45.3865 27.3914 45.4515 27.47 45.53C27.5484 45.6086 27.6135 46.0794 27.2953 46.967Z"
                          fill="#FAA819"
                        />
                        <path
                          d="M16.5 72.9517L16.5 102.952"
                          stroke="#FAA819"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="16.5" cy="107.952" r="5" transform="rotate(90 16.5 107.952)" fill="#FAA819" />
                      </svg>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="flex">
                        <div className="text-[#828282]">Stop to change plane in {oneStopCity2}</div>
                      </div>

                      <div className="flex ">
                        <p className="font-semibold">{arriveNameCity2}</p>
                        <p className="text-[#828282] mx-16">({arriveCodeCity2})</p>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="w-full">
                  <p className="p-1 bg-gray-100 text-lg font-bold text-[#FAA819]">Contact Detail</p>
                  <div className="form-control w-full max-w-full text-lg">
                    <div className="flex w-full p-2 gap-4">
                      <div className="text-start">
                        <div className="font-semibold text-[#4E1311]">Name</div>
                        <div className="">
                          {inputTitleContract} {inputFirstNameContract} {inputLastNameContract}
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex w-full p-2 gap-4">
                        <div className="text-start">
                          <div className="font-semibold text-[#4E1311">Mobile Phone</div>
                          <div className="">{inputMobilePhoneContract}</div>
                        </div>
                      </div>

                      <div className="flex w-full p-2 gap-4">
                        <div className="text-start">
                          <div className="font-semibold text-[#4E1311">Email</div>
                          <div className="">{inputEmailContract}</div>
                        </div>
                      </div>
                    </div>

                    <p className="bg-gray-100 text-[#FAA819] text-lg font-bold mt-4">Passenger Detail</p>

                    {adultsSection}
                    {childsSection}
                    {infantsSection}

                    <div className="flex my-4">
                      <>
                        <Button onClick={onClick}>Next</Button>
                        <Modal show={show} onClose={onClose}>
                          <div>
                            <Modal.Header>ยืนยันข้อมูลให้ถูกต้อง</Modal.Header>
                            <Modal.Body>
                              <div className="space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                  ยืนยันการจองตั๋ว กด CONFIRM / แก้ไขข้อมูล กด Decline
                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                  **การจองตั๋วถือเป็นที่สิ้นสุดไม่สามารถเปลียนเปลี่ยนข้อมูลการจองได้**
                                </p>
                              </div>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button onClick={finalTicket}>Confirm</Button>
                              <Button color="gray" onClick={onClose}>
                                Decline
                              </Button>
                            </Modal.Footer>
                          </div>
                        </Modal>
                      </>
                      <button onClick={() => navigate("/ContractInfo")} className="text-sm underline mx-4">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default contractInfo_copy;
