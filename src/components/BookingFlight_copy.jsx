import React from "react";
import Card from "./card_copy";
import Card2 from "./card2_copy";
import moment from "moment";
import { useBetween } from "use-between";
import Share from "../Page/Share";
import { useBooking } from "../context/BookingContext";
import { useDepartureSelectedContext } from "../context/DepartureSelectedContext";
import { useFinalDirectDepartureContext } from "../context/FinalDirectDepartureContext";
import { useReturnSelectedContext } from "../context/ReturnSelectedContext";
import { usePnrContext } from "../context/PnrContext";
import { EncryptStorage } from "encrypt-storage";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import ModelSearchFlight from "./ModelSearchFlight";
import { useEffect } from "react";

const encryptStorage2 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function BookingFlight_copy() {
  const { dataSeclect } = useBooking();
  const { dataResponse } = useBooking();

  //เลือกมาจาก Selected ขา Departure
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
  const { twoStopCity } = useDepartureSelectedContext();
  const { isSelected } = useDepartureSelectedContext();
  const { flightNumber } = useDepartureSelectedContext();
  const { depDirectAirlineCode_s1 } = useFinalDirectDepartureContext();

  //เลือกมาจาก Selected reset เปลี่ยนเที่ยวบินขาไป
  const { setAirline } = useDepartureSelectedContext();
  const { setDepDirectAirlineCode_s1 } = useDepartureSelectedContext();
  const { setTimeDuration } = useDepartureSelectedContext();
  const { setDepartureNameCity } = useDepartureSelectedContext();
  const { setArriveNameCity } = useDepartureSelectedContext();
  const { setDepartureCodeCity } = useDepartureSelectedContext();
  const { setArriveCodeCity } = useDepartureSelectedContext();
  const { setDepartureDateTime } = useDepartureSelectedContext();
  const { setArriveDateTime } = useDepartureSelectedContext();
  const { setSRC } = useDepartureSelectedContext();
  const { setOneStopCity } = useDepartureSelectedContext();
  const { setTwoStopCity } = useDepartureSelectedContext();
  const { setIsSelected } = useDepartureSelectedContext();
  const { setFlightNumber } = useDepartureSelectedContext();

  //เลือกมาจาก Selected ขา Return
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
  const { twoStopCity2 } = useReturnSelectedContext();

  const { setAirline2 } = useReturnSelectedContext();
  const { setTimeDuration2 } = useReturnSelectedContext();
  const { setDepartureNameCity2 } = useReturnSelectedContext();
  const { setArriveNameCity2 } = useReturnSelectedContext();
  const { setDepartureCodeCity2 } = useReturnSelectedContext();
  const { setArriveCodeCity2 } = useReturnSelectedContext();
  const { setDepartureDateTime2 } = useReturnSelectedContext();
  const { setArriveDateTime2 } = useReturnSelectedContext();
  const { setSRC2 } = useReturnSelectedContext();
  const { setOneStopCity2 } = useReturnSelectedContext();
  const { setTwoStopCity2 } = useReturnSelectedContext();
  const { setIsSelected2 } = useReturnSelectedContext();

  const { tripType, setTripType } = usePnrContext();

  useEffect(() => {
    setTripType(JSON.parse(sessionStorage.dataSelectDetail).tripType)
  },[])
  
  const totalTime = timeDuration?.slice(0, 2) + "hr " + timeDuration?.slice(2) + "m";
  const totalTime2 = timeDuration2?.slice(0, 2) + "hr " + timeDuration2?.slice(2) + "m";

  const [show, setShow] = useState();

  const onClick = () => {
    setShow(true);
    setTripType(JSON.parse(sessionStorage.dataSelectDetail).tripType)
  };

  const onClose = () => {
    setShow(false);
    setTripType(JSON.parse(sessionStorage.dataSelectDetail).tripType)
  };

  const access_ = localStorage.access_;
  const value = encryptStorage2.decryptString(access_);
  const access = JSON.parse(value);


  const accesstripType = localStorage.access_;
  const valueTypeTrip = encryptStorage2.decryptString(accesstripType);

  const valueTypeTrip_ = JSON.parse(valueTypeTrip);

  const typeType_ = JSON.parse(valueTypeTrip);
  const typeTrip = typeType_.tripType;

  const airport = localStorage.airport_;
  const valueAirport = encryptStorage2.decryptString(airport);

  const valueAirport_ = JSON.parse(valueAirport);
  // console.log(valueAirport_);

  const findAirportCodeDep = () => {
    const airportDep = valueAirport_.Departure?.filter((el) => {
      return el.value === valueTypeTrip_.originCode;
    });
    return airportDep[0].AirportName;
  };

  const findAirportCodeArr = () => {
    const airportArr = valueAirport_.Arrival?.filter((el) => {
      return el.value === valueTypeTrip_.destinationCode;
    });
    return airportArr[0]?.AirportName;
  };

  const localStorageDepartureFlight = localStorage.dataSearch;
  const departureFlight_ = encryptStorage2.decryptString(localStorageDepartureFlight);
  const departureFlight = JSON.parse(departureFlight_).data.departureFlight;
  const retrunFlight = JSON.parse(departureFlight_).data.returnFlight;
  // console.log(departureFlight);

  const airlineNameArray = [];

  const selectAirports = departureFlight?.map((data) => {
    if (data.flightDetails.length >= 1) {
      data.flightDetails?.map((el) => {
        if (airlineNameArray.findIndex((x) => x === data.flightDetails[0].airline.name) === -1) {
          airlineNameArray.push(el.airline.name);
        }

        return airlineNameArray;
      });
    }
  });

  const airlineNameArray2 = [];

  const selectAirports2 = retrunFlight?.map((data) => {
    if (data.flightDetails.length >= 1) {
      data.flightDetails?.map((el) => {
        if (airlineNameArray2.findIndex((x) => x === data.flightDetails[0].airline.name) === -1) {
          airlineNameArray2.push(el.airline.name);
        }

        return airlineNameArray2;
      });
    }
  });

  const { checkboxArray, setCheckboxArray } = usePnrContext([]);
  const { checkboxArray2, setCheckboxArray2 } = usePnrContext([]);

  const handleCheckbox = (e) => {
    const newArray = [...checkboxArray];
    if (e.target.checked) {
      newArray.push(e.target.value);
    } else {
      const index = newArray.findIndex((el) => el === e.target.value);
      newArray.splice(index, 1);
    }

    setCheckboxArray(newArray);
  };

  const handleCheckbox2 = (e) => {
    const newArray2 = [...checkboxArray2];
    if (e.target.checked) {
      newArray2.push(e.target.value);
    } else {
      const index = newArray2.findIndex((el) => el === e.target.value);
      newArray2.splice(index, 1);
    }

    setCheckboxArray2(newArray2);
  };

  const handleChangeIsSelected = () => {
    setAirline("");
    setTimeDuration("");
    setDepartureNameCity("");
    setArriveNameCity("");
    setDepartureCodeCity("");
    setArriveCodeCity("");
    setDepartureDateTime("");
    setArriveDateTime("");
    setSRC("");
    setOneStopCity("");
    setTwoStopCity("");
    setIsSelected(false);
    setFlightNumber("");
  };

  const handleReturnChangeIsSelected = () => {
    setAirline2("");
    setTimeDuration2("");
    setDepartureNameCity2("");
    setArriveNameCity2("");
    setDepartureCodeCity2("");
    setArriveCodeCity2("");
    setDepartureDateTime2("");
    setArriveDateTime2("");
    setSRC2("");
    setOneStopCity2("");
    setTwoStopCity2("");
    setIsSelected2(false);
  };

  const dataNFTDetail = localStorage.NFT_;
  const value_ = encryptStorage2.decryptString(dataNFTDetail);
  const dataNFTDetail_ = JSON.parse(value_);
  const nftName = dataNFTDetail_.name;

  return (
    <div className="h-[100%] min-h-screen ">
      <div className="grid grid-rows-1 mx-2 lg:mx-40 md:mx-10 sm:mx-4">
        <div className="my-4">
          <div className="flex justify-end items-center text-[#828282] bg-gray-200 mx-4 mb-4 rounded">
            <p className="p-2 mx-2 font-semibold">NFT : {nftName}</p>
            <Button onClick={onClick}>Change Flight</Button>
                <Modal show={show} onClose={onClose} size="7xl">
                  <div>
                    <Modal.Header>Change Flight</Modal.Header>
                    <Modal.Body>
                      <ModelSearchFlight onCloseModal={onClose}/>
                    </Modal.Body>
                    {/* <Modal.Footer>
                      <Button onClick={""}>Confirm</Button>
                      <Button color="gray" onClick={onClose}>
                        Back
                      </Button>
                    </Modal.Footer> */}
                  </div>
                </Modal>
            {/* <p className='mx-16 '>Route : BKK-CNX</p> */}
          </div>

          <div className="grid grid-cols-12 mx-4 gap-2">
            <div className="col-start-1 col-end-4 border p-2 rounded-xl">
              <div className="flex items-center">
                <p className="font-bold mx-4 text-[#FAA819]">From</p>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.42514 7.99887C1.42477 7.9991 1.42435 7.99925 1.42394 7.99951C1.27224 8.07835 1.20636 8.26052 1.27269 8.41817C1.33922 8.57634 1.51623 8.65661 1.67903 8.60245L6.26902 7.0753L5.41077 8.47686C5.34843 8.57868 5.36161 8.70958 5.44301 8.79693C5.52442 8.88425 5.65407 8.90662 5.76008 8.85151L6.66014 8.38381C6.68598 8.3704 6.70945 8.35281 6.7296 8.33172L9.39602 5.54642L12.6867 3.82939C13.933 3.15756 13.7886 2.64111 13.7147 2.49887C13.6574 2.38858 13.5293 2.24069 13.2446 2.16249C12.9559 2.08316 12.5658 2.08948 12.0523 2.18185C11.8809 2.21266 11.7862 2.21006 11.686 2.20731C11.3338 2.19767 11.0949 2.22129 9.90851 2.83774L3.41991 6.2097L0.903612 4.90379C0.808723 4.85455 0.695829 4.85459 0.60094 4.90394L0.176935 5.1243C0.0896558 5.16965 0.0273133 5.25174 0.00704725 5.34798C-0.0132188 5.44426 0.0107388 5.54454 0.0722903 5.62119L1.81879 7.79655L1.42514 7.99887Z"
                    fill="#FAA819"
                  />
                  <path
                    d="M13.3744 10.6416H1.0903C0.744877 10.6416 0.464844 10.9217 0.464844 11.2671C0.464844 11.6124 0.744877 11.8925 1.0903 11.8925H13.3744C13.7198 11.8925 13.9999 11.6125 13.9999 11.2671C13.9998 10.9216 13.7198 10.6416 13.3744 10.6416Z"
                    fill="#FAA819"
                  />
                </svg>
              </div>

              <p className="mx-4 text-lg font-bold">{access.originCode}</p>
              <p className="mx-4 text-[#828282]">{findAirportCodeDep()}</p>
            </div>

            <div className="flex items-center justify-center col-start-4 col-end-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" rx="4.5" fill="white" stroke="#FAA819" />
                <g clipPath="url(#clip0_162_5112)">
                  <path
                    d="M16.4846 9.13711C16.3021 8.9543 16.0047 8.9543 15.8219 9.13711L15.2157 9.74326C15.0326 9.92643 15.0323 10.2225 15.2157 10.406L15.8219 11.0121H5.5C5.22386 11.0121 5 11.236 5 11.5121V12.3871C5 12.6633 5.22386 12.8871 5.5 12.8871H15.8219L15.2157 13.4933C15.0326 13.6764 15.0323 13.9725 15.2157 14.156L15.8219 14.7621C16.0047 14.945 16.3018 14.9449 16.4846 14.7621L19.1316 12.1154C19.223 12.0237 19.223 11.8755 19.1316 11.7838L16.4846 9.13711Z"
                    fill="#FAA819"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_162_5112">
                    <rect width="15" height="15" fill="white" transform="translate(4.2002 4.2002)" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="col-start-5 col-end-8 border p-2 rounded-xl">
              <div className="flex items-center">
                <p className="font-bold mx-4 text-[#FAA819]">To</p>
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.56142 6.0511C1.56103 6.05116 1.56063 6.05115 1.56019 6.05123C1.40579 6.06611 1.28711 6.19827 1.2876 6.355C1.28806 6.51225 1.40813 6.64126 1.56322 6.65116L5.9357 6.93022L4.72874 7.8263C4.64106 7.8914 4.60642 8.00715 4.64404 8.10934C4.68167 8.21149 4.78232 8.27504 4.89022 8.26463L5.80634 8.1764C5.83263 8.17389 5.8584 8.167 5.88262 8.156L9.08495 6.70528L12.4368 6.37669C13.7138 6.23394 13.7732 5.74553 13.761 5.59929C13.7515 5.48589 13.696 5.31622 13.4851 5.15199C13.2712 4.98541 12.9427 4.85678 12.4809 4.75887C12.3268 4.72617 12.2485 4.69146 12.1657 4.6547C11.8744 4.52551 11.6662 4.4635 10.4587 4.57979L3.85435 5.21606L2.20504 3.24209C2.14284 3.16767 2.04839 3.12892 1.95179 3.13825L1.52021 3.17985C1.43138 3.1884 1.35059 3.23673 1.30005 3.31155C1.24951 3.3864 1.23456 3.47983 1.25931 3.56611L1.96131 6.01441L1.56142 6.0511Z"
                    fill="#FAA819"
                  />
                  <path
                    d="M13.3744 9.6416H1.0903C0.744877 9.6416 0.464844 9.92171 0.464844 10.2671C0.464844 10.6124 0.744877 10.8925 1.0903 10.8925H13.3744C13.7198 10.8925 13.9999 10.6125 13.9999 10.2671C13.9998 9.9216 13.7198 9.6416 13.3744 9.6416Z"
                    fill="#FAA819"
                  />
                  <circle cx="11.0649" cy="7.39109" r="0.351056" fill="#FAA819" />
                  <rect x="10.9209" y="6.0166" width="0.289255" height="0.943524" fill="#FAA819" />
                  <rect x="11.0078" y="6.33838" width="0.115176" height="0.943524" fill="#FAA819" />
                  <rect
                    x="10.7568"
                    y="6.44434"
                    width="0.115178"
                    height="0.804577"
                    transform="rotate(10.0738 10.7568 6.44434)"
                    fill="#FAA819"
                  />
                  <rect
                    width="0.115177"
                    height="0.286071"
                    transform="matrix(0.746872 0.664968 -0.664964 0.746875 10.9336 6.43115)"
                    fill="#FAA819"
                  />
                  <rect
                    width="0.115178"
                    height="0.363344"
                    transform="matrix(-0.787781 0.615956 -0.615954 -0.787782 11.0059 7.18555)"
                    fill="#FAA819"
                  />
                  <ellipse
                    cx="7.35383"
                    cy="7.84453"
                    rx="0.287537"
                    ry="0.287537"
                    transform="rotate(-14.1061 7.35383 7.84453)"
                    fill="#FAA819"
                  />
                  <ellipse
                    rx="0.287538"
                    ry="0.287537"
                    transform="matrix(0.969846 -0.243718 0.243719 0.969846 6.74055 7.97441)"
                    fill="#FAA819"
                  />
                  <rect
                    x="6.93164"
                    y="6.6665"
                    width="0.259332"
                    height="0.845916"
                    transform="rotate(1.91857 6.93164 6.6665)"
                    fill="#FAA819"
                  />
                  <rect
                    x="6.34277"
                    y="6.81299"
                    width="0.259332"
                    height="0.845914"
                    transform="rotate(-21.2405 6.34277 6.81299)"
                    fill="#FAA819"
                  />
                  <rect
                    x="7"
                    y="6.95703"
                    width="0.103262"
                    height="0.845914"
                    transform="rotate(1.91857 7 6.95703)"
                    fill="#FAA819"
                  />
                  <rect
                    x="6.52051"
                    y="7.05371"
                    width="0.103262"
                    height="0.845915"
                    transform="rotate(-21.2405 6.52051 7.05371)"
                    fill="#FAA819"
                  />
                  <rect
                    x="7.52539"
                    y="7.65283"
                    width="0.078751"
                    height="1.04211"
                    transform="rotate(75.8939 7.52539 7.65283)"
                    fill="#FAA819"
                  />
                  <rect
                    width="0.103262"
                    height="0.991217"
                    transform="matrix(0.843545 0.537058 -0.537058 0.843545 6.60449 7.13477)"
                    fill="#FAA819"
                  />
                  <rect
                    x="6.57715"
                    y="7.80127"
                    width="0.103262"
                    height="0.325754"
                    transform="rotate(162.895 6.57715 7.80127)"
                    fill="#FAA819"
                  />
                  <ellipse
                    cx="8.26727"
                    cy="7.43654"
                    rx="0.240752"
                    ry="0.240752"
                    transform="rotate(-14.1061 8.26727 7.43654)"
                    fill="#FAA819"
                  />
                  <circle
                    cx="7.75408"
                    cy="7.54542"
                    r="0.240752"
                    transform="rotate(-14.1061 7.75408 7.54542)"
                    fill="#FAA819"
                  />
                  <rect
                    x="7.91406"
                    y="6.4502"
                    width="0.217136"
                    height="0.708276"
                    transform="rotate(1.91857 7.91406 6.4502)"
                    fill="#FAA819"
                  />
                  <rect
                    width="0.217136"
                    height="0.708276"
                    transform="matrix(0.932068 -0.362284 0.362283 0.932068 7.4209 6.57324)"
                    fill="#FAA819"
                  />
                  <rect
                    x="7.9707"
                    y="6.69385"
                    width="0.086461"
                    height="0.708276"
                    transform="rotate(1.91858 7.9707 6.69385)"
                    fill="#FAA819"
                  />
                  <rect
                    x="7.56934"
                    y="6.77441"
                    width="0.0864604"
                    height="0.708275"
                    transform="rotate(-21.2405 7.56934 6.77441)"
                    fill="#FAA819"
                  />
                  <rect
                    x="8.41113"
                    y="7.27637"
                    width="0.0659374"
                    height="0.872545"
                    transform="rotate(75.8939 8.41113 7.27637)"
                    fill="#FAA819"
                  />
                  <rect
                    width="0.0864603"
                    height="0.829933"
                    transform="matrix(0.843545 0.537058 -0.537058 0.843545 7.64062 6.84277)"
                    fill="#FAA819"
                  />
                  <rect
                    width="0.0864601"
                    height="0.272752"
                    transform="matrix(-0.955767 0.294125 -0.294122 -0.955768 7.6167 7.40039)"
                    fill="#FAA819"
                  />
                </svg>
              </div>
              <p className="mx-4 text-lg font-bold">{access.destinationCode}</p>
              <p className="mx-4 text-[#828282]">{findAirportCodeArr()}</p>
            </div>

            <div className="col-start-8 col-end-10 border p-2 rounded-xl">
              <p className="font-semibold mx-4 text-[#FAA819]">Departure</p>
              <p className="mx-4 text-lg font-bold">{moment(access.departDate).format("DD-MMM-YYYY")}</p>
              <p className="mx-4 text-[#828282]">{moment(access.departDate).format("dddd")}</p>
            </div>

            <div className="flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="#FAA819" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="#FAA819"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {tripType === "O" ? (
              <div className="col-start-11 col-end-13 items-center flex justify-center border p-2 rounded-xl">
                <p className="  text-lg font-semibold mx-4 text-[#FAA819]">One Way</p>
              </div>
            ) : (
              <div className="col-start-11 col-end-13 border p-2 rounded-xl">
                <p className="font-semibold mx-4 text-[#FAA819]">Return</p>
                <p className="mx-4 text-lg font-bold">{moment(access.returnDate).format("DD-MMM-YYYY")}</p>
                <p className="mx-4 text-[#828282]">{moment(access.returnDate).format("dddd")}</p>
              </div>
            )}
          </div>
        </div>

        <div className="">
          <div className="h-[100%] flex p-2 ">
            <div className="w-[50%] h-[100%] mx-2">
              <>
                <div className="flex justify-center">
                  <div className="w-[100%] shadow-lg p-2">
                    <p className="text-md font-bold bg-gray-200 p-4 rounded">Select Flight (Departure)</p>
                    {typeTrip === "R"
                      ? airline && (
                          <>
                            <img
                              className="w-100% p-2"
                              src={`https://ai-r-logo.azurewebsites.net/square/${src}.png`}
                              alt="Icon"
                            />
                            <p>{airline}</p>
                            <p className="">
                              Flight Number : {depDirectAirlineCode_s1}
                              {flightNumber}
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="">
                                <div className="flex justify-start">
                                  <p>{departureNameCity}</p>
                                </div>
                                <p>({departureCodeCity})</p>
                              </div>
                              <div className="">
                                <div className="flex justify-end">
                                  <p className="text-end">{arriveNameCity}</p>
                                </div>
                                <p className="text-end">({arriveCodeCity})</p>
                              </div>
                            </div>

                            <div className="my-2">
                              {oneStopCity && twoStopCity ? (
                                <p className="text-center">Two Stop</p>
                              ) : oneStopCity ? (
                                <p className="text-center">One Stop</p>
                              ) : (
                                <p className="text-center">Direct</p>
                              )}
                              {/* <p className="text-center">{oneStopCity}</p> */}

                              {oneStopCity && twoStopCity ? (
                                <div className="flex">
                                  <svg
                                    width=""
                                    height=""
                                    viewBox="0 0 206 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle cx="7" cy="5" r="2" fill="#FAA819" />
                                    <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="198" cy="5" r="2" fill="#FAA819" />
                                  </svg>
                                  <svg
                                    width=""
                                    height=""
                                    viewBox="0 0 206 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle cx="7" cy="5" r="2" fill="#FAA819" />
                                    <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="198" cy="5" r="2" fill="#FAA819" />
                                  </svg>
                                  <svg
                                    width=""
                                    height=""
                                    viewBox="0 0 206 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle cx="7" cy="5" r="2" fill="#FAA819" />
                                    <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="198" cy="5" r="2" fill="#FAA819" />
                                  </svg>
                                </div>
                              ) : oneStopCity ? (
                                <div className="flex">
                                  <svg
                                    width=""
                                    height=""
                                    viewBox="0 0 206 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle cx="7" cy="5" r="2" fill="#FAA819" />
                                    <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="198" cy="5" r="2" fill="#FAA819" />
                                  </svg>

                                  <svg
                                    width=""
                                    height=""
                                    viewBox="0 0 206 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle cx="7" cy="5" r="2" fill="#FAA819" />
                                    <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="198" cy="5" r="2" fill="#FAA819" />
                                  </svg>
                                </div>
                              ) : (
                                <svg
                                  width=""
                                  height=""
                                  viewBox="0 0 206 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle cx="7" cy="5" r="2" fill="#FAA819" />
                                  <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                                  <circle cx="198" cy="5" r="2" fill="#FAA819" />
                                </svg>
                              )}

                              <div className="flex w-auto items-center text-[#4E1311] font-semibold">
                                <p className="w-[100%] text-start">{departureDateTime}</p>
                                <p className="w-[100%] text-center">{totalTime}</p>
                                <p className="w-[100%] text-end">{arriveDateTime}</p>
                              </div>
                              <button
                                className="mt-2 p-2 font-bold w-[100%] text-center bg-blue-200 rounded-xl"
                                onClick={() => handleChangeIsSelected()}
                              >
                                เปลี่ยนเที่ยวบินขาไป
                              </button>
                            </div>
                          </>
                        )
                      : airline && (
                          <>
                            <img className="w-100% p-2" src={`https://ai-r-logo.azurewebsites.net/square/${src}.png`} alt="Icon" />
                            <p>{airline}</p>
                            <div className="flex justify-between items-center">
                              <div className="">
                                <div className="flex justify-start">
                                  <p>{departureNameCity}</p>
                                </div>
                                <p>({departureCodeCity})</p>
                              </div>
                              <div className="">
                                <div className="flex justify-end">
                                  <p className="text-end">{arriveNameCity}</p>
                                </div>
                                <p className="text-end">({arriveCodeCity})</p>
                              </div>
                            </div>

                            <div className="my-2">
                              {oneStopCity ? (
                                <p className="text-center">One Stop</p>
                              ) : (
                                <p className="text-center">Direct</p>
                              )}
                              <p className="text-center">{oneStopCity}</p>
                              {oneStopCity ? (
                                <div className="flex">
                                  <svg
                                    width=""
                                    height=""
                                    viewBox="0 0 206 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle cx="7" cy="5" r="2" fill="#FAA819" />
                                    <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="198" cy="5" r="2" fill="#FAA819" />
                                  </svg>
                                  <svg
                                    width=""
                                    height=""
                                    viewBox="0 0 206 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle cx="7" cy="5" r="2" fill="#FAA819" />
                                    <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="198" cy="5" r="2" fill="#FAA819" />
                                  </svg>
                                </div>
                              ) : (
                                <svg
                                  width=""
                                  height=""
                                  viewBox="0 0 206 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle cx="7" cy="5" r="2" fill="#FAA819" />
                                  <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                                  <circle cx="198" cy="5" r="2" fill="#FAA819" />
                                </svg>
                              )}

                              <div className="flex w-auto items-center text-[#4E1311] font-semibold">
                                <p className="w-[100%] text-start">{departureDateTime}</p>
                                <p className="w-[100%] text-center">{totalTime}</p>
                                <p className="w-[100%] text-end">{arriveDateTime}</p>
                              </div>
                              <button
                                className="mt-2 p-2 font-bold w-[100%] text-center bg-blue-200 rounded-xl"
                                onClick={() => handleChangeIsSelected()}
                              >
                                เปลี่ยนเที่ยวบินขาไป
                              </button>
                            </div>
                          </>
                        )}

                    <div className="w-[100%] mt-4">
                      {typeTrip === "R" ? (
                        <p className="text-md font-bold bg-gray-200 p-4 rounded">Select Flight (Return)</p>
                      ) : null}

                      {typeTrip === "R"
                        ? airline2 && (
                            <>
                              <img className="w-100% p-2" src={`https://ai-r-logo.azurewebsites.net/square/${src}.png`} alt="Icon" />
                              <p>{airline}</p>
                              <div className="flex justify-between items-center">
                                <div className="">
                                  <div className="flex justify-start">
                                    <p>{departureNameCity2}</p>
                                  </div>
                                  <p>({departureCodeCity2})</p>
                                </div>
                                <div className="">
                                  <div className="flex justify-end">
                                    <p className="text-end">{arriveNameCity2}</p>
                                  </div>
                                  <p className="text-end">({arriveCodeCity2})</p>
                                </div>
                              </div>

                              <div className="my-2">
                                {oneStopCity2 && twoStopCity2 ? (
                                  <p className="text-center">Two Stop</p>
                                ) : oneStopCity2 ? (
                                  <p className="text-center">One Stop</p>
                                ) : (
                                  <p className="text-center">Direct</p>
                                )}
                                {/* <p className="text-center">{oneStopCity}</p> */}

                                {oneStopCity2 && twoStopCity2 ? (
                                  <div className="flex">
                                    <svg
                                      width=""
                                      height=""
                                      viewBox="0 0 206 10"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <circle cx="7" cy="5" r="2" fill="#FAA819" />
                                      <path
                                        d="M9 5H196"
                                        stroke="#FAA819"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <circle cx="198" cy="5" r="2" fill="#FAA819" />
                                    </svg>
                                    <svg
                                      width=""
                                      height=""
                                      viewBox="0 0 206 10"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <circle cx="7" cy="5" r="2" fill="#FAA819" />
                                      <path
                                        d="M9 5H196"
                                        stroke="#FAA819"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <circle cx="198" cy="5" r="2" fill="#FAA819" />
                                    </svg>
                                    <svg
                                      width=""
                                      height=""
                                      viewBox="0 0 206 10"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <circle cx="7" cy="5" r="2" fill="#FAA819" />
                                      <path
                                        d="M9 5H196"
                                        stroke="#FAA819"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <circle cx="198" cy="5" r="2" fill="#FAA819" />
                                    </svg>
                                  </div>
                                ) : oneStopCity2 ? (
                                  <div className="flex">
                                    <svg
                                      width=""
                                      height=""
                                      viewBox="0 0 206 10"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <circle cx="7" cy="5" r="2" fill="#FAA819" />
                                      <path
                                        d="M9 5H196"
                                        stroke="#FAA819"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <circle cx="198" cy="5" r="2" fill="#FAA819" />
                                    </svg>

                                    <svg
                                      width=""
                                      height=""
                                      viewBox="0 0 206 10"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <circle cx="7" cy="5" r="2" fill="#FAA819" />
                                      <path
                                        d="M9 5H196"
                                        stroke="#FAA819"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <circle cx="198" cy="5" r="2" fill="#FAA819" />
                                    </svg>
                                  </div>
                                ) : (
                                  <svg
                                    width=""
                                    height=""
                                    viewBox="0 0 206 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle cx="7" cy="5" r="2" fill="#FAA819" />
                                    <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="198" cy="5" r="2" fill="#FAA819" />
                                  </svg>
                                )}
                                <div className="flex w-auto items-center text-[#4E1311] font-semibold">
                                  <p className="w-[100%] text-start">{departureDateTime2}</p>
                                  <p className="w-[100%] text-center">{totalTime2}</p>
                                  <p className="w-[100%] text-end">{arriveDateTime2}</p>
                                </div>
                                <button
                                  className="mt-2 p-2 font-bold w-[100%] text-center bg-blue-200 rounded-xl"
                                  onClick={() => handleReturnChangeIsSelected()}
                                >
                                  เปลี่ยนเที่ยวบินขากลับ
                                </button>
                              </div>
                            </>
                          )
                        : null}
                    </div>
                  </div>
                </div>
              </>

              <h2 className="font-bold text-lg mt-4">Filter</h2>

              <div className={isSelected ? `hidden` : ``}>
                <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg  dark:bg-gray-700  dark:text-white">
                  <li className="w-full rounded-t-lg ">
                    <div className="flex flex-col">
                      {airlineNameArray.map((el, idx) => {
                        return (
                          <div className="flex justify-center items-center" key={idx}>
                            <input
                              id={"vue-checkbox" + idx}
                              type="checkbox"
                              value={el}
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600"
                              onChange={(e) => handleCheckbox(e)}
                            />

                            <label
                              id={"vue-checkbox" + idx}
                              htmlFor={"vue-checkbox" + idx}
                              className="py-2 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              {el}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </li>
                </ul>
              </div>

              <div className={isSelected ? `` : `hidden`}>
                <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg  dark:bg-gray-700  dark:text-white">
                  <li className="w-full rounded-t-lg ">
                    <div className="flex flex-col">
                      {airlineNameArray2.map((el, idx) => {
                        return (
                          <div className="flex justify-center items-center" key={idx}>
                            <input
                              id={"vue-checkbox" + idx}
                              type="checkbox"
                              value={el}
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600"
                              onChange={(e) => handleCheckbox2(e)}
                            />

                            <label
                              id={"vue-checkbox" + idx}
                              htmlFor={"vue-checkbox" + idx}
                              className="py-2 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              {el}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </li>
                </ul>
              </div>
              <p className="my-4 font-bold">Stop</p>

              <div className="flex items-center">
                <input
                  value="any"
                  type="radio"
                  name="radio-1"
                  className="radio"
                  onChange={(e) => {
                    setCheckedAny(e.target.value);
                  }}
                />
                <label className="mx-2" htmlFor="html">
                  Any
                </label>
              </div>

              <div className="flex items-center my-2">
                <input
                  value="direct"
                  type="radio"
                  name="radio-1"
                  className="radio"
                  onChange={(e) => setCheckedAny(e.target.value)}
                />

                <label className="mx-2" htmlFor="html">
                  Direct
                </label>
              </div>

              <div className="flex items-center my-2">
                <input
                  value="oneStop"
                  type="radio"
                  name="radio-1"
                  className="radio"
                  onChange={(e) => setCheckedAny(e.target.value)}
                />
                <label className="mx-2" htmlFor="html">
                  1 Stop
                </label>
              </div>

              <div className="flex items-center">
                <input
                  value="twoStop"
                  type="radio"
                  name="radio-1"
                  className="radio"
                  onChange={(e) => setCheckedAny(e.target.value)}
                />
                <label className="mx-2" htmlFor="html">
                  2 Stop
                </label>
              </div>
            </div>

            <div className={isSelected ? `hidden` : `border w-full p-2`}>
              <p className="text-[#4E1311] border rounded text-md font-bold bg-gray-200 p-4">
                Select Flight (Departure)
              </p>
              <Card />
            </div>

            {typeTrip === "R" ? (
              <div className={isSelected ? `border w-full p-2` : `hidden`}>
                <p className="text-[#4E1311] border rounded text-md font-bold bg-gray-200 p-4">
                  Select Flight (Return)
                </p>
                <Card2 />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingFlight_copy;
