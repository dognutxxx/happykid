import React from "react";
import { useDepartureSelectedContext } from "../../context/DepartureSelectedContext";
import { useFinalOneStopDepartureContext } from "../../context/FinalOneStopDepartureContext";
import { useNavigate } from "react-router-dom";

import { EncryptStorage } from "encrypt-storage";
const encryptStorage2 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function CardOneStopFlightFilter({
  src,
  airline,
  departureNameCity,
  oneStopCity,
  oneStopCodeCity,
  departureCodeCity,
  departureDateTime,
  arriveNameCity,
  arriveCodeCity,
  arriveDateTime,
  timeDuration,
  departureDateTimeSeq_1,
  departureDateTimeSeq_2,
  arrivalDateTimeSeq_1,
  arrivalDateTimeSeq_2,
  flightNumberSeq1,
  flightNumberSeq2,
  operatedAirlineNameSeq1,
  operatedAirlineNameSeq2,
  operatedAirlineCodeSeq1,
  operatedAirlineCodeSeq2,
  seqOneFlight,
  seqTwoFlight,

  //new
  depOneStopDepCityCode_s1,
  depOneStopDepCityCode_s2,
  depOneStopDepCityName_s1,
  depOneStopDepCityName_s2,
  depOneStopArrCityCode_s1,
  depOneStopArrCityCode_s2,
  depOneStopArrCityName_s1,
  depOneStopArrCityName_s2,
  depOneStopAirlineCode_s1,
  depOneStopAirlineCode_s2,
  depOneStopAirlineName_s1,
  depOneStopAirlineName_s2,
  depOneStopFlightNumber_s1,
  depOneStopFlightNumber_s2,
  depOneStopOperatedAirlineCode_s1,
  depOneStopOperatedAirlineCode_s2,
  depOneStopOperatedAirlineName_s1,
  depOneStopOperatedAirlineName_s2,
  depOneStopDepartureDateTime_s1,
  depOneStopDepartureDateTime_s2,
  depOneStoparriveDateTime_s1,
  depOneStoparriveDateTime_s2,
  depOneStopRBD_s1,
  depOneStopRBD_s2,
  depOneStopSeq_s1,
  depOneStopSeq_s2,
}) {
  const totalTime = timeDuration.slice(0, 2) + "hr " + timeDuration.slice(2) + "m";

  let navigate = useNavigate();

  const accesstripType = localStorage.access_;
  const valueTypeTrip = encryptStorage2.decryptString(accesstripType);

  const typeType_ = JSON.parse(valueTypeTrip);
  const typeTrip = typeType_.tripType;

  const { setAirline } = useDepartureSelectedContext();
  const { setTimeDuration } = useDepartureSelectedContext();
  const { setDepartureNameCity } = useDepartureSelectedContext();
  const { setArriveNameCity } = useDepartureSelectedContext();
  const { setDepartureCodeCity } = useDepartureSelectedContext();
  const { setArriveCodeCity } = useDepartureSelectedContext();
  const { setDepartureDateTime } = useDepartureSelectedContext();
  const { setArriveDateTime } = useDepartureSelectedContext();
  const { setSRC } = useDepartureSelectedContext();
  const {setOneStopCity}  = useDepartureSelectedContext();
  const { setIsSelected } = useDepartureSelectedContext();
  const { setOneStopCodeCity } = useDepartureSelectedContext();
  const { setDepartureDateTimeSeq1_1 } = useDepartureSelectedContext();
  const { setDepartureDateTimeSeq2_1 } = useDepartureSelectedContext();
  const { setArrivalDateTimeSeq1_1 } = useDepartureSelectedContext();
  const { setArrivalDateTimeSeq2_1 } = useDepartureSelectedContext();

  //new
  const { setDepOneStopDepCityCode_s1 } = useFinalOneStopDepartureContext();
  const { setDepOneStopDepCityCode_s2 } = useFinalOneStopDepartureContext();
  const { setDepOneStopDepCityName_s1 } = useFinalOneStopDepartureContext();
  const { setDepOneStopDepCityName_s2 } = useFinalOneStopDepartureContext();
  const { setDepOneStopArrCityCode_s1 } = useFinalOneStopDepartureContext();
  const { setDepOneStopArrCityCode_s2 } = useFinalOneStopDepartureContext();
  const { setDepOneStopArrCityName_s1 } = useFinalOneStopDepartureContext();
  const { setDepOneStopArrCityName_s2 } = useFinalOneStopDepartureContext();
  const { setDepOneStopAirlineCode_s1 } = useFinalOneStopDepartureContext();
  const { setDepOneStopAirlineCode_s2 } = useFinalOneStopDepartureContext();
  const { setDepOneStopAirlineName_s1 } = useFinalOneStopDepartureContext();
  const { setDepOneStopAirlineName_s2 } = useFinalOneStopDepartureContext();
  const { setDepOneStopFlightNumber_s1 } = useFinalOneStopDepartureContext();
  const { setDepOneStopFlightNumber_s2 } = useFinalOneStopDepartureContext();
  const { setDepOneStopOperatedAirlineCode_s1 } = useFinalOneStopDepartureContext();
  const { setDepOneStopOperatedAirlineCode_s2 } = useFinalOneStopDepartureContext();
  const { setDepOneStopOperatedAirlineName_s1 } = useFinalOneStopDepartureContext();
  const { setDepOneStopOperatedAirlineName_s2 } = useFinalOneStopDepartureContext();
  const { setDepOneStopDepartureDateTime_s1 } = useFinalOneStopDepartureContext();
  const { setDepOneStopDepartureDateTime_s2 } = useFinalOneStopDepartureContext();
  const { setDepOneStoparriveDateTime_s1 } = useFinalOneStopDepartureContext();
  const { setDepOneStoparriveDateTime_s2 } = useFinalOneStopDepartureContext();
  const { setDepOneStopRBD_s1 } = useFinalOneStopDepartureContext();
  const { setDepOneStopRBD_s2 } = useFinalOneStopDepartureContext();
  const { setDepOneStopSeq_s1 } = useFinalOneStopDepartureContext();
  const { setDepOneStopSeq_s2 } = useFinalOneStopDepartureContext();

  const handleDepartureDetail = () => {
    if (typeTrip === "R") {
      setAirline(airline);
      sessionStorage.setItem("airline",airline)
      setTimeDuration(timeDuration);
      sessionStorage.setItem("timeDuration",timeDuration)
      setDepartureNameCity(departureNameCity);
      setArriveNameCity(arriveNameCity);
      setDepartureCodeCity(departureCodeCity);
      setArriveCodeCity(arriveCodeCity);
      setDepartureDateTime(departureDateTime);
      setArriveDateTime(arriveDateTime);
      setSRC(src);
      sessionStorage.setItem("src",src)
      setOneStopCity(oneStopCity);
      setIsSelected(true);
      setOneStopCodeCity(oneStopCodeCity);
      setDepartureDateTimeSeq1_1(departureDateTimeSeq_1);
      setDepartureDateTimeSeq2_1(departureDateTimeSeq_2);
      setArrivalDateTimeSeq1_1(arrivalDateTimeSeq_1);
      setArrivalDateTimeSeq2_1(arrivalDateTimeSeq_2);

      //new
      setDepOneStopDepCityCode_s1(depOneStopDepCityCode_s1);
      setDepOneStopDepCityCode_s2(depOneStopDepCityCode_s2);
      setDepOneStopDepCityName_s1(depOneStopDepCityName_s1);
      setDepOneStopDepCityName_s2(depOneStopDepCityName_s2);
      setDepOneStopArrCityCode_s1(depOneStopArrCityCode_s1);
      setDepOneStopArrCityCode_s2(depOneStopArrCityCode_s2);
      setDepOneStopArrCityName_s1(depOneStopArrCityName_s1);
      setDepOneStopArrCityName_s2(depOneStopArrCityName_s2);
      setDepOneStopAirlineCode_s1(depOneStopAirlineCode_s1);
      setDepOneStopAirlineCode_s2(depOneStopAirlineCode_s2);
      setDepOneStopAirlineName_s1(depOneStopAirlineName_s1);
      setDepOneStopAirlineName_s2(depOneStopAirlineName_s2);
      setDepOneStopFlightNumber_s1(depOneStopFlightNumber_s1);
      setDepOneStopFlightNumber_s2(depOneStopFlightNumber_s2);
      setDepOneStopOperatedAirlineCode_s1(depOneStopOperatedAirlineCode_s1);
      setDepOneStopOperatedAirlineCode_s2(depOneStopOperatedAirlineCode_s2);
      setDepOneStopOperatedAirlineName_s1(depOneStopOperatedAirlineName_s1);
      setDepOneStopOperatedAirlineName_s2(depOneStopOperatedAirlineName_s2);
      setDepOneStopDepartureDateTime_s1(depOneStopDepartureDateTime_s1);
      setDepOneStopDepartureDateTime_s2(depOneStopDepartureDateTime_s2);
      setDepOneStoparriveDateTime_s1(depOneStoparriveDateTime_s1);
      setDepOneStoparriveDateTime_s2(depOneStoparriveDateTime_s2);
      setDepOneStopRBD_s1(depOneStopRBD_s1);
      setDepOneStopRBD_s2(depOneStopRBD_s2);
      setDepOneStopSeq_s1(depOneStopSeq_s1);
      setDepOneStopSeq_s2(depOneStopSeq_s2);

    } else {
      setAirline(airline);
      sessionStorage.setItem("airline",airline)
      setTimeDuration(timeDuration);
      sessionStorage.setItem("timeDuration",timeDuration)
      setDepartureNameCity(departureNameCity);
      setArriveNameCity(arriveNameCity);
      setDepartureCodeCity(departureCodeCity);
      setArriveCodeCity(arriveCodeCity);
      setDepartureDateTime(departureDateTime);
      setArriveDateTime(arriveDateTime);
      setSRC(src);
      sessionStorage.setItem("src",src)
      setOneStopCity(oneStopCity);
      setIsSelected(true);
      setOneStopCodeCity(oneStopCodeCity);
      setDepartureDateTimeSeq1_1(departureDateTimeSeq_1);
      setDepartureDateTimeSeq2_1(departureDateTimeSeq_2);
      setArrivalDateTimeSeq1_1(arrivalDateTimeSeq_1);
      setArrivalDateTimeSeq2_1(arrivalDateTimeSeq_2);

      //new
      setDepOneStopDepCityCode_s1(depOneStopDepCityCode_s1);
      setDepOneStopDepCityCode_s2(depOneStopDepCityCode_s2);
      setDepOneStopDepCityName_s1(depOneStopDepCityName_s1);
      setDepOneStopDepCityName_s2(depOneStopDepCityName_s2);
      setDepOneStopArrCityCode_s1(depOneStopArrCityCode_s1);
      setDepOneStopArrCityCode_s2(depOneStopArrCityCode_s2);
      setDepOneStopArrCityName_s1(depOneStopArrCityName_s1);
      setDepOneStopArrCityName_s2(depOneStopArrCityName_s2);
      setDepOneStopAirlineCode_s1(depOneStopAirlineCode_s1);
      setDepOneStopAirlineCode_s2(depOneStopAirlineCode_s2);
      setDepOneStopAirlineName_s1(depOneStopAirlineName_s1);
      setDepOneStopAirlineName_s2(depOneStopAirlineName_s2);
      setDepOneStopFlightNumber_s1(depOneStopFlightNumber_s1);
      setDepOneStopFlightNumber_s2(depOneStopFlightNumber_s2);
      setDepOneStopOperatedAirlineCode_s1(depOneStopOperatedAirlineCode_s1);
      setDepOneStopOperatedAirlineCode_s2(depOneStopOperatedAirlineCode_s2);
      setDepOneStopOperatedAirlineName_s1(depOneStopOperatedAirlineName_s1);
      setDepOneStopOperatedAirlineName_s2(depOneStopOperatedAirlineName_s2);
      setDepOneStopDepartureDateTime_s1(depOneStopDepartureDateTime_s1);
      setDepOneStopDepartureDateTime_s2(depOneStopDepartureDateTime_s2);
      setDepOneStoparriveDateTime_s1(depOneStoparriveDateTime_s1);
      setDepOneStoparriveDateTime_s2(depOneStoparriveDateTime_s2);
      setDepOneStopRBD_s1(depOneStopRBD_s1);
      setDepOneStopRBD_s2(depOneStopRBD_s2);
      setDepOneStopSeq_s1(depOneStopSeq_s1);
      setDepOneStopSeq_s2(depOneStopSeq_s2);
      navigate("/ContractInfo", { replace: true });
    }
  };

  return (
    <>
      <div className="my-4 p-2 border shadow-xl">
        <div className="flex justify-center items-center">
          <div className=" w-[20%] ml-4">
            <img className="w-100% " src={`https://ai-r-logo.azurewebsites.net/square/${src}.png`} alt="OneStop_Icon" />
            <p className="text-[#828282]">{airline}</p>
            <p className="text-[#828282]">Flight Number : {flightNumberSeq1}</p>
            <p className="font-semibold text-[#4E1311]">{totalTime}</p>
            <p className="font-semibold text-[#828282]">1 Stop</p>
          </div>

          <div className=" w-[70%] ">
            <div className="flex w-auto items-center">
              <div className="w-[100%] text-start">
                <div className="flex justify-start text-[#4E1311] font-semibold">
                  <p>{departureNameCity}</p>
                </div>
                <p className="text-[#828282]">{departureCodeCity}</p>
              </div>
              <div className="w-[100%] text-center">
                <p className="text-center">{oneStopCity}</p>
                <p className="text-xs text-center  text-[#828282]">1 Stop</p>
              </div>
              <div className="w-[100%] text-end">
                <div className="flex justify-end text-[#4E1311] font-semibold">
                  <p className="text-end">{arriveNameCity}</p>
                </div>
                <p className="text-end text-[#828282]">{arriveCodeCity}</p>
              </div>
            </div>

            <div className="my-2">
              <div className="flex items-center mx-2">
                <svg width="" height="" viewBox="0 0 206 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7" cy="5" r="4" fill="#FAA819" />
                  <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="198" cy="5" r="4" fill="#FAA819" />
                </svg>
                <svg width="" height="" viewBox="0 0 206 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7" cy="5" r="4" fill="#FAA819" />
                  <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="198" cy="5" r="4" fill="#FAA819" />
                </svg>
              </div>
              <div className="mt-2 flex w-auto items-center text-[#4E1311] font-semibold">
                <p className="w-[100%] text-start">{departureDateTime}</p>
                {/* <p className="w-[100%] text-center">{totalTime}</p> */}
                <p className="w-[100%] text-end">{arriveDateTime}</p>
              </div>
            </div>
          </div>

          <div className=" w-[20%] flex justify-center items-center">
            <button
              className="w-[70%] h-[50px] border-2 border-solid rounded-full bg-[#FAA819] hover:hover:border-indigo-600"
              onClick={() => handleDepartureDetail()}
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardOneStopFlightFilter;
