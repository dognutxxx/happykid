import React from "react";
import { useReturnSelectedContext } from "../../context/ReturnSelectedContext";
import { useFinalTwoStopReturnContext } from "../../context/FinalTwoStopReturnContext";
import { useNavigate } from "react-router-dom";

import { EncryptStorage } from "encrypt-storage";
const encryptStorage2 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function CardReturnTwoStopFlightFilter({
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
  returnTwoStopDepCityCode_s1,
  returnTwoStopDepCityCode_s2,
  returnTwoStopDepCityCode_s3,
  returnTwoStopDepCityName_s1,
  returnTwoStopDepCityName_s2,
  returnTwoStopDepCityName_s3,
  returnTwoStopArrCityCode_s1,
  returnTwoStopArrCityCode_s2,
  returnTwoStopArrCityCode_s3,
  returnTwoStopArrCityName_s1,
  returnTwoStopArrCityName_s2,
  returnTwoStopArrCityName_s3,
  returnTwoStopAirlineCode_s1,
  returnTwoStopAirlineCode_s2,
  returnTwoStopAirlineCode_s3,
  returnTwoStopAirlineName_s1,
  returnTwoStopAirlineName_s2,
  returnTwoStopAirlineName_s3,
  returnTwoStopFlightNumber_s1,
  returnTwoStopFlightNumber_s2,
  returnTwoStopFlightNumber_s3,
  returnTwoStopOperatedAirlineCode_s1,
  returnTwoStopOperatedAirlineCode_s2,
  returnTwoStopOperatedAirlineCode_s3,
  returnTwoStopOperatedAirlineName_s1,
  returnTwoStopOperatedAirlineName_s2,
  returnTwoStopOperatedAirlineName_s3,
  returnTwoStopDepartureDateTime_s1,
  returnTwoStopDepartureDateTime_s2,
  returnTwoStopDepartureDateTime_s3,
  returnTwoStoparriveDateTime_s1,
  returnTwoStoparriveDateTime_s2,
  returnTwoStoparriveDateTime_s3,
  returnTwoStopRBD_s1,
  returnTwoStopRBD_s2,
  returnTwoStopRBD_s3,
  returnTwoStopSeq_s1,
  returnTwoStopSeq_s2,
  returnTwoStopSeq_s3,
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
  const { setTwoStopCity2 } = useReturnSelectedContext();
  const { setOneStopCodeCity2 } = useReturnSelectedContext();
  const { setTwoStopCodeCity2 } = useReturnSelectedContext();
  const { setDepartureDateTimeSeq1_2 } = useReturnSelectedContext();
  const { setDepartureDateTimeSeq2_2 } = useReturnSelectedContext();
  const { setDepartureDateTimeSeq3_2 } = useReturnSelectedContext();
  const { setArrivalDateTimeSeq1_2 } = useReturnSelectedContext();
  const { setArrivalDateTimeSeq2_2 } = useReturnSelectedContext();
  const { setArrivalDateTimeSeq3_2 } = useReturnSelectedContext();
  

  //new
  const { setReturnTwoStopDepCityCode_s1 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopDepCityCode_s2 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopDepCityCode_s3 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopDepCityName_s1 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopDepCityName_s2 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopDepCityName_s3 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopArrCityCode_s1 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopArrCityCode_s2 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopArrCityCode_s3 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopArrCityName_s1 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopArrCityName_s2 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopArrCityName_s3 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopAirlineCode_s1 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopAirlineCode_s2 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopAirlineCode_s3 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopAirlineName_s1 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopAirlineName_s2 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopAirlineName_s3 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopFlightNumber_s1 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopFlightNumber_s2 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopFlightNumber_s3 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopOperatedAirlineCode_s1 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopOperatedAirlineCode_s2 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopOperatedAirlineCode_s3 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopOperatedAirlineName_s1 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopOperatedAirlineName_s2 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopOperatedAirlineName_s3 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopDepartureDateTime_s1 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopDepartureDateTime_s2 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopDepartureDateTime_s3 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStoparriveDateTime_s1 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStoparriveDateTime_s2 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStoparriveDateTime_s3 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopRBD_s1 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopRBD_s2 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopRBD_s3 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopSeq_s1 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopSeq_s2 } = useFinalTwoStopReturnContext();
  const { setReturnTwoStopSeq_s3 } = useFinalTwoStopReturnContext();

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
      setTwoStopCity2(twoStopCity);
      setOneStopCodeCity2(oneStopCodeCity);
      setTwoStopCodeCity2(twoStopCodeCity);
      setDepartureDateTimeSeq1_2(departureDateTimeSeq_1);
      setDepartureDateTimeSeq2_2(departureDateTimeSeq_2);
      setDepartureDateTimeSeq3_2(departureDateTimeSeq_3);
      setArrivalDateTimeSeq1_2(arrivalDateTimeSeq_1);
      setArrivalDateTimeSeq2_2(arrivalDateTimeSeq_2);
      setArrivalDateTimeSeq3_2(arrivalDateTimeSeq_3);

      //new
      setReturnTwoStopDepCityCode_s1(returnTwoStopDepCityCode_s1);
      setReturnTwoStopDepCityCode_s2(returnTwoStopDepCityCode_s2);
      setReturnTwoStopDepCityCode_s3(returnTwoStopDepCityCode_s3);
      setReturnTwoStopDepCityName_s1(returnTwoStopDepCityName_s1);
      setReturnTwoStopDepCityName_s2(returnTwoStopDepCityName_s2);
      setReturnTwoStopDepCityName_s3(returnTwoStopDepCityName_s3);
      setReturnTwoStopArrCityCode_s1(returnTwoStopArrCityCode_s1);
      setReturnTwoStopArrCityCode_s2(returnTwoStopArrCityCode_s2);
      setReturnTwoStopArrCityCode_s3(returnTwoStopArrCityCode_s3);
      setReturnTwoStopArrCityName_s1(returnTwoStopArrCityName_s1);
      setReturnTwoStopArrCityName_s2(returnTwoStopArrCityName_s2);
      setReturnTwoStopArrCityName_s3(returnTwoStopArrCityName_s3);
      setReturnTwoStopAirlineCode_s1(returnTwoStopAirlineCode_s1);
      setReturnTwoStopAirlineCode_s2(returnTwoStopAirlineCode_s2);
      setReturnTwoStopAirlineCode_s3(returnTwoStopAirlineCode_s3);
      setReturnTwoStopAirlineName_s1(returnTwoStopAirlineName_s1);
      setReturnTwoStopAirlineName_s2(returnTwoStopAirlineName_s2);
      setReturnTwoStopAirlineName_s3(returnTwoStopAirlineName_s3);
      setReturnTwoStopFlightNumber_s1(returnTwoStopFlightNumber_s1);
      setReturnTwoStopFlightNumber_s2(returnTwoStopFlightNumber_s2);
      setReturnTwoStopFlightNumber_s3(returnTwoStopFlightNumber_s3);
      setReturnTwoStopOperatedAirlineCode_s1(returnTwoStopOperatedAirlineCode_s1);
      setReturnTwoStopOperatedAirlineCode_s2(returnTwoStopOperatedAirlineCode_s2);
      setReturnTwoStopOperatedAirlineCode_s3(returnTwoStopOperatedAirlineCode_s3);
      setReturnTwoStopOperatedAirlineName_s1(returnTwoStopOperatedAirlineName_s1);
      setReturnTwoStopOperatedAirlineName_s2(returnTwoStopOperatedAirlineName_s2);
      setReturnTwoStopOperatedAirlineName_s3(returnTwoStopOperatedAirlineName_s3);
      setReturnTwoStopDepartureDateTime_s1(returnTwoStopDepartureDateTime_s1);
      setReturnTwoStopDepartureDateTime_s2(returnTwoStopDepartureDateTime_s2);
      setReturnTwoStopDepartureDateTime_s3(returnTwoStopDepartureDateTime_s3);
      setReturnTwoStoparriveDateTime_s1(returnTwoStoparriveDateTime_s1);
      setReturnTwoStoparriveDateTime_s2(returnTwoStoparriveDateTime_s2);
      setReturnTwoStoparriveDateTime_s3(returnTwoStoparriveDateTime_s3);
      setReturnTwoStopRBD_s1(returnTwoStopRBD_s1);
      setReturnTwoStopRBD_s2(returnTwoStopRBD_s2);
      setReturnTwoStopRBD_s3(returnTwoStopRBD_s3);
      setReturnTwoStopSeq_s1(returnTwoStopSeq_s1);
      setReturnTwoStopSeq_s2(returnTwoStopSeq_s2);
      setReturnTwoStopSeq_s3(returnTwoStopSeq_s3);

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
      setTwoStopCity2(twoStopCity);
      setOneStopCodeCity2(oneStopCodeCity);
      setTwoStopCodeCity2(twoStopCodeCity);
      setDepartureDateTimeSeq1_2(departureDateTimeSeq_1);
      setDepartureDateTimeSeq2_2(departureDateTimeSeq_2);
      setDepartureDateTimeSeq3_2(departureDateTimeSeq_3);
      setArrivalDateTimeSeq1_2(arrivalDateTimeSeq_1);
      setArrivalDateTimeSeq2_2(arrivalDateTimeSeq_2);
      setArrivalDateTimeSeq3_2(arrivalDateTimeSeq_3);

      //new
      setReturnTwoStopDepCityCode_s1(returnTwoStopDepCityCode_s1);
      setReturnTwoStopDepCityCode_s2(returnTwoStopDepCityCode_s2);
      setReturnTwoStopDepCityCode_s3(returnTwoStopDepCityCode_s3);
      setReturnTwoStopDepCityName_s1(returnTwoStopDepCityName_s1);
      setReturnTwoStopDepCityName_s2(returnTwoStopDepCityName_s2);
      setReturnTwoStopDepCityName_s3(returnTwoStopDepCityName_s3);
      setReturnTwoStopArrCityCode_s1(returnTwoStopArrCityCode_s1);
      setReturnTwoStopArrCityCode_s2(returnTwoStopArrCityCode_s2);
      setReturnTwoStopArrCityCode_s3(returnTwoStopArrCityCode_s3);
      setReturnTwoStopArrCityName_s1(returnTwoStopArrCityName_s1);
      setReturnTwoStopArrCityName_s2(returnTwoStopArrCityName_s2);
      setReturnTwoStopArrCityName_s3(returnTwoStopArrCityName_s3);
      setReturnTwoStopAirlineCode_s1(returnTwoStopAirlineCode_s1);
      setReturnTwoStopAirlineCode_s2(returnTwoStopAirlineCode_s2);
      setReturnTwoStopAirlineCode_s3(returnTwoStopAirlineCode_s3);
      setReturnTwoStopAirlineName_s1(returnTwoStopAirlineName_s1);
      setReturnTwoStopAirlineName_s2(returnTwoStopAirlineName_s2);
      setReturnTwoStopAirlineName_s3(returnTwoStopAirlineName_s3);
      setReturnTwoStopFlightNumber_s1(returnTwoStopFlightNumber_s1);
      setReturnTwoStopFlightNumber_s2(returnTwoStopFlightNumber_s2);
      setReturnTwoStopFlightNumber_s3(returnTwoStopFlightNumber_s3);
      setReturnTwoStopOperatedAirlineCode_s1(returnTwoStopOperatedAirlineCode_s1);
      setReturnTwoStopOperatedAirlineCode_s2(returnTwoStopOperatedAirlineCode_s2);
      setReturnTwoStopOperatedAirlineCode_s3(returnTwoStopOperatedAirlineCode_s3);
      setReturnTwoStopOperatedAirlineName_s1(returnTwoStopOperatedAirlineName_s1);
      setReturnTwoStopOperatedAirlineName_s2(returnTwoStopOperatedAirlineName_s2);
      setReturnTwoStopOperatedAirlineName_s3(returnTwoStopOperatedAirlineName_s3);
      setReturnTwoStopDepartureDateTime_s1(returnTwoStopDepartureDateTime_s1);
      setReturnTwoStopDepartureDateTime_s2(returnTwoStopDepartureDateTime_s2);
      setReturnTwoStopDepartureDateTime_s3(returnTwoStopDepartureDateTime_s3);
      setReturnTwoStoparriveDateTime_s1(returnTwoStoparriveDateTime_s1);
      setReturnTwoStoparriveDateTime_s2(returnTwoStoparriveDateTime_s2);
      setReturnTwoStoparriveDateTime_s3(returnTwoStoparriveDateTime_s3);
      setReturnTwoStopRBD_s1(returnTwoStopRBD_s1);
      setReturnTwoStopRBD_s2(returnTwoStopRBD_s2);
      setReturnTwoStopRBD_s3(returnTwoStopRBD_s3);
      setReturnTwoStopSeq_s1(returnTwoStopSeq_s1);
      setReturnTwoStopSeq_s2(returnTwoStopSeq_s2);
      setReturnTwoStopSeq_s3(returnTwoStopSeq_s3);
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
            <p className="text-[#828282]">Flight Number : {returnTwoStopFlightNumber_s1}</p>
            <p className="font-semibold text-[#4E1311]">{totalTime}</p>
            <p className="font-semibold text-[#828282]">2 Stop</p>
          </div>

          <div className="w-[70%] grid grid-cols-12">
            <div className="col-start-1 col-end-4">
              <div className="">{departureNameCity}</div>
              <div className="">{departureCodeCity}</div>
            </div>

    
            <div className="col-start-4 col-end-6 text-center">{oneStopCity}</div>
            <div className="col-start-8 col-end-10 text-center">{twoStopCity}</div>
      
            

            <div className="text-end col-start-11 col-end-13">
              <div className="">{arriveNameCity}</div>
              <div className="">{arriveCodeCity}</div>
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

export default CardReturnTwoStopFlightFilter;
