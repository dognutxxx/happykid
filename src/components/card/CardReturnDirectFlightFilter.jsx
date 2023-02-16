import React from "react";
import { useReturnSelectedContext } from "../../context/ReturnSelectedContext";
import { useFinalDirectReturnContext } from "../../context/FinalDirectReturnContext";
import { useNavigate } from "react-router-dom";

import { EncryptStorage } from "encrypt-storage";
const encryptStorage2 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function CardReturnDirectFlightFilter({
  airline,
  timeDuration,
  departureNameCity,
  arriveNameCity,
  departureCodeCity,
  arriveCodeCity,
  departureDateTime,
  arriveDateTime,
  src,

  //new
  returnDirectDepCityCode_s1,
  returnDirectDepCityName_s1,
  returnDirectArrCityCode_s1,
  returnDirectArrCityName_s1,
  returnDirectAirlineCode_s1,
  returnDirectAirlineName_s1,
  returnDirectFlightNumber_s1,
  returnDirectOperatedAirlineCode_s1,
  returnDirectOperatedAirlineName_s1,
  returnDirectDepartureDateTime_s1,
  returnDirectArriveDateTime_s1,
  returnDirectRBD_s1,
  returnDirectSeq_s1,
}) {
  let navigate = useNavigate();

  const accesstripType = localStorage.access_;
  const valueTypeTrip = encryptStorage2.decryptString(accesstripType);

  const typeType_ = JSON.parse(valueTypeTrip);
  const typeTrip = typeType_.tripType;

  const totalTime = timeDuration.slice(0, 2) + "hr " + timeDuration.slice(2) + "m";

  const { setAirline2 } = useReturnSelectedContext();
  const { setTimeDuration2 } = useReturnSelectedContext();
  const { setDepartureNameCity2 } = useReturnSelectedContext();
  const { setArriveNameCity2 } = useReturnSelectedContext();
  const { setDepartureCodeCity2 } = useReturnSelectedContext();
  const { setArriveCodeCity2 } = useReturnSelectedContext();
  const { setDepartureDateTime2 } = useReturnSelectedContext();
  const { setArriveDateTime2 } = useReturnSelectedContext();
  const { setSRC2 } = useReturnSelectedContext();
  const { setIsSelected2 } = useReturnSelectedContext();

  //new
  const { setReturnDirectDepCityCode_s1 } = useFinalDirectReturnContext();
  const { setReturnDirectDepCityName_s1 } = useFinalDirectReturnContext();
  const { setReturnDirectArrCityCode_s1 } = useFinalDirectReturnContext();
  const { setReturnDirectArrCityName_s1 } = useFinalDirectReturnContext();
  const { setReturnDirectAirlineCode_s1 } = useFinalDirectReturnContext();
  const { setReturnDirectAirlineName_s1 } = useFinalDirectReturnContext();
  const { setReturnDirectFlightNumber_s1 } = useFinalDirectReturnContext();
  const { setReturnDirectOperatedAirlineCode_s1 } = useFinalDirectReturnContext();
  const { setReturnDirectOperatedAirlineName_s1 } = useFinalDirectReturnContext();
  const { setReturnDirectDepartureDateTime_s1 } = useFinalDirectReturnContext();
  const { setReturnDirectArriveDateTime_s1 } = useFinalDirectReturnContext();
  const { setReturnDirectRBD_s1 } = useFinalDirectReturnContext();
  const { setReturnDirectSeq_s1 } = useFinalDirectReturnContext();

  const handleDepartureDetail = () => {
    if (typeTrip === "R") {
      setAirline2(airline);
      sessionStorage.setItem("airline2",airline)

      setTimeDuration2(timeDuration);
      sessionStorage.setItem("timeDuration2",timeDuration)

      setDepartureNameCity2(departureNameCity);
      sessionStorage.setItem("departureNameCity2",departureNameCity)

      setArriveNameCity2(arriveNameCity);
      sessionStorage.setItem("arriveNameCity2",arriveNameCity)

      setDepartureCodeCity2(departureCodeCity);
      sessionStorage.setItem("departureCodeCity2",departureCodeCity)

      setArriveCodeCity2(arriveCodeCity);
      sessionStorage.setItem("arriveCodeCity2",arriveCodeCity)

      setDepartureDateTime2(departureDateTime);
      sessionStorage.setItem("departureDateTime2",departureDateTime)

      setArriveDateTime2(arriveDateTime);
      sessionStorage.setItem("arriveDateTime2",arriveDateTime)

      setSRC2(src);
      sessionStorage.setItem("src2",src)
      setIsSelected2(true);

      setReturnDirectDepCityCode_s1(returnDirectDepCityCode_s1);
      setReturnDirectDepCityName_s1(returnDirectDepCityName_s1);
      setReturnDirectArrCityCode_s1(returnDirectArrCityCode_s1);
      setReturnDirectArrCityName_s1(returnDirectArrCityName_s1);
      setReturnDirectAirlineCode_s1(returnDirectAirlineCode_s1);
      sessionStorage.setItem("returnDirectAirlineCode_s1",returnDirectAirlineCode_s1)
      setReturnDirectAirlineName_s1(returnDirectAirlineName_s1);
      setReturnDirectFlightNumber_s1(returnDirectFlightNumber_s1);
      sessionStorage.setItem("returnDirectFlightNumber_s1",returnDirectFlightNumber_s1)
      setReturnDirectOperatedAirlineCode_s1(returnDirectOperatedAirlineCode_s1);
      setReturnDirectOperatedAirlineName_s1(returnDirectOperatedAirlineName_s1);
      setReturnDirectDepartureDateTime_s1(returnDirectDepartureDateTime_s1);
      setReturnDirectArriveDateTime_s1(returnDirectArriveDateTime_s1);
      setReturnDirectRBD_s1(returnDirectRBD_s1);
      setReturnDirectSeq_s1(returnDirectSeq_s1);
      navigate("/ContractInfo", { replace: true });
    } else {
      setAirline2(airline);
      setTimeDuration2(timeDuration);
      sessionStorage.setItem("timeDuration2",timeDuration2)
      setDepartureNameCity2(departureNameCity);
      setArriveNameCity2(arriveNameCity);
      setDepartureCodeCity2(departureCodeCity);
      setArriveCodeCity2(arriveCodeCity);
      setDepartureDateTime2(departureDateTime);
      setArriveDateTime2(arriveDateTime);
      setSRC2(src);
      sessionStorage.setItem("src2",src)
      setIsSelected2(true);

      //new
      setReturnDirectDepCityCode_s1(returnDirectDepCityCode_s1);
      setReturnDirectDepCityName_s1(returnDirectDepCityName_s1);
      setReturnDirectArrCityCode_s1(returnDirectArrCityCode_s1);
      setReturnDirectArrCityName_s1(returnDirectArrCityName_s1);
      setReturnDirectAirlineCode_s1(returnDirectAirlineCode_s1);
      setReturnDirectAirlineName_s1(returnDirectAirlineName_s1);
      setReturnDirectFlightNumber_s1(returnDirectFlightNumber_s1);
      setReturnDirectOperatedAirlineCode_s1(returnDirectOperatedAirlineCode_s1);
      setReturnDirectOperatedAirlineName_s1(returnDirectOperatedAirlineName_s1);
      setReturnDirectDepartureDateTime_s1(returnDirectDepartureDateTime_s1);
      setReturnDirectArriveDateTime_s1(returnDirectArriveDateTime_s1);
      setReturnDirectRBD_s1(returnDirectRBD_s1);
      setReturnDirectSeq_s1(returnDirectSeq_s1);
      navigate("/ContractInfo", { replace: true });
    }
  };

  return (
    <div className="my-4 p-2 border shadow-xl">
      <div className="flex justify-center items-center">
        <div className="border-red-600 w-[20%] ml-4">
          <img className="w-100% " src={`https://ai-r-logo.azurewebsites.net/square/${src}.png`} alt="Icon" />
          <p className="text-[#828282]">{airline}</p>
          <p className="text-[#828282]">Flight Number : {returnDirectFlightNumber_s1}</p>
          <p className="font-semibold text-[#4E1311]">{totalTime}</p>
          <p className="font-semibold text-[#828282]">Direct</p>
        </div>

        <div className="w-[70%]">
          <div className="flex w-auto justify-between">
            <div className="w-[100%]">
              <div className="flex justify-start text-[#4E1311] font-semibold">
                <p>{departureNameCity}</p>
              </div>
              <p className="text-[#828282]">{departureCodeCity}</p>
            </div>
            <p className="w-[100%] text-center">Direct</p>
            <div className="w-[100%]">
              <div className="flex justify-end text-[#4E1311] font-semibold">
                <p className="text-end">{arriveNameCity}</p>
              </div>
              <p className="text-end text-[#828282]">{arriveCodeCity}</p>
            </div>
          </div>

          <div className="my-2">
            <div className="flex items-center">
              <svg width="" height="" viewBox="0 0 206 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="5" r="2" fill="#FAA819" />
                <path d="M9 5H196" stroke="#FAA819" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="198" cy="5" r="2" fill="#FAA819" />
              </svg>
            </div>
            <div className="flex w-auto text-[#4E1311] font-semibold">
              <p className="w-[100%] text-start">{departureDateTime}</p>
              <p className="w-[100%] text-end">{arriveDateTime}</p>
            </div>
          </div>
        </div>

        <div className="w-[20%] flex justify-center items-center">
          <button className="mx-4 w-[100%] h-[50px] border rounded-full bg-[#FAA819] hover:shadow-lg" onClick={() => handleDepartureDetail()}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardReturnDirectFlightFilter;
