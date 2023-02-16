import { useContext, useState, createContext } from "react";

const PnrContext = createContext();

function PnrContextProvider({ children }) {
  const [dataSearch, setDataSearch] = useState();
  const [checkboxArray, setCheckboxArray] = useState([]);
  const [tripType, setTripType] = useState("R");
  const [adult, setAdult] = useState(1);
  const [infant, setInfant] = useState(0);
  const [child, setChild] = useState(0);
  const [svcClass, setSvcClass] = useState("Y");
  const [languageCode, setLanguageCode] = useState("en");
  const [airline, setAirline] = useState("ALL");
  const [originCode, setOriginCode] = useState("BKK");
  const [destinationCode, setDestinationCode] = useState("HND");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [rbdList, setRBDList] = useState(null);
  const [adultInfo, setAdultInfo] = useState([]);
  const [childInfo, setChildInfo] = useState([]);
  const [infantInfo, setInfantInfo] = useState([]);
  const [bookingPerson, setBookingPerson] = useState(0);

  return (
    <PnrContext.Provider
      value={{
        dataSearch,
        setDataSearch,
        checkboxArray,
        setCheckboxArray,
        tripType,
        setTripType,
        adult,
        setAdult,
        infant,
        setInfant,
        child,
        setChild,
        svcClass,
        setSvcClass,
        languageCode,
        setLanguageCode,
        airline,
        setAirline,
        originCode,
        setOriginCode,
        destinationCode,
        setDestinationCode,
        departDate,
        setDepartDate,
        returnDate,
        setReturnDate,
        rbdList,
        setRBDList,
        adultInfo,
        setAdultInfo,
        childInfo,
        setChildInfo,
        infantInfo,
        setInfantInfo,
        bookingPerson,
        setBookingPerson,
      }}
    >
      {children}
    </PnrContext.Provider>
  );
}

const usePnrContext = () => {
  const ctx = useContext(PnrContext);
  return ctx;
};

export default PnrContextProvider;

export { usePnrContext };
