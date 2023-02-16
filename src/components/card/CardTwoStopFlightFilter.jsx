import React from "react";
import { useDepartureSelectedContext } from "../../context/DepartureSelectedContext";
import { useFinalTwoStopDepartureContext } from "../../context/FinalTwoStopDepartureContext";
import { useNavigate } from "react-router-dom";

import { EncryptStorage } from "encrypt-storage";
const encryptStorage2 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function CardDepartureTwoStopFlightFilter({
  src,
  airline,
  departureNameCity,
  oneStopCity,
  twoStopCity,
  oneStopCodeCity,
  twoStopCodeCity,
  departureCodeCity,
  departureDateTime,
  arriveNameCity,
  arriveCodeCity,
  arriveDateTime,
  timeDuration,
  departureDateTimeSeq_1,
  departureDateTimeSeq_2,
  departureDateTimeSeq_3,
  arrivalDateTimeSeq_1,
  arrivalDateTimeSeq_2,
  arrivalDateTimeSeq_3,
  flightNumberSeq1,
  flightNumberSeq2,
  flightNumberSeq3,
  operatedAirlineNameSeq1,
  operatedAirlineNameSeq2,
  operatedAirlineNameSeq3,
  operatedAirlineCodeSeq1,
  operatedAirlineCodeSeq2,
  operatedAirlineCodeSeq3,
  seqOneFlight,
  seqTwoFlight,
  seqThreeFlight,

  //new
  depTwoStopDepCityCode_s1,
  depTwoStopDepCityCode_s2,
  depTwoStopDepCityCode_s3,
  depTwoStopDepCityName_s1,
  depTwoStopDepCityName_s2,
  depTwoStopDepCityName_s3,
  depTwoStopArrCityCode_s1,
  depTwoStopArrCityCode_s2,
  depTwoStopArrCityCode_s3,
  depTwoStopArrCityName_s1,
  depTwoStopArrCityName_s2,
  depTwoStopArrCityName_s3,
  depTwoStopAirlineCode_s1,
  depTwoStopAirlineCode_s2,
  depTwoStopAirlineCode_s3,
  depTwoStopAirlineName_s1,
  depTwoStopAirlineName_s2,
  depTwoStopAirlineName_s3,
  depTwoStopFlightNumber_s1,
  depTwoStopFlightNumber_s2,
  depTwoStopFlightNumber_s3,
  depTwoStopOperatedAirlineCode_s1,
  depTwoStopOperatedAirlineCode_s2,
  depTwoStopOperatedAirlineCode_s3,
  depTwoStopOperatedAirlineName_s1,
  depTwoStopOperatedAirlineName_s2,
  depTwoStopOperatedAirlineName_s3,
  depTwoStopDepartureDateTime_s1,
  depTwoStopDepartureDateTime_s2,
  depTwoStopDepartureDateTime_s3,
  depTwoStoparriveDateTime_s1,
  depTwoStoparriveDateTime_s2,
  depTwoStoparriveDateTime_s3,
  depTwoStopRBD_s1,
  depTwoStopRBD_s2,
  depTwoStopRBD_s3,
  depTwoStopSeq_s1,
  depTwoStopSeq_s2,
  depTwoStopSeq_s3,
}) {
  // console.log("xxx",returnTwoStopDepCityCode_s1);
  // console.log("xxx",returnTwoStopDepCityCode_s2);
  // console.log();
  // console.log();
  // console.log();
  // console.log();
  // console.log();
  // console.log();
  // console.log();
  // console.log();
  // console.log();
  // console.log();
  // console.log();

  let navigate = useNavigate();
  const totalTime = timeDuration.slice(0, 2) + "hr " + timeDuration.slice(2) + "m";

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
  const { setTwoStopCity } = useDepartureSelectedContext();
  const { setOneStopCodeCity } = useDepartureSelectedContext();
  const { setTwoStopCodeCity } = useDepartureSelectedContext();
  const { setDepartureDateTimeSeq1_1 } = useDepartureSelectedContext();
  const { setDepartureDateTimeSeq2_1 } = useDepartureSelectedContext();
  const { setDepartureDateTimeSeq3_1 } = useDepartureSelectedContext();
  const { setArrivalDateTimeSeq1_1 } = useDepartureSelectedContext();
  const { setArrivalDateTimeSeq2_1 } = useDepartureSelectedContext();
  const { setArrivalDateTimeSeq3_1 } = useDepartureSelectedContext();
  

  //new
  const { setDepTwoStopDepCityCode_s1 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopDepCityCode_s2 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopDepCityCode_s3 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopDepCityName_s1 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopDepCityName_s2 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopDepCityName_s3 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopArrCityCode_s1 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopArrCityCode_s2 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopArrCityCode_s3 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopArrCityName_s1 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopArrCityName_s2 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopArrCityName_s3 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopAirlineCode_s1 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopAirlineCode_s2 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopAirlineCode_s3 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopAirlineName_s1 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopAirlineName_s2 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopAirlineName_s3 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopFlightNumber_s1 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopFlightNumber_s2 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopFlightNumber_s3 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopOperatedAirlineCode_s1 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopOperatedAirlineCode_s2 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopOperatedAirlineCode_s3 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopOperatedAirlineName_s1 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopOperatedAirlineName_s2 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopOperatedAirlineName_s3 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopDepartureDateTime_s1 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopDepartureDateTime_s2 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopDepartureDateTime_s3 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStoparriveDateTime_s1 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStoparriveDateTime_s2 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStoparriveDateTime_s3 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopRBD_s1 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopRBD_s2 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopRBD_s3 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopSeq_s1 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopSeq_s2 } = useFinalTwoStopDepartureContext();
  const { setDepTwoStopSeq_s3 } = useFinalTwoStopDepartureContext();

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
      setTwoStopCity(twoStopCity);
      setIsSelected(true);
      setOneStopCodeCity(oneStopCodeCity);
      setTwoStopCodeCity(twoStopCodeCity);
      setDepartureDateTimeSeq1_1(departureDateTimeSeq_1);
      setDepartureDateTimeSeq2_1(departureDateTimeSeq_2);
      setDepartureDateTimeSeq3_1(departureDateTimeSeq_3);
      setArrivalDateTimeSeq1_1(arrivalDateTimeSeq_1);
      setArrivalDateTimeSeq2_1(arrivalDateTimeSeq_2);
      setArrivalDateTimeSeq3_1(arrivalDateTimeSeq_3);

      //new
      setDepTwoStopDepCityCode_s1(depTwoStopDepCityCode_s1);
      setDepTwoStopDepCityCode_s2(depTwoStopDepCityCode_s2);
      setDepTwoStopDepCityCode_s3(depTwoStopDepCityCode_s3);
      setDepTwoStopDepCityName_s1(depTwoStopDepCityName_s1);
      setDepTwoStopDepCityName_s2(depTwoStopDepCityName_s2);
      setDepTwoStopDepCityName_s3(depTwoStopDepCityName_s3);
      setDepTwoStopArrCityCode_s1(depTwoStopArrCityCode_s1);
      setDepTwoStopArrCityCode_s2(depTwoStopArrCityCode_s2);
      setDepTwoStopArrCityCode_s3(depTwoStopArrCityCode_s3);
      setDepTwoStopArrCityName_s1(depTwoStopArrCityName_s1);
      setDepTwoStopArrCityName_s2(depTwoStopArrCityName_s2);
      setDepTwoStopArrCityName_s3(depTwoStopArrCityName_s3);
      setDepTwoStopAirlineCode_s1(depTwoStopAirlineCode_s1);
      setDepTwoStopAirlineCode_s2(depTwoStopAirlineCode_s2);
      setDepTwoStopAirlineCode_s3(depTwoStopAirlineCode_s3);
      setDepTwoStopAirlineName_s1(depTwoStopAirlineName_s1);
      setDepTwoStopAirlineName_s2(depTwoStopAirlineName_s2);
      setDepTwoStopAirlineName_s3(depTwoStopAirlineName_s3);
      setDepTwoStopFlightNumber_s1(depTwoStopFlightNumber_s1);
      setDepTwoStopFlightNumber_s2(depTwoStopFlightNumber_s2);
      setDepTwoStopFlightNumber_s3(depTwoStopFlightNumber_s3);
      setDepTwoStopOperatedAirlineCode_s1(depTwoStopOperatedAirlineCode_s1);
      setDepTwoStopOperatedAirlineCode_s2(depTwoStopOperatedAirlineCode_s2);
      setDepTwoStopOperatedAirlineCode_s3(depTwoStopOperatedAirlineCode_s3);
      setDepTwoStopOperatedAirlineName_s1(depTwoStopOperatedAirlineName_s1);
      setDepTwoStopOperatedAirlineName_s2(depTwoStopOperatedAirlineName_s2);
      setDepTwoStopOperatedAirlineName_s3(depTwoStopOperatedAirlineName_s3);
      setDepTwoStopDepartureDateTime_s1(depTwoStopDepartureDateTime_s1);
      setDepTwoStopDepartureDateTime_s2(depTwoStopDepartureDateTime_s2);
      setDepTwoStopDepartureDateTime_s3(depTwoStopDepartureDateTime_s3);
      setDepTwoStoparriveDateTime_s1(depTwoStoparriveDateTime_s1);
      setDepTwoStoparriveDateTime_s2(depTwoStoparriveDateTime_s2);
      setDepTwoStoparriveDateTime_s3(depTwoStoparriveDateTime_s3);
      setDepTwoStopRBD_s1(depTwoStopRBD_s1);
      setDepTwoStopRBD_s2(depTwoStopRBD_s2);
      setDepTwoStopRBD_s3(depTwoStopRBD_s3);
      setDepTwoStopSeq_s1(depTwoStopSeq_s1);
      setDepTwoStopSeq_s2(depTwoStopSeq_s2);
      setDepTwoStopSeq_s3(depTwoStopSeq_s3);

   
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
      setTwoStopCity(twoStopCity);
      setIsSelected(true);
      setOneStopCodeCity(oneStopCodeCity);
      setTwoStopCodeCity(twoStopCodeCity);
      setDepartureDateTimeSeq1_1(departureDateTimeSeq_1);
      setDepartureDateTimeSeq2_1(departureDateTimeSeq_2);
      setDepartureDateTimeSeq3_1(departureDateTimeSeq_3);
      setArrivalDateTimeSeq1_1(arrivalDateTimeSeq_1);
      setArrivalDateTimeSeq2_1(arrivalDateTimeSeq_2);
      setArrivalDateTimeSeq3_1(arrivalDateTimeSeq_3);

      //new
      setDepTwoStopDepCityCode_s1(depTwoStopDepCityCode_s1);
      setDepTwoStopDepCityCode_s2(depTwoStopDepCityCode_s2);
      setDepTwoStopDepCityCode_s3(depTwoStopDepCityCode_s3);
      setDepTwoStopDepCityName_s1(depTwoStopDepCityName_s1);
      setDepTwoStopDepCityName_s2(depTwoStopDepCityName_s2);
      setDepTwoStopDepCityName_s3(depTwoStopDepCityName_s3);
      setDepTwoStopArrCityCode_s1(depTwoStopArrCityCode_s1);
      setDepTwoStopArrCityCode_s2(depTwoStopArrCityCode_s2);
      setDepTwoStopArrCityCode_s3(depTwoStopArrCityCode_s3);
      setDepTwoStopArrCityName_s1(depTwoStopArrCityName_s1);
      setDepTwoStopArrCityName_s2(depTwoStopArrCityName_s2);
      setDepTwoStopArrCityName_s3(depTwoStopArrCityName_s3);
      setDepTwoStopAirlineCode_s1(depTwoStopAirlineCode_s1);
      setDepTwoStopAirlineCode_s2(depTwoStopAirlineCode_s2);
      setDepTwoStopAirlineCode_s3(depTwoStopAirlineCode_s3);
      setDepTwoStopAirlineName_s1(depTwoStopAirlineName_s1);
      setDepTwoStopAirlineName_s2(depTwoStopAirlineName_s2);
      setDepTwoStopAirlineName_s3(depTwoStopAirlineName_s3);
      setDepTwoStopFlightNumber_s1(depTwoStopFlightNumber_s1);
      setDepTwoStopFlightNumber_s2(depTwoStopFlightNumber_s2);
      setDepTwoStopFlightNumber_s3(depTwoStopFlightNumber_s3);
      setDepTwoStopOperatedAirlineCode_s1(depTwoStopOperatedAirlineCode_s1);
      setDepTwoStopOperatedAirlineCode_s2(depTwoStopOperatedAirlineCode_s2);
      setDepTwoStopOperatedAirlineCode_s3(depTwoStopOperatedAirlineCode_s3);
      setDepTwoStopOperatedAirlineName_s1(depTwoStopOperatedAirlineName_s1);
      setDepTwoStopOperatedAirlineName_s2(depTwoStopOperatedAirlineName_s2);
      setDepTwoStopOperatedAirlineName_s3(depTwoStopOperatedAirlineName_s3);
      setDepTwoStopDepartureDateTime_s1(depTwoStopDepartureDateTime_s1);
      setDepTwoStopDepartureDateTime_s2(depTwoStopDepartureDateTime_s2);
      setDepTwoStopDepartureDateTime_s3(depTwoStopDepartureDateTime_s3);
      setDepTwoStoparriveDateTime_s1(depTwoStoparriveDateTime_s1);
      setDepTwoStoparriveDateTime_s2(depTwoStoparriveDateTime_s2);
      setDepTwoStoparriveDateTime_s3(depTwoStoparriveDateTime_s3);
      setDepTwoStopRBD_s1(depTwoStopRBD_s1);
      setDepTwoStopRBD_s2(depTwoStopRBD_s2);
      setDepTwoStopRBD_s3(depTwoStopRBD_s3);
      setDepTwoStopSeq_s1(depTwoStopSeq_s1);
      setDepTwoStopSeq_s2(depTwoStopSeq_s2);
      setDepTwoStopSeq_s3(depTwoStopSeq_s3);
      navigate("/ContractInfo", { replace: true });
    }
  };

  return (
    <>
      <div className="my-4 p-2 border shadow-xl">
        <div className="flex justify-center items-center">
          <div className="w-[20%] ml-4">
            <img className="w-100% " src={`https://ai-r-logo.azurewebsites.net/square/${src}.png`} alt="Icon" />
            <p className="text-[#828282]">{airline}</p>
            <p className="text-[#828282]">Flight Number : {depTwoStopFlightNumber_s1}</p>
            <p className="font-semibold text-[#4E1311]">{totalTime}</p>
            <p className="font-semibold text-[#828282]">2 Stop</p>
          </div>

          <div className="w-[70%] grid grid-cols-12">
            <div className="col-start-1 col-end-4">
              <div className="text-[#4E1311] font-semibold">{departureNameCity}</div>
              <div className="text-[#828282]">{departureCodeCity}</div>
            </div>

    
            <div className="col-start-4 col-end-6 text-center">{oneStopCity}</div>
            <div className="col-start-8 col-end-10 text-center">{twoStopCity}</div>
      
            

            <div className="text-end col-start-11 col-end-13">
              <div className="text-[#4E1311] font-semibold">{arriveNameCity}</div>
              <div className="text-[#828282]">{arriveCodeCity}</div>
            </div>

            <div className="mb-2 col-start-5 col-end-9 text-xs text-center  text-[#828282]">2 Stop</div>

            <div className="col-start-1 col-end-5">
              <svg width="" height="" viewBox="0 0 206 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="5" r="4" fill="#FAA819" />
                <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="198" cy="5" r="4" fill="#FAA819" />
              </svg>
            </div>
            
            <div className="col-start-5 col-end-9">
              <svg width="" height="" viewBox="0 0 206 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="5" r="4" fill="#FAA819" />
                <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="198" cy="5" r="4" fill="#FAA819" />
              </svg>
            </div>
            <div className="col-start-9 col-end-13">
              <svg width="" height="" viewBox="0 0 206 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="5" r="4" fill="#FAA819" />
                <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="198" cy="5" r="4" fill="#FAA819" />
              </svg>
            </div>

            <div className="col-start-1 col-end-5 flex justify-between p-1 text-[#4E1311] font-semibold">
              <p>{departureDateTimeSeq_1}</p>
              <p>{arrivalDateTimeSeq_1}</p>
            </div>

            <div className="col-start-5 col-end-9 flex justify-between p-1 text-[#4E1311] font-semibold">
              <p>{departureDateTimeSeq_2}</p>
              <p>{arrivalDateTimeSeq_2}</p>
            </div>

            <div className="col-start-9 col-end-13 flex justify-between p-1 text-[#4E1311] font-semibold">
              <p>{departureDateTimeSeq_3}</p>
              <p>{arrivalDateTimeSeq_3}</p>
            </div>
          </div>

          <div className="w-[20%] flex justify-center items-center">
            <button
              className="w-[70%] h-[50px] border-2 border-solid rounded-full bg-[#FAA819] hover:border-indigo-600"
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

export default CardDepartureTwoStopFlightFilter;
