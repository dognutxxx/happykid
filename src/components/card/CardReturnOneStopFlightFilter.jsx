import React from "react";
import { useReturnSelectedContext } from "../../context/ReturnSelectedContext";
import { useFinalOneStopReturnContext } from "../../context/FinalOneStopReturnContext";
import { useNavigate } from "react-router-dom";

import { EncryptStorage } from "encrypt-storage";
const encryptStorage2 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function CardReturnOneStopFlightFilter({
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
  returnOneStopDepCityCode_s1,
  returnOneStopDepCityCode_s2,
  returnOneStopDepCityName_s1,
  returnOneStopDepCityName_s2,
  returnOneStopArrCityCode_s1,
  returnOneStopArrCityCode_s2,
  returnOneStopArrCityName_s1,
  returnOneStopArrCityName_s2,
  returnOneStopAirlineCode_s1,
  returnOneStopAirlineCode_s2,
  returnOneStopAirlineName_s1,
  returnOneStopAirlineName_s2,
  returnOneStopFlightNumber_s1,
  returnOneStopFlightNumber_s2,
  returnOneStopOperatedAirlineCode_s1,
  returnOneStopOperatedAirlineCode_s2,
  returnOneStopOperatedAirlineName_s1,
  returnOneStopOperatedAirlineName_s2,
  returnOneStopDepartureDateTime_s1,
  returnOneStopDepartureDateTime_s2,
  returnOneStoparriveDateTime_s1,
  returnOneStoparriveDateTime_s2,
  returnOneStopRBD_s1,
  returnOneStopRBD_s2,
  returnOneStopSeq_s1,
  returnOneStopSeq_s2,
}) {
  // console.log("xxx",returnOneStopDepCityCode_s1);
  // console.log("xxx",returnOneStopDepCityCode_s2);
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

  const { setAirline2 } = useReturnSelectedContext();
  const { setTimeDuration2 } = useReturnSelectedContext();
  const { setDepartureNameCity2 } = useReturnSelectedContext();
  const { setArriveNameCity2 } = useReturnSelectedContext();
  const { setDepartureCodeCity2 } = useReturnSelectedContext();
  const { setArriveCodeCity2 } = useReturnSelectedContext();
  const { setDepartureDateTime2 } = useReturnSelectedContext();
  const { setArriveDateTime2 } = useReturnSelectedContext();
  const { setSRC2 } = useReturnSelectedContext();
  const {setOneStopCity2}  = useReturnSelectedContext();
  const { setOneStopCodeCity2 } = useReturnSelectedContext();
  const { setDepartureDateTimeSeq1_2 } = useReturnSelectedContext();
  const { setDepartureDateTimeSeq2_2 } = useReturnSelectedContext();
  const { setArrivalDateTimeSeq1_2 } = useReturnSelectedContext();
  const { setArrivalDateTimeSeq2_2 } = useReturnSelectedContext();



  //new
  const { setReturnOneStopDepCityCode_s1 } = useFinalOneStopReturnContext();
  const { setReturnOneStopDepCityCode_s2 } = useFinalOneStopReturnContext();
  const { setReturnOneStopDepCityName_s1 } = useFinalOneStopReturnContext();
  const { setReturnOneStopDepCityName_s2 } = useFinalOneStopReturnContext();
  const { setReturnOneStopArrCityCode_s1 } = useFinalOneStopReturnContext();
  const { setReturnOneStopArrCityCode_s2 } = useFinalOneStopReturnContext();
  const { setReturnOneStopArrCityName_s1 } = useFinalOneStopReturnContext();
  const { setReturnOneStopArrCityName_s2 } = useFinalOneStopReturnContext();
  const { setReturnOneStopAirlineCode_s1 } = useFinalOneStopReturnContext();
  const { setReturnOneStopAirlineCode_s2 } = useFinalOneStopReturnContext();
  const { setReturnOneStopAirlineName_s1 } = useFinalOneStopReturnContext();
  const { setReturnOneStopAirlineName_s2 } = useFinalOneStopReturnContext();
  const { setReturnOneStopFlightNumber_s1 } = useFinalOneStopReturnContext();
  const { setReturnOneStopFlightNumber_s2 } = useFinalOneStopReturnContext();
  const { setReturnOneStopOperatedAirlineCode_s1 } = useFinalOneStopReturnContext();
  const { setReturnOneStopOperatedAirlineCode_s2 } = useFinalOneStopReturnContext();
  const { setReturnOneStopOperatedAirlineName_s1 } = useFinalOneStopReturnContext();
  const { setReturnOneStopOperatedAirlineName_s2 } = useFinalOneStopReturnContext();
  const { setReturnOneStopDepartureDateTime_s1 } = useFinalOneStopReturnContext();
  const { setReturnOneStopDepartureDateTime_s2 } = useFinalOneStopReturnContext();
  const { setReturnOneStoparriveDateTime_s1 } = useFinalOneStopReturnContext();
  const { setReturnOneStoparriveDateTime_s2 } = useFinalOneStopReturnContext();
  const { setReturnOneStopRBD_s1 } = useFinalOneStopReturnContext();
  const { setReturnOneStopRBD_s2 } = useFinalOneStopReturnContext();
  const { setReturnOneStopSeq_s1 } = useFinalOneStopReturnContext();
  const { setReturnOneStopSeq_s2 } = useFinalOneStopReturnContext();

  const handleDepartureDetail = () => {
    if (typeTrip === "R") {
      setAirline2(airline);
      sessionStorage.setItem("airline2",airline)
      setTimeDuration2(timeDuration);
      sessionStorage.setItem("timeDuration2",timeDuration)
      setDepartureNameCity2(departureNameCity);
      setArriveNameCity2(arriveNameCity);
      setDepartureCodeCity2(departureCodeCity);
      setArriveCodeCity2(arriveCodeCity);
      setDepartureDateTime2(departureDateTime);
      setArriveDateTime2(arriveDateTime);
      setSRC2(src);
      sessionStorage.setItem("src2",src)
      setOneStopCity2(oneStopCity);
      setOneStopCodeCity2(oneStopCodeCity);
      setDepartureDateTimeSeq1_2(departureDateTimeSeq_1);
      setDepartureDateTimeSeq2_2(departureDateTimeSeq_2);
      setArrivalDateTimeSeq1_2(arrivalDateTimeSeq_1);
      setArrivalDateTimeSeq2_2(arrivalDateTimeSeq_2);
      

      //new
      setReturnOneStopDepCityCode_s1(returnOneStopDepCityCode_s1);
      setReturnOneStopDepCityCode_s2(returnOneStopDepCityCode_s2);
      setReturnOneStopDepCityName_s1(returnOneStopDepCityName_s1);
      setReturnOneStopDepCityName_s2(returnOneStopDepCityName_s2);
      setReturnOneStopArrCityCode_s1(returnOneStopArrCityCode_s1);
      setReturnOneStopArrCityCode_s2(returnOneStopArrCityCode_s2);
      setReturnOneStopArrCityName_s1(returnOneStopArrCityName_s1);
      setReturnOneStopArrCityName_s2(returnOneStopArrCityName_s2);
      setReturnOneStopAirlineCode_s1(returnOneStopAirlineCode_s1);
      setReturnOneStopAirlineCode_s2(returnOneStopAirlineCode_s2);
      setReturnOneStopAirlineName_s1(returnOneStopAirlineName_s1);
      setReturnOneStopAirlineName_s2(returnOneStopAirlineName_s2);
      setReturnOneStopFlightNumber_s1(returnOneStopFlightNumber_s1);
      setReturnOneStopFlightNumber_s2(returnOneStopFlightNumber_s2);
      setReturnOneStopOperatedAirlineCode_s1(returnOneStopOperatedAirlineCode_s1);
      setReturnOneStopOperatedAirlineCode_s2(returnOneStopOperatedAirlineCode_s2);
      setReturnOneStopOperatedAirlineName_s1(returnOneStopOperatedAirlineName_s1);
      setReturnOneStopOperatedAirlineName_s2(returnOneStopOperatedAirlineName_s2);
      setReturnOneStopDepartureDateTime_s1(returnOneStopDepartureDateTime_s1);
      setReturnOneStopDepartureDateTime_s2(returnOneStopDepartureDateTime_s2);
      setReturnOneStoparriveDateTime_s1(returnOneStoparriveDateTime_s1);
      setReturnOneStoparriveDateTime_s2(returnOneStoparriveDateTime_s2);
      setReturnOneStopRBD_s1(returnOneStopRBD_s1);
      setReturnOneStopRBD_s2(returnOneStopRBD_s2);
      setReturnOneStopSeq_s1(returnOneStopSeq_s1);
      setReturnOneStopSeq_s2(returnOneStopSeq_s2);

      navigate("/ContractInfo", { replace: true });
    } else {
      setAirline2(airline);
      sessionStorage.setItem("airline2",airline)
      setTimeDuration2(timeDuration);
      sessionStorage.setItem("timeDuration2",timeDuration)
      setDepartureNameCity2(departureNameCity);
      setArriveNameCity2(arriveNameCity);
      setDepartureCodeCity2(departureCodeCity);
      setArriveCodeCity2(arriveCodeCity);
      setDepartureDateTime2(departureDateTime);
      setArriveDateTime2(arriveDateTime);
      setSRC2(src);
      sessionStorage.setItem("src2",src)
      setOneStopCity2(oneStopCity);
      setOneStopCodeCity2(oneStopCodeCity);
      setDepartureDateTimeSeq1_2(departureDateTimeSeq_1);
      setDepartureDateTimeSeq2_2(departureDateTimeSeq_2);
      setArrivalDateTimeSeq1_2(arrivalDateTimeSeq_1);
      setArrivalDateTimeSeq2_2(arrivalDateTimeSeq_2);

      //new
      setReturnOneStopDepCityCode_s1(returnOneStopDepCityCode_s1);
      setReturnOneStopDepCityCode_s2(returnOneStopDepCityCode_s2);
      setReturnOneStopDepCityName_s1(returnOneStopDepCityName_s1);
      setReturnOneStopDepCityName_s2(returnOneStopDepCityName_s2);
      setReturnOneStopArrCityCode_s1(returnOneStopArrCityCode_s1);
      setReturnOneStopArrCityCode_s2(returnOneStopArrCityCode_s2);
      setReturnOneStopArrCityName_s1(returnOneStopArrCityName_s1);
      setReturnOneStopArrCityName_s2(returnOneStopArrCityName_s2);
      setReturnOneStopAirlineCode_s1(returnOneStopAirlineCode_s1);
      setReturnOneStopAirlineCode_s2(returnOneStopAirlineCode_s2);
      setReturnOneStopAirlineName_s1(returnOneStopAirlineName_s1);
      setReturnOneStopAirlineName_s2(returnOneStopAirlineName_s2);
      setReturnOneStopFlightNumber_s1(returnOneStopFlightNumber_s1);
      setReturnOneStopFlightNumber_s2(returnOneStopFlightNumber_s2);
      setReturnOneStopOperatedAirlineCode_s1(returnOneStopOperatedAirlineCode_s1);
      setReturnOneStopOperatedAirlineCode_s2(returnOneStopOperatedAirlineCode_s2);
      setReturnOneStopOperatedAirlineName_s1(returnOneStopOperatedAirlineName_s1);
      setReturnOneStopOperatedAirlineName_s2(returnOneStopOperatedAirlineName_s2);
      setReturnOneStopDepartureDateTime_s1(returnOneStopDepartureDateTime_s1);
      setReturnOneStopDepartureDateTime_s2(returnOneStopDepartureDateTime_s2);
      setReturnOneStoparriveDateTime_s1(returnOneStoparriveDateTime_s1);
      setReturnOneStoparriveDateTime_s2(returnOneStoparriveDateTime_s2);
      setReturnOneStopRBD_s1(returnOneStopRBD_s1);
      setReturnOneStopRBD_s2(returnOneStopRBD_s2);
      setReturnOneStopSeq_s1(returnOneStopSeq_s1);
      setReturnOneStopSeq_s2(returnOneStopSeq_s2);
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
            <p className="text-[#828282]">Flight Number : {returnOneStopFlightNumber_s1}</p>
            <p className="font-semibold text-[#4E1311]">{totalTime}</p>
            <p className="font-semibold text-[#828282]">1 Stop</p>
          </div>

          <div className="w-[70%]">
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
                {/* <img className="w-[50%] mx-2" src={`src/assets/img/lineDuration.png`} alt="Icon" />
                                <img className="w-[50%] mx-2" src={`src/assets/img/lineDuration.png`} alt="Icon" /> */}
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
                <p className="w-[100%] text-start p-1">{departureDateTimeSeq_1}</p>
                <p className="w-[100%] text-end p-1">{arrivalDateTimeSeq_1}</p>
                {/* <p className="w-[100%] text-center">{totalTime}</p> */}
                <p className="w-[100%] text-start p-1">{departureDateTimeSeq_2}</p>
                <p className="w-[100%] text-end p-1">{arrivalDateTimeSeq_2}</p>
              </div>
            </div>
          </div>

          <div className="w-[20%] flex justify-center items-center">
            <button
              className="w-[70%] h-[50px] border rounded-full bg-[#FAA819] hover:shadow-lg"
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

export default CardReturnOneStopFlightFilter;
