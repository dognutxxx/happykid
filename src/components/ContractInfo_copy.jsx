import React from "react";

import { useState } from "react";
import moment from "moment";
import { useDepartureSelectedContext } from "../context/DepartureSelectedContext";
import { useReturnSelectedContext } from "../context/ReturnSelectedContext";
import { usePassengerContractInfoContext } from "../context/PassengerContractInfoContext";
import { useContractDetailContext } from "../context/ContractDetailContext";
import { useFinalDirectDepartureContext } from "../context/FinalDirectDepartureContext";
import { useFinalOneStopDepartureContext } from "../context/FinalOneStopDepartureContext";
import { useFinalDirectReturnContext } from "../context/FinalDirectReturnContext";
import { useFinalOneStopReturnContext } from "../context/FinalOneStopReturnContext";
import { useResultBookingObjContext } from "../context/ResultBookingObjContext";
import { usePnrContext } from "../context/PnrContext";

import { useNavigate } from "react-router-dom";
import { TextInput, Label, Button, Select } from "flowbite-react";

import { EncryptStorage } from "encrypt-storage";
const encryptStorage2 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function contractInfo_copy() {
  //ResultBookingObjContext
  const { setOnewayDirectObjBooking } = useResultBookingObjContext();
  const { setOnewayOneStopObjBooking } = useResultBookingObjContext();
  const { setRoundDir_DirObjBookingInfo } = useResultBookingObjContext();
  const { setRoundDir_OneObjBookingInfo } = useResultBookingObjContext();
  const { setRoundOne_OneObjBookingInfo } = useResultBookingObjContext();
  const { setRoundOne_DirObjBookingInfo } = useResultBookingObjContext();

  const { onewayDirectObjBooking } = useResultBookingObjContext();
  const { onewayOneStopObjBooking } = useResultBookingObjContext();
  const { roundDir_DirObjBookingInfo } = useResultBookingObjContext();
  const { roundDir_OneObjBookingInfo } = useResultBookingObjContext();
  const { roundOne_OneObjBookingInfo } = useResultBookingObjContext();
  const { roundOne_DirObjBookingInfo } = useResultBookingObjContext();

  // console.log(onewayDirectObjBooking);
  // console.log(onewayOneStopObjBooking);
  // console.log(roundDir_DirObjBookingInfo);
  // console.log(roundDir_OneObjBookingInfo);
  // console.log(roundOne_OneObjBookingInfo);
  // console.log(roundOne_DirObjBookingInfo);

  const accesstripType = localStorage.access_;
  const valueTypeTrip = encryptStorage2.decryptString(accesstripType);

  const access = JSON.parse(valueTypeTrip);
  const typeType_ = JSON.parse(valueTypeTrip);
  const typeTrip = typeType_.tripType;

  console.log(access.svcClass);

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
  // console.log("13Dep", depDirectSeq_s1);

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
  // console.log("2return", returnDirectDepCityName_s1)
  // console.log("3return", returnDirectArrCityCode_s1)
  // console.log("4return", returnDirectArrCityName_s1)
  // console.log("5return", returnDirectAirlineCode_s1)
  // console.log("6return", returnDirectAirlineName_s1)
  // console.log("7return", returnDirectFlightNumber_s1)
  // console.log("8return", returnDirectOperatedAirlineCode_s1)
  // console.log("9return", returnDirectOperatedAirlineName_s1)
  // console.log("10return", returnDirectDepartureDateTime_s1)
  // console.log("11return", returnDirectArriveDateTime_s1);
  // console.log("12return", returnDirectRBD_s1)
  // console.log("13return", returnDirectSeq_s1)

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

  const inputTitleAdultsPassenger = (e, i) => {
    // adultInfo[i].title = e;
    setInputTitle(adultInfo[i].title = e);
  };

  const inputFirstnameAdultsPassenger = (e, i) => {
    // adultInfo[i].firstname = e;
    setInputFirstName(adultInfo[i].firstname = e);
  };

  const inputMiddleNameAdultsPassenger = (e, i) => {
    // adultInfo[i].middlename = e;
    setInputMiddleName(adultInfo[i].middlename = e);
  };

  const inputLastnameAdultsPassenger = (e, i) => {
    // adultInfo[i].lastname = e;
    setInputLastName(adultInfo[i].lastname = e);
  };

  const inputEmailAdultsPassenger = (e, i) => {
    // adultInfo[i].email = e;
    setInputEmail(adultInfo[i].email = e);
  };

  const inputDateOfBirthAdultsPassenger = (e, i) => {
    // adultInfo[i].birthday = e;
    setInputDateOfBirth(adultInfo[i].birthday = e);
  };

  const inputMobilePhoneAdultsPassenger = (e, i) => {
    // adultInfo[i].telNo = e;
    setChildInputinputMobilePhone(adultInfo[i].telNo = e);
  };

  const inputTitleChildsPassenger = (e, i) => {
    // adultInfo[i].title = e;
    setChildInputTitle(childInfo[i].title = e);
  };

  const inputFirstnameChildsPassenger = (e, i) => {
    // childInfo[i].firstname = e;
    setChildInputFirstName(childInfo[i].firstname = e);
  };

  const inputMiddleNameChildsPassenger = (e, i) => {
    // childInfo[i].middlename = e;
    setChildInputMiddleName(childInfo[i].middlename = e);
  };

  const inputLastnameChildsPassenger = (e, i) => {
    // childInfo[i].lastname = e;
    setChildInputLastName(childInfo[i].lastname = e);
  };

  const inputEmailChildsPassenger = (e, i) => {
    // childInfo[i].email = e;
    setChildInputEmail(childInfo[i].email = e);
  };

  const inputDateOfBirthChildsPassenger = (e, i) => {
    // childInfo[i].birthday = e;
    setChildInputDateOfBirth(childInfo[i].birthday = e);
  };

  const inputMobilePhoneChildsPassenger = (e, i) => {
    // childInfo[i].telNo = e;
    setChildInputinputMobilePhone(childInfo[i].telNo = e);
  };

  const inputTitleInfantsPassenger = (e, i) => {
    // adultInfo[i].title = e;
    setInfantInputTitle(infantInfo[i].title = e);
  };

  const inputFirstnameInfantsPassenger = (e, i) => {
    // infantInfo[i].firstname = e;
    setInfantInputFirstName(infantInfo[i].firstname = e);
  };

  const inputMiddleNameInfantsPassenger = (e, i) => {
    // infantInfo[i].middlename = e;
    setInfantInputMiddleName(infantInfo[i].middlename = e);
  };

  const inputLastnameInfantsPassenger = (e, i) => {
    // infantInfo[i].lastname = e;
    setInfantInputLastName(infantInfo[i].lastname = e);
  };

  const inputEmailInfantsPassenger = (e, i) => {
    // infantInfo[i].email = e;
    setInfantInputEmail(infantInfo[i].email = e);
  };

  const inputDateOfBirthInfantsPassenger = (e, i) => {
    // infantInfo[i].birthday = e;
    setInfantInputDateOfBirth(infantInfo[i].birthday = e);
  };

  const inputMobilePhoneInfantsPassenger = (e, i) => {
    // infantInfo[i].telNo = e;
    setInfantInputinputMobilePhone(infantInfo[i].telNo = e);
  };

  const totalTime = timeDuration?.slice(0, 2) + "hr " + timeDuration?.slice(2) + "m";
  const totalTime2 = timeDuration2?.slice(0, 2) + "hr " + timeDuration2?.slice(2) + "m";

  const objAccess = access;
  const adult = objAccess.adult;
  const child = objAccess.child;
  const infant = objAccess.infant;
  const svc_class = objAccess.svcClass


  const { adultInfo, childInfo, infantInfo } = usePnrContext();
  

  const handlObjBooking = (e) => {
    e.preventDefault();
    if (typeTrip === "O") {
      if (depDirectSeq_s1) {
        // console.log("Direct");
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
        setOnewayDirectObjBooking(onewayDirectObjBooking);
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
        setOnewayOneStopObjBooking(onewayOneStopObjBooking);
      } else {
        console.log("error");
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
      } else {
        console.log("error");
      }
    }
    setTimeout(() => {
      navigate("/bookingresult", { replace: true });
    });
  };

  const dataNFTDetail = localStorage.NFT_;
  const value = encryptStorage2.decryptString(dataNFTDetail);

  const dataNFTDetail_ = JSON.parse(value);

  const nftImg = dataNFTDetail_.image_thumbnail_url;
  const nftName = dataNFTDetail_.name;

  var adultsSection = [];
  for (let i = 0; i < adultInfo.length; i++) {
    console.log(i);
    adultsSection.push(
      <div>
        <div className="">
          <div className="my-4 block bg-map rounded-lg p-2">
            <Label htmlFor="small" value={`Adult passenger no. ${i + 1}`} />
          </div>
          <div className="flex w-full p-2 gap-4">
            <div id="select">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Title" />
              </div>

              <Select
                id="countries"
                required={true}
                sizing=""
                onChange={(e) => inputTitleAdultsPassenger(e.target.value, i)}
              >
                <option disabled value="">
                  Title
                </option>
                <option value="Mr">Mr.</option>
                <option value="Mrs">Mrs.</option>
                <option value="Ms">Ms.</option>
                <option value="Dr">Dr.</option>
                <option value="Phra">Phr.a</option>
                <option value="Phramaha">Phramaha.</option>
              </Select>
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="First Name" />
              </div>
              <TextInput
                id="small"
                type="text"
                sizing=""
                required={true}
                onChange={(e) => inputFirstnameAdultsPassenger(e.target.value, i)}
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
                onChange={(e) => inputMiddleNameAdultsPassenger(e.target.value, i)}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Last Name" />
              </div>
              <TextInput
                id="small"
                type="text"
                sizing=""
                required={true}
                onChange={(e) => inputLastnameAdultsPassenger(e.target.value, i)}
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
                onChange={(e) => inputDateOfBirthAdultsPassenger(e.target.value, i)}
              />
            </div>

            {/* <div>
                        <div className="mb-2 block">
                          <Label htmlFor="small" value="Nationality" />
                        </div>
                        <TextInput
                          id="small"
                          type="text"
                          sizing=""
                          required={true}
                          onChange={(e) => setInputNationality(e.target.value)}
                        />
                      </div> */}

            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Mobile Phone" />
              </div>
              <TextInput
                placeholder="081-xxx-xxxx"
                id="small"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                sizing=""
                required={true}
                onChange={(e) => inputMobilePhoneAdultsPassenger(e.target.value, i)}
              />
            </div>
          </div>

          <div className="flex w-full p-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@gmail.com"
                sizing=""
                onChange={(e) => inputEmailAdultsPassenger(e.target.value, i)}
                required={true}
              />
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
  console.log("ADULT", adultsSection);

  var childsSection = [];
  for (let i = 0; i < childInfo.length; i++) {
    console.log(i);
    childsSection.push(
      // <div>
      //   <div className="my-2 block">
      //     <Label htmlFor="small" value={`Passenger No. ${i + 1}`} />
      //   </div>
      //   <TextInput key={i} id="small" type="text" sizing="" required={true} onChange={(e) => xx(e.target.value, i)} />
      // </div>
      <div>
        <div className="">
          <div className="my-4 block bg-map rounded-lg p-2">
            <Label htmlFor="small" value={`Child passenger no. ${i + 1}`} />
          </div>
          <div className="flex w-full p-2 gap-4">
            <div id="select">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Title" />
              </div>

              <Select
                id="countries"
                required={true}
                sizing=""
                onChange={(e) => inputTitleChildsPassenger(e.target.value, i)}
              >
                <option disabled value="">
                  Title
                </option>
                <option value="MSTR ">MSTR.</option>
                {/* <option value="Mrs">Mrs.</option>
                <option value="Ms">Ms.</option>
                <option value="Dr">Dr.</option>
                <option value="Phra">Phr.a</option>
                <option value="Phramaha">Phramaha.</option> */}
              </Select>
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="First Name" />
              </div>
              <TextInput
                id="small"
                type="text"
                sizing=""
                required={true}
                onChange={(e) => inputFirstnameChildsPassenger(e.target.value, i)}
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
                onChange={(e) => inputMiddleNameChildsPassenger(e.target.value, i)}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Last Name" />
              </div>
              <TextInput
                id="small"
                type="text"
                sizing=""
                required={true}
                onChange={(e) => inputLastnameChildsPassenger(e.target.value, i)}
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
                onChange={(e) => inputDateOfBirthChildsPassenger(e.target.value, i)}
              />
            </div>

            {/* <div>
                        <div className="mb-2 block">
                          <Label htmlFor="small" value="Nationality" />
                        </div>
                        <TextInput
                          id="small"
                          type="text"
                          sizing=""
                          required={true}
                          onChange={(e) => setInputNationality(e.target.value)}
                        />
                      </div> */}

            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Mobile Phone" />
              </div>
              <TextInput
                placeholder="081-xxx-xxxx"
                id="small"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                sizing=""
                // required={true}
                onChange={(e) => inputMobilePhoneChildsPassenger(e.target.value, i)}
              />
            </div>
          </div>

          <div className="flex w-full p-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@gmail.com"
                sizing=""
                onChange={(e) => inputEmailChildsPassenger(e.target.value, i)}
                // required={true}
              />
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
  console.log("CHILD", childsSection);

  var infantsSection = [];
  for (let i = 0; i < infantInfo.length; i++) {
    console.log(i);
    infantsSection.push(
      // <div>
      //   <div className="my-2 block">
      //     <Label htmlFor="small" value={`Passenger No. ${i + 1}`} />
      //   </div>
      //   <TextInput key={i} id="small" type="text" sizing="" required={true} onChange={(e) => xx(e.target.value, i)} />
      // </div>
      <div>
        <div className="">
          <div className="my-4 block bg-map rounded-lg p-2">
            <Label htmlFor="small" value={`Infant passenger no. ${i + 1}`} />
          </div>
          <div className="flex w-full p-2 gap-4">
            <div id="select">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Title" />
              </div>

              <Select
                id="countries"
                required={true}
                sizing=""
                onChange={(e) => inputTitleInfantsPassenger(e.target.value, i)}
              >
                <option disabled value="">
                  Title
                </option>
                <option value="MSTR ">MSTR.</option>
                {/* <option value="Mrs">Mrs.</option>
                <option value="Ms">Ms.</option>
                <option value="Dr">Dr.</option>
                <option value="Phra">Phr.a</option>
                <option value="Phramaha">Phramaha.</option> */}
              </Select>
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="First Name" />
              </div>
              <TextInput
                id="small"
                type="text"
                sizing=""
                required={true}
                onChange={(e) => inputFirstnameInfantsPassenger(e.target.value, i)}
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
                onChange={(e) => inputMiddleNameInfantsPassenger(e.target.value, i)}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Last Name" />
              </div>
              <TextInput
                id="small"
                type="text"
                sizing=""
                required={true}
                onChange={(e) => inputLastnameInfantsPassenger(e.target.value, i)}
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
                onChange={(e) => inputDateOfBirthInfantsPassenger(e.target.value, i)}
              />
            </div>

            {/* <div>
                        <div className="mb-2 block">
                          <Label htmlFor="small" value="Nationality" />
                        </div>
                        <TextInput
                          id="small"
                          type="text"
                          sizing=""
                          required={true}
                          onChange={(e) => setInputNationality(e.target.value)}
                        />
                      </div> */}

            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Mobile Phone" />
              </div>
              <TextInput
                placeholder="081-xxx-xxxx"
                id="small"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                sizing=""
                // required={true}
                onChange={(e) => inputMobilePhoneInfantsPassenger(e.target.value, i)}
              />
            </div>
          </div>

          <div className="flex w-full p-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@gmail.com"
                sizing=""
                onChange={(e) => inputEmailInfantsPassenger(e.target.value, i)}
                // required={true}
              />
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
  console.log("INFANT", infantsSection);

  return (
    <div className="h-[100%] min-h-screen ">
      <div className="grid grid-rows-1 mx-2 lg:mx-36">
        <div className="flex flex-row justify-between items-center">
          <p className="font-bold text-2xl mx-16 p-2">Flight Detail</p>
        </div>

        <div className="">
          <div className="border flex justify-center p-2 mx-4 lg:mx-16 my-auto">
            <div className="p-2 w-[300px] h-full">
              <>
                <img className="w-auto h-auto ring-2 ring-white" src={nftImg} alt="" />
              </>
              <h2 className="my-4">NFT Ticket : {nftName} </h2>
            </div>

            <div className="border rounded-xl w-full px-10 py-4">
              <div className="text-lg">
                <p className="text-[#FAA819] font-bold">Departure</p>
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

              <div className="flex w-[100%] my-4 text-lg">
                <div className="flex flex-col justify-between font-semibold w-[79px]">
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
                <div className="flex w-[100%] my-2 text-lg">
                  <div className="flex flex-col justify-between font-semibold w-[79px]">
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
                  <p className="text-[#FAA819] font-bold">Return</p>
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
                <div className="flex w-[100%] my-2 text-lg my-6">
                  <div className="flex flex-col justify-between font-semibold w-[79px]">
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
                  <div className="flex flex-col justify-between font-semibold w-[79px]">
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

              <form onSubmit={handlObjBooking}>
                <div className="w-full">
                  <p className="p-1 bg-gray-100 text-lg font-bold text-[#FAA819]">Contact Detail</p>
                  <div className="form-control w-full max-w-full">
                    <div className="flex w-full p-2 gap-4">
                      <div id="adultInfo">
                        <div className="mb-2 block">
                          <Label htmlFor="small" value="Title" />
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
                          <option value="Dr">Dr.</option>
                          <option value="Phra">Phr.a</option>
                          <option value="Phramaha">Phramaha.</option>
                        </Select>
                      </div>

                      <div>
                        <div className="mb-2 block">
                          <Label htmlFor="small" value="First Name" />
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
                        <div className="mb-2 block">
                          <Label htmlFor="small" value="Last Name" />
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
                        <div className="mb-2 block">
                          <Label htmlFor="email1" value="Email" />
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
                        <div className="mb-2 block">
                          <Label htmlFor="small" value="Mobile Phone" />
                        </div>
                        <TextInput
                          placeholder="081-xxx-xxxx"
                          id="small"
                          // type="text"
                          sizing=""
                          type="tel"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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

                    <p className="p-1 bg-gray-100 text-lg font-bold text-[#FAA819]">Passenger Detail</p>

                    {adultsSection}
                    {childsSection}
                    {infantsSection}

                    <div className="mx-2">
                      <Button type="submit" style={{ marginTop: 20 }}>
                        Confirm
                      </Button>
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
