import { useContext, useState, createContext } from "react";

const FinalDirectDepartureContext = createContext();

function FinalDirectDepartureContextProvider({ children }) {
  const [depDirectDepCityCode_s1, setDepDirectDepCityCode_s1] = useState();
  const [depDirectDepCityName_s1, setDepDirectDepCityName_s1] = useState();
  const [depDirectArrCityCode_s1, setDepDirectArrCityCode_s1] = useState();
  const [depDirectArrCityName_s1, setDepDirectArrCityName_s1] = useState();
  const [depDirectAirlineCode_s1, setDepDirectAirlineCode_s1] = useState();
  const [depDirectAirlineName_s1, setDepDirectAirlineName_s1] = useState();
  const [depDirectFlightNumber_s1, setDepDirectFlightNumber_s1] = useState();
  const [depDirectOperatedAirlineCode_s1, setDepDirectOperatedAirlineCode_s1] =
    useState();
  const [depDirectOperatedAirlineName_s1, setDepDirectOperatedAirlineName_s1] =
    useState();
  const [depDirectDepartureDateTime_s1, setDepDirectDepartureDateTime_s1] =
    useState();
  const [depDirectArriveDateTime_s1, setDepDirectArriveDateTime_s1] =
    useState();
  const [depDirectRBD_s1, setDepDirectRBD_s1] = useState();
  const [depDirectSeq_s1, setDepDirectSeq_s1] = useState();

  return (
    <FinalDirectDepartureContext.Provider
      value={{
        depDirectDepCityCode_s1,
        setDepDirectDepCityCode_s1,
        depDirectDepCityName_s1,
        setDepDirectDepCityName_s1,
        depDirectArrCityCode_s1,
        setDepDirectArrCityCode_s1,
        depDirectArrCityName_s1,
        setDepDirectArrCityName_s1,
        depDirectAirlineCode_s1,
        setDepDirectAirlineCode_s1,
        depDirectAirlineName_s1,
        setDepDirectAirlineName_s1,
        depDirectFlightNumber_s1,
        setDepDirectFlightNumber_s1,
        depDirectOperatedAirlineCode_s1,
        setDepDirectOperatedAirlineCode_s1,
        depDirectOperatedAirlineName_s1,
        setDepDirectOperatedAirlineName_s1,
        depDirectDepartureDateTime_s1,
        setDepDirectDepartureDateTime_s1,
        depDirectArriveDateTime_s1,
        setDepDirectArriveDateTime_s1,
        depDirectRBD_s1,
        setDepDirectRBD_s1,
        depDirectSeq_s1,
        setDepDirectSeq_s1,
      }}
    >
      {children}
    </FinalDirectDepartureContext.Provider>
  );
}

const useFinalDirectDepartureContext = () => {
  const ctx = useContext(FinalDirectDepartureContext);
  return ctx;
};

export default FinalDirectDepartureContextProvider;

export { useFinalDirectDepartureContext };
