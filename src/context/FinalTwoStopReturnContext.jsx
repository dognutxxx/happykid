import { useContext, useState, createContext } from "react";

const FinalTwoStopReturnContext = createContext();

function FinalTwoStopReturnContextProvider({ children }) {
  //new
  const [returnTwoStopDepCityCode_s1, setReturnTwoStopDepCityCode_s1] = useState();
  const [returnTwoStopDepCityCode_s2, setReturnTwoStopDepCityCode_s2] = useState();
  const [returnTwoStopDepCityCode_s3, setReturnTwoStopDepCityCode_s3] = useState();
  const [returnTwoStopDepCityName_s1, setReturnTwoStopDepCityName_s1] = useState();
  const [returnTwoStopDepCityName_s2, setReturnTwoStopDepCityName_s2] = useState();
  const [returnTwoStopDepCityName_s3, setReturnTwoStopDepCityName_s3] = useState();
  const [returnTwoStopArrCityCode_s1, setReturnTwoStopArrCityCode_s1] = useState();
  const [returnTwoStopArrCityCode_s2, setReturnTwoStopArrCityCode_s2] = useState();
  const [returnTwoStopArrCityCode_s3, setReturnTwoStopArrCityCode_s3] = useState();
  const [returnTwoStopArrCityName_s1, setReturnTwoStopArrCityName_s1] = useState();
  const [returnTwoStopArrCityName_s2, setReturnTwoStopArrCityName_s2] = useState();
  const [returnTwoStopArrCityName_s3, setReturnTwoStopArrCityName_s3] = useState();
  const [returnTwoStopAirlineCode_s1, setReturnTwoStopAirlineCode_s1] = useState();
  const [returnTwoStopAirlineCode_s2, setReturnTwoStopAirlineCode_s2] = useState();
  const [returnTwoStopAirlineCode_s3, setReturnTwoStopAirlineCode_s3] = useState();
  const [returnTwoStopAirlineName_s1, setReturnTwoStopAirlineName_s1] = useState();
  const [returnTwoStopAirlineName_s2, setReturnTwoStopAirlineName_s2] = useState();
  const [returnTwoStopAirlineName_s3, setReturnTwoStopAirlineName_s3] = useState();
  const [returnTwoStopFlightNumber_s1, setReturnTwoStopFlightNumber_s1] = useState();
  const [returnTwoStopFlightNumber_s2, setReturnTwoStopFlightNumber_s2] = useState();
  const [returnTwoStopFlightNumber_s3, setReturnTwoStopFlightNumber_s3] = useState();
  const [returnTwoStopOperatedAirlineCode_s1, setReturnTwoStopOperatedAirlineCode_s1] = useState();
  const [returnTwoStopOperatedAirlineCode_s2, setReturnTwoStopOperatedAirlineCode_s2] = useState();
  const [returnTwoStopOperatedAirlineCode_s3, setReturnTwoStopOperatedAirlineCode_s3] = useState();
  const [returnTwoStopOperatedAirlineName_s1, setReturnTwoStopOperatedAirlineName_s1] = useState();
  const [returnTwoStopOperatedAirlineName_s2, setReturnTwoStopOperatedAirlineName_s2] = useState();
  const [returnTwoStopOperatedAirlineName_s3, setReturnTwoStopOperatedAirlineName_s3] = useState();
  const [returnTwoStopDepartureDateTime_s1, setReturnTwoStopDepartureDateTime_s1] = useState();
  const [returnTwoStopDepartureDateTime_s2, setReturnTwoStopDepartureDateTime_s2] = useState();
  const [returnTwoStopDepartureDateTime_s3, setReturnTwoStopDepartureDateTime_s3] = useState();
  const [returnTwoStoparriveDateTime_s1, setReturnTwoStoparriveDateTime_s1] = useState();
  const [returnTwoStoparriveDateTime_s2, setReturnTwoStoparriveDateTime_s2] = useState();
  const [returnTwoStoparriveDateTime_s3, setReturnTwoStoparriveDateTime_s3] = useState();
  const [returnTwoStopRBD_s1, setReturnTwoStopRBD_s1] = useState();
  const [returnTwoStopRBD_s2, setReturnTwoStopRBD_s2] = useState();
  const [returnTwoStopRBD_s3, setReturnTwoStopRBD_s3] = useState();
  const [returnTwoStopSeq_s1, setReturnTwoStopSeq_s1] = useState();
  const [returnTwoStopSeq_s2, setReturnTwoStopSeq_s2] = useState();
  const [returnTwoStopSeq_s3, setReturnTwoStopSeq_s3] = useState();

  return (
    <FinalTwoStopReturnContext.Provider
      value={{
        //new
        returnTwoStopDepCityCode_s1,
        setReturnTwoStopDepCityCode_s1,
        returnTwoStopDepCityCode_s2,
        setReturnTwoStopDepCityCode_s2,
        returnTwoStopDepCityCode_s3,
        setReturnTwoStopDepCityCode_s3,
        returnTwoStopDepCityName_s1,
        setReturnTwoStopDepCityName_s1,
        returnTwoStopDepCityName_s2,
        setReturnTwoStopDepCityName_s2,
        returnTwoStopDepCityName_s3,
        setReturnTwoStopDepCityName_s3,
        returnTwoStopArrCityCode_s1,
        setReturnTwoStopArrCityCode_s1,
        returnTwoStopArrCityCode_s2,
        setReturnTwoStopArrCityCode_s2,
        returnTwoStopArrCityCode_s3,
        setReturnTwoStopArrCityCode_s3,
        returnTwoStopArrCityName_s1,
        setReturnTwoStopArrCityName_s1,
        returnTwoStopArrCityName_s2,
        setReturnTwoStopArrCityName_s2,
        returnTwoStopArrCityName_s3,
        setReturnTwoStopArrCityName_s3,
        returnTwoStopAirlineCode_s1,
        setReturnTwoStopAirlineCode_s1,
        returnTwoStopAirlineCode_s2,
        setReturnTwoStopAirlineCode_s2,
        returnTwoStopAirlineCode_s3,
        setReturnTwoStopAirlineCode_s3,
        returnTwoStopAirlineName_s1,
        setReturnTwoStopAirlineName_s1,
        returnTwoStopAirlineName_s2,
        setReturnTwoStopAirlineName_s2,
        returnTwoStopAirlineName_s3,
        setReturnTwoStopAirlineName_s3,
        returnTwoStopFlightNumber_s1,
        setReturnTwoStopFlightNumber_s1,
        returnTwoStopFlightNumber_s2,
        setReturnTwoStopFlightNumber_s2,
        returnTwoStopFlightNumber_s3,
        setReturnTwoStopFlightNumber_s3,
        returnTwoStopOperatedAirlineCode_s1,
        setReturnTwoStopOperatedAirlineCode_s1,
        returnTwoStopOperatedAirlineCode_s2,
        setReturnTwoStopOperatedAirlineCode_s2,
        returnTwoStopOperatedAirlineCode_s3,
        setReturnTwoStopOperatedAirlineCode_s3,
        returnTwoStopOperatedAirlineName_s1,
        setReturnTwoStopOperatedAirlineName_s1,
        returnTwoStopOperatedAirlineName_s2,
        setReturnTwoStopOperatedAirlineName_s2,
        returnTwoStopOperatedAirlineName_s3,
        setReturnTwoStopOperatedAirlineName_s3,
        returnTwoStopDepartureDateTime_s1,
        setReturnTwoStopDepartureDateTime_s1,
        returnTwoStopDepartureDateTime_s2,
        setReturnTwoStopDepartureDateTime_s2,
        returnTwoStopDepartureDateTime_s3,
        setReturnTwoStopDepartureDateTime_s3,
        returnTwoStoparriveDateTime_s1,
        setReturnTwoStoparriveDateTime_s1,
        returnTwoStoparriveDateTime_s2,
        setReturnTwoStoparriveDateTime_s2,
        returnTwoStoparriveDateTime_s3,
        setReturnTwoStoparriveDateTime_s3,
        returnTwoStopRBD_s1,
        setReturnTwoStopRBD_s1,
        returnTwoStopRBD_s2,
        setReturnTwoStopRBD_s2,
        returnTwoStopRBD_s3,
        setReturnTwoStopRBD_s3,
        returnTwoStopSeq_s1,
        setReturnTwoStopSeq_s1,
        returnTwoStopSeq_s2,
        setReturnTwoStopSeq_s2,
        returnTwoStopSeq_s3,
        setReturnTwoStopSeq_s3,
      }}
    >
      {children}
    </FinalTwoStopReturnContext.Provider>
  );
}

const useFinalTwoStopReturnContext = () => {
  const ctx = useContext(FinalTwoStopReturnContext);
  return ctx;
};

export default FinalTwoStopReturnContextProvider;

export { useFinalTwoStopReturnContext };
