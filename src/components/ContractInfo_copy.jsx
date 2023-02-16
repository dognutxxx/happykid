import React from "react";

import { useState, useEffect } from "react";
import moment from "moment";
import { useDepartureSelectedContext } from "../context/DepartureSelectedContext";
import { useReturnSelectedContext } from "../context/ReturnSelectedContext";
import { usePassengerContractInfoContext } from "../context/PassengerContractInfoContext";
import { useContractDetailContext } from "../context/ContractDetailContext";
import { useFinalDirectDepartureContext } from "../context/FinalDirectDepartureContext";
import { useFinalOneStopDepartureContext } from "../context/FinalOneStopDepartureContext";
import { useFinalTwoStopDepartureContext } from "../context/FinalTwoStopDepartureContext";
import { useFinalDirectReturnContext } from "../context/FinalDirectReturnContext";
import { useFinalOneStopReturnContext } from "../context/FinalOneStopReturnContext";
import { useFinalTwoStopReturnContext } from "../context/FinalTwoStopReturnContext";
import { useResultBookingObjContext } from "../context/ResultBookingObjContext";
import { usePnrContext } from "../context/PnrContext";

import { useNavigate } from "react-router-dom";
import { TextInput, Label, Button, Select } from "flowbite-react";
import Swal from "sweetalert2";

import { EncryptStorage } from "encrypt-storage";

