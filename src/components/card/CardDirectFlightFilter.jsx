import React from "react";
import { useDepartureSelectedContext } from "../../context/DepartureSelectedContext";
import { useFinalDirectDepartureContext } from "../../context/FinalDirectDepartureContext";
import { EncryptStorage } from "encrypt-storage";
const encryptStorage2 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

import { useNavigate } from "react-router-dom";

function DirectFlightFilter({
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
  depDirectDepCityCode_s1,
  depDirectDepCityName_s1,
  depDirectArrCityCode_s1,
  depDirectArrCityName_s1,
  depDirectAirlineCode_s1,
  depDirectAirlineName_s1,
  depDirectFlightNumber_s1,
  depDirectOperatedAirlineCode_s1,
  depDirectOperatedAirlineName_s1,
  depDirectDepartureDateTime_s1,
  depDirectArriveDateTime_s1,
  depDirectRBD_s1,
  depDirectSeq_s1,
}) {

  // console.log("1",depDirectDepCityCode_s1);
  // console.log("2",depDirectDepCityName_s1);
  // console.log("3",depDirectArrCityCode_s1);
  // console.log("4",depDirectArrCityName_s1);
  // console.log("5",depDirectAirlineCode_s1);
  // console.log("6",depDirectAirlineName_s1);
  // console.log("7",depDirectFlightNumber_s1);
  // console.log("8",depDirectOperatedAirlineCode_s1);
  // console.log("9",depDirectDepartureDateTime_s1);
  // console.log("10",depDirectOperatedAirlineName_s1);
  // console.log("11",depDirectArriveDateTime_s1);
  // console.log("12",depDirectRBD_s1);
  // console.log("13",depDirectSeq_s1);

  let navigate = useNavigate();

  const accesstripType = localStorage.access_;
  const valueTypeTrip = encryptStorage2.decryptString(accesstripType);

  const typeType_ = JSON.parse(valueTypeTrip);
  const typeTrip = typeType_.tripType;

  const totalTime =
    timeDuration.slice(0, 2) + "hr " + timeDuration.slice(2) + "m";

  const { setAirline } = useDepartureSelectedContext();
  const { setTimeDuration } = useDepartureSelectedContext();
  const { setDepartureNameCity } = useDepartureSelectedContext();
  const { setArriveNameCity } = useDepartureSelectedContext();
  const { setDepartureCodeCity } = useDepartureSelectedContext();
  const { setArriveCodeCity } = useDepartureSelectedContext();
  const { setDepartureDateTime } = useDepartureSelectedContext();
  const { setArriveDateTime } = useDepartureSelectedContext();
  const { setSRC } = useDepartureSelectedContext();
  const { setIsSelected } = useDepartureSelectedContext();

  //new
  const { setDepDirectDepCityCode_s1 } = useFinalDirectDepartureContext();
  const { setDepDirectDepCityName_s1 } = useFinalDirectDepartureContext();
  const { setDepDirectArrCityCode_s1 } = useFinalDirectDepartureContext();
  const { setDepDirectArrCityName_s1 } = useFinalDirectDepartureContext();
  const { setDepDirectAirlineCode_s1 } = useFinalDirectDepartureContext();
  const { setDepDirectAirlineName_s1 } = useFinalDirectDepartureContext();
  const { setDepDirectFlightNumber_s1 } = useFinalDirectDepartureContext();
  const { setDepDirectOperatedAirlineCode_s1 } =
    useFinalDirectDepartureContext();
  const { setDepDirectOperatedAirlineName_s1 } =
    useFinalDirectDepartureContext();
  const { setDepDirectDepartureDateTime_s1 } = useFinalDirectDepartureContext();
  const { setDepDirectArriveDateTime_s1 } = useFinalDirectDepartureContext();
  const { setDepDirectRBD_s1 } = useFinalDirectDepartureContext();
  const { setDepDirectSeq_s1 } = useFinalDirectDepartureContext();

  const handleDepartureDetail = () => {
    if (typeTrip === "R") {
      setAirline(airline);
      setTimeDuration(timeDuration);
      setDepartureNameCity(departureNameCity);
      setArriveNameCity(arriveNameCity);
      setDepartureCodeCity(departureCodeCity);
      setArriveCodeCity(arriveCodeCity);
      setDepartureDateTime(departureDateTime);
      setArriveDateTime(arriveDateTime);
      setSRC(src);
      setIsSelected(true);

      //new
      setDepDirectDepCityCode_s1(depDirectDepCityCode_s1);
      setDepDirectDepCityName_s1(depDirectDepCityName_s1);
      setDepDirectArrCityCode_s1(depDirectArrCityCode_s1);
      setDepDirectArrCityName_s1(depDirectArrCityName_s1);
      setDepDirectAirlineCode_s1(depDirectAirlineCode_s1);
      setDepDirectAirlineName_s1(depDirectAirlineName_s1);
      setDepDirectFlightNumber_s1(depDirectFlightNumber_s1);
      setDepDirectOperatedAirlineCode_s1(depDirectOperatedAirlineCode_s1);
      setDepDirectOperatedAirlineName_s1(depDirectOperatedAirlineName_s1);
      setDepDirectDepartureDateTime_s1(depDirectDepartureDateTime_s1);
      setDepDirectArriveDateTime_s1(depDirectArriveDateTime_s1);
      setDepDirectRBD_s1(depDirectRBD_s1);
      setDepDirectSeq_s1(depDirectSeq_s1);
    } else {
      setAirline(airline);
      setTimeDuration(timeDuration);
      setDepartureNameCity(departureNameCity);
      setArriveNameCity(arriveNameCity);
      setDepartureCodeCity(departureCodeCity);
      setArriveCodeCity(arriveCodeCity);
      setDepartureDateTime(departureDateTime);
      setArriveDateTime(arriveDateTime);
      setSRC(src);
      setIsSelected(true);

      //new
      setDepDirectDepCityCode_s1(depDirectDepCityCode_s1);
      setDepDirectDepCityName_s1(depDirectDepCityName_s1);
      setDepDirectArrCityCode_s1(depDirectArrCityCode_s1);
      setDepDirectArrCityName_s1(depDirectArrCityName_s1);
      setDepDirectAirlineCode_s1(depDirectAirlineCode_s1);
      setDepDirectAirlineName_s1(depDirectAirlineName_s1);
      setDepDirectFlightNumber_s1(depDirectFlightNumber_s1);
      setDepDirectOperatedAirlineCode_s1(depDirectOperatedAirlineCode_s1);
      setDepDirectOperatedAirlineName_s1(depDirectOperatedAirlineName_s1);
      setDepDirectDepartureDateTime_s1(depDirectDepartureDateTime_s1);
      setDepDirectArriveDateTime_s1(depDirectArriveDateTime_s1);
      setDepDirectRBD_s1(depDirectRBD_s1);
      setDepDirectSeq_s1(depDirectSeq_s1);

      navigate("/ContractInfo", { replace: true });
    }
  };

  return (
    <div className="my-4 p-2 border shadow-xl">
      <div className="flex justify-center items-center">
        <div className="border-red-600 w-[20%]">
          <img className="w-100% " src={src} alt="Icon" />
          <p className="text-[#828282]">{airline}</p>
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
            <div className="flex w-auto text-[#4E1311] font-semibold">
              <p className="w-[100%] text-start">{departureDateTime}</p>
              <p className="w-[100%] text-center">{totalTime}</p>
              <p className="w-[100%] text-end">{arriveDateTime}</p>
            </div>
          </div>
        </div>

        <div className="w-[20%] flex justify-center items-center">
          <button
            className="w-[70%] h-[50px] border rounded-full bg-[#FAA819]"
            onClick={() => handleDepartureDetail()}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default DirectFlightFilter;
