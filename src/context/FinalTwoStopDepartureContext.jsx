import { useContext, useState, createContext } from 'react';

const FinalTwoStopDepartureContext = createContext();

function FinalTwoStopDepartureContextProvider({ children }) {

  //new
  const [depTwoStopDepCityCode_s1, setDepTwoStopDepCityCode_s1] = useState();
  const [depTwoStopDepCityCode_s2, setDepTwoStopDepCityCode_s2] = useState();
  const [depTwoStopDepCityCode_s3, setDepTwoStopDepCityCode_s3] = useState();
  const [depTwoStopDepCityName_s1, setDepTwoStopDepCityName_s1] = useState();
  const [depTwoStopDepCityName_s2, setDepTwoStopDepCityName_s2] = useState();
  const [depTwoStopDepCityName_s3, setDepTwoStopDepCityName_s3] = useState();
  const [depTwoStopArrCityCode_s1, setDepTwoStopArrCityCode_s1] = useState();
  const [depTwoStopArrCityCode_s2, setDepTwoStopArrCityCode_s2] = useState();
  const [depTwoStopArrCityCode_s3, setDepTwoStopArrCityCode_s3] = useState();
  const [depTwoStopArrCityName_s1, setDepTwoStopArrCityName_s1] = useState();
  const [depTwoStopArrCityName_s2, setDepTwoStopArrCityName_s2] = useState();
  const [depTwoStopArrCityName_s3, setDepTwoStopArrCityName_s3] = useState();
  const [depTwoStopAirlineCode_s1, setDepTwoStopAirlineCode_s1] = useState();
  const [depTwoStopAirlineCode_s2, setDepTwoStopAirlineCode_s2] = useState();
  const [depTwoStopAirlineCode_s3, setDepTwoStopAirlineCode_s3] = useState();
  const [depTwoStopAirlineName_s1, setDepTwoStopAirlineName_s1] = useState();
  const [depTwoStopAirlineName_s2, setDepTwoStopAirlineName_s2] = useState();
  const [depTwoStopAirlineName_s3, setDepTwoStopAirlineName_s3] = useState();
  const [depTwoStopFlightNumber_s1, setDepTwoStopFlightNumber_s1] = useState();
  const [depTwoStopFlightNumber_s2, setDepTwoStopFlightNumber_s2] = useState();
  const [depTwoStopFlightNumber_s3, setDepTwoStopFlightNumber_s3] = useState();
  const [depTwoStopOperatedAirlineCode_s1, setDepTwoStopOperatedAirlineCode_s1] = useState();
  const [depTwoStopOperatedAirlineCode_s2, setDepTwoStopOperatedAirlineCode_s2] = useState();
  const [depTwoStopOperatedAirlineCode_s3, setDepTwoStopOperatedAirlineCode_s3] = useState();
  const [depTwoStopOperatedAirlineName_s1, setDepTwoStopOperatedAirlineName_s1] = useState();
  const [depTwoStopOperatedAirlineName_s2, setDepTwoStopOperatedAirlineName_s2] = useState();
  const [depTwoStopOperatedAirlineName_s3, setDepTwoStopOperatedAirlineName_s3] = useState();
  const [depTwoStopDepartureDateTime_s1, setDepTwoStopDepartureDateTime_s1] = useState();
  const [depTwoStopDepartureDateTime_s2, setDepTwoStopDepartureDateTime_s2] = useState();
  const [depTwoStopDepartureDateTime_s3, setDepTwoStopDepartureDateTime_s3] = useState();
  const [depTwoStoparriveDateTime_s1, setDepTwoStoparriveDateTime_s1] = useState();
  const [depTwoStoparriveDateTime_s2, setDepTwoStoparriveDateTime_s2] = useState();
  const [depTwoStoparriveDateTime_s3, setDepTwoStoparriveDateTime_s3] = useState();
  const [depTwoStopRBD_s1, setDepTwoStopRBD_s1] = useState();
  const [depTwoStopRBD_s2, setDepTwoStopRBD_s2] = useState();
  const [depTwoStopRBD_s3, setDepTwoStopRBD_s3] = useState();
  const [depTwoStopSeq_s1, setDepTwoStopSeq_s1] = useState();
  const [depTwoStopSeq_s2, setDepTwoStopSeq_s2] = useState();
  const [depTwoStopSeq_s3, setDepTwoStopSeq_s3] = useState();



  return (
    <FinalTwoStopDepartureContext.Provider value={{
      //new
      depTwoStopDepCityCode_s1, setDepTwoStopDepCityCode_s1,
      depTwoStopDepCityCode_s2, setDepTwoStopDepCityCode_s2,
      depTwoStopDepCityCode_s3, setDepTwoStopDepCityCode_s3,
      depTwoStopDepCityName_s1, setDepTwoStopDepCityName_s1,
      depTwoStopDepCityName_s2, setDepTwoStopDepCityName_s2,
      depTwoStopDepCityName_s3, setDepTwoStopDepCityName_s3,
      depTwoStopArrCityCode_s1, setDepTwoStopArrCityCode_s1,
      depTwoStopArrCityCode_s2, setDepTwoStopArrCityCode_s2,
      depTwoStopArrCityCode_s3, setDepTwoStopArrCityCode_s3,
      depTwoStopArrCityName_s1, setDepTwoStopArrCityName_s1,
      depTwoStopArrCityName_s2, setDepTwoStopArrCityName_s2,
      depTwoStopArrCityName_s3, setDepTwoStopArrCityName_s3,
      depTwoStopAirlineCode_s1, setDepTwoStopAirlineCode_s1,
      depTwoStopAirlineCode_s2, setDepTwoStopAirlineCode_s2,
      depTwoStopAirlineCode_s3, setDepTwoStopAirlineCode_s3,
      depTwoStopAirlineName_s1, setDepTwoStopAirlineName_s1,
      depTwoStopAirlineName_s2, setDepTwoStopAirlineName_s2,
      depTwoStopAirlineName_s3, setDepTwoStopAirlineName_s3,
      depTwoStopFlightNumber_s1, setDepTwoStopFlightNumber_s1,
      depTwoStopFlightNumber_s2, setDepTwoStopFlightNumber_s2,
      depTwoStopFlightNumber_s3, setDepTwoStopFlightNumber_s3,
      depTwoStopOperatedAirlineCode_s1, setDepTwoStopOperatedAirlineCode_s1,
      depTwoStopOperatedAirlineCode_s2, setDepTwoStopOperatedAirlineCode_s2,
      depTwoStopOperatedAirlineCode_s3, setDepTwoStopOperatedAirlineCode_s3,
      depTwoStopOperatedAirlineName_s1, setDepTwoStopOperatedAirlineName_s1,
      depTwoStopOperatedAirlineName_s2, setDepTwoStopOperatedAirlineName_s2,
      depTwoStopOperatedAirlineName_s3, setDepTwoStopOperatedAirlineName_s3,
      depTwoStopDepartureDateTime_s1, setDepTwoStopDepartureDateTime_s1,
      depTwoStopDepartureDateTime_s2, setDepTwoStopDepartureDateTime_s2,
      depTwoStopDepartureDateTime_s3, setDepTwoStopDepartureDateTime_s3,
      depTwoStoparriveDateTime_s1, setDepTwoStoparriveDateTime_s1,
      depTwoStoparriveDateTime_s2, setDepTwoStoparriveDateTime_s2,
      depTwoStoparriveDateTime_s3, setDepTwoStoparriveDateTime_s3,
      depTwoStopRBD_s1, setDepTwoStopRBD_s1,
      depTwoStopRBD_s2, setDepTwoStopRBD_s2,
      depTwoStopRBD_s3, setDepTwoStopRBD_s3,
      depTwoStopSeq_s1, setDepTwoStopSeq_s1,
      depTwoStopSeq_s2, setDepTwoStopSeq_s2,
      depTwoStopSeq_s3, setDepTwoStopSeq_s3,
    }}>
      {children}
    </FinalTwoStopDepartureContext.Provider>

  )
}

const useFinalTwoStopDepartureContext = () => {
  const ctx = useContext(FinalTwoStopDepartureContext);
  return ctx
}

export default FinalTwoStopDepartureContextProvider;

export { useFinalTwoStopDepartureContext };