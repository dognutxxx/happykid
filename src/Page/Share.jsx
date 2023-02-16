import { useState } from "react";
import { EncryptStorage } from "encrypt-storage";

const encryptStorage2 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function Share() {
  
  const [share, setShare] = useState("");
  const [info, setInfo] = useState("");
  const [bookingInfo, setBookingInfo] = useState("");
  const [resBooking, setResBooking] = useState("");
  const [opensea, setOpensea] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");
  // const [tokenID, setTokenID] = useState(localStorage.NFT_ != undefined ? JSON.parse(encryptStorage2.decryptString(localStorage.NFT_)) : "");
  const [tokenID, setTokenID] = useState(sessionStorage.tokenIDPinata != undefined ? JSON.parse(sessionStorage.tokenIDPinata) : "");
  

 

  


  const [account, setAccount] = useState(sessionStorage.walletAddress != undefined ? sessionStorage.walletAddress : "");
  const [checkedAny, setCheckedAny] = useState(true);
  const [checkedDirect, setCheckedDirect] = useState(false);
  const [checkedOneStop, setCheckedOneStop] = useState(false);
  const [checkedTwoStop, setCheckedTwoStop] = useState(false);
  const [triptype, setTriptype] = useState("");
  const [adult, setAdult] = useState("");
  const [child, setChild] = useState("");
  const [infant, setInfant] = useState("");
  const [checkOpenseaAPI, setCheckOpenseaAPI] = useState(sessionStorage.checkOpenseaAPI != undefined ? sessionStorage.checkOpenseaAPI : "");
  // const [logout, setLogout] = useState(sessionStorage.logoutStatus != undefined ? sessionStorage.logoutStatus : "");
  const [logout, setLogout] = useState(sessionStorage.logoutStatus != undefined ? sessionStorage.logoutStatus : "");
  const [image, setImage] = useState(sessionStorage.image != undefined ? JSON.parse(sessionStorage.image) : "");
  const [checkedAirline, setCheckedAirline] = useState("");

  //รายละเอียดเที่ยวบินฝั่งขาไป(Seq:1)
  const [depDisplayTime_1, setdepDisplayTime_1] = useState();
  //console.log(depDisplayTime_1);
  const [depShortDateWithoutDay_1, setdepShortDateWithoutDay_1] = useState();
  //console.log(depShortDateWithoutDay_1);
  const [arrDisplayTime_1, setarrDisplayTime_1] = useState();
  //console.log(arrDisplayTime_1);
  const [arrShortDateWithoutDay_1, setarrShortDateWithoutDay_1] = useState();
  //console.log(arrShortDateWithoutDay_1);
  const [depCity_1, setdepCity_1] = useState();
  //console.log(depCity_1);
  const [depCityCode_1, setdepCityCode_1] = useState();
  //console.log(depCityCode_1);
  const [arrCityCode_1, setarrCityCode_1] = useState();
  //console.log(arrCityCode_1);
  const [arrCityName_1, setarrCityName_1] = useState();
  //console.log(arrCityName_1);
  const [airlineName_1, setAirlineName_1] = useState();
  //console.log(airlineName_1);
  const [flightNumber_1, setFlightNumber_1] = useState();
  //console.log(flightNumber_1);
  const [operatedAirline_1, setOperatedAirline_1] = useState();
  //console.log(operatedAirline_1);
  const [airlineCode_1, setairlineCode_1] = useState();
  //console.log(airlineCode_1);
  const [depLongDate_1, setdepLongDate_1] = useState();
  //console.log(depLongDate_1);
  const [arrLongDate_1, setarrLongDate_1] = useState();
  //console.log(arrLongDate_1);

  //รายละเอียดเที่ยวบินฝั่งขาไป(Seq:2)
  const [depDisplayTime_2, setdepDisplayTime_2] = useState();
  //console.log(depDisplayTime_2);
  const [depShortDateWithoutDay_2, setdepShortDateWithoutDay_2] = useState();
  //console.log(depShortDateWithoutDay_2);
  const [arrDisplayTime_2, setarrDisplayTime_2] = useState();
  //console.log(arrDisplayTime_2);
  const [arrShortDateWithoutDay_2, setarrShortDateWithoutDay_2] = useState();
  //console.log(arrShortDateWithoutDay_2);
  const [depCity_2, setdepCity_2] = useState();
  //console.log(depCity_2);
  const [depCityCode_2, setdepCityCode_2] = useState();
  //console.log(depCityCode_2);
  const [arrCityCode_2, setarrCityCode_2] = useState();
  //console.log(arrCityCode_2);
  const [arrCityName_2, setarrCityName_2] = useState();
  //console.log(arrCityName_2);
  const [airlineName_2, setAirlineName_2] = useState();
  //console.log(airlineName_2);
  const [flightNumber_2, setFlightNumber_2] = useState();
  //console.log(flightNumber_2);
  const [operatedAirline_2, setOperatedAirline_2] = useState();
  //console.log(operatedAirline_2);
  const [airlineCode_2, setairlineCode_2] = useState();
  //console.log(airlineCode_2);
  const [depLongDate_2, setdepLongDate_2] = useState();
  //console.log(depLongDate_2);
  const [arrLongDate_2, setarrLongDate_2] = useState();
  //console.log(arrLongDate_2);

  //รายละเอียดเที่ยวบินฝั่งขากลับ(Seq:1)
  const [depDisplayTime_1Return, setdepDisplayTime_1Return] = useState();
  //console.log(depDisplayTime_1Return);
  const [depShortDateWithoutDay_1Return, setdepShortDateWithoutDay_1Return] = useState();
  //console.log(depShortDateWithoutDay_1Return);
  const [arrDisplayTime_1Return, setarrDisplayTime_1Return] = useState();
  //console.log(arrDisplayTime_1Return);
  const [arrShortDateWithoutDay_1Return, setarrShortDateWithoutDay_1Return] = useState();
  //console.log(arrShortDateWithoutDay_1Return);
  const [depCity_1Return, setdepCity_1Return] = useState();
  //console.log(depCity_1Return);
  const [depCityCode_1Return, setdepCityCode_1Return] = useState();
  //console.log(depCityCode_1Return);
  const [arrCityCode_1Return, setarrCityCode_1Return] = useState();
  //console.log(arrCityCode_1Return);
  const [arrCityName_1Return, setarrCityName_1Return] = useState();
  //console.log(arrCityName_1Return);
  const [airlineName_1Return, setAirlineName_1Return] = useState();
  //console.log(airlineName_1Return);
  const [flightNumber_1Return, setFlightNumber_1Return] = useState();
  //console.log(flightNumber_1Return);
  const [operatedAirline_1Return, setOperatedAirline_1Return] = useState();
  //console.log(operatedAirline_1Return);
  const [airlineCode_1Return, setairlineCode_1Return] = useState();
  //console.log(airlineCode_1Return);
  const [depLongDate_1Return, setdepLongDate_1Return] = useState();
  //console.log(depLongDate_1Return);
  const [arrLongDate_1Return, setarrLongDate_1Return] = useState();
  //console.log(arrLongDate_1Return);

  //รายละเอียดเที่ยวบินฝั่งขากลับ(Seq:2)
  const [depDisplayTime_2Return, setdepDisplayTime_2Return] = useState();
  //console.log(depDisplayTime_2Return);
  const [depShortDateWithoutDay_2Return, setdepShortDateWithoutDay_2Return] = useState();
  //console.log(depShortDateWithoutDay_2Return);
  const [arrDisplayTime_2Return, setarrDisplayTime_2Return] = useState();
  //console.log(arrDisplayTime_2Return);
  const [arrShortDateWithoutDay_2Return, setarrShortDateWithoutDay_2Return] = useState();
  //console.log(arrShortDateWithoutDay_2Return);
  const [depCity_2Return, setdepCity_2Return] = useState();
  //console.log(depCity_2Return);
  const [depCityCode_2Return, setdepCityCode_2Return] = useState();
  //console.log(depCityCode_2Return);
  const [arrCityCode_2Return, setarrCityCode_2Return] = useState();
  //console.log(arrCityCode_2Return);
  const [arrCityName_2Return, setarrCityName_2Return] = useState();
  //console.log(arrCityName_2Return);
  const [airlineName_2Return, setAirlineName_2Return] = useState();
  //console.log(airlineName_2Return);
  const [flightNumber_2Return, setFlightNumber_2Return] = useState();
  //console.log(flightNumber_2Return);
  const [operatedAirline_2Return, setOperatedAirline_2Return] = useState();
  //console.log(operatedAirline_2Return);
  const [airlineCode_2Return, setairlineCode_2Return] = useState();
  //console.log(airlineCode_2Return);
  const [depLongDate_2Return, setdepLongDate_2Return] = useState();
  //console.log(depLongDate_2Return);
  const [arrLongDate_2Return, setarrLongDate_2Return] = useState();
  //console.log(arrLongDate_2Return);

  // const [longDate, setLongDate] = useState("")
  // const [year, setYear] = useState("")
  // const [depCity, setDepCity] = useState("")
  // const [arrCity, setArrCityName] = useState("")
  // const [airline, setAirline] = useState("")
  // const [depTime, setDepTime] = useState("")
  // const [arrTime, setArrTime] = useState("")
  // const [name, setName] = useState("")
  // const [RBD, setRBD] = useState("")
  // const [flightNumber, setFlightNumber] = useState("")
  // const [arrCityCode, setArrCityCode] = useState("")
  // const [depCityCode, setDepCityCode] = useState("")
  // const [operateCode, setOperateCode] = useState("")
  // const [operateName, setOperateName] = useState("")
  // const [arrivalDateTime, setArrivalDateTime] = useState("")
  // const [departureDateTime, setDepartureDateTime] = useState("")
  // const [seq, setSeq] = useState("")
  // const [longDate2, setLongDate2] = useState("")
  // const [year2, setYear2] = useState("")
  // const [depCity2, setDepCity2] = useState("")
  // const [arrCity2, setArrCityName2] = useState("")
  // const [airline2, setAirline2] = useState("")
  // const [depTime2, setDepTime2] = useState("")
  // const [arrTime2, setArrTime2] = useState("")
  // const [name2, setName2] = useState("")
  // const [RBD2, setRBD2] = useState("")
  // const [flightNumber2, setFlightNumber2] = useState("")
  // const [arrCityCode2, setArrCityCode2] = useState("")
  // const [depCityCode2, setDepCityCode2] = useState("")
  // const [operateCode2, setOperateCode2] = useState('')
  // const [operateName2, setOperateName2] = useState('')
  // const [arrivalDateTime2, setArrivalDateTime2] = useState('')
  // const [departureDateTime2, setDepartureDateTime2] = useState('')
  // const [seq2, setSeq2] = useState('')

  return {
    checkedAirline,
    setCheckedAirline,
    share,
    setShare,
    info,
    setInfo,
    bookingInfo,
    setBookingInfo,
    resBooking,
    setResBooking,
    opensea,
    setOpensea,
    ownerAddress,
    setOwnerAddress,
    tokenID,
    setTokenID,
    account,
    setAccount,
    adult,
    setAdult,
    child,
    setChild,
    infant,
    setInfant,
    triptype,
    setTriptype,
    checkedAny,
    setCheckedAny,
    checkedDirect,
    setCheckedDirect,
    checkedOneStop,
    setCheckedOneStop,
    checkedTwoStop,
    setCheckedTwoStop,
    logout,
    setLogout,
    image,
    setImage,

    //รายละเอียดเที่ยวบินฝั่งขาไป(Seq:1)
    depDisplayTime_1,
    setdepDisplayTime_1,
    depShortDateWithoutDay_1,
    setdepShortDateWithoutDay_1,
    arrDisplayTime_1,
    setarrDisplayTime_1,
    arrShortDateWithoutDay_1,
    setarrShortDateWithoutDay_1,
    depCity_1,
    setdepCity_1,
    depCityCode_1,
    setdepCityCode_1,
    arrCityCode_1,
    setarrCityCode_1,
    arrCityName_1,
    setarrCityName_1,
    airlineName_1,
    setAirlineName_1,
    flightNumber_1,
    setFlightNumber_1,
    operatedAirline_1,
    setOperatedAirline_1,
    airlineCode_1,
    setairlineCode_1,
    depLongDate_1,
    setdepLongDate_1,
    arrLongDate_1,
    setarrLongDate_1,

    //รายละเอียดเที่ยวบินฝั่งขาไป(Seq:2)
    depDisplayTime_2,
    setdepDisplayTime_2,
    depShortDateWithoutDay_2,
    setdepShortDateWithoutDay_2,
    arrDisplayTime_2,
    setarrDisplayTime_2,
    arrShortDateWithoutDay_2,
    setarrShortDateWithoutDay_2,
    depCity_2,
    setdepCity_2,
    depCityCode_2,
    setdepCityCode_2,
    arrCityCode_2,
    setarrCityCode_2,
    arrCityName_2,
    setarrCityName_2,
    airlineName_2,
    setAirlineName_2,
    flightNumber_2,
    setFlightNumber_2,
    operatedAirline_2,
    setOperatedAirline_2,
    airlineCode_2,
    setairlineCode_2,
    depLongDate_2,
    setdepLongDate_2,
    arrLongDate_2,
    setarrLongDate_2,

    checkOpenseaAPI,
    setCheckOpenseaAPI,

    //รายละเอียดเที่ยวบินฝั่งขากลับ(Seq:1)
    depDisplayTime_1Return,
    setdepDisplayTime_1Return,
    depShortDateWithoutDay_1Return,
    setdepShortDateWithoutDay_1Return,
    arrDisplayTime_1Return,
    setarrDisplayTime_1Return,
    arrShortDateWithoutDay_1Return,
    setarrShortDateWithoutDay_1Return,
    depCity_1Return,
    setdepCity_1Return,
    depCityCode_1Return,
    setdepCityCode_1Return,
    arrCityCode_1Return,
    setarrCityCode_1Return,
    arrCityName_1Return,
    setarrCityName_1Return,
    airlineName_1Return,
    setAirlineName_1Return,
    flightNumber_1Return,
    setFlightNumber_1Return,
    operatedAirline_1Return,
    setOperatedAirline_1Return,
    airlineCode_1Return,
    setairlineCode_1Return,
    depLongDate_1Return,
    setdepLongDate_1Return,
    arrLongDate_1Return,
    setarrLongDate_1Return,

    //รายละเอียดเที่ยวบินฝั่งขากลับ(Seq:2)
    depDisplayTime_2Return,
    setdepDisplayTime_2Return,
    depShortDateWithoutDay_2Return,
    setdepShortDateWithoutDay_2Return,
    arrDisplayTime_2Return,
    setarrDisplayTime_2Return,
    arrShortDateWithoutDay_2Return,
    setarrShortDateWithoutDay_2Return,
    depCity_2Return,
    setdepCity_2Return,
    depCityCode_2Return,
    setdepCityCode_2Return,
    arrCityCode_2Return,
    setarrCityCode_2Return,
    arrCityName_2Return,
    setarrCityName_2Return,
    airlineName_2Return,
    setAirlineName_2Return,
    flightNumber_2Return,
    setFlightNumber_2Return,
    operatedAirline_2Return,
    setOperatedAirline_2Return,
    airlineCode_2Return,
    setairlineCode_2Return,
    depLongDate_2Return,
    setdepLongDate_2Return,
    arrLongDate_2Return,
    setarrLongDate_2Return,

    // longDate,
    // setLongDate,
    // year,
    // setYear,
    // depCity,
    // setDepCity,
    // arrCity,
    // setArrCityName,
    // airline,
    // setAirline,
    // depTime,
    // setDepTime,
    // arrTime,
    // setArrTime,
    // name,
    // setName,
    // RBD,
    // setRBD,
    // flightNumber,
    // setFlightNumber,
    // arrCityCode,
    // setArrCityCode,
    // depCityCode,
    // setDepCityCode,
    // operateCode,
    // setOperateCode,
    // operateName,
    // setOperateName,
    // arrivalDateTime,
    // setArrivalDateTime,
    // departureDateTime,
    // setDepartureDateTime,
    // seq,
    // setSeq,
    // longDate2,
    // setLongDate2,
    // year2,
    // setYear2,
    // depCity2,
    // setDepCity2,
    // arrCity2,
    // setArrCityName2,
    // airline2,
    // setAirline2,
    // depTime2,
    // setDepTime2,
    // arrTime2,
    // setArrTime2,
    // name2,
    // setName2,
    // RBD2,
    // setRBD2,
    // flightNumber2,
    // setFlightNumber2,
    // arrCityCode2,
    // setArrCityCode2,
    // depCityCode2,
    // setDepCityCode2,
    // operateCode2,
    // setOperateCode2,
    // operateName2,
    // setOperateName2,
    // arrivalDateTime2,
    // setArrivalDateTime2,
    // departureDateTime2,
    // setDepartureDateTime2,
    // seq2,
    // setSeq2,
  };
}

export default Share;
