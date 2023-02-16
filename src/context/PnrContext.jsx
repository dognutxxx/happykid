import { useContext, useState, createContext } from "react";

const PnrContext = createContext();

function PnrContextProvider({ children }) {
  const options = [
    { value: "BKK", label: "Bangkok" },
    { value: "CNX", label: "Chiang Mai" },
    { value: "CEI", label: "Chiang Rai" },
    { value: "HDY", label: "Hat Yai" },
    { value: "KKC", label: "Khon Kaen" },
    { value: "KBV", label: "Krabi" },
    { value: "LPT", label: "Lampang" },
    { value: "KOP", label: "Nakhon Phanom" },
    { value: "NNT", label: "Nan" },
    { value: "PHS", label: "Phitsanulok" },
    { value: "HKT", label: "Phuket" },
    { value: "USM", label: "Koh Samui" },
    { value: "THS", label: "Sukhothai" },
    { value: "URT", label: "Surat Thani" },
    { value: "TST", label: "Trang" },
    { value: "TDX", label: "Trat" },
    { value: "UBP", label: "Ubon Ratchathani" },
    { value: "UTH", label: "Udon Thani" },
  ];

  const adultInfoSession = sessionStorage?.adultPassenger || "[{}]"

  const [dataSearch, setDataSearch] = useState();
  const [checkboxArray, setCheckboxArray] = useState([]);
  const [checkboxArray2, setCheckboxArray2] = useState([]);
  const [tripType, setTripType] = useState("R");
  const [adult, setAdult] = useState(1);
  const [infant, setInfant] = useState(0);
  const [child, setChild] = useState(0);
  const [svcClass, setSvcClass] = useState("Y");
  const [languageCode, setLanguageCode] = useState("en");
  const [airline, setAirline] = useState("ALL");
  const [originCode, setOriginCode] = useState("BKK");
  const [destinationCode, setDestinationCode] = useState(options[1].value);
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [rbdList, setRBDList] = useState(null);
  // const [adultInfo, setAdultInfo] = useState([]);
  const [adultInfo, setAdultInfo] = useState(JSON.parse(adultInfoSession));
  console.log(adultInfo);
  const [childInfo, setChildInfo] = useState([]);
  console.log(childInfo);
  const [infantInfo, setInfantInfo] = useState([]);
  console.log(infantInfo);
  const [bookingPerson, setBookingPerson] = useState(0);



  return (
    <PnrContext.Provider
      value={{
        dataSearch,
        setDataSearch,
        checkboxArray,
        setCheckboxArray,
        checkboxArray2,
        setCheckboxArray2,
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
