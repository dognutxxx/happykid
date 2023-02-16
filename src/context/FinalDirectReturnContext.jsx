import { useContext, useState, createContext } from 'react';

const FinalDirectReturnContext = createContext();

function FinalDirectReturnContextProvider({children}) {
    const [returnDirectDepCityCode_s1, setReturnDirectDepCityCode_s1] = useState();
    const [returnDirectDepCityName_s1, setReturnDirectDepCityName_s1] = useState();
    const [returnDirectArrCityCode_s1, setReturnDirectArrCityCode_s1] = useState();
    const [returnDirectArrCityName_s1, setReturnDirectArrCityName_s1] = useState();
    const [returnDirectAirlineCode_s1, setReturnDirectAirlineCode_s1] = useState();
    const [returnDirectAirlineName_s1, setReturnDirectAirlineName_s1] = useState();
    const [returnDirectFlightNumber_s1, setReturnDirectFlightNumber_s1] = useState();
    const [returnDirectOperatedAirlineCode_s1, setReturnDirectOperatedAirlineCode_s1] = useState();
    const [returnDirectOperatedAirlineName_s1, setReturnDirectOperatedAirlineName_s1] = useState();
    const [returnDirectDepartureDateTime_s1, setReturnDirectDepartureDateTime_s1] = useState();
    const [returnDirectArriveDateTime_s1, setReturnDirectArriveDateTime_s1] = useState();
    const [returnDirectRBD_s1, setReturnDirectRBD_s1] = useState();
    const [returnDirectSeq_s1, setReturnDirectSeq_s1] = useState();


  return (
    <FinalDirectReturnContext.Provider value={{
      returnDirectDepCityCode_s1, setReturnDirectDepCityCode_s1,
      returnDirectDepCityName_s1, setReturnDirectDepCityName_s1,
      returnDirectArrCityCode_s1, setReturnDirectArrCityCode_s1,
      returnDirectArrCityName_s1, setReturnDirectArrCityName_s1,
      returnDirectAirlineCode_s1, setReturnDirectAirlineCode_s1,
      returnDirectAirlineName_s1, setReturnDirectAirlineName_s1,
      returnDirectFlightNumber_s1, setReturnDirectFlightNumber_s1,
      returnDirectOperatedAirlineCode_s1, setReturnDirectOperatedAirlineCode_s1,
      returnDirectOperatedAirlineName_s1, setReturnDirectOperatedAirlineName_s1,
      returnDirectDepartureDateTime_s1, setReturnDirectDepartureDateTime_s1,
      returnDirectArriveDateTime_s1, setReturnDirectArriveDateTime_s1,
      returnDirectRBD_s1, setReturnDirectRBD_s1,
      returnDirectSeq_s1, setReturnDirectSeq_s1,
    }}>
        {children}
    </FinalDirectReturnContext.Provider>
    
  )
}

    const useFinalDirectReturnContext = () => {
        const ctx = useContext(FinalDirectReturnContext);
        return ctx
    }

export default FinalDirectReturnContextProvider;

export {useFinalDirectReturnContext};