const encryptStorage2 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function contractInfo_copy() {
  //ResultBookingObjContext
  const { setOnewayDirectObjBooking } = useResultBookingObjContext();
  const { setOnewayOneStopObjBooking } = useResultBookingObjContext();
  const { setOnewayTwoStopObjBooking } = useResultBookingObjContext();
  const { setRoundDir_DirObjBookingInfo } = useResultBookingObjContext();
  const { setRoundDir_OneObjBookingInfo } = useResultBookingObjContext();
  const { setRoundDir_TwoObjBookingInfo } = useResultBookingObjContext();
  const { setRoundOne_OneObjBookingInfo } = useResultBookingObjContext();
  const { setRoundOne_DirObjBookingInfo } = useResultBookingObjContext();
  const { setRoundOne_TwoObjBookingInfo } = useResultBookingObjContext();
  const { setRoundTwo_DirObjBookingInfo } = useResultBookingObjContext();
  const { setRoundTwo_OneObjBookingInfo } = useResultBookingObjContext();
  const { setRoundTwo_TwoObjBookingInfo } = useResultBookingObjContext();

  const { onewayDirectObjBooking } = useResultBookingObjContext();
  console.log(onewayDirectObjBooking);
  const { onewayOneStopObjBooking } = useResultBookingObjContext();
  const { onewayTwoStopObjBooking } = useResultBookingObjContext();
  const { roundDir_DirObjBookingInfo } = useResultBookingObjContext();
  console.log(roundDir_DirObjBookingInfo);
  const { roundDir_OneObjBookingInfo } = useResultBookingObjContext();
  const { roundDir_TwoObjBookingInfo } = useResultBookingObjContext();
  const { roundOne_OneObjBookingInfo } = useResultBookingObjContext();
  const { roundOne_DirObjBookingInfo } = useResultBookingObjContext();
  const { roundOne_TwoObjBookingInfo } = useResultBookingObjContext();
  const { roundTwo_DirObjBookingInfo } = useResultBookingObjContext();
  const { roundTwo_OneObjBookingInfo } = useResultBookingObjContext();
  const { roundTwo_TwoObjBookingInfo } = useResultBookingObjContext();

  // console.log(onewayDirectObjBooking);
  // console.log(onewayOneStopObjBooking);
  // console.log(onewayTwoStopObjBooking);
  // console.log(roundDir_DirObjBookingInfo);
  // console.log(roundDir_OneObjBookingInfo);
  // console.log(roundDir_TwoObjBookingInfo);
  // console.log(roundOne_OneObjBookingInfo);
  // console.log(roundOne_DirObjBookingInfo);
  // console.log(roundOne_TwoObjBookingInfo);
  // console.log(roundTwo_DirObjBookingInfo);
  // console.log(roundTwo_OneObjBookingInfo);
  // console.log(roundTwo_TwoObjBookingInfo);

  const accesstripType = localStorage.access_;
  const valueTypeTrip = encryptStorage2.decryptString(accesstripType);

  const access = JSON.parse(valueTypeTrip);
  const typeType_ = JSON.parse(valueTypeTrip);
  const typeTrip = typeType_.tripType;
  console.log(typeTrip);

  //FinalDirectDepartureContext
  const { depDirectDepCityCode_s1 } = useFinalDirectDepartureContext();
  const { depDirectDepCityName_s1 } = useFinalDirectDepartureContext();
  const { depDirectArrCityCode_s1 } = useFinalDirectDepartureContext();
  const { depDirectArrCityName_s1 } = useFinalDirectDepartureContext();
  const { depDirectAirlineCode_s1 } = useFinalDirectDepartureContext();
  const { depDirectAirlineName_s1 } = useFinalDirectDepartureContext();
  const { depDirectFlightNumber_s1 } = useFinalDirectDepartureContext();
  const { depDirectOperatedAirlineCode_s1 } = useFinalDirectDepartureContext();
  const { depDirectOperatedAirlineName_s1 } = useFinalDirectDepartureContext();
  const { depDirectDepartureDateTime_s1 } = useFinalDirectDepartureContext();
  const { depDirectArriveDateTime_s1 } = useFinalDirectDepartureContext();
  const { depDirectRBD_s1 } = useFinalDirectDepartureContext();
  const { depDirectSeq_s1 } = useFinalDirectDepartureContext();
  const { flightNumber } = useFinalDirectDepartureContext();

  // console.log("1Dep", depDirectDepCityCode_s1);
  // console.log("2Dep", depDirectDepCityName_s1);
  // console.log("3Dep", depDirectArrCityCode_s1);
  // console.log("4Dep", depDirectArrCityName_s1);
  // console.log("5Dep", depDirectAirlineCode_s1);
  // console.log("6Dep", depDirectAirlineName_s1);
  // console.log("7Dep", depDirectFlightNumber_s1);
  // console.log("8Dep", depDirectOperatedAirlineCode_s1);
  // console.log("9Dep", depDirectOperatedAirlineName_s1);
  // console.log("10Dep", depDirectDepartureDateTime_s1);
  // console.log("11Dep", depDirectArriveDateTime_s1);
  // console.log("12Dep", depDirectRBD_s1);
  console.log("13Dep", depDirectSeq_s1);

  //FinalOneStopDepartureContext
  const { depOneStopDepCityCode_s1 } = useFinalOneStopDepartureContext();
  const { depOneStopDepCityCode_s2 } = useFinalOneStopDepartureContext();
  const { depOneStopDepCityName_s1 } = useFinalOneStopDepartureContext();
  const { depOneStopDepCityName_s2 } = useFinalOneStopDepartureContext();
  const { depOneStopArrCityCode_s1 } = useFinalOneStopDepartureContext();
  const { depOneStopArrCityCode_s2 } = useFinalOneStopDepartureContext();
  const { depOneStopArrCityName_s1 } = useFinalOneStopDepartureContext();
  const { depOneStopArrCityName_s2 } = useFinalOneStopDepartureContext();
  const { depOneStopAirlineCode_s1 } = useFinalOneStopDepartureContext();
  const { depOneStopAirlineCode_s2 } = useFinalOneStopDepartureContext();
  const { depOneStopAirlineName_s1 } = useFinalOneStopDepartureContext();
  const { depOneStopAirlineName_s2 } = useFinalOneStopDepartureContext();
  const { depOneStopFlightNumber_s1 } = useFinalOneStopDepartureContext();
  const { depOneStopFlightNumber_s2 } = useFinalOneStopDepartureContext();
  const { depOneStopOperatedAirlineCode_s1 } = useFinalOneStopDepartureContext();
  const { depOneStopOperatedAirlineCode_s2 } = useFinalOneStopDepartureContext();
  const { depOneStopOperatedAirlineName_s1 } = useFinalOneStopDepartureContext();
  const { depOneStopOperatedAirlineName_s2 } = useFinalOneStopDepartureContext();
  const { depOneStopDepartureDateTime_s1 } = useFinalOneStopDepartureContext();
  const { depOneStopDepartureDateTime_s2 } = useFinalOneStopDepartureContext();
  const { depOneStoparriveDateTime_s1 } = useFinalOneStopDepartureContext();
  const { depOneStoparriveDateTime_s2 } = useFinalOneStopDepartureContext();
  const { depOneStopRBD_s1 } = useFinalOneStopDepartureContext();
  const { depOneStopRBD_s2 } = useFinalOneStopDepartureContext();
  const { depOneStopSeq_s1 } = useFinalOneStopDepartureContext();
  const { depOneStopSeq_s2 } = useFinalOneStopDepartureContext();

  // console.log("1DepOneStop", depOneStopFlightNumber_s1);
  // console.log("2DepOneStop", depOneStopFlightNumber_s2);
  // console.log("3DepOneStop", depOneStopOperatedAirlineCode_s1);
  // console.log("4DepOneStop", depOneStopOperatedAirlineCode_s2);
  // console.log("5DepOneStop", depOneStopOperatedAirlineName_s1);
  // console.log("6DepOneStop", depOneStopOperatedAirlineName_s2);
  // console.log("7DepOneStop", depOneStopDepartureDateTime_s1);
  // console.log("8DepOneStop", depOneStopDepartureDateTime_s2);
  // console.log("9DepOneStop", depOneStoparriveDateTime_s1);
  // console.log("10DepOneStop", depOneStoparriveDateTime_s2);
  // console.log("11DepOneStop", depOneStopRBD_s1);
  // console.log("12DepOneStop", depOneStopRBD_s2);
  // console.log("13DepOneStop", depOneStopSeq_s1);
  // console.log("15DepOneStop", depOneStopSeq_s2);
  // console.log("16DepOneStop", depOneStopDepCityCode_s1);
  // console.log("17DepOneStop", depOneStopDepCityCode_s2);
  // console.log("18DepOneStop", depOneStopDepCityName_s1);
  // console.log("19DepOneStop", depOneStopDepCityName_s2);
  // console.log("20DepOneStop", depOneStopArrCityCode_s1);
  // console.log("21DepOneStop", depOneStopArrCityCode_s2);
  // console.log("22DepOneStop", depOneStopArrCityName_s1);
  // console.log("23DepOneStop", depOneStopArrCityName_s2);
  // console.log("24DepOneStop", depOneStopAirlineCode_s1);
  // console.log("25DepOneStop", depOneStopAirlineCode_s2);
  // console.log("26DepOneStop", depOneStopAirlineName_s1);
  // console.log("27DepOneStop", depOneStopAirlineName_s2);

  //FinalTwoStopDepartureContext
  const { depTwoStopDepCityCode_s1 } = useFinalTwoStopDepartureContext();
  const { depTwoStopDepCityCode_s2 } = useFinalTwoStopDepartureContext();
  const { depTwoStopDepCityCode_s3 } = useFinalTwoStopDepartureContext();
  const { depTwoStopDepCityName_s1 } = useFinalTwoStopDepartureContext();
  const { depTwoStopDepCityName_s2 } = useFinalTwoStopDepartureContext();
  const { depTwoStopDepCityName_s3 } = useFinalTwoStopDepartureContext();
  const { depTwoStopArrCityCode_s1 } = useFinalTwoStopDepartureContext();
  const { depTwoStopArrCityCode_s2 } = useFinalTwoStopDepartureContext();
  const { depTwoStopArrCityCode_s3 } = useFinalTwoStopDepartureContext();
  const { depTwoStopArrCityName_s1 } = useFinalTwoStopDepartureContext();
  const { depTwoStopArrCityName_s2 } = useFinalTwoStopDepartureContext();
  const { depTwoStopArrCityName_s3 } = useFinalTwoStopDepartureContext();
  const { depTwoStopAirlineCode_s1 } = useFinalTwoStopDepartureContext();
  const { depTwoStopAirlineCode_s2 } = useFinalTwoStopDepartureContext();
  const { depTwoStopAirlineCode_s3 } = useFinalTwoStopDepartureContext();
  const { depTwoStopAirlineName_s1 } = useFinalTwoStopDepartureContext();
  const { depTwoStopAirlineName_s2 } = useFinalTwoStopDepartureContext();
  const { depTwoStopAirlineName_s3 } = useFinalTwoStopDepartureContext();
  const { depTwoStopFlightNumber_s1 } = useFinalTwoStopDepartureContext();
  const { depTwoStopFlightNumber_s2 } = useFinalTwoStopDepartureContext();
  const { depTwoStopFlightNumber_s3 } = useFinalTwoStopDepartureContext();
  const { depTwoStopOperatedAirlineCode_s1 } = useFinalTwoStopDepartureContext();
  const { depTwoStopOperatedAirlineCode_s2 } = useFinalTwoStopDepartureContext();
  const { depTwoStopOperatedAirlineCode_s3 } = useFinalTwoStopDepartureContext();
  const { depTwoStopOperatedAirlineName_s1 } = useFinalTwoStopDepartureContext();
  const { depTwoStopOperatedAirlineName_s2 } = useFinalTwoStopDepartureContext();
  const { depTwoStopOperatedAirlineName_s3 } = useFinalTwoStopDepartureContext();
  const { depTwoStopDepartureDateTime_s1 } = useFinalTwoStopDepartureContext();
  const { depTwoStopDepartureDateTime_s2 } = useFinalTwoStopDepartureContext();
  const { depTwoStopDepartureDateTime_s3 } = useFinalTwoStopDepartureContext();
  const { depTwoStoparriveDateTime_s1 } = useFinalTwoStopDepartureContext();
  const { depTwoStoparriveDateTime_s2 } = useFinalTwoStopDepartureContext();
  const { depTwoStoparriveDateTime_s3 } = useFinalTwoStopDepartureContext();
  const { depTwoStopRBD_s1 } = useFinalTwoStopDepartureContext();
  const { depTwoStopRBD_s2 } = useFinalTwoStopDepartureContext();
  const { depTwoStopRBD_s3 } = useFinalTwoStopDepartureContext();
  const { depTwoStopSeq_s1 } = useFinalTwoStopDepartureContext();
  const { depTwoStopSeq_s2 } = useFinalTwoStopDepartureContext();
  const { depTwoStopSeq_s3 } = useFinalTwoStopDepartureContext();

  // console.log("1DepTwoStop", depTwoStopFlightNumber_s1);
  // console.log("2DepTwoStop", depTwoStopFlightNumber_s2);
  // console.log("2DepTwoStop", depTwoStopFlightNumber_s3);
  // console.log("3DepTwoStop", depTwoStopOperatedAirlineCode_s1);
  // console.log("4DepTwoStop", depTwoStopOperatedAirlineCode_s2);
  // console.log("5DepTwoStop", depTwoStopOperatedAirlineCode_s3);
  // console.log("6DepTwoStop", depTwoStopOperatedAirlineName_s1);
  // console.log("7DepTwoStop", depTwoStopOperatedAirlineName_s2);
  // console.log("8DepTwoStop", depTwoStopOperatedAirlineName_s3);
  // console.log("9DepTwoStop", depTwoStopDepartureDateTime_s1);
  // console.log("10DepTwoStop", depTwoStopDepartureDateTime_s2);
  // console.log("11DepTwoStop", depTwoStopDepartureDateTime_s3);
  // console.log("12DepTwoStop", depTwoStoparriveDateTime_s1);
  // console.log("13DepTwoStop", depTwoStoparriveDateTime_s2);
  // console.log("12DepTwoStop", depTwoStoparriveDateTime_s3);
  // console.log("13DepTwoStop", depTwoStopRBD_s1);
  // console.log("14DepTwoStop", depTwoStopRBD_s2);
  // console.log("15DepTwoStop", depTwoStopRBD_s3);
  // console.log("16DepTwoStop", depTwoStopSeq_s1);
  // console.log("17DepTwoStop", depTwoStopSeq_s2);
  // console.log("18DepTwoStop", depTwoStopSeq_s3);
  // console.log("19DepTwoStop", depTwoStopDepCityCode_s1);
  // console.log("20DepTwoStop", depTwoStopDepCityCode_s2);
  // console.log("21DepTwoStop", depTwoStopDepCityCode_s3);
  // console.log("22DepTwoStop", depTwoStopDepCityName_s1);
  // console.log("23DepTwoStop", depTwoStopDepCityName_s2);
  // console.log("24DepTwoStop", depTwoStopDepCityName_s3);
  // console.log("25DepTwoStop", depTwoStopArrCityCode_s1);
  // console.log("26DepTwoStop", depTwoStopArrCityCode_s2);
  // console.log("27DepTwoStop", depTwoStopArrCityCode_s3);
  // console.log("28DepTwoStop", depTwoStopArrCityName_s1);
  // console.log("29DepTwoStop", depTwoStopArrCityName_s2);
  // console.log("30DepTwoStop", depTwoStopArrCityName_s3);
  // console.log("31DepTwoStop", depTwoStopAirlineCode_s1);
  // console.log("32DepTwoStop", depTwoStopAirlineCode_s2);
  // console.log("33DepTwoStop", depTwoStopAirlineCode_s3);
  // console.log("34DepTwoStop", depTwoStopAirlineName_s1);
  // console.log("35DepTwoStop", depTwoStopAirlineName_s2);
  // console.log("36DepTwoStop", depTwoStopAirlineName_s3);

  //FinalDirectReturnContext
  const { returnDirectDepCityCode_s1 } = useFinalDirectReturnContext();
  const { returnDirectDepCityName_s1 } = useFinalDirectReturnContext();
  const { returnDirectArrCityCode_s1 } = useFinalDirectReturnContext();
  const { returnDirectArrCityName_s1 } = useFinalDirectReturnContext();
  const { returnDirectAirlineCode_s1 } = useFinalDirectReturnContext();
  const { returnDirectAirlineName_s1 } = useFinalDirectReturnContext();
  const { returnDirectFlightNumber_s1 } = useFinalDirectReturnContext();
  const { returnDirectOperatedAirlineCode_s1 } = useFinalDirectReturnContext();
  const { returnDirectOperatedAirlineName_s1 } = useFinalDirectReturnContext();
  const { returnDirectDepartureDateTime_s1 } = useFinalDirectReturnContext();
  const { returnDirectArriveDateTime_s1 } = useFinalDirectReturnContext();
  const { returnDirectRBD_s1 } = useFinalDirectReturnContext();
  const { returnDirectSeq_s1 } = useFinalDirectReturnContext();

  // console.log("1return", returnDirectDepCityCode_s1);
  // console.log("2return", returnDirectDepCityName_s1);
  // console.log("3return", returnDirectArrCityCode_s1);
  // console.log("4return", returnDirectArrCityName_s1);
  // console.log("5return", returnDirectAirlineCode_s1);
  // console.log("6return", returnDirectAirlineName_s1);
  // console.log("7return", returnDirectFlightNumber_s1);
  // console.log("8return", returnDirectOperatedAirlineCode_s1);
  // console.log("9return", returnDirectOperatedAirlineName_s1);
  // console.log("10return", returnDirectDepartureDateTime_s1);
  // console.log("11return", returnDirectArriveDateTime_s1);
  // console.log("12return", returnDirectRBD_s1);
  console.log("13return", returnDirectSeq_s1);

  //FinalOneStopReturnContext
  const { returnOneStopDepCityCode_s1 } = useFinalOneStopReturnContext();
  const { returnOneStopDepCityCode_s2 } = useFinalOneStopReturnContext();
  const { returnOneStopDepCityName_s1 } = useFinalOneStopReturnContext();
  const { returnOneStopDepCityName_s2 } = useFinalOneStopReturnContext();
  const { returnOneStopArrCityCode_s1 } = useFinalOneStopReturnContext();
  const { returnOneStopArrCityCode_s2 } = useFinalOneStopReturnContext();
  const { returnOneStopArrCityName_s1 } = useFinalOneStopReturnContext();
  const { returnOneStopArrCityName_s2 } = useFinalOneStopReturnContext();
  const { returnOneStopAirlineCode_s1 } = useFinalOneStopReturnContext();
  const { returnOneStopAirlineCode_s2 } = useFinalOneStopReturnContext();
  const { returnOneStopAirlineName_s1 } = useFinalOneStopReturnContext();
  const { returnOneStopAirlineName_s2 } = useFinalOneStopReturnContext();
  const { returnOneStopFlightNumber_s1 } = useFinalOneStopReturnContext();
  const { returnOneStopFlightNumber_s2 } = useFinalOneStopReturnContext();
  const { returnOneStopOperatedAirlineCode_s1 } = useFinalOneStopReturnContext();
  const { returnOneStopOperatedAirlineCode_s2 } = useFinalOneStopReturnContext();
  const { returnOneStopOperatedAirlineName_s1 } = useFinalOneStopReturnContext();
  const { returnOneStopOperatedAirlineName_s2 } = useFinalOneStopReturnContext();
  const { returnOneStopDepartureDateTime_s1 } = useFinalOneStopReturnContext();
  const { returnOneStopDepartureDateTime_s2 } = useFinalOneStopReturnContext();
  const { returnOneStoparriveDateTime_s1 } = useFinalOneStopReturnContext();
  const { returnOneStoparriveDateTime_s2 } = useFinalOneStopReturnContext();
  const { returnOneStopRBD_s1 } = useFinalOneStopReturnContext();
  const { returnOneStopRBD_s2 } = useFinalOneStopReturnContext();
  const { returnOneStopSeq_s1 } = useFinalOneStopReturnContext();
  const { returnOneStopSeq_s2 } = useFinalOneStopReturnContext();

  // console.log("1returnOneStop", returnOneStopFlightNumber_s1);
  // console.log("2returnOneStop", returnOneStopFlightNumber_s2);
  // console.log("3returnOneStop", returnOneStopOperatedAirlineCode_s1);
  // console.log("4returnOneStop", returnOneStopOperatedAirlineCode_s2);
  // console.log("5returnOneStop", returnOneStopOperatedAirlineName_s1);
  // console.log("6returnOneStop", returnOneStopOperatedAirlineName_s2);
  // console.log("7returnOneStop", returnOneStopDepartureDateTime_s1);
  // console.log("8returnOneStop", returnOneStopDepartureDateTime_s2);
  // console.log("9returnOneStop", returnOneStoparriveDateTime_s1);
  // console.log("10returnOneStop", returnOneStoparriveDateTime_s2);
  // console.log("11returnOneStop", returnOneStopRBD_s1);
  // console.log("12returnOneStop", returnOneStopRBD_s2);
  // console.log("13returnOneStop", returnOneStopSeq_s1);
  // console.log("15returnOneStop", returnOneStopSeq_s2);
  // console.log("16returnOneStop", returnOneStopDepCityCode_s1);
  // console.log("17returnOneStop", returnOneStopDepCityCode_s2);
  // console.log("18returnOneStop", returnOneStopDepCityName_s1);
  // console.log("19returnOneStop", returnOneStopDepCityName_s2);
  // console.log("20returnOneStop", returnOneStopArrCityCode_s1);
  // console.log("21returnOneStop", returnOneStopArrCityCode_s2);
  // console.log("22returnOneStop", returnOneStopArrCityName_s1);
  // console.log("23returnOneStop", returnOneStopArrCityName_s2);
  // console.log("24returnOneStop", returnOneStopAirlineCode_s1);
  // console.log("25returnOneStop", returnOneStopAirlineCode_s2);
  // console.log("26returnOneStop", returnOneStopAirlineName_s1);
  // console.log("27returnOneStop", returnOneStopAirlineName_s2);

  //FinalTwoStopReturnContext
  const { returnTwoStopDepCityCode_s1 } = useFinalTwoStopReturnContext();
  const { returnTwoStopDepCityCode_s2 } = useFinalTwoStopReturnContext();
  const { returnTwoStopDepCityCode_s3 } = useFinalTwoStopReturnContext();
  const { returnTwoStopDepCityName_s1 } = useFinalTwoStopReturnContext();
  const { returnTwoStopDepCityName_s2 } = useFinalTwoStopReturnContext();
  const { returnTwoStopDepCityName_s3 } = useFinalTwoStopReturnContext();
  const { returnTwoStopArrCityCode_s1 } = useFinalTwoStopReturnContext();
  const { returnTwoStopArrCityCode_s2 } = useFinalTwoStopReturnContext();
  const { returnTwoStopArrCityCode_s3 } = useFinalTwoStopReturnContext();
  const { returnTwoStopArrCityName_s1 } = useFinalTwoStopReturnContext();
  const { returnTwoStopArrCityName_s2 } = useFinalTwoStopReturnContext();
  const { returnTwoStopArrCityName_s3 } = useFinalTwoStopReturnContext();
  const { returnTwoStopAirlineCode_s1 } = useFinalTwoStopReturnContext();
  const { returnTwoStopAirlineCode_s2 } = useFinalTwoStopReturnContext();
  const { returnTwoStopAirlineCode_s3 } = useFinalTwoStopReturnContext();
  const { returnTwoStopAirlineName_s1 } = useFinalTwoStopReturnContext();
  const { returnTwoStopAirlineName_s2 } = useFinalTwoStopReturnContext();
  const { returnTwoStopAirlineName_s3 } = useFinalTwoStopReturnContext();
  const { returnTwoStopFlightNumber_s1 } = useFinalTwoStopReturnContext();
  const { returnTwoStopFlightNumber_s2 } = useFinalTwoStopReturnContext();
  const { returnTwoStopFlightNumber_s3 } = useFinalTwoStopReturnContext();
  const { returnTwoStopOperatedAirlineCode_s1 } = useFinalTwoStopReturnContext();
  const { returnTwoStopOperatedAirlineCode_s2 } = useFinalTwoStopReturnContext();
  const { returnTwoStopOperatedAirlineCode_s3 } = useFinalTwoStopReturnContext();
  const { returnTwoStopOperatedAirlineName_s1 } = useFinalTwoStopReturnContext();
  const { returnTwoStopOperatedAirlineName_s2 } = useFinalTwoStopReturnContext();
  const { returnTwoStopOperatedAirlineName_s3 } = useFinalTwoStopReturnContext();
  const { returnTwoStopDepartureDateTime_s1 } = useFinalTwoStopReturnContext();
  const { returnTwoStopDepartureDateTime_s2 } = useFinalTwoStopReturnContext();
  const { returnTwoStopDepartureDateTime_s3 } = useFinalTwoStopReturnContext();
  const { returnTwoStoparriveDateTime_s1 } = useFinalTwoStopReturnContext();
  const { returnTwoStoparriveDateTime_s2 } = useFinalTwoStopReturnContext();
  const { returnTwoStoparriveDateTime_s3 } = useFinalTwoStopReturnContext();
  const { returnTwoStopRBD_s1 } = useFinalTwoStopReturnContext();
  const { returnTwoStopRBD_s2 } = useFinalTwoStopReturnContext();
  const { returnTwoStopRBD_s3 } = useFinalTwoStopReturnContext();
  const { returnTwoStopSeq_s1 } = useFinalTwoStopReturnContext();
  const { returnTwoStopSeq_s2 } = useFinalTwoStopReturnContext();
  const { returnTwoStopSeq_s3 } = useFinalTwoStopReturnContext();

  // console.log("1returnTwoStop", returnTwoStopFlightNumber_s1);
  // console.log("2returnTwoStop", returnTwoStopFlightNumber_s2);
  // console.log("2returnTwoStop", returnTwoStopFlightNumber_s3);
  // console.log("3returnTwoStop", returnTwoStopOperatedAirlineCode_s1);
  // console.log("4returnTwoStop", returnTwoStopOperatedAirlineCode_s2);
  // console.log("5returnTwoStop", returnTwoStopOperatedAirlineCode_s3);
  // console.log("6returnTwoStop", returnTwoStopOperatedAirlineName_s1);
  // console.log("7returnTwoStop", returnTwoStopOperatedAirlineName_s2);
  // console.log("8returnTwoStop", returnTwoStopOperatedAirlineName_s3);
  // console.log("9returnTwoStop", returnTwoStopDepartureDateTime_s1);
  // console.log("10returnTwoStop", returnTwoStopDepartureDateTime_s2);
  // console.log("11returnTwoStop", returnTwoStopDepartureDateTime_s3);
  // console.log("12returnTwoStop", returnTwoStoparriveDateTime_s1);
  // console.log("13returnTwoStop", returnTwoStoparriveDateTime_s2);
  // console.log("14returnTwoStop", returnTwoStoparriveDateTime_s3);
  // console.log("15returnTwoStop", returnTwoStopRBD_s1);
  // console.log("16returnTwoStop", returnTwoStopRBD_s2);
  // console.log("17returnTwoStop", returnTwoStopRBD_s3);
  // console.log("18returnTwoStop", returnTwoStopSeq_s1);
  // console.log("19returnTwoStop", returnTwoStopSeq_s2);
  // console.log("20returnTwoStop", returnTwoStopSeq_s3);
  // console.log("21returnTwoStop", returnTwoStopDepCityCode_s1);
  // console.log("22returnTwoStop", returnTwoStopDepCityCode_s2);
  // console.log("23returnTwoStop", returnTwoStopDepCityCode_s3);
  // console.log("24returnTwoStop", returnTwoStopDepCityName_s1);
  // console.log("25returnTwoStop", returnTwoStopDepCityName_s2);
  // console.log("26returnTwoStop", returnTwoStopDepCityName_s3);
  // console.log("27returnTwoStop", returnTwoStopArrCityCode_s1);
  // console.log("28returnTwoStop", returnTwoStopArrCityCode_s2);
  // console.log("29returnTwoStop", returnTwoStopArrCityCode_s3);
  // console.log("30returnTwoStop", returnTwoStopArrCityName_s1);
  // console.log("31returnTwoStop", returnTwoStopArrCityName_s2);
  // console.log("32returnTwoStop", returnTwoStopArrCityName_s3);
  // console.log("33returnTwoStop", returnTwoStopAirlineCode_s1);
  // console.log("34returnTwoStop", returnTwoStopAirlineCode_s2);
  // console.log("35returnTwoStop", returnTwoStopAirlineCode_s3);
  // console.log("36returnTwoStop", returnTwoStopAirlineName_s1);
  // console.log("37returnTwoStop", returnTwoStopAirlineName_s2);
  // console.log("38returnTwoStop", returnTwoStopAirlineName_s3);

  let navigate = useNavigate();

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

  console.log(inputTitleContract);
  console.log(inputFirstNameContract);
  console.log(inputMiddleNameContract);
  console.log(inputLastNameContract);
  console.log(inputEmailContract);
  console.log(inputMobilePhoneContract);

  const { setInputTitleContract } = useContractDetailContext();
  const { setInputFirstNameContract } = useContractDetailContext();
  const { setInputMiddleNameContract } = useContractDetailContext();
  const { setInputLastNameContract } = useContractDetailContext();
  const { setInputDateOfBirthContract } = useContractDetailContext();
  const { setInputNationalityContract } = useContractDetailContext();
  const { setInputinputMobilePhoneContract } = useContractDetailContext();
  const { setInputEmailContract } = useContractDetailContext();
  const { setInputPassportNumberContract } = useContractDetailContext();
  const { setInputCountryOfIssueContract } = useContractDetailContext();
  const { setinputExpiryDateContract } = useContractDetailContext();

  // console.log("inputFirstNameContract", inputFirstNameContract);

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

  // console.log(inputTitle);
  // console.log("inputFirstName", inputFirstName);
  // console.log(inputMiddleName);
  // console.log(inputLastName);
  // console.log(inputDateOfBirth);
  // console.log(inputMobilePhone);

  const { setInputTitle } = usePassengerContractInfoContext();
  const { setInputFirstName } = usePassengerContractInfoContext();
  const { setInputMiddleName } = usePassengerContractInfoContext();
  const { setInputLastName } = usePassengerContractInfoContext();
  const { setInputDateOfBirth } = usePassengerContractInfoContext();
  const { setInputNationality } = usePassengerContractInfoContext();
  const { setInputinputMobilePhone } = usePassengerContractInfoContext();
  const { setInputEmail } = usePassengerContractInfoContext();
  const { setInputPassportNumber } = usePassengerContractInfoContext();
  const { setInputCountryOfIssue } = usePassengerContractInfoContext();
  const { setinputExpiryDate } = usePassengerContractInfoContext();
  const { setinputIssueDate } = usePassengerContractInfoContext();

  const { setChildInputTitle } = usePassengerContractInfoContext();
  const { setChildInputFirstName } = usePassengerContractInfoContext();
  const { setChildInputMiddleName } = usePassengerContractInfoContext();
  const { setChildInputLastName } = usePassengerContractInfoContext();
  const { setChildInputDateOfBirth } = usePassengerContractInfoContext();
  const { setChildInputNationality } = usePassengerContractInfoContext();
  const { setChildInputinputMobilePhone } = usePassengerContractInfoContext();
  const { setChildInputEmail } = usePassengerContractInfoContext();
  const { setChildInputPassportNumber } = usePassengerContractInfoContext();
  const { setChildInputCountryOfIssue } = usePassengerContractInfoContext();
  const { setChildinputExpiryDate } = usePassengerContractInfoContext();
  const { setChildinputIssueDate } = usePassengerContractInfoContext();

  const { setInfantInputTitle } = usePassengerContractInfoContext();
  const { setInfantInputFirstName } = usePassengerContractInfoContext();
  const { setInfantInputMiddleName } = usePassengerContractInfoContext();
  const { setInfantInputLastName } = usePassengerContractInfoContext();
  const { setInfantInputDateOfBirth } = usePassengerContractInfoContext();
  const { setInfantInputNationality } = usePassengerContractInfoContext();
  const { setInfantInputinputMobilePhone } = usePassengerContractInfoContext();
  const { setInfantInputEmail } = usePassengerContractInfoContext();
  const { setInfantInputPassportNumber } = usePassengerContractInfoContext();
  const { setInfantInputCountryOfIssue } = usePassengerContractInfoContext();
  const { setInfantinputExpiryDate } = usePassengerContractInfoContext();
  const { setInfantinputIssueDate } = usePassengerContractInfoContext();

  const [inputTelNo, setInputTelNo] = useState("");
  const [CountryCode, setCountryCode] = useState("");

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
  const { twoStopCity } = useDepartureSelectedContext();
  const { oneStopCodeCity } = useDepartureSelectedContext();
  const { twoStopCodeCity } = useDepartureSelectedContext();
  const { departureDateTimeSeq1_1 } = useDepartureSelectedContext();
  const { departureDateTimeSeq2_1 } = useDepartureSelectedContext();
  const { departureDateTimeSeq3_1 } = useDepartureSelectedContext();
  const { arrivalDateTimeSeq1_1 } = useDepartureSelectedContext();
  const { arrivalDateTimeSeq2_1 } = useDepartureSelectedContext();
  const { arrivalDateTimeSeq3_1 } = useDepartureSelectedContext();

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
  const { twoStopCity2 } = useReturnSelectedContext();
  const { oneStopCodeCity2 } = useReturnSelectedContext();
  const { twoStopCodeCity2 } = useReturnSelectedContext();
  const { departureDateTimeSeq1_2 } = useReturnSelectedContext();
  const { departureDateTimeSeq2_2 } = useReturnSelectedContext();
  const { departureDateTimeSeq3_2 } = useReturnSelectedContext();
  const { arrivalDateTimeSeq1_2 } = useReturnSelectedContext();
  const { arrivalDateTimeSeq2_2 } = useReturnSelectedContext();
  const { arrivalDateTimeSeq3_2 } = useReturnSelectedContext();

  const errorAlert = (message) => {
    Swal.fire({
      position: "top-center",
      icon: "warning",
      title: "",
      html: `<p style="font-size:20px">${message}</p>`,
      showConfirmButton: false,
      timer: 8000,
    });
  };

  const { adultInfo, childInfo, infantInfo } = usePnrContext();

  console.log("Final Adult", adultInfo);
  console.log("Final Child", childInfo);
  console.log("Final Infant", infantInfo);

  // const inputTitleAdultsPassenger = (e, i) => {
  //   // adultInfo[i].title = e;
  //   setInputTitle((adultInfo[i].title = e));
  // };

  // const inputFirstnameAdultsPassenger = (e, i) => {
  //   // adultInfo[i].firstname = e;
  //   // if (copyDetails === false) {
  //   setInputFirstName((adultInfo[i].firstname = e));
  //   // }
  // };

  // const inputMiddleNameAdultsPassenger = (e, i) => {
  //   // adultInfo[i].middlename = e;
  //   setInputMiddleName((adultInfo[i].middlename = e));
  // };

  // const inputLastnameAdultsPassenger = (e, i) => {
  //   // adultInfo[i].lastname = e;
  //   setInputLastName((adultInfo[i].lastname = e));
  // };

  // const inputEmailAdultsPassenger = (e, i) => {
  //   // adultInfo[i].email = e;
  //   setInputEmail((adultInfo[i].email = e));
  // };

  // const inputDateOfBirthAdultsPassenger = (e, i) => {
  //   // adultInfo[i].birthday = e;
  //   setInputDateOfBirth((adultInfo[i].birthday = e));
  // };

  // const inputMobilePhoneAdultsPassenger = (e, i) => {
  //   // adultInfo[i].telNo = e;
  //   setChildInputinputMobilePhone((adultInfo[i].telNo = e));
  // };

  // const inputTitleChildsPassenger = (e, i) => {
  //   // adultInfo[i].title = e;
  //   setChildInputTitle((childInfo[i].title = e));
  // };

  // const inputFirstnameChildsPassenger = (e, i) => {
  //   // childInfo[i].firstname = e;
  //   setChildInputFirstName((childInfo[i].firstname = e));
  // };

  // const inputMiddleNameChildsPassenger = (e, i) => {
  //   // childInfo[i].middlename = e;
  //   setChildInputMiddleName((childInfo[i].middlename = e));
  // };

  // const inputLastnameChildsPassenger = (e, i) => {
  //   // childInfo[i].lastname = e;
  //   setChildInputLastName((childInfo[i].lastname = e));
  // };

  // const inputEmailChildsPassenger = (e, i) => {
  //   // childInfo[i].email = e;
  //   setChildInputEmail((childInfo[i].email = e));
  // };

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

  const backToBookingPage = () => {
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

    navigate("/booking");
  };

  const totalAge = (val) => {
    let nowdate = moment().format("YYYY-MM-DD");
    let result = "";
    if (val) {
      result = parseInt(moment(nowdate).diff(moment(val), "years"));
    }
    return result;
  };

  // const inputDateOfBirthChildsPassenger = (e, i) => {
  //   if (totalAge(e) < 12 && totalAge(e) >= 2) {
  //     setChildInputDateOfBirth((childInfo[i].birthday = e));
  //   } else {
  //     errorAlert(`Date of Birth of child might 2-12 years old.`);
  //     setChildInputDateOfBirth((childInfo[i].birthday = ""));
  //   }
  // };

  // const inputMobilePhoneChildsPassenger = (e, i) => {
  //   // childInfo[i].telNo = e;
  //   setChildInputinputMobilePhone((childInfo[i].telNo = e));
  // };

  // const inputTitleInfantsPassenger = (e, i) => {
  //   // adultInfo[i].title = e;
  //   setInfantInputTitle((infantInfo[i].title = e));
  // };

  // const inputFirstnameInfantsPassenger = (e, i) => {
  //   // infantInfo[i].firstname = e;
  //   setInfantInputFirstName((infantInfo[i].firstname = e));
  // };

  // const inputMiddleNameInfantsPassenger = (e, i) => {
  //   // infantInfo[i].middlename = e;
  //   setInfantInputMiddleName((infantInfo[i].middlename = e));
  // };

  // const inputLastnameInfantsPassenger = (e, i) => {
  //   // infantInfo[i].lastname = e;
  //   setInfantInputLastName((infantInfo[i].lastname = e));
  // };

  // const inputEmailInfantsPassenger = (e, i) => {
  //   // infantInfo[i].email = e;
  //   setInfantInputEmail((infantInfo[i].email = e));
  // };

  // const inputDateOfBirthInfantsPassenger = (e, i) => {
  //   // infantInfo[i].birthday = e;
  //   if (totalAge(e) < 2) {
  //     setInfantInputDateOfBirth((infantInfo[i].birthday = e));
  //   } else {
  //     errorAlert(`Date of Birth at infant might 0-2 years old.`);
  //     setInfantInputDateOfBirth((infantInfo[i].birthday = ""));
  //   }
  // };

  // const inputMobilePhoneInfantsPassenger = (e, i) => {
  //   // infantInfo[i].telNo = e;
  //   setInfantInputinputMobilePhone((infantInfo[i].telNo = e));
  // };

  const totalTime = timeDuration?.slice(0, 2) + "hr " + timeDuration?.slice(2) + "m";
  const totalTime2 = timeDuration2?.slice(0, 2) + "hr " + timeDuration2?.slice(2) + "m";

  const objAccess = access;
  const adult = objAccess.adult;
  const child = objAccess.child;
  const infant = objAccess.infant;
  const svc_class = objAccess.svcClass;

  const [adultPassenger, setAdultPassenger] = useState([]);
  const [childPassenger, setChildPassenger] = useState([]);
  const [infantPassenger, setInfantPassenger] = useState([]);
  console.log("adultPassenger", adultPassenger);
  console.log("childPassenger", childPassenger);
  console.log("infantPassenger", infantPassenger);

  useEffect(() => {
    handleAdultPassenger();
    handleChildPassenger();
    handleInfantPassenger();
    chooseRoute();
  }, []);

  const chooseRoute = () => {
    if (typeTrip === "O") {
      if (depDirectSeq_s1) {
        const onewayDirectObjBooking = [
          {
            noOfAdults: adult,
            noOfChildren: child,
            noOfInfants: infant,
            svc_class: svc_class,
            depFlight: [
              {
                depCity: {
                  code: depDirectDepCityCode_s1,
                  name: depDirectDepCityName_s1,
                },
                arrCity: {
                  code: depDirectArrCityCode_s1,
                  name: depDirectArrCityName_s1,
                },
                airline: {
                  code: depDirectAirlineCode_s1,
                  name: depDirectAirlineName_s1,
                },
                flightNumber: depDirectFlightNumber_s1,
                operatedAirline: {
                  code: depDirectOperatedAirlineCode_s1,
                  name: depDirectOperatedAirlineName_s1,
                },
                departureDateTime: depDirectDepartureDateTime_s1,
                arrivalDateTime: depDirectArriveDateTime_s1,
                rbd: depDirectRBD_s1,
                Seq: depDirectSeq_s1,
              },
            ],
            contactInfo: {
              title: inputTitleContract,
              firstname: inputFirstNameContract,
              middlename: inputMiddleNameContract,
              lastname: inputLastNameContract,
              email: inputEmailContract,
              telNo: inputMobilePhoneContract,
              countryCode: inputCountryOfIssueContract,
            },
            adtPaxs: adultInfo,
            chdPaxs: childInfo,
            infPaxs: infantInfo,
            languageCode: "th",
          },
        ];
        setOnewayDirectObjBooking(onewayDirectObjBooking);
        sessionStorage.setItem("onewayDirectObjBooking", JSON.stringify(onewayDirectObjBooking));
      } else if (depOneStopSeq_s1 && depOneStopSeq_s2) {
        console.log("OneStop");

        const onewayOneStopObjBooking = [
          {
            noOfAdults: adult,
            noOfChildren: child,
            noOfInfants: infant,
            svc_class: svc_class,
            depFlight: [
              {
                depCity: {
                  code: depOneStopDepCityCode_s1,
                  name: depOneStopDepCityName_s1,
                },
                arrCity: {
                  code: depOneStopArrCityCode_s1,
                  name: depOneStopArrCityName_s1,
                },
                airline: {
                  code: depOneStopAirlineCode_s1,
                  name: depOneStopAirlineName_s1,
                },
                flightNumber: depOneStopFlightNumber_s1,
                operatedAirline: {
                  code: depOneStopOperatedAirlineCode_s1,
                  name: depOneStopOperatedAirlineName_s1,
                },
                departureDateTime: depOneStopDepartureDateTime_s1,
                arrivalDateTime: depOneStoparriveDateTime_s1,
                rbd: depOneStopRBD_s1,
                Seq: depOneStopSeq_s1,
              },
              {
                depCity: {
                  code: depOneStopDepCityCode_s2,
                  name: depOneStopDepCityName_s2,
                },
                arrCity: {
                  code: depOneStopArrCityCode_s2,
                  name: depOneStopArrCityName_s2,
                },
                airline: {
                  code: depOneStopAirlineCode_s2,
                  name: depOneStopAirlineName_s2,
                },
                flightNumber: depOneStopFlightNumber_s2,
                operatedAirline: {
                  code: depOneStopOperatedAirlineCode_s2,
                  name: depOneStopOperatedAirlineName_s2,
                },
                departureDateTime: depOneStopDepartureDateTime_s2,
                arrivalDateTime: depOneStoparriveDateTime_s2,
                rbd: depOneStopRBD_s2,
                Seq: depOneStopSeq_s2,
              },
            ],
            contactInfo: {
              title: inputTitleContract,
              firstname: inputFirstNameContract,
              middlename: inputMiddleNameContract,
              lastname: inputLastNameContract,
              email: inputEmailContract,
              telNo: inputMobilePhoneContract,
              countryCode: inputCountryOfIssueContract,
            },
            adtPaxs: adultInfo,
            chdPaxs: childInfo,
            infPaxs: infantInfo,
            languageCode: "th",
          },
        ];
        setOnewayOneStopObjBooking(onewayOneStopObjBooking);
        sessionStorage.setItem("onewayOneStopObjBooking", JSON.stringify(onewayOneStopObjBooking));
      } else if (depTwoStopSeq_s1 && depTwoStopSeq_s2 && depTwoStopSeq_s3) {
        const onewayTwoStopObjBooking = [
          {
            noOfAdults: adult,
            noOfChildren: child,
            noOfInfants: infant,
            svc_class: svc_class,
            depFlight: [
              {
                depCity: {
                  code: depTwoStopDepCityCode_s1,
                  name: depTwoStopDepCityName_s1,
                },
                arrCity: {
                  code: depTwoStopArrCityCode_s1,
                  name: depTwoStopArrCityName_s1,
                },
                airline: {
                  code: depTwoStopAirlineCode_s1,
                  name: depTwoStopAirlineName_s1,
                },
                flightNumber: depTwoStopFlightNumber_s1,
                operatedAirline: {
                  code: depTwoStopOperatedAirlineCode_s1,
                  name: depTwoStopOperatedAirlineName_s1,
                },
                departureDateTime: depTwoStopDepartureDateTime_s1,
                arrivalDateTime: depTwoStoparriveDateTime_s1,
                rbd: depTwoStopRBD_s1,
                Seq: depTwoStopSeq_s1,
              },
              {
                depCity: {
                  code: depTwoStopDepCityCode_s2,
                  name: depTwoStopDepCityName_s2,
                },
                arrCity: {
                  code: depTwoStopArrCityCode_s2,
                  name: depTwoStopArrCityName_s2,
                },
                airline: {
                  code: depTwoStopAirlineCode_s2,
                  name: depTwoStopAirlineName_s2,
                },
                flightNumber: depTwoStopFlightNumber_s2,
                operatedAirline: {
                  code: depTwoStopOperatedAirlineCode_s2,
                  name: depTwoStopOperatedAirlineName_s2,
                },
                departureDateTime: depTwoStopDepartureDateTime_s2,
                arrivalDateTime: depTwoStoparriveDateTime_s2,
                rbd: depTwoStopRBD_s2,
                Seq: depTwoStopSeq_s2,
              },
              {
                depCity: {
                  code: depTwoStopDepCityCode_s3,
                  name: depTwoStopDepCityName_s3,
                },
                arrCity: {
                  code: depTwoStopArrCityCode_s3,
                  name: depTwoStopArrCityName_s3,
                },
                airline: {
                  code: depTwoStopAirlineCode_s3,
                  name: depTwoStopAirlineName_s3,
                },
                flightNumber: depTwoStopFlightNumber_s3,
                operatedAirline: {
                  code: depTwoStopOperatedAirlineCode_s3,
                  name: depTwoStopOperatedAirlineName_s3,
                },
                departureDateTime: depTwoStopDepartureDateTime_s3,
                arrivalDateTime: depTwoStoparriveDateTime_s3,
                rbd: depTwoStopRBD_s3,
                Seq: depTwoStopSeq_s3,
              },
            ],
            contactInfo: {
              title: inputTitleContract,
              firstname: inputFirstNameContract,
              middlename: inputMiddleNameContract,
              lastname: inputLastNameContract,
              email: inputEmailContract,
              telNo: inputMobilePhoneContract,
              countryCode: inputCountryOfIssueContract,
            },
            adtPaxs: adultInfo,
            chdPaxs: childInfo,
            infPaxs: infantInfo,
            languageCode: "th",
          },
        ];
        setOnewayTwoStopObjBooking(onewayTwoStopObjBooking);
        sessionStorage.setItem("onewayTwoStopObjBooking", JSON.stringify(onewayTwoStopObjBooking));
      }
    }

    if (typeTrip === "R") {
      if (depDirectSeq_s1 && returnDirectSeq_s1) {
        const roundDir_DirObjBookingInfo = [
          {
            noOfAdults: adult,
            noOfChildren: child,
            noOfInfants: infant,
            svc_class: svc_class,
            depFlight: [
              {
                depCity: {
                  code: depDirectDepCityCode_s1,
                  name: depDirectDepCityName_s1,
                },
                arrCity: {
                  code: depDirectArrCityCode_s1,
                  name: depDirectArrCityName_s1,
                },
                airline: {
                  code: depDirectAirlineCode_s1,
                  name: depDirectAirlineName_s1,
                },
                flightNumber: depDirectFlightNumber_s1,
                operatedAirline: {
                  code: depDirectOperatedAirlineCode_s1,
                  name: depDirectOperatedAirlineName_s1,
                },
                departureDateTime: depDirectDepartureDateTime_s1,
                arrivalDateTime: depDirectArriveDateTime_s1,
                rbd: depDirectRBD_s1,
                Seq: depDirectSeq_s1,
              },
            ],
            retFlight: [
              {
                depCity: {
                  code: returnDirectDepCityCode_s1,
                  name: returnDirectDepCityName_s1,
                },
                arrCity: {
                  code: returnDirectArrCityCode_s1,
                  name: returnDirectArrCityName_s1,
                },
                airline: {
                  code: returnDirectAirlineCode_s1,
                  name: returnDirectAirlineName_s1,
                },
                flightNumber: returnDirectFlightNumber_s1,
                operatedAirline: {
                  code: returnDirectOperatedAirlineCode_s1,
                  name: returnDirectOperatedAirlineName_s1,
                },
                departureDateTime: returnDirectDepartureDateTime_s1,
                arrivalDateTime: returnDirectArriveDateTime_s1,
                rbd: returnDirectRBD_s1,
                Seq: returnDirectSeq_s1,
              },
            ],
            contactInfo: {
              title: inputTitleContract,
              firstname: inputFirstNameContract,
              middlename: inputMiddleNameContract,
              lastname: inputLastNameContract,
              email: inputEmailContract,
              telNo: inputMobilePhoneContract,
              countryCode: inputCountryOfIssueContract,
            },
            adtPaxs: adultInfo,
            chdPaxs: childInfo,
            infPaxs: infantInfo,
            //   "chdPaxs": [
            //     {
            //       "id": 2,
            //       "paxType": "CHD",
            //       "title": "MSTR",
            //       "firstname": "nina",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2015-05-20T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 1,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            //   "infPaxs": [
            //     {
            //       "id": 3,
            //       "paxType": "INF",
            //       "title": "MSTR",
            //       "firstname": "non",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2021-02-06T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 0,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            languageCode: "th",
          },
        ];
        setRoundDir_DirObjBookingInfo(roundDir_DirObjBookingInfo);
        sessionStorage.setItem("roundDir_DirObjBookingInfo", JSON.stringify(roundDir_DirObjBookingInfo));
      } else if (depDirectSeq_s1 && returnOneStopSeq_s1 && returnOneStopSeq_s2) {
        // console.log("Direct,Onestop");

        const roundDir_OneObjBookingInfo = [
          {
            noOfAdults: adult,
            noOfChildren: child,
            noOfInfants: infant,
            svc_class: svc_class,
            depFlight: [
              {
                depCity: {
                  code: depDirectDepCityCode_s1,
                  name: depDirectDepCityName_s1,
                },
                arrCity: {
                  code: depDirectArrCityCode_s1,
                  name: depDirectArrCityName_s1,
                },
                airline: {
                  code: depDirectAirlineCode_s1,
                  name: depDirectAirlineName_s1,
                },
                flightNumber: depDirectFlightNumber_s1,
                operatedAirline: {
                  code: depDirectOperatedAirlineCode_s1,
                  name: depDirectOperatedAirlineName_s1,
                },
                departureDateTime: depDirectDepartureDateTime_s1,
                arrivalDateTime: depDirectArriveDateTime_s1,
                rbd: depDirectRBD_s1,
                Seq: depDirectSeq_s1,
              },
            ],
            retFlight: [
              {
                depCity: {
                  code: returnOneStopDepCityCode_s1,
                  name: returnOneStopDepCityName_s1,
                },
                arrCity: {
                  code: returnOneStopArrCityCode_s1,
                  name: returnOneStopArrCityName_s1,
                },
                airline: {
                  code: returnOneStopAirlineCode_s1,
                  name: returnOneStopAirlineName_s1,
                },
                flightNumber: returnOneStopFlightNumber_s1,
                operatedAirline: {
                  code: returnOneStopOperatedAirlineCode_s1,
                  name: returnOneStopOperatedAirlineName_s1,
                },
                departureDateTime: returnOneStopDepartureDateTime_s1,
                arrivalDateTime: returnOneStoparriveDateTime_s1,
                rbd: returnOneStopRBD_s1,
                Seq: returnOneStopSeq_s1,
              },
              {
                depCity: {
                  code: returnOneStopDepCityCode_s2,
                  name: returnOneStopDepCityName_s2,
                },
                arrCity: {
                  code: returnOneStopArrCityCode_s2,
                  name: returnOneStopArrCityName_s2,
                },
                airline: {
                  code: returnOneStopAirlineCode_s2,
                  name: returnOneStopAirlineName_s2,
                },
                flightNumber: returnOneStopFlightNumber_s2,
                operatedAirline: {
                  code: returnOneStopOperatedAirlineCode_s2,
                  name: returnOneStopOperatedAirlineName_s2,
                },
                departureDateTime: returnOneStopDepartureDateTime_s2,
                arrivalDateTime: returnOneStoparriveDateTime_s2,
                rbd: returnOneStopRBD_s2,
                Seq: returnOneStopSeq_s2,
              },
            ],
            contactInfo: {
              title: inputTitleContract,
              firstname: inputFirstNameContract,
              middlename: inputMiddleNameContract,
              lastname: inputLastNameContract,
              email: inputEmailContract,
              telNo: inputMobilePhoneContract,
              countryCode: inputCountryOfIssueContract,
            },
            adtPaxs: adultInfo,
            chdPaxs: childInfo,
            infPaxs: infantInfo,
            //   "chdPaxs": [
            //     {
            //       "id": 2,
            //       "paxType": "CHD",
            //       "title": "MSTR",
            //       "firstname": "nina",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2015-05-20T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 1,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            //   "infPaxs": [
            //     {
            //       "id": 3,
            //       "paxType": "INF",
            //       "title": "MSTR",
            //       "firstname": "non",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2021-02-06T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 0,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            languageCode: "th",
          },
        ];
        setRoundDir_OneObjBookingInfo(roundDir_OneObjBookingInfo);
        sessionStorage.setItem("roundDir_OneObjBookingInfo", roundDir_OneObjBookingInfo);
      } else if (depDirectSeq_s1 && returnTwoStopSeq_s1 && returnTwoStopSeq_s2 && returnTwoStopSeq_s3) {
        // console.log("Direct,Twostop");

        const roundDir_TwoObjBookingInfo = [
          {
            noOfAdults: adult,
            noOfChildren: child,
            noOfInfants: infant,
            svc_class: svc_class,
            depFlight: [
              {
                depCity: {
                  code: depDirectDepCityCode_s1,
                  name: depDirectDepCityName_s1,
                },
                arrCity: {
                  code: depDirectArrCityCode_s1,
                  name: depDirectArrCityName_s1,
                },
                airline: {
                  code: depDirectAirlineCode_s1,
                  name: depDirectAirlineName_s1,
                },
                flightNumber: depDirectFlightNumber_s1,
                operatedAirline: {
                  code: depDirectOperatedAirlineCode_s1,
                  name: depDirectOperatedAirlineName_s1,
                },
                departureDateTime: depDirectDepartureDateTime_s1,
                arrivalDateTime: depDirectArriveDateTime_s1,
                rbd: depDirectRBD_s1,
                Seq: depDirectSeq_s1,
              },
            ],
            retFlight: [
              {
                depCity: {
                  code: returnTwoStopDepCityCode_s1,
                  name: returnTwoStopDepCityName_s1,
                },
                arrCity: {
                  code: returnTwoStopArrCityCode_s1,
                  name: returnTwoStopArrCityName_s1,
                },
                airline: {
                  code: returnTwoStopAirlineCode_s1,
                  name: returnTwoStopAirlineName_s1,
                },
                flightNumber: returnTwoStopFlightNumber_s1,
                operatedAirline: {
                  code: returnTwoStopOperatedAirlineCode_s1,
                  name: returnTwoStopOperatedAirlineName_s1,
                },
                departureDateTime: returnTwoStopDepartureDateTime_s1,
                arrivalDateTime: returnTwoStoparriveDateTime_s1,
                rbd: returnTwoStopRBD_s1,
                Seq: returnTwoStopSeq_s1,
              },
              {
                depCity: {
                  code: returnTwoStopDepCityCode_s2,
                  name: returnTwoStopDepCityName_s2,
                },
                arrCity: {
                  code: returnTwoStopArrCityCode_s2,
                  name: returnTwoStopArrCityName_s2,
                },
                airline: {
                  code: returnTwoStopAirlineCode_s2,
                  name: returnTwoStopAirlineName_s2,
                },
                flightNumber: returnTwoStopFlightNumber_s2,
                operatedAirline: {
                  code: returnTwoStopOperatedAirlineCode_s2,
                  name: returnTwoStopOperatedAirlineName_s2,
                },
                departureDateTime: returnTwoStopDepartureDateTime_s2,
                arrivalDateTime: returnTwoStoparriveDateTime_s2,
                rbd: returnTwoStopRBD_s2,
                Seq: returnTwoStopSeq_s2,
              },
              {
                depCity: {
                  code: returnTwoStopDepCityCode_s3,
                  name: returnTwoStopDepCityName_s3,
                },
                arrCity: {
                  code: returnTwoStopArrCityCode_s3,
                  name: returnTwoStopArrCityName_s3,
                },
                airline: {
                  code: returnTwoStopAirlineCode_s3,
                  name: returnTwoStopAirlineName_s3,
                },
                flightNumber: returnTwoStopFlightNumber_s3,
                operatedAirline: {
                  code: returnTwoStopOperatedAirlineCode_s3,
                  name: returnTwoStopOperatedAirlineName_s3,
                },
                departureDateTime: returnTwoStopDepartureDateTime_s3,
                arrivalDateTime: returnTwoStoparriveDateTime_s3,
                rbd: returnTwoStopRBD_s3,
                Seq: returnTwoStopSeq_s3,
              },
            ],
            contactInfo: {
              title: inputTitleContract,
              firstname: inputFirstNameContract,
              middlename: inputMiddleNameContract,
              lastname: inputLastNameContract,
              email: inputEmailContract,
              telNo: inputMobilePhoneContract,
              countryCode: inputCountryOfIssueContract,
            },
            adtPaxs: adultInfo,
            chdPaxs: childInfo,
            infPaxs: infantInfo,
            //   "chdPaxs": [
            //     {
            //       "id": 2,
            //       "paxType": "CHD",
            //       "title": "MSTR",
            //       "firstname": "nina",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2015-05-20T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 1,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            //   "infPaxs": [
            //     {
            //       "id": 3,
            //       "paxType": "INF",
            //       "title": "MSTR",
            //       "firstname": "non",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2021-02-06T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 0,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            languageCode: "th",
          },
        ];
        setRoundDir_TwoObjBookingInfo(roundDir_TwoObjBookingInfo);
        sessionStorage.setItem("roundDir_TwoObjBookingInfo", roundDir_TwoObjBookingInfo);
      } else if (depOneStopSeq_s1 && depOneStopSeq_s2 && returnOneStopSeq_s1 && returnOneStopSeq_s2) {
        // console.log("Onestop,Onestop");

        const roundOne_OneObjBookingInfo = [
          {
            noOfAdults: adult,
            noOfChildren: child,
            noOfInfants: infant,
            svc_class: svc_class,
            depFlight: [
              {
                depCity: {
                  code: depOneStopDepCityCode_s1,
                  name: depOneStopDepCityName_s1,
                },
                arrCity: {
                  code: depOneStopArrCityCode_s1,
                  name: depOneStopArrCityName_s1,
                },
                airline: {
                  code: depOneStopAirlineCode_s1,
                  name: depOneStopAirlineName_s1,
                },
                flightNumber: depOneStopFlightNumber_s1,
                operatedAirline: {
                  code: depOneStopOperatedAirlineCode_s1,
                  name: depOneStopOperatedAirlineName_s1,
                },
                departureDateTime: depOneStopDepartureDateTime_s1,
                arrivalDateTime: depOneStoparriveDateTime_s1,
                rbd: depOneStopRBD_s1,
                Seq: depOneStopSeq_s1,
              },
              {
                depCity: {
                  code: depOneStopDepCityCode_s2,
                  name: depOneStopDepCityName_s2,
                },
                arrCity: {
                  code: depOneStopArrCityCode_s2,
                  name: depOneStopArrCityName_s2,
                },
                airline: {
                  code: depOneStopAirlineCode_s2,
                  name: depOneStopAirlineName_s2,
                },
                flightNumber: depOneStopFlightNumber_s2,
                operatedAirline: {
                  code: depOneStopOperatedAirlineCode_s2,
                  name: depOneStopOperatedAirlineName_s2,
                },
                departureDateTime: depOneStopDepartureDateTime_s2,
                arrivalDateTime: depOneStoparriveDateTime_s2,
                rbd: depOneStopRBD_s2,
                Seq: depOneStopSeq_s2,
              },
            ],
            retFlight: [
              {
                depCity: {
                  code: returnOneStopDepCityCode_s1,
                  name: returnOneStopDepCityName_s1,
                },
                arrCity: {
                  code: returnOneStopArrCityCode_s1,
                  name: returnOneStopArrCityName_s1,
                },
                airline: {
                  code: returnOneStopAirlineCode_s1,
                  name: returnOneStopAirlineName_s1,
                },
                flightNumber: returnOneStopFlightNumber_s1,
                operatedAirline: {
                  code: returnOneStopOperatedAirlineCode_s1,
                  name: returnOneStopOperatedAirlineName_s1,
                },
                departureDateTime: returnOneStopDepartureDateTime_s1,
                arrivalDateTime: returnOneStoparriveDateTime_s1,
                rbd: returnOneStopRBD_s1,
                Seq: returnOneStopSeq_s1,
              },
              {
                depCity: {
                  code: returnOneStopDepCityCode_s2,
                  name: returnOneStopDepCityName_s2,
                },
                arrCity: {
                  code: returnOneStopArrCityCode_s2,
                  name: returnOneStopArrCityName_s2,
                },
                airline: {
                  code: returnOneStopAirlineCode_s2,
                  name: returnOneStopAirlineName_s2,
                },
                flightNumber: returnOneStopFlightNumber_s2,
                operatedAirline: {
                  code: returnOneStopOperatedAirlineCode_s2,
                  name: returnOneStopOperatedAirlineName_s2,
                },
                departureDateTime: returnOneStopDepartureDateTime_s2,
                arrivalDateTime: returnOneStoparriveDateTime_s2,
                rbd: returnOneStopRBD_s2,
                Seq: returnOneStopSeq_s2,
              },
            ],
            contactInfo: {
              title: inputTitleContract,
              firstname: inputFirstNameContract,
              middlename: inputMiddleNameContract,
              lastname: inputLastNameContract,
              email: inputEmailContract,
              telNo: inputMobilePhoneContract,
              countryCode: inputCountryOfIssueContract,
            },
            adtPaxs: adultInfo,
            chdPaxs: childInfo,
            infPaxs: infantInfo,
            //   "chdPaxs": [
            //     {
            //       "id": 2,
            //       "paxType": "CHD",
            //       "title": "MSTR",
            //       "firstname": "nina",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2015-05-20T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 1,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            //   "infPaxs": [
            //     {
            //       "id": 3,
            //       "paxType": "INF",
            //       "title": "MSTR",
            //       "firstname": "non",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2021-02-06T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 0,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            languageCode: "th",
          },
        ];
        setRoundOne_OneObjBookingInfo(roundOne_OneObjBookingInfo);
        sessionStorage.setItem("roundOne_OneObjBookingInfo", roundOne_OneObjBookingInfo);
      } else if (
        depOneStopSeq_s1 &&
        depOneStopSeq_s2 &&
        returnTwoStopSeq_s1 &&
        returnTwoStopSeq_s2 &&
        returnTwoStopSeq_s3
      ) {
        // console.log("Onestop,Twostop");

        const roundOne_TwoObjBookingInfo = [
          {
            noOfAdults: adult,
            noOfChildren: child,
            noOfInfants: infant,
            svc_class: svc_class,
            depFlight: [
              {
                depCity: {
                  code: depOneStopDepCityCode_s1,
                  name: depOneStopDepCityName_s1,
                },
                arrCity: {
                  code: depOneStopArrCityCode_s1,
                  name: depOneStopArrCityName_s1,
                },
                airline: {
                  code: depOneStopAirlineCode_s1,
                  name: depOneStopAirlineName_s1,
                },
                flightNumber: depOneStopFlightNumber_s1,
                operatedAirline: {
                  code: depOneStopOperatedAirlineCode_s1,
                  name: depOneStopOperatedAirlineName_s1,
                },
                departureDateTime: depOneStopDepartureDateTime_s1,
                arrivalDateTime: depOneStoparriveDateTime_s1,
                rbd: depOneStopRBD_s1,
                Seq: depOneStopSeq_s1,
              },
              {
                depCity: {
                  code: depOneStopDepCityCode_s2,
                  name: depOneStopDepCityName_s2,
                },
                arrCity: {
                  code: depOneStopArrCityCode_s2,
                  name: depOneStopArrCityName_s2,
                },
                airline: {
                  code: depOneStopAirlineCode_s2,
                  name: depOneStopAirlineName_s2,
                },
                flightNumber: depOneStopFlightNumber_s2,
                operatedAirline: {
                  code: depOneStopOperatedAirlineCode_s2,
                  name: depOneStopOperatedAirlineName_s2,
                },
                departureDateTime: depOneStopDepartureDateTime_s2,
                arrivalDateTime: depOneStoparriveDateTime_s2,
                rbd: depOneStopRBD_s2,
                Seq: depOneStopSeq_s2,
              },
            ],
            retFlight: [
              {
                depCity: {
                  code: returnTwoStopDepCityCode_s1,
                  name: returnTwoStopDepCityName_s1,
                },
                arrCity: {
                  code: returnTwoStopArrCityCode_s1,
                  name: returnTwoStopArrCityName_s1,
                },
                airline: {
                  code: returnTwoStopAirlineCode_s1,
                  name: returnTwoStopAirlineName_s1,
                },
                flightNumber: returnTwoStopFlightNumber_s1,
                operatedAirline: {
                  code: returnTwoStopOperatedAirlineCode_s1,
                  name: returnTwoStopOperatedAirlineName_s1,
                },
                departureDateTime: returnTwoStopDepartureDateTime_s1,
                arrivalDateTime: returnTwoStoparriveDateTime_s1,
                rbd: returnTwoStopRBD_s1,
                Seq: returnTwoStopSeq_s1,
              },
              {
                depCity: {
                  code: returnTwoStopDepCityCode_s2,
                  name: returnTwoStopDepCityName_s2,
                },
                arrCity: {
                  code: returnTwoStopArrCityCode_s2,
                  name: returnTwoStopArrCityName_s2,
                },
                airline: {
                  code: returnTwoStopAirlineCode_s2,
                  name: returnTwoStopAirlineName_s2,
                },
                flightNumber: returnTwoStopFlightNumber_s2,
                operatedAirline: {
                  code: returnTwoStopOperatedAirlineCode_s2,
                  name: returnTwoStopOperatedAirlineName_s2,
                },
                departureDateTime: returnTwoStopDepartureDateTime_s2,
                arrivalDateTime: returnTwoStoparriveDateTime_s2,
                rbd: returnTwoStopRBD_s2,
                Seq: returnTwoStopSeq_s2,
              },
              {
                depCity: {
                  code: returnTwoStopDepCityCode_s3,
                  name: returnTwoStopDepCityName_s3,
                },
                arrCity: {
                  code: returnTwoStopArrCityCode_s3,
                  name: returnTwoStopArrCityName_s3,
                },
                airline: {
                  code: returnTwoStopAirlineCode_s3,
                  name: returnTwoStopAirlineName_s3,
                },
                flightNumber: returnTwoStopFlightNumber_s3,
                operatedAirline: {
                  code: returnTwoStopOperatedAirlineCode_s3,
                  name: returnTwoStopOperatedAirlineName_s3,
                },
                departureDateTime: returnTwoStopDepartureDateTime_s3,
                arrivalDateTime: returnTwoStoparriveDateTime_s3,
                rbd: returnTwoStopRBD_s3,
                Seq: returnTwoStopSeq_s3,
              },
            ],
            contactInfo: {
              title: inputTitleContract,
              firstname: inputFirstNameContract,
              middlename: inputMiddleNameContract,
              lastname: inputLastNameContract,
              email: inputEmailContract,
              telNo: inputMobilePhoneContract,
              countryCode: inputCountryOfIssueContract,
            },
            adtPaxs: adultInfo,
            chdPaxs: childInfo,
            infPaxs: infantInfo,
            //   "chdPaxs": [
            //     {
            //       "id": 2,
            //       "paxType": "CHD",
            //       "title": "MSTR",
            //       "firstname": "nina",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2015-05-20T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 1,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            //   "infPaxs": [
            //     {
            //       "id": 3,
            //       "paxType": "INF",
            //       "title": "MSTR",
            //       "firstname": "non",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2021-02-06T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 0,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            languageCode: "th",
          },
        ];
        setRoundOne_TwoObjBookingInfo(roundOne_TwoObjBookingInfo);
        sessionStorage.setItem("roundOne_TwoObjBookingInfo", roundOne_TwoObjBookingInfo);
      } else if (depOneStopSeq_s1 && depOneStopSeq_s2 && returnDirectSeq_s1) {
        const roundOne_DirObjBookingInfo = [
          {
            noOfAdults: adult,
            noOfChildren: child,
            noOfInfants: infant,
            svc_class: svc_class,
            depFlight: [
              {
                depCity: {
                  code: depOneStopDepCityCode_s1,
                  name: depOneStopDepCityName_s1,
                },
                arrCity: {
                  code: depOneStopArrCityCode_s1,
                  name: depOneStopArrCityName_s1,
                },
                airline: {
                  code: depOneStopAirlineCode_s1,
                  name: depOneStopAirlineName_s1,
                },
                flightNumber: depOneStopFlightNumber_s1,
                operatedAirline: {
                  code: depOneStopOperatedAirlineCode_s1,
                  name: depOneStopOperatedAirlineName_s1,
                },
                departureDateTime: depOneStopDepartureDateTime_s1,
                arrivalDateTime: depOneStoparriveDateTime_s1,
                rbd: depOneStopRBD_s1,
                Seq: depOneStopSeq_s1,
              },
              {
                depCity: {
                  code: depOneStopDepCityCode_s2,
                  name: depOneStopDepCityName_s2,
                },
                arrCity: {
                  code: depOneStopArrCityCode_s2,
                  name: depOneStopArrCityName_s2,
                },
                airline: {
                  code: depOneStopAirlineCode_s2,
                  name: depOneStopAirlineName_s2,
                },
                flightNumber: depOneStopFlightNumber_s2,
                operatedAirline: {
                  code: depOneStopOperatedAirlineCode_s2,
                  name: depOneStopOperatedAirlineName_s2,
                },
                departureDateTime: depOneStopDepartureDateTime_s2,
                arrivalDateTime: depOneStoparriveDateTime_s2,
                rbd: depOneStopRBD_s2,
                Seq: depOneStopSeq_s2,
              },
            ],
            retFlight: [
              {
                depCity: {
                  code: returnDirectDepCityCode_s1,
                  name: returnDirectDepCityName_s1,
                },
                arrCity: {
                  code: returnDirectArrCityCode_s1,
                  name: returnDirectArrCityName_s1,
                },
                airline: {
                  code: returnDirectAirlineCode_s1,
                  name: returnDirectAirlineName_s1,
                },
                flightNumber: returnDirectFlightNumber_s1,
                operatedAirline: {
                  code: returnDirectOperatedAirlineCode_s1,
                  name: returnDirectOperatedAirlineName_s1,
                },
                departureDateTime: returnDirectDepartureDateTime_s1,
                arrivalDateTime: returnDirectArriveDateTime_s1,
                rbd: returnDirectRBD_s1,
                Seq: returnDirectSeq_s1,
              },
            ],
            contactInfo: {
              title: inputTitleContract,
              firstname: inputFirstNameContract,
              middlename: inputMiddleNameContract,
              lastname: inputLastNameContract,
              email: inputEmailContract,
              telNo: inputMobilePhoneContract,
              countryCode: inputCountryOfIssueContract,
            },
            adtPaxs: adultInfo,
            chdPaxs: childInfo,
            infPaxs: infantInfo,
            // chdPaxs: childInfo,
            //   "chdPaxs": [
            //     {
            //       "id": 2,
            //       "paxType": "CHD",
            //       "title": "MSTR",
            //       "firstname": "nina",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2015-05-20T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 1,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            //   "infPaxs": [
            //     {
            //       "id": 3,
            //       "paxType": "INF",
            //       "title": "MSTR",
            //       "firstname": "non",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2021-02-06T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 0,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            languageCode: "th",
          },
        ];
        setRoundOne_DirObjBookingInfo(roundOne_DirObjBookingInfo);
        sessionStorage.setItem("roundOne_DirObjBookingInfo", roundOne_DirObjBookingInfo);
      } else if (depTwoStopSeq_s1 && depTwoStopSeq_s2 && depTwoStopSeq_s3 && returnDirectSeq_s1) {
        const roundTwo_DirObjBookingInfo = [
          {
            noOfAdults: adult,
            noOfChildren: child,
            noOfInfants: infant,
            svc_class: svc_class,
            depFlight: [
              {
                depCity: {
                  code: depTwoStopDepCityCode_s1,
                  name: depTwoStopDepCityName_s1,
                },
                arrCity: {
                  code: depTwoStopArrCityCode_s1,
                  name: depTwoStopArrCityName_s1,
                },
                airline: {
                  code: depTwoStopAirlineCode_s1,
                  name: depTwoStopAirlineName_s1,
                },
                flightNumber: depTwoStopFlightNumber_s1,
                operatedAirline: {
                  code: depTwoStopOperatedAirlineCode_s1,
                  name: depTwoStopOperatedAirlineName_s1,
                },
                departureDateTime: depTwoStopDepartureDateTime_s1,
                arrivalDateTime: depTwoStoparriveDateTime_s1,
                rbd: depTwoStopRBD_s1,
                Seq: depTwoStopSeq_s1,
              },
              {
                depCity: {
                  code: depTwoStopDepCityCode_s2,
                  name: depTwoStopDepCityName_s2,
                },
                arrCity: {
                  code: depTwoStopArrCityCode_s2,
                  name: depTwoStopArrCityName_s2,
                },
                airline: {
                  code: depTwoStopAirlineCode_s2,
                  name: depTwoStopAirlineName_s2,
                },
                flightNumber: depTwoStopFlightNumber_s2,
                operatedAirline: {
                  code: depTwoStopOperatedAirlineCode_s2,
                  name: depTwoStopOperatedAirlineName_s2,
                },
                departureDateTime: depTwoStopDepartureDateTime_s2,
                arrivalDateTime: depTwoStoparriveDateTime_s2,
                rbd: depTwoStopRBD_s2,
                Seq: depTwoStopSeq_s2,
              },
              {
                depCity: {
                  code: depTwoStopDepCityCode_s3,
                  name: depTwoStopDepCityName_s3,
                },
                arrCity: {
                  code: depTwoStopArrCityCode_s3,
                  name: depTwoStopArrCityName_s3,
                },
                airline: {
                  code: depTwoStopAirlineCode_s3,
                  name: depTwoStopAirlineName_s3,
                },
                flightNumber: depTwoStopFlightNumber_s3,
                operatedAirline: {
                  code: depTwoStopOperatedAirlineCode_s3,
                  name: depTwoStopOperatedAirlineName_s3,
                },
                departureDateTime: depTwoStopDepartureDateTime_s3,
                arrivalDateTime: depTwoStoparriveDateTime_s3,
                rbd: depTwoStopRBD_s3,
                Seq: depTwoStopSeq_s3,
              },
            ],
            retFlight: [
              {
                depCity: {
                  code: returnDirectDepCityCode_s1,
                  name: returnDirectDepCityName_s1,
                },
                arrCity: {
                  code: returnDirectArrCityCode_s1,
                  name: returnDirectArrCityName_s1,
                },
                airline: {
                  code: returnDirectAirlineCode_s1,
                  name: returnDirectAirlineName_s1,
                },
                flightNumber: returnDirectFlightNumber_s1,
                operatedAirline: {
                  code: returnDirectOperatedAirlineCode_s1,
                  name: returnDirectOperatedAirlineName_s1,
                },
                departureDateTime: returnDirectDepartureDateTime_s1,
                arrivalDateTime: returnDirectArriveDateTime_s1,
                rbd: returnDirectRBD_s1,
                Seq: returnDirectSeq_s1,
              },
            ],
            contactInfo: {
              title: inputTitleContract,
              firstname: inputFirstNameContract,
              middlename: inputMiddleNameContract,
              lastname: inputLastNameContract,
              email: inputEmailContract,
              telNo: inputMobilePhoneContract,
              countryCode: inputCountryOfIssueContract,
            },
            adtPaxs: adultInfo,
            chdPaxs: childInfo,
            infPaxs: infantInfo,
            // chdPaxs: childInfo,
            //   "chdPaxs": [
            //     {
            //       "id": 2,
            //       "paxType": "CHD",
            //       "title": "MSTR",
            //       "firstname": "nina",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2015-05-20T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 1,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            //   "infPaxs": [
            //     {
            //       "id": 3,
            //       "paxType": "INF",
            //       "title": "MSTR",
            //       "firstname": "non",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2021-02-06T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 0,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            languageCode: "th",
          },
        ];
        setRoundTwo_DirObjBookingInfo(roundTwo_DirObjBookingInfo);
        sessionStorage.setItem("roundTwo_DirObjBookingInfo", roundTwo_DirObjBookingInfo);
      } else if (
        depTwoStopSeq_s1 &&
        depTwoStopSeq_s2 &&
        depTwoStopSeq_s3 &&
        returnOneStopSeq_s1 &&
        returnOneStopSeq_s2
      ) {
        const roundTwo_OneObjBookingInfo = [
          {
            noOfAdults: adult,
            noOfChildren: child,
            noOfInfants: infant,
            svc_class: svc_class,
            depFlight: [
              {
                depCity: {
                  code: depTwoStopDepCityCode_s1,
                  name: depTwoStopDepCityName_s1,
                },
                arrCity: {
                  code: depTwoStopArrCityCode_s1,
                  name: depTwoStopArrCityName_s1,
                },
                airline: {
                  code: depTwoStopAirlineCode_s1,
                  name: depTwoStopAirlineName_s1,
                },
                flightNumber: depTwoStopFlightNumber_s1,
                operatedAirline: {
                  code: depTwoStopOperatedAirlineCode_s1,
                  name: depTwoStopOperatedAirlineName_s1,
                },
                departureDateTime: depTwoStopDepartureDateTime_s1,
                arrivalDateTime: depTwoStoparriveDateTime_s1,
                rbd: depTwoStopRBD_s1,
                Seq: depTwoStopSeq_s1,
              },
              {
                depCity: {
                  code: depTwoStopDepCityCode_s2,
                  name: depTwoStopDepCityName_s2,
                },
                arrCity: {
                  code: depTwoStopArrCityCode_s2,
                  name: depTwoStopArrCityName_s2,
                },
                airline: {
                  code: depTwoStopAirlineCode_s2,
                  name: depTwoStopAirlineName_s2,
                },
                flightNumber: depTwoStopFlightNumber_s2,
                operatedAirline: {
                  code: depTwoStopOperatedAirlineCode_s2,
                  name: depTwoStopOperatedAirlineName_s2,
                },
                departureDateTime: depTwoStopDepartureDateTime_s2,
                arrivalDateTime: depTwoStoparriveDateTime_s2,
                rbd: depTwoStopRBD_s2,
                Seq: depTwoStopSeq_s2,
              },
              {
                depCity: {
                  code: depTwoStopDepCityCode_s3,
                  name: depTwoStopDepCityName_s3,
                },
                arrCity: {
                  code: depTwoStopArrCityCode_s3,
                  name: depTwoStopArrCityName_s3,
                },
                airline: {
                  code: depTwoStopAirlineCode_s3,
                  name: depTwoStopAirlineName_s3,
                },
                flightNumber: depTwoStopFlightNumber_s3,
                operatedAirline: {
                  code: depTwoStopOperatedAirlineCode_s3,
                  name: depTwoStopOperatedAirlineName_s3,
                },
                departureDateTime: depTwoStopDepartureDateTime_s3,
                arrivalDateTime: depTwoStoparriveDateTime_s3,
                rbd: depTwoStopRBD_s3,
                Seq: depTwoStopSeq_s3,
              },
            ],
            retFlight: [
              {
                depCity: {
                  code: returnOneStopDepCityCode_s1,
                  name: returnOneStopDepCityName_s1,
                },
                arrCity: {
                  code: returnOneStopArrCityCode_s1,
                  name: returnOneStopArrCityName_s1,
                },
                airline: {
                  code: returnOneStopAirlineCode_s1,
                  name: returnOneStopAirlineName_s1,
                },
                flightNumber: returnOneStopFlightNumber_s1,
                operatedAirline: {
                  code: returnOneStopOperatedAirlineCode_s1,
                  name: returnOneStopOperatedAirlineName_s1,
                },
                departureDateTime: returnOneStopDepartureDateTime_s1,
                arrivalDateTime: returnOneStoparriveDateTime_s1,
                rbd: returnOneStopRBD_s1,
                Seq: returnOneStopSeq_s1,
              },
              {
                depCity: {
                  code: returnOneStopDepCityCode_s2,
                  name: returnOneStopDepCityName_s2,
                },
                arrCity: {
                  code: returnOneStopArrCityCode_s2,
                  name: returnOneStopArrCityName_s2,
                },
                airline: {
                  code: returnOneStopAirlineCode_s2,
                  name: returnOneStopAirlineName_s2,
                },
                flightNumber: returnOneStopFlightNumber_s2,
                operatedAirline: {
                  code: returnOneStopOperatedAirlineCode_s2,
                  name: returnOneStopOperatedAirlineName_s2,
                },
                departureDateTime: returnOneStopDepartureDateTime_s2,
                arrivalDateTime: returnOneStoparriveDateTime_s2,
                rbd: returnOneStopRBD_s2,
                Seq: returnOneStopSeq_s2,
              },
            ],
            contactInfo: {
              title: inputTitleContract,
              firstname: inputFirstNameContract,
              middlename: inputMiddleNameContract,
              lastname: inputLastNameContract,
              email: inputEmailContract,
              telNo: inputMobilePhoneContract,
              countryCode: inputCountryOfIssueContract,
            },
            adtPaxs: adultInfo,
            chdPaxs: childInfo,
            infPaxs: infantInfo,
            // chdPaxs: childInfo,
            //   "chdPaxs": [
            //     {
            //       "id": 2,
            //       "paxType": "CHD",
            //       "title": "MSTR",
            //       "firstname": "nina",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2015-05-20T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 1,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            //   "infPaxs": [
            //     {
            //       "id": 3,
            //       "paxType": "INF",
            //       "title": "MSTR",
            //       "firstname": "non",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2021-02-06T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 0,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            languageCode: "th",
          },
        ];
        setRoundTwo_OneObjBookingInfo(roundTwo_OneObjBookingInfo);
        sessionStorage.setItem("roundTwo_OneObjBookingInfo", roundTwo_OneObjBookingInfo);
      } else if (
        depTwoStopSeq_s1 &&
        depTwoStopSeq_s2 &&
        depTwoStopSeq_s3 &&
        returnTwoStopSeq_s1 &&
        returnTwoStopSeq_s2 &&
        returnTwoStopSeq_s3
      ) {
        const roundTwo_TwoObjBookingInfo = [
          {
            noOfAdults: adult,
            noOfChildren: child,
            noOfInfants: infant,
            svc_class: svc_class,
            depFlight: [
              {
                depCity: {
                  code: depTwoStopDepCityCode_s1,
                  name: depTwoStopDepCityName_s1,
                },
                arrCity: {
                  code: depTwoStopArrCityCode_s1,
                  name: depTwoStopArrCityName_s1,
                },
                airline: {
                  code: depTwoStopAirlineCode_s1,
                  name: depTwoStopAirlineName_s1,
                },
                flightNumber: depTwoStopFlightNumber_s1,
                operatedAirline: {
                  code: depTwoStopOperatedAirlineCode_s1,
                  name: depTwoStopOperatedAirlineName_s1,
                },
                departureDateTime: depTwoStopDepartureDateTime_s1,
                arrivalDateTime: depTwoStoparriveDateTime_s1,
                rbd: depTwoStopRBD_s1,
                Seq: depTwoStopSeq_s1,
              },
              {
                depCity: {
                  code: depTwoStopDepCityCode_s2,
                  name: depTwoStopDepCityName_s2,
                },
                arrCity: {
                  code: depTwoStopArrCityCode_s2,
                  name: depTwoStopArrCityName_s2,
                },
                airline: {
                  code: depTwoStopAirlineCode_s2,
                  name: depTwoStopAirlineName_s2,
                },
                flightNumber: depTwoStopFlightNumber_s2,
                operatedAirline: {
                  code: depTwoStopOperatedAirlineCode_s2,
                  name: depTwoStopOperatedAirlineName_s2,
                },
                departureDateTime: depTwoStopDepartureDateTime_s2,
                arrivalDateTime: depTwoStoparriveDateTime_s2,
                rbd: depTwoStopRBD_s2,
                Seq: depTwoStopSeq_s2,
              },
              {
                depCity: {
                  code: depTwoStopDepCityCode_s3,
                  name: depTwoStopDepCityName_s3,
                },
                arrCity: {
                  code: depTwoStopArrCityCode_s3,
                  name: depTwoStopArrCityName_s3,
                },
                airline: {
                  code: depTwoStopAirlineCode_s3,
                  name: depTwoStopAirlineName_s3,
                },
                flightNumber: depTwoStopFlightNumber_s3,
                operatedAirline: {
                  code: depTwoStopOperatedAirlineCode_s3,
                  name: depTwoStopOperatedAirlineName_s3,
                },
                departureDateTime: depTwoStopDepartureDateTime_s3,
                arrivalDateTime: depTwoStoparriveDateTime_s3,
                rbd: depTwoStopRBD_s3,
                Seq: depTwoStopSeq_s3,
              },
            ],
            retFlight: [
              {
                depCity: {
                  code: returnTwoStopDepCityCode_s1,
                  name: returnTwoStopDepCityName_s1,
                },
                arrCity: {
                  code: returnTwoStopArrCityCode_s1,
                  name: returnTwoStopArrCityName_s1,
                },
                airline: {
                  code: returnTwoStopAirlineCode_s1,
                  name: returnTwoStopAirlineName_s1,
                },
                flightNumber: returnTwoStopFlightNumber_s1,
                operatedAirline: {
                  code: returnTwoStopOperatedAirlineCode_s1,
                  name: returnTwoStopOperatedAirlineName_s1,
                },
                departureDateTime: returnTwoStopDepartureDateTime_s1,
                arrivalDateTime: returnTwoStoparriveDateTime_s1,
                rbd: returnTwoStopRBD_s1,
                Seq: returnTwoStopSeq_s1,
              },
              {
                depCity: {
                  code: returnTwoStopDepCityCode_s2,
                  name: returnTwoStopDepCityName_s2,
                },
                arrCity: {
                  code: returnTwoStopArrCityCode_s2,
                  name: returnTwoStopArrCityName_s2,
                },
                airline: {
                  code: returnTwoStopAirlineCode_s2,
                  name: returnTwoStopAirlineName_s2,
                },
                flightNumber: returnTwoStopFlightNumber_s2,
                operatedAirline: {
                  code: returnTwoStopOperatedAirlineCode_s2,
                  name: returnTwoStopOperatedAirlineName_s2,
                },
                departureDateTime: returnTwoStopDepartureDateTime_s2,
                arrivalDateTime: returnTwoStoparriveDateTime_s2,
                rbd: returnTwoStopRBD_s2,
                Seq: returnTwoStopSeq_s2,
              },
              {
                depCity: {
                  code: returnTwoStopDepCityCode_s3,
                  name: returnTwoStopDepCityName_s3,
                },
                arrCity: {
                  code: returnTwoStopArrCityCode_s3,
                  name: returnTwoStopArrCityName_s3,
                },
                airline: {
                  code: returnTwoStopAirlineCode_s3,
                  name: returnTwoStopAirlineName_s3,
                },
                flightNumber: returnTwoStopFlightNumber_s3,
                operatedAirline: {
                  code: returnTwoStopOperatedAirlineCode_s3,
                  name: returnTwoStopOperatedAirlineName_s3,
                },
                departureDateTime: returnTwoStopDepartureDateTime_s3,
                arrivalDateTime: returnTwoStoparriveDateTime_s3,
                rbd: returnTwoStopRBD_s3,
                Seq: returnTwoStopSeq_s3,
              },
            ],
            contactInfo: {
              title: inputTitleContract,
              firstname: inputFirstNameContract,
              middlename: inputMiddleNameContract,
              lastname: inputLastNameContract,
              email: inputEmailContract,
              telNo: inputMobilePhoneContract,
              countryCode: inputCountryOfIssueContract,
            },
            adtPaxs: adultInfo,
            chdPaxs: childInfo,
            infPaxs: infantInfo,
            // chdPaxs: childInfo,
            //   "chdPaxs": [
            //     {
            //       "id": 2,
            //       "paxType": "CHD",
            //       "title": "MSTR",
            //       "firstname": "nina",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2015-05-20T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 1,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            //   "infPaxs": [
            //     {
            //       "id": 3,
            //       "paxType": "INF",
            //       "title": "MSTR",
            //       "firstname": "non",
            //       "middlename": null,
            //       "lastname": "aisoft",
            //       "birthday": "2021-02-06T00:00:00",
            //       "email": null,
            //       "telNo": null,
            //       "passportNumber": null,
            //       "passportIssuingDate": "0001-01-01T00:00:00",
            //       "passportExpiryDate": "0001-01-01T00:00:00",
            //       "passportIssuingCountry": null,
            //       "passportNationality": null,
            //       "frequencyFlyerAirline": null,
            //       "frequencyFlyerNumber": null,
            //       "seatRequest": null,
            //       "mealRequest": null,
            //       "travelWithAdultID": 0,
            //       "netRefund": 0.0,
            //       "agentRefund": 0.0,
            //       "refundAmount": 0.0,
            //       "tickNoRefund": null,
            //       "remarkRefund": null,
            //       "StatusRefund": false,
            //       "netReissue": 0.0,
            //       "agentReissue": 0.0,
            //       "reissueSelling": 0.0,
            //       "tickNoReissueOld": null,
            //       "tickNoReissueNew": null,
            //       "remarkReissue": null,
            //       "StatusReissue": false
            //     }
            //   ],
            languageCode: "th",
          },
        ];
        setRoundTwo_TwoObjBookingInfo(roundTwo_TwoObjBookingInfo);
        sessionStorage.setItem("roundTwo_TwoObjBookingInfo", roundTwo_TwoObjBookingInfo);
      } else {
        console.log("error");
      }
    }
  };

  const verlifyAge = () => {
    if (onewayDirectObjBooking) {
      return onewayDirectObjBooking[0];
    } else if (onewayOneStopObjBooking) {
      return onewayOneStopObjBooking[0];
    } else if (onewayTwoStopObjBooking) {
      return onewayTwoStopObjBooking[0];
    } else if (roundDir_DirObjBookingInfo) {
      return roundDir_DirObjBookingInfo[0];
    } else if (roundDir_OneObjBookingInfo) {
      return roundDir_OneObjBookingInfo[0];
    } else if (roundDir_TwoObjBookingInfo) {
      return roundDir_TwoObjBookingInfo[0];
    } else if (roundOne_OneObjBookingInfo) {
      return roundOne_OneObjBookingInfo[0];
    } else if (roundOne_DirObjBookingInfo) {
      return roundOne_DirObjBookingInfo[0];
    } else if (roundOne_TwoObjBookingInfo) {
      return roundOne_TwoObjBookingInfo[0];
    } else if (roundTwo_DirObjBookingInfo) {
      return roundTwo_DirObjBookingInfo[0];
    } else if (roundTwo_OneObjBookingInfo) {
      return roundTwo_OneObjBookingInfo[0];
    } else if (roundTwo_TwoObjBookingInfo) {
      return roundTwo_TwoObjBookingInfo[0];
    } else {
      console.log("error");
    }
  };

  console.log(verlifyAge());

  const handleObjBooking = (e) => {
    e.preventDefault();
    const invalidAge = verlifyAge();
    console.log(invalidAge);

    invalidAge.contactInfo.title = inputTitleContract;
    invalidAge.contactInfo.firstname = inputFirstNameContract;
    invalidAge.contactInfo.middlename = inputMiddleNameContract;
    invalidAge.contactInfo.lastname = inputLastNameContract;
    invalidAge.contactInfo.telNo = inputMobilePhoneContract;

    const chdPax_infPaxsArray = invalidAge.chdPaxs.concat(invalidAge.infPaxs);
    console.log(chdPax_infPaxsArray);
    let checkdata = false;

    setTimeout(() => {
      for (let i = 0; i < chdPax_infPaxsArray?.length; i++) {
        const item = chdPax_infPaxsArray[i];
        if (item.paxType === "CHD") {
          if (totalAge(item.birthday) > 12 || totalAge(item.birthday) < 2 || totalAge(item.birthday) === "") {
            checkdata = true;
            errorAlert(`Date of Birth at Child passenger no.${item.id} incorrect.`);
            break;
          }
        } else {
          if (item.paxType === "INF") {
            if (totalAge(item.birthday) > 2 || totalAge(item.birthday) > 0 || totalAge(item.birthday) === "") {
              checkdata = true;
              errorAlert(`Date of Birth at Infant passenger no.${item.id} incorrect.`);
              break;
            }
          }
        }
      }
      setTimeout(() => {
        if (checkdata === false) {
          navigate("/bookingresult", { replace: true });
        }
      }, 100);
    }, 100);

    for (let i = 0; i < adultInfo?.length; i++) {
      adultInfo[i].firstname = adultPassenger[i].firstName;
      adultInfo[i].middlename = adultPassenger[i].middleName;
      adultInfo[i].lastname = adultPassenger[i].lastName;
      adultInfo[i].email = adultPassenger[i].email;
      adultInfo[i].telNo = adultPassenger[i].mobilePhone;
    }

    for (let i = 0; i < childInfo.length; i++) {
      childInfo[i].firstname = childPassenger[i].firstName;
      childInfo[i].middlename = childPassenger[i].middleName;
      childInfo[i].lastname = childPassenger[i].lastName;
      childInfo[i].email = childPassenger[i].email;
      childInfo[i].telNo = childPassenger[i].mobilePhone;
      childInfo[i].birthday = childPassenger[i].dateOfBirth;
    }

    for (let i = 0; i < infantInfo.length; i++) {
      infantInfo[i].firstname = infantPassenger[i].firstName;
      infantInfo[i].middlename = infantPassenger[i].middleName;
      infantInfo[i].lastname = infantPassenger[i].lastName;
      infantInfo[i].email = infantPassenger[i].email;
      infantInfo[i].telNo = infantPassenger[i].mobilePhone;
      infantInfo[i].birthday = infantPassenger[i].dateOfBirth;
    }
  };

  const dataNFTDetail = localStorage.NFT_;
  const value = encryptStorage2.decryptString(dataNFTDetail);

  const dataNFTDetail_ = JSON.parse(value);

  const nftImg = dataNFTDetail_.image_thumbnail_url;
  const nftName = dataNFTDetail_.name;

  const handlePassengerTitleChange = (index, event) => {
    const newPassengers = [...adultPassenger];
    newPassengers[index].title = event.target.value;
    setAdultPassenger(newPassengers);
  };

  const handleChildPassengerTitleChange = (index, event) => {
    const newChildPassengers = [...childPassenger];
    newChildPassengers[index].title = event.target.value;
    setChildPassenger(newChildPassengers);
  };

  const handleInfantPassengerTitleChange = (index, event) => {
    const newInfantPassengers = [...infantPassenger];
    newInfantPassengers[index].title = event.target.value;
    setInfantPassenger(newInfantPassengers);
  };

  const handlePassengerFirstNameChange = (index, event) => {
    const newPassengers = [...adultPassenger];
    newPassengers[index].firstName = event.target.value;
    setAdultPassenger(newPassengers);
  };

  const handleChildPassengerFirstNameChange = (index, event) => {
    const newChildPassengers = [...childPassenger];
    newChildPassengers[index].firstName = event.target.value;
    setChildPassenger(newChildPassengers);
  };

  const handleInfantPassengerFirstNameChange = (index, event) => {
    const newInfantPassengers = [...infantPassenger];
    newInfantPassengers[index].firstName = event.target.value;
    setInfantPassenger(newInfantPassengers);
  };

  const handlePassengerMiddlenameChange = (index, event) => {
    const newPassengers = [...adultPassenger];
    newPassengers[index].middleName = event.target.value;
    setAdultPassenger(newPassengers);
  };

  const handleChildPassengerMiddlenameChange = (index, event) => {
    const newChildPassengers = [...childPassenger];
    newChildPassengers[index].middleName = event.target.value;
    setChildPassenger(newChildPassengers);
  };

  const handleInfantPassengerMiddlenameChange = (index, event) => {
    const newInfantPassengers = [...infantPassenger];
    newInfantPassengers[index].middleName = event.target.value;
    setInfantPassenger(newInfantPassengers);
  };

  const handlePassengerLastNameChange = (index, event) => {
    const newPassengers = [...adultPassenger];
    newPassengers[index].lastName = event.target.value;
    setAdultPassenger(newPassengers);
  };

  const handleChildPassengerLastNameChange = (index, event) => {
    const newChildPassengers = [...childPassenger];
    newChildPassengers[index].lastName = event.target.value;
    setChildPassenger(newChildPassengers);
  };

  const handleInfantPassengerLastNameChange = (index, event) => {
    const newInfantPassengers = [...infantPassenger];
    newInfantPassengers[index].lastName = event.target.value;
    setChildPassenger(newInfantPassengers);
  };

  const handlePassengerEmailChange = (index, event) => {
    const newPassengers = [...adultPassenger];
    newPassengers[index].email = event.target.value;
    setAdultPassenger(newPassengers);
  };

  const handleChildPassengerEmailChange = (index, event) => {
    const newChildPassengers = [...childPassenger];
    newChildPassengers[index].email = event.target.value;
    setChildPassenger(newChildPassengers);
  };

  const handleInfantPassengerEmailChange = (index, event) => {
    const newInfantPassengers = [...infantPassenger];
    newInfantPassengers[index].email = event.target.value;
    setChildPassenger(newInfantPassengers);
  };

  const handleChildPassengerDateOfBirthChange = (index, event) => {
    console.log(event.target.value);
    if (totalAge(event.target.value) < 12 && totalAge(event.target.value) >= 2) {
      const newChildPassengers = [...childPassenger];
      newChildPassengers[index].dateOfBirth = event.target.value;
      setChildPassenger(newChildPassengers);
    } else {
      errorAlert(`Date of Birth of child might 2-12 years old.`);
      const newChildPassengers = [...childPassenger];
      newChildPassengers[index].dateOfBirth = "";
      setChildPassenger(newChildPassengers);
    }
  };

  const handleInfantPassengerDateOfBirthChange = (index, event) => {
    console.log(event.target.value);
    if (totalAge(event.target.value) < 2) {
      const newInfantPassengers = [...infantPassenger];
      newInfantPassengers[index].dateOfBirth = event.target.value;
      setInfantPassenger(newInfantPassengers);
    } else {
      errorAlert(`Date of Birth at infant might 0-2 years old.`);
      const newInfantPassengers = [...infantPassenger];
      newInfantPassengers[index].dateOfBirth = "";
      setInfantPassenger(newInfantPassengers);
    }
    // if (totalAge(event.target.value) < 12 && totalAge(event.target.value) >= 2) {
    //   const newInfantPassengers = [...infantPassenger];
    //   newInfantPassengers[index].dateOfBirth = event.target.value;
    //   setInfantPassenger(newInfantPassengers);
    // } else {
    //   errorAlert(`Date of Birth of infant might 2-12 years old.`);
    //   const newInfantPassengers = [...infantPassenger];
    //   newInfantPassengers[index].dateOfBirth = "";
    //   setInfantPassenger(newInfantPassengers);
    // }
  };

  const handlePassengerMobilePhoneChange = (index, event) => {
    const newPassengers = [...adultPassenger];
    newPassengers[index].mobilePhone = event.target.value;
    setAdultPassenger(newPassengers);
  };

  const handleChildPassengerMobilePhoneChange = (index, event) => {
    const newChildPassengers = [...childPassenger];
    newChildPassengers[index].mobilePhone = event.target.value;
    setChildPassenger(newChildPassengers);
  };

  const handleInfantPassengerMobilePhoneChange = (index, event) => {
    const newInfantPassengers = [...infantPassenger];
    newInfantPassengers[index].mobilePhone = event.target.value;
    setInfantPassenger(newInfantPassengers);
  };

  const handleCheckboxChange = (index) => {
    const newPassengers = [...adultPassenger];
    newPassengers[index].title = inputTitleContract;
    newPassengers[index].firstName = inputFirstNameContract;
    newPassengers[index].middleName = inputMiddleNameContract;
    newPassengers[index].lastName = inputLastNameContract;
    newPassengers[index].email = inputEmailContract;
    newPassengers[index].mobilePhone = inputMobilePhoneContract;
    newPassengers[index].checked = !newPassengers[index].checked;
    setAdultPassenger(newPassengers);
  };

  const handleChildCheckboxChange = (index) => {
    const newChildPassengers = [...childPassenger];
    newChildPassengers[index].title = "MSTR"; //initial fixed
    newChildPassengers[index].firstName = inputFirstNameContract;
    newChildPassengers[index].middleName = inputMiddleNameContract;
    newChildPassengers[index].lastName = inputLastNameContract;
    newChildPassengers[index].email = inputEmailContract;
    newChildPassengers[index].mobilePhone = inputMobilePhoneContract;
    newChildPassengers[index].checked = !newChildPassengers[index].checked;
    setChildPassenger(newChildPassengers);
  };

  const handleInfantCheckboxChange = (index) => {
    const newInfantPassengers = [...infantPassenger];
    newInfantPassengers[index].title = "MSTR"; //initial fixed
    newInfantPassengers[index].firstName = inputFirstNameContract;
    newInfantPassengers[index].middleName = inputMiddleNameContract;
    newInfantPassengers[index].lastName = inputLastNameContract;
    newInfantPassengers[index].email = inputEmailContract;
    newInfantPassengers[index].mobilePhone = inputMobilePhoneContract;
    newInfantPassengers[index].checked = !newInfantPassengers[index].checked;
    setInfantPassenger(newInfantPassengers);
  };

  const handleAdultPassenger = () => {
    const adultsSection = [];

    for (let i = 1; i <= adultInfo.length; i++) {
      adultsSection.push([
        // ...adultPassenger,
        // { title: "", firstName: "", middleName: "", lastName: "", email: "", mobilePhone: "", checked: false },
      ]);
      setAdultPassenger(adultsSection);
    }
  };

  const handleChildPassenger = () => {
    const childsSection = [];
    for (let i = 1; i <= childInfo.length; i++) {
      childsSection.push([
        // ...childPassenger,
        // {
        //   title: "",
        //   firstName: "",
        //   middleName: "",
        //   lastName: "",
        //   email: "",
        //   dateOfBirth: "",
        //   mobilePhone: "",
        //   checked: false,
        // },
      ]);
      setChildPassenger(childsSection);
    }
  };

  const handleInfantPassenger = () => {
    const infantsSection = [];
    for (let i = 1; i <= infantInfo.length; i++) {
      infantsSection.push([
        // ...childPassenger,
        // {
        //   title: "",
        //   firstName: "",
        //   middleName: "",
        //   lastName: "",
        //   email: "",
        //   dateOfBirth: "",
        //   mobilePhone: "",
        //   checked: false,
        // },
      ]);
      setInfantPassenger(infantsSection);
    }
  };

  // var childsSection = [];
  // for (let i = 0; i < childInfo.length; i++) {
  //   childsSection.push(

  //     <div>
  //       <div className="">
  //         <div className="my-4 block bg-map rounded-lg p-2">
  //           <Label htmlFor="small" value={`Child passenger no. ${i + 1}`} />
  //         </div>
  //         <div className="flex p-2 gap-4">
  //           <div id="select">
  //             <div className="mb-2 block">
  //               <Label htmlFor="countries" value="Title" />
  //             </div>

  //             <Select
  //               id="countries"
  //               required={true}
  //               sizing=""
  //               onChange={(e) => inputTitleChildsPassenger(e.target.value, i)}
  //             >
  //               <option disabled value="">
  //                 Title
  //               </option>
  //               <option value="MSTR ">MSTR.</option>
  //               {/* <option value="Mrs">Mrs.</option>
  //               <option value="Ms">Ms.</option>
  //               <option value="Dr">Dr.</option>
  //               <option value="Phra">Phr.a</option>
  //               <option value="Phramaha">Phramaha.</option> */}
  //             </Select>
  //           </div>

  //           <div>
  //             <div className="mb-2 block">
  //               <Label htmlFor="small" value="First Name" />
  //             </div>
  //             <TextInput
  //               id="small"
  //               type="text"
  //               sizing=""
  //               required={true}
  //               onChange={(e) => inputFirstnameChildsPassenger(e.target.value, i)}
  //             />
  //           </div>

  //           <div>
  //             <div className="mb-2 block">
  //               <Label htmlFor="small" value="Middle Name" />
  //             </div>
  //             <TextInput
  //               id="small"
  //               type="text"
  //               sizing=""
  //               onChange={(e) => inputMiddleNameChildsPassenger(e.target.value, i)}
  //             />
  //           </div>

  //           <div>
  //             <div className="mb-2 block">
  //               <Label htmlFor="small" value="Last Name" />
  //             </div>
  //             <TextInput
  //               id="small"
  //               type="text"
  //               sizing=""
  //               required={true}
  //               onChange={(e) => inputLastnameChildsPassenger(e.target.value, i)}
  //             />
  //           </div>
  //         </div>

  //         <div className="flex w-full p-2 gap-4">
  //           <div>
  //             <div className="mb-2 block">
  //               <Label htmlFor="small" value="Date of Birth" />
  //             </div>
  //             <TextInput
  //               id="small"
  //               type="date"
  //               sizing=""
  //               required={true}
  //               onChange={(e) => inputDateOfBirthChildsPassenger(e.target.value, i)}
  //             />
  //           </div>

  //           {/* <div>
  //                       <div className="mb-2 block">
  //                         <Label htmlFor="small" value="Nationality" />
  //                       </div>
  //                       <TextInput
  //                         id="small"
  //                         type="text"
  //                         sizing=""
  //                         required={true}
  //                         onChange={(e) => setInputNationality(e.target.value)}
  //                       />
  //                     </div> */}

  //           <div>
  //             <div className="mb-2 block">
  //               <Label htmlFor="small" value="Mobile Phone" />
  //             </div>
  //             <TextInput
  //               id="small"
  //               type="tel"
  //               pattern="^[0-9]*$"
  //               sizing=""
  //               // required={true}
  //               onChange={(e) => inputMobilePhoneChildsPassenger(e.target.value, i)}
  //             />
  //           </div>
  //         </div>

  //         <div className="flex w-full p-2">
  //           <div>
  //             <div className="mb-2 block">
  //               <Label htmlFor="email1" value="Email" />
  //             </div>
  //             <TextInput
  //               id="email1"
  //               type="email"
  //               placeholder="name@gmail.com"
  //               sizing=""
  //               onChange={(e) => inputEmailChildsPassenger(e.target.value, i)}
  //               // required={true}
  //             />
  //           </div>
  //         </div>

  //         {/* <div>
  //                     <div className="mb-2 block mt-4">
  //                       <Label htmlFor="small" value="Passport Number" />
  //                     </div>
  //                     <TextInput
  //                       id="small"
  //                       type="text"
  //                       sizing=""
  //                       required={true}
  //                       onChange={(e) => setInputPassportNumber(e.target.value)}
  //                     />
  //                     <p className="text-xs my-2">
  //                       For adultPassenger below 18 years old, you may enter another valid ID number (e.g. birth
  //                       certificate, student ID) or date of birth (ddmmyyyy)
  //                     </p>
  //                   </div>

  //                   <div>
  //                     <div className="mb-2 block">
  //                       <Label htmlFor="small" value="CountryIssue" />
  //                     </div>
  //                     <Select
  //                       id="small"
  //                       required={true}
  //                       sizing=""
  //                       onChange={(e) => setInputCountryOfIssue(e.target.value)}
  //                     >
  //                       <option disabled value="">
  //                         Country
  //                       </option>
  //                       <option value="TH">Thailand</option>
  //                       <option value="ENG">English</option>
  //                     </Select>
  //                   </div>

  //                   <div>
  //                     <div className="mb-2 block">
  //                       <Label htmlFor="small" value="Issue Date" />
  //                     </div>
  //                     <TextInput
  //                       id="small"
  //                       type="date"
  //                       sizing=""
  //                       required={true}
  //                       onChange={(e) => setinputIssueDate(e.target.value)}
  //                     />
  //                   </div>

  //                   <div>
  //                     <div className="mb-2 block">
  //                       <Label htmlFor="small" value="Expiry Date" />
  //                     </div>
  //                     <TextInput
  //                       id="small"
  //                       type="date"
  //                       sizing=""
  //                       required={true}
  //                       onChange={(e) => setinputExpiryDate(e.target.value)}
  //                     />
  //                   </div> */}
  //       </div>
  //       <hr></hr>
  //     </div>
  //   );
  // }

  // var infantsSection = [];
  // for (let i = 0; i < infantInfo.length; i++) {
  //   console.log("xxxxxxxxxx", infantInfo);
  //   infantsSection.push(
  //     <div>
  //       <div className="">
  //         <div className="my-4 block bg-map rounded-lg p-2">
  //           <Label htmlFor="small" value={`Infant passenger no. ${i + 1}`} />
  //         </div>
  //         <div className="flex w-full p-2 gap-4">
  //           <div id="select">
  //             <div className="mb-2 block">
  //               <Label htmlFor="countries" value="Title" />
  //             </div>

  //             <Select
  //               id="countries"
  //               required={true}
  //               sizing=""
  //               onChange={(e) => inputTitleInfantsPassenger(e.target.value, i)}
  //             >
  //               <option disabled value="">
  //                 Title
  //               </option>
  //               <option value="MSTR ">MSTR.</option>
  //               {/* <option value="Mrs">Mrs.</option>
  //               <option value="Ms">Ms.</option>
  //               <option value="Dr">Dr.</option>
  //               <option value="Phra">Phr.a</option>
  //               <option value="Phramaha">Phramaha.</option> */}
  //             </Select>
  //           </div>

  //           <div>
  //             <div className="mb-2 block">
  //               <Label htmlFor="small" value="First Name" />
  //             </div>
  //             <TextInput
  //               id="small"
  //               type="text"
  //               sizing=""
  //               required={true}
  //               onChange={(e) => inputFirstnameInfantsPassenger(e.target.value, i)}
  //             />
  //           </div>

  //           <div>
  //             <div className="mb-2 block">
  //               <Label htmlFor="small" value="Middle Name" />
  //             </div>
  //             <TextInput
  //               id="small"
  //               type="text"
  //               sizing=""
  //               onChange={(e) => inputMiddleNameInfantsPassenger(e.target.value, i)}
  //             />
  //           </div>

  //           <div>
  //             <div className="mb-2 block">
  //               <Label htmlFor="small" value="Last Name" />
  //             </div>
  //             <TextInput
  //               id="small"
  //               type="text"
  //               sizing=""
  //               required={true}
  //               onChange={(e) => inputLastnameInfantsPassenger(e.target.value, i)}
  //             />
  //           </div>
  //         </div>

  //         <div className="flex w-full p-2 gap-4">
  //           <div>
  //             <div className="mb-2 block">
  //               <Label htmlFor="small" value="Date of Birth" />
  //             </div>
  //             <TextInput
  //               id="small"
  //               type="date"
  //               sizing=""
  //               required={true}
  //               onChange={(e) => inputDateOfBirthInfantsPassenger(e.target.value, i)}
  //             />
  //           </div>

  //           <div>
  //             <div className="mb-2 block">
  //               <Label htmlFor="small" value="Mobile Phone" />
  //             </div>
  //             <TextInput
  //               id="small"
  //               type="tel"
  //               pattern="^[0-9]*$"
  //               sizing=""
  //               // required={true}
  //               onChange={(e) => inputMobilePhoneInfantsPassenger(e.target.value, i)}
  //             />
  //           </div>
  //         </div>

  //         <div className="flex w-full p-2">
  //           <div>
  //             <div className="mb-2 block">
  //               <Label htmlFor="email1" value="Email" />
  //             </div>
  //             <TextInput
  //               id="email1"
  //               type="email"
  //               placeholder="name@gmail.com"
  //               sizing=""
  //               onChange={(e) => inputEmailInfantsPassenger(e.target.value, i)}
  //               // required={true}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //       <hr></hr>
  //     </div>
  //   );
  // }

  return (
    <div className="h-[100%] min-h-screen ">
      <div className="grid grid-rows-1 mx-2 lg:mx-36">
        <div className="flex flex-row justify-between items-center">
          <p className="font-bold text-2xl mx-16 p-2">Flight Detail</p>
        </div>

        <div className="">
          <div className="border rounded-xl flex justify-center p-2 mx-4 lg:mx-16 my-auto">
            <div className="px-2 w-[300px] h-full">
              <>
                <img className="w-auto h-auto ring-2 ring-white rounded-xl" src={nftImg} alt="" />
              </>
              <p className="mt-4 font-semibold">NFT Ticket : </p>
              <p className="font-semibold">{nftName} </p>
            </div>

            <div className="border rounded-xl w-full px-10 py-4">
              {/* {typeTrip === "R" ? ( */}

              <div className="my-4 text-lg">
                <p className="text-[#FAA819] font-bold">Departure</p>
                <p className="text-[#828282]">
                  {moment(access.departDate).format("dddd")}, {moment(access.departDate).format("DD-MMM-YYYY")}
                </p>
                {oneStopCity && twoStopCity ? (
                  <p className="text-[#828282] font-bold text-start">Two Stop Flight</p>
                ) : oneStopCity ? (
                  <p className="text-[#828282] text-start font-bold">One Stop Flight</p>
                ) : (
                  <p className="text-[#828282] text-start font-bold">Direct</p>
                )}

                <p className="text-lg text-[#828282]">{totalTime}</p>
              </div>
              {/* ) : null} */}

              <div className="my-4">
                <img className="" src={`https://ai-r-logo.azurewebsites.net/square/${src}.png`} alt="" />
                <div className="font-semibold">{airline}</div>
                <div className="font-semibold">
                  Flight Number : {depDirectAirlineCode_s1}
                  {depDirectFlightNumber_s1}
                </div>
              </div>

              <div>
                <div className="flex w-[100%] text-lg my-6">
                  <div className="flex flex-col justify-between font-semibold ">
                    {oneStopCity && twoStopCity ? (
                      <p className="">{departureDateTimeSeq1_1}</p>
                    ) : oneStopCity ? (
                      <p className="">{departureDateTimeSeq1_1}</p>
                    ) : (
                      <p className="">{departureDateTime}</p>
                    )}

                    {oneStopCity && twoStopCity ? (
                      <p className="">{arrivalDateTimeSeq1_1}</p>
                    ) : oneStopCity ? (
                      <p className="">{arrivalDateTimeSeq1_1}</p>
                    ) : (
                      <p className="">{arriveDateTime}</p>
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
                      <p className="">{departureNameCity}</p>
                    </div>
                    <p className=""></p>
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
                      <p className="text-[#828282]">({oneStopCodeCity})</p>
                    ) : (
                      <p className="text-[#828282]">({arriveCodeCity})</p>
                    )}
                  </div>
                </div>

                {oneStopCity ? (
                  <div className="flex w-[100%] text-lg my-6">
                    <div className="flex flex-col justify-between font-semibold ">
                      {oneStopCity2 && twoStopCity2 ? (
                        <p className="">{departureDateTimeSeq2_1}</p>
                      ) : oneStopCity2 ? (
                        <p className="">{departureDateTimeSeq2_1}</p>
                      ) : (
                        <p className="">{departureDateTime}</p>
                      )}

                      {oneStopCity2 && twoStopCity2 ? (
                        <p className="">{arrivalDateTimeSeq2_1}</p>
                      ) : oneStopCity2 ? (
                        <p className="">{arrivalDateTimeSeq2_1}</p>
                      ) : (
                        <p className="">{arriveDateTime}</p>
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
                        <p className="text-[#828282]">First stop to change planes in {oneStopCity}</p>
                      </div>
                      <p className=""></p>
                      <div className="flex font-semibold">
                        {oneStopCity && twoStopCity ? (
                          <p className="">{twoStopCity}</p>
                        ) : oneStopCity ? (
                          <p className="font-semibold">{arriveNameCity}</p>
                        ) : (
                          <p className="font-semibold">{arriveNameCity}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col justify-between mx-16">
                      <p className="text-[#828282]">({oneStopCodeCity})</p>
                      {oneStopCity && twoStopCity ? (
                        <p className="text-[#828282]">({twoStopCodeCity})</p>
                      ) : (
                        <p className="text-[#828282]">({arriveCodeCity})</p>
                      )}
                    </div>
                  </div>
                ) : null}

                {oneStopCity && twoStopCity ? (
                  <div className="flex w-[100%] text-lg my-6">
                    <div className="flex flex-col justify-between font-semibold ">
                      {oneStopCity && twoStopCity ? (
                        <p className="">{departureDateTimeSeq3_1}</p>
                      ) : oneStopCity2 ? (
                        <p className="">{departureDateTimeSeq3_1}</p>
                      ) : (
                        <p className="">{departureDateTime}</p>
                      )}

                      {oneStopCity && twoStopCity ? (
                        <p className="">{arrivalDateTimeSeq3_1}</p>
                      ) : oneStopCity2 ? (
                        <p className="">{arrivalDateTimeSeq3_1}</p>
                      ) : (
                        <p className="">{arriveDateTime}</p>
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
                        <p className="text-[#828282]">Second stop to change planes in {twoStopCity}</p>
                      </div>
                      <p className=""></p>
                      <div className="flex font-semibold">
                        {oneStopCity ? (
                          <p className="">{arriveNameCity}</p>
                        ) : (
                          <p className="font-semibold">{arriveNameCity}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col justify-between mx-16">
                      <p className="text-[#828282]">({twoStopCodeCity})</p>
                      {oneStopCity2 ? (
                        <p className="text-[#828282]">({arriveCodeCity})</p>
                      ) : (
                        <p className="text-[#828282]">({arriveCodeCity})</p>
                      )}
                    </div>
                  </div>
                ) : null}
              </div>

              <hr></hr>

              {typeTrip === "R" ? (
                <div className="my-4 text-lg">
                  <p className="text-[#FAA819] font-bold">Return</p>
                  <p className="text-[#828282]">
                    {moment(access.returnDate).format("dddd")}, {moment(access.returnDate).format("DD-MMM-YYYY")}
                  </p>
                  {oneStopCity2 && twoStopCity2 ? (
                    <p className="text-[#828282] font-bold text-start">Two Stop Flight</p>
                  ) : oneStopCity2 ? (
                    <p className="text-[#828282] text-start font-bold">One Stop Flight</p>
                  ) : (
                    <p className="text-[#828282] text-start font-bold">Direct</p>
                  )}

                  <p className="text-lg text-[#828282]">{totalTime2}</p>
                </div>
              ) : null}

              {typeTrip === "R" ? (
                <div className="my-4">
                  <img className="" src={`https://ai-r-logo.azurewebsites.net/square/${src2}.png`} alt="" />
                  <div className="font-semibold">{airline2}</div>
                  <div className="font-semibold">
                    Flight Number : {returnDirectAirlineCode_s1}
                    {returnDirectFlightNumber_s1}
                  </div>
                </div>
              ) : null}

              {typeTrip === "R" ? (
                <div>
                  <div className="flex w-[100%] text-lg my-6">
                    <div className="flex flex-col justify-between font-semibold ">
                      {oneStopCity2 && twoStopCity2 ? (
                        <p className="">{departureDateTimeSeq1_2}</p>
                      ) : oneStopCity2 ? (
                        <p className="">{departureDateTimeSeq1_2}</p>
                      ) : (
                        <p className="">{departureDateTime2}</p>
                      )}

                      {oneStopCity2 && twoStopCity2 ? (
                        <p className="">{arrivalDateTimeSeq1_2}</p>
                      ) : oneStopCity2 ? (
                        <p className="">{arrivalDateTimeSeq1_2}</p>
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

                  {oneStopCity2 ? (
                    <div className="flex w-[100%] text-lg my-6">
                      <div className="flex flex-col justify-between font-semibold ">
                        {oneStopCity2 && twoStopCity2 ? (
                          <p className="">{departureDateTimeSeq2_2}</p>
                        ) : oneStopCity2 ? (
                          <p className="">{departureDateTimeSeq2_2}</p>
                        ) : (
                          <p className="">{departureDateTime2}</p>
                        )}

                        {oneStopCity2 && twoStopCity2 ? (
                          <p className="">{arrivalDateTimeSeq2_2}</p>
                        ) : oneStopCity2 ? (
                          <p className="">{arrivalDateTimeSeq2_2}</p>
                        ) : (
                          <p className="">{arriveDateTime2}</p>
                        )}
                      </div>
                      <div className="mx-2">
                        <svg
                          width="33"
                          height="113"
                          viewBox="0 0 33 113"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
                          <p className="text-[#828282]">First stop to change planes in {oneStopCity2}</p>
                        </div>
                        <p className=""></p>
                        <div className="flex font-semibold">
                          {oneStopCity2 && twoStopCity2 ? (
                            <p className="">{twoStopCity2}</p>
                          ) : oneStopCity2 ? (
                            <p className="font-semibold">{arriveNameCity2}</p>
                          ) : (
                            <p className="font-semibold">{arriveNameCity2}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col justify-between mx-16">
                        <p className="text-[#828282]">({oneStopCodeCity2})</p>
                        {oneStopCity2 && twoStopCity2 ? (
                          <p className="text-[#828282]">({twoStopCodeCity2})</p>
                        ) : (
                          <p className="text-[#828282]">({arriveCodeCity2})</p>
                        )}
                      </div>
                    </div>
                  ) : null}

                  {oneStopCity2 && twoStopCity2 ? (
                    <div className="flex w-[100%] text-lg my-6">
                      <div className="flex flex-col justify-between font-semibold ">
                        {oneStopCity2 && twoStopCity2 ? (
                          <p className="">{departureDateTimeSeq3_2}</p>
                        ) : oneStopCity2 ? (
                          <p className="">{departureDateTimeSeq3_2}</p>
                        ) : (
                          <p className="">{departureDateTime2}</p>
                        )}

                        {oneStopCity2 && twoStopCity2 ? (
                          <p className="">{arrivalDateTimeSeq3_2}</p>
                        ) : oneStopCity2 ? (
                          <p className="">{arrivalDateTimeSeq3_2}</p>
                        ) : (
                          <p className="">{arriveDateTime2}</p>
                        )}
                      </div>
                      <div className="mx-2">
                        <svg
                          width="33"
                          height="113"
                          viewBox="0 0 33 113"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
                          <p className="text-[#828282]">Second stop to change planes in {twoStopCity2}</p>
                        </div>
                        <p className=""></p>
                        <div className="flex font-semibold">
                          {oneStopCity2 ? (
                            <p className="">{arriveNameCity2}</p>
                          ) : (
                            <p className="font-semibold">{arriveNameCity2}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col justify-between mx-16">
                        <p className="text-[#828282]">({twoStopCodeCity2})</p>
                        {oneStopCity2 ? (
                          <p className="text-[#828282]">({arriveCodeCity2})</p>
                        ) : (
                          <p className="text-[#828282]">({arriveCodeCity2})</p>
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}

              <form onSubmit={handleObjBooking}>
                {/* <form> */}
                <div className="w-full">
                  <p className="p-1 bg-gray-100 text-lg font-bold text-[#FAA819]">Contact Detail</p>
                  <div className="form-control w-full max-w-full">
                    <div className="flex w-full p-2 gap-4">
                      <div id="adultInfo">
                        <div className="mb-2 flex">
                          <Label htmlFor="small" value="Title" />
                          <p className="text-[#ff3838]">*</p>
                        </div>
                        <Select
                          id="small"
                          required={true}
                          sizing=""
                          onChange={(e) => {
                            setInputTitleContract(e.target.value);
                          }}
                        >
                          <option disabled value="">
                            Title
                          </option>
                          <option value="Mr">Mr.</option>
                          <option value="Mrs">Mrs.</option>
                          <option value="Ms">Ms.</option>
                          <option value="Miss">Miss.</option>
                        </Select>
                      </div>

                      <div>
                        <div className="mb-2 flex">
                          <Label htmlFor="small" value="First Name" />
                          <p className="text-[#ff3838]">*</p>
                        </div>
                        <TextInput
                          id="small"
                          type="text"
                          sizing=""
                          required={true}
                          onChange={(e) => setInputFirstNameContract(e.target.value)}
                        />
                      </div>

                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="small" value="Middle Name" />
                        </div>
                        <TextInput
                          id="small"
                          type="text"
                          sizing=""
                          onChange={(e) => setInputMiddleNameContract(e.target.value)}
                        />
                      </div>

                      <div>
                        <div className="mb-2 flex">
                          <Label htmlFor="small" value="Last Name" />
                          <p className="text-[#ff3838]">*</p>
                        </div>
                        <TextInput
                          id="small"
                          type="text"
                          sizing=""
                          required={true}
                          onChange={(e) => setInputLastNameContract(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex w-full p-2 gap-4">
                      <div>
                        <div className="mb-2 flex">
                          <Label htmlFor="email1" value="Email" />
                          <p className="text-[#ff3838]">*</p>
                        </div>
                        <TextInput
                          id="email1"
                          type="email"
                          placeholder="name@gmail.com"
                          sizing=""
                          onChange={(e) => setInputEmailContract(e.target.value)}
                          required={true}
                        />
                      </div>

                      <div>
                        <div className="mb-2 flex">
                          <Label htmlFor="small" value="Mobile Phone" />
                          <p className="text-[#ff3838]">*</p>
                        </div>
                        <TextInput
                          placeholder=""
                          id="small"
                          type="tel"
                          pattern="^[0-9]*$"
                          sizing=""
                          required={true}
                          onChange={(e) => setInputinputMobilePhoneContract(e.target.value)}
                        />
                      </div>

                      {/* <div id="select"> //CountryOfIssue
                        <div className="mb-2 block">
                          <Label htmlFor="small" value="CountryOfIssue" />
                        </div>
                        <Select
                          id="small"
                          required={true}
                          sizing=""
                          onChange={(e) => {
                            setInputCountryOfIssueContract(e.target.value);
                          }}
                        >
                          <option disabled value="">
                            CountryOfIssue
                          </option>
                          <option value="TH">Thailand</option>
                          <option value="ENG">England</option>
                        </Select>
                      </div> */}

                      {/* <div id="select">
                        <div className="mb-2 block">
                          <Label htmlFor="small" value="countryCode" />
                        </div>
                        <Select
                          id="small"
                          required={true}
                          sizing="sm"
                          onChange={(e) =>
                            setInputCountryOfIssueContract(e.target.value)
                          }
                        >
                          <option disabled value="">
                            Country
                          </option>
                          <option value="TH">TH</option>
                          <option value="ENG">ENG</option>
                        </Select>
                      </div> */}
                    </div>

                    <p className="p-1 bg-gray-100 text-lg font-bold text-[#FAA819] mt-4">Passenger Detail</p>

                    {/* {adultsSection} */}

                    <div className="">
                      {adultPassenger?.map((adultPassenger, index) => (
                        <div key={index}>
                          <div className="my-4 block bg-map rounded-lg p-2">
                            <Label htmlFor="small" value={`Adult passenger no. ${index + 1}`} />
                          </div>
                          <div className="flex items-center mb-2 p-2">
                            <input
                              type="checkbox"
                              checked={adultPassenger.checked}
                              onChange={() => handleCheckboxChange(index)}
                            />

                            <div className="mx-2">
                              <Label htmlFor="small" value={`Copy from contract detail`} />
                            </div>
                          </div>

                          <div className="flex p-2 gap-4">
                            <div className="w-full">
                              <div className="flex mb-2">
                                <Label htmlFor="small" value="Title" />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <Select
                                id="small"
                                required={true}
                                sizing=""
                                onChange={(event) => {
                                  handlePassengerTitleChange(index, event);
                                }}
                              >
                                <option value={adultPassenger.title}>{adultPassenger.title}</option>
                                <option value="Mr">Mr.</option>
                                <option value="Mrs">Mrs.</option>
                                <option value="Ms">Ms.</option>
                                <option value="Miss">Miss.</option>
                              </Select>
                            </div>

                            <div className="w-full">
                              <div className="flex mb-2">
                                <Label htmlFor="firstname" value={`First Name `} />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <TextInput
                                type="text"
                                value={adultPassenger.firstName}
                                onChange={(event) => handlePassengerFirstNameChange(index, event)}
                                required={true}
                              />
                            </div>

                            <div className="w-full">
                              <div className="flex mb-2">
                                <Label htmlFor="middleName" value={`Middle Name`} />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <TextInput
                                type="text"
                                value={adultPassenger.middleName}
                                onChange={(event) => handlePassengerMiddlenameChange(index, event)}
                              />
                            </div>

                            <div className="w-full">
                              <div className="flex mb-2">
                                <Label htmlFor="lastName" value={`Last Name `} />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <TextInput
                                type="text"
                                value={adultPassenger.lastName}
                                onChange={(event) => handlePassengerLastNameChange(index, event)}
                                required={true}
                              />
                            </div>
                          </div>

                          <div className="flex w-full p-2 gap-4">
                            <div>
                              <div className="flex mb-2">
                                <Label htmlFor="email" value={`Email`} />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <TextInput
                                type="email"
                                value={adultPassenger.email}
                                onChange={(event) => handlePassengerEmailChange(index, event)}
                                placeholder="name@gmail.com"
                                required={true}
                              />
                            </div>

                            <div>
                              <div className="flex mb-2">
                                <Label htmlFor="MobilePhone" value={`Mobile Phone `} />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <TextInput
                                value={adultPassenger.mobilePhone}
                                onChange={(event) => handlePassengerMobilePhoneChange(index, event)}
                                required={true}
                                placeholder=""
                                id="small"
                                type="tel"
                                pattern="^[0-9]*$"
                                sizing=""
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* {childsSection} */}
                    <div className="">
                      {childPassenger?.map((childPassenger, index) => (
                        <div key={index}>
                          <div className="my-4 block bg-map rounded-lg p-2">
                            <Label htmlFor="small" value={`Child passenger no. ${index + 1}`} />
                          </div>
                          <div className="flex items-center mb-2 p-2">
                            <input
                              type="checkbox"
                              checked={childPassenger.checked}
                              onChange={() => handleChildCheckboxChange(index)}
                            />

                            <div className="mx-2">
                              <Label htmlFor="small" value={`Copy from contract detail`} />
                            </div>
                          </div>

                          <div className="flex p-2 gap-4">
                            <div className="w-full">
                              <div className="flex mb-2">
                                <Label htmlFor="small" value="Title" />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <Select
                                id="small"
                                required={true}
                                sizing=""
                                onChange={(event) => {
                                  handleChildPassengerTitleChange(index, event);
                                }}
                              >
                                <option value="MSTR">MSTR</option>
                              </Select>
                            </div>

                            <div className="w-full">
                              <div className="flex mb-2">
                                <Label htmlFor="firstname" value={`First Name `} />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <TextInput
                                type="text"
                                value={childPassenger.firstName}
                                onChange={(event) => handleChildPassengerFirstNameChange(index, event)}
                                required={true}
                              />
                            </div>

                            <div className="w-full">
                              <div className="flex mb-2">
                                <Label htmlFor="middleName" value={`Middle Name`} />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <TextInput
                                type="text"
                                value={childPassenger.middleName}
                                onChange={(event) => handleChildPassengerMiddlenameChange(index, event)}
                              />
                            </div>

                            <div className="w-full">
                              <div className="flex mb-2">
                                <Label htmlFor="lastName" value={`Last Name `} />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <TextInput
                                type="text"
                                value={childPassenger.lastName}
                                onChange={(event) => handleChildPassengerLastNameChange(index, event)}
                                required={true}
                              />
                            </div>
                          </div>

                          <div className="flex w-full p-2 gap-4">
                            <div>
                              <div className="mb-2 block">
                                <Label htmlFor="small" value="Date of Birth" />
                              </div>
                              <TextInput
                                id="small"
                                type="date"
                                sizing=""
                                required={true}
                                // onChange={(e) => inputDateOfBirthChildsPassenger(e.target.value, index)}
                                onChange={(event) => handleChildPassengerDateOfBirthChange(index, event)}
                              />
                            </div>
                            <div>
                              <div className="flex mb-2">
                                <Label htmlFor="email" value={`Email`} />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <TextInput
                                type="email"
                                value={childPassenger.email}
                                onChange={(event) => handleChildPassengerEmailChange(index, event)}
                                placeholder="name@gmail.com"
                                required={true}
                              />
                            </div>

                            <div>
                              <div className="flex mb-2">
                                <Label htmlFor="MobilePhone" value={`Mobile Phone `} />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <TextInput
                                value={childPassenger.mobilePhone}
                                onChange={(event) => handleChildPassengerMobilePhoneChange(index, event)}
                                required={true}
                                placeholder=""
                                id="small"
                                type="tel"
                                pattern="^[0-9]*$"
                                sizing=""
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* {infantsSection} */}
                    <div className="">
                      {infantPassenger?.map((infantPassenger, index) => (
                        <div key={index}>
                          <div className="my-4 block bg-map rounded-lg p-2">
                            <Label htmlFor="small" value={`Infant passenger no. ${index + 1}`} />
                          </div>
                          <div className="flex items-center mb-2 p-2">
                            <input
                              type="checkbox"
                              checked={infantPassenger.checked}
                              onChange={() => handleInfantCheckboxChange(index)}
                            />

                            <div className="mx-2">
                              <Label htmlFor="small" value={`Copy from contract detail`} />
                            </div>
                          </div>

                          <div className="flex p-2 gap-4">
                            <div className="w-full">
                              <div className="flex mb-2">
                                <Label htmlFor="small" value="Title" />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <Select
                                id="small"
                                required={true}
                                sizing=""
                                onChange={(event) => {
                                  handleInfantPassengerTitleChange(index, event);
                                }}
                              >
                                <option value="MSTR">MSTR</option>
                              </Select>
                            </div>

                            <div className="w-full">
                              <div className="flex mb-2">
                                <Label htmlFor="firstname" value={`First Name `} />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <TextInput
                                type="text"
                                value={infantPassenger.firstName}
                                onChange={(event) => handleInfantPassengerFirstNameChange(index, event)}
                                required={true}
                              />
                            </div>

                            <div className="w-full">
                              <div className="flex mb-2">
                                <Label htmlFor="middleName" value={`Middle Name`} />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <TextInput
                                type="text"
                                value={infantPassenger.middleName}
                                onChange={(event) => handleInfantPassengerMiddlenameChange(index, event)}
                              />
                            </div>

                            <div className="w-full">
                              <div className="flex mb-2">
                                <Label htmlFor="lastName" value={`Last Name `} />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <TextInput
                                type="text"
                                value={infantPassenger.lastName}
                                onChange={(event) => handleInfantPassengerLastNameChange(index, event)}
                                required={true}
                              />
                            </div>
                          </div>

                          <div className="flex w-full p-2 gap-4">
                            <div>
                              <div className="mb-2 block">
                                <Label htmlFor="small" value="Date of Birth" />
                              </div>
                              <TextInput
                                id="small"
                                type="date"
                                sizing=""
                                required={true}
                                // onChange={(e) => inputDateOfBirthChildsPassenger(e.target.value, index)}
                                onChange={(event) => handleInfantPassengerDateOfBirthChange(index, event)}
                              />
                            </div>
                            <div>
                              <div className="flex mb-2">
                                <Label htmlFor="email" value={`Email`} />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <TextInput
                                type="email"
                                value={infantPassenger.email}
                                onChange={(event) => handleInfantPassengerEmailChange(index, event)}
                                placeholder="name@gmail.com"
                                required={true}
                              />
                            </div>

                            <div>
                              <div className="flex mb-2">
                                <Label htmlFor="MobilePhone" value={`Mobile Phone `} />
                                <p className="text-[#ff3838]">*</p>
                              </div>
                              <TextInput
                                value={infantPassenger.mobilePhone}
                                onChange={(event) => handleInfantPassengerMobilePhoneChange(index, event)}
                                required={true}
                                placeholder=""
                                id="small"
                                type="tel"
                                pattern="^[0-9]*$"
                                sizing=""
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex mx-2">
                      <Button type="submit" style={{ marginTop: 20 }}>
                        Confirm
                      </Button>

                      <div className="mx-4">
                        <Button type="button" style={{ marginTop: 20 }} onClick={() => backToBookingPage()}>
                          Change Flight
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contractInfo_copy;
