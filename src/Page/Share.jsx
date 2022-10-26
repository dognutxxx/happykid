import { useState } from "react";

function Share() {
  const [share, setShare] = useState("")
  // console.log("PageShare",share);
  const [info, setInfo] = useState("")
  // console.log(info);
  const [bookingInfo, setBookingInfo] = useState("")
  const [resBooking, setResBooking] = useState("")
  const [opensea, setOpensea] = useState("")
  const [ownerAddress, setOwnerAddress] = useState("")
  const [id, setID] = useState("")
  const [account, setAccount] = useState("")
  const [longDate, setLongDate] = useState("")
  const [year, setYear] = useState("")
  const [depCity, setDepCity] = useState("")
  const [arrCity, setArrCityName] = useState("")
  const [airline, setAirline] = useState("")
  const [depTime, setDepTime] = useState("")
  const [arrTime, setArrTime] = useState("")
  const [name, setName] = useState("")
  const [RBD, setRBD] = useState("")
  const [flightNumber, setFlightNumber] = useState("")
  const [arrCityCode, setArrCityCode] = useState("")
  const [depCityCode, setDepCityCode] = useState("")
  const [operateCode, setOperateCode] = useState("")
  const [operateName, setOperateName] = useState("")
  const [arrivalDateTime, setArrivalDateTime] = useState("")
  const [departureDateTime, setDepartureDateTime] = useState("")
  const [seq, setSeq] = useState("")
  const [longDate2, setLongDate2] = useState("")
  const [year2, setYear2] = useState("")
  const [depCity2, setDepCity2] = useState("")
  const [arrCity2, setArrCityName2] = useState("")
  const [airline2, setAirline2] = useState("")
  const [depTime2, setDepTime2] = useState("")
  const [arrTime2, setArrTime2] = useState("")
  const [name2, setName2] = useState("")
  const [RBD2, setRBD2] = useState("")
  const [adult, setAdult] = useState("")
  const [child, setChild] = useState("")
  const [infant, setInfant] = useState("")
  const [flightNumber2, setFlightNumber2] = useState("")
  const [arrCityCode2, setArrCityCode2] = useState("")
  const [depCityCode2, setDepCityCode2] = useState("")
  const [operateCode2, setOperateCode2] = useState('')
  const [operateName2, setOperateName2] = useState('')
  const [arrivalDateTime2, setArrivalDateTime2] = useState('')
  const [departureDateTime2, setDepartureDateTime2] = useState('')
  const [seq2, setSeq2] = useState('')
  const [triptype, setTriptype] =  useState('')
  const [checkedDirect, setCheckedDirect] = useState(true)
  const [checkedOneStop, setCheckedOneStop] = useState(true)

  return {
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
    id,
    setID,
    account,
    setAccount,
    longDate,
    setLongDate,
    year,
    setYear,
    depCity,
    setDepCity,
    arrCity,
    setArrCityName,
    airline,
    setAirline,
    depTime,
    setDepTime,
    arrTime,
    setArrTime,
    name,
    setName,
    RBD,
    setRBD,
    flightNumber,
    setFlightNumber,
    arrCityCode,
    setArrCityCode,
    depCityCode,
    setDepCityCode,
    adult,
    setAdult,
    child,
    setChild,
    infant,
    setInfant,
    operateCode,
    setOperateCode,
    operateName,
    setOperateName,
    arrivalDateTime,
    setArrivalDateTime,
    departureDateTime,
    setDepartureDateTime,
    seq,
    setSeq,
    longDate2,
    setLongDate2,
    year2,
    setYear2,
    depCity2,
    setDepCity2,
    arrCity2,
    setArrCityName2,
    airline2,
    setAirline2,
    depTime2,
    setDepTime2,
    arrTime2,
    setArrTime2,
    name2,
    setName2,
    RBD2,
    setRBD2,
    flightNumber2,
    setFlightNumber2,
    arrCityCode2,
    setArrCityCode2,
    depCityCode2,
    setDepCityCode2,
    operateCode2,
    setOperateCode2,
    operateName2,
    setOperateName2,
    arrivalDateTime2,
    setArrivalDateTime2,
    departureDateTime2,
    setDepartureDateTime2,
    seq2,
    setSeq2,
    triptype,
    setTriptype,
    checkedDirect,
    setCheckedDirect,
    checkedOneStop,
    setCheckedOneStop
  };
}

export default Share
