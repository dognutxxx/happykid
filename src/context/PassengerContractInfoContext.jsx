import { useContext, useState, createContext } from "react";

const PassengerContractInfoContext = createContext();

function PassengerContractInfoContextProvider({ children }) {
  const [inputTitle, setInputTitle] = useState("Mr");
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputMiddleName, setInputMiddleName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputDateOfBirth, setInputDateOfBirth] = useState("");
  const [inputNationality, setInputNationality] = useState("");
  const [inputMobilePhone, setInputinputMobilePhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassportNumber, setInputPassportNumber] = useState("");
  const [inputCountryOfIssue, setInputCountryOfIssue] = useState("TH");
  const [inputExpiryDate, setinputExpiryDate] = useState("");
  const [inputIssueDate, setinputIssueDate] = useState("");

  const [childInputTitle, setChildInputTitle] = useState("Mr");
  const [childInputFirstName, setChildInputFirstName] = useState("");
  const [childInputMiddleName, setChildInputMiddleName] = useState("");
  const [childInputLastName, setChildInputLastName] = useState("");
  const [childInputDateOfBirth, setChildInputDateOfBirth] = useState("");
  const [childInputNationality, setChildInputNationality] = useState("");
  const [childInputinputMobilePhone, setChildInputinputMobilePhone] = useState("");
  const [childInputEmail, setChildInputEmail] = useState("");
  const [childInputPassportNumber, setChildInputPassportNumber] = useState("");
  const [childInputCountryOfIssue, setChildInputCountryOfIssue] = useState("TH");
  const [childInputExpiryDate, setChildchildInputExpiryDate] = useState("");
  const [childInputIssueDate, setChildinputIssueDate] = useState("");

  const [infantInputTitle, setInfantInputTitle] = useState("Mr");
  const [infantInputFirstName, setInfantInputFirstName] = useState("");
  const [infantInputMiddleName, setInfantInputMiddleName] = useState("");
  const [infantInputLastName, setInfantInputLastName] = useState("");
  const [infantInputDateOfBirth, setInfantInputDateOfBirth] = useState("");
  const [infantInputNationality, setInfantInputNationality] = useState("");
  const [infantInputMobilePhone, setInfantInputinputMobilePhone] = useState("");
  const [infantInputEmail, setInfantInputEmail] = useState("");
  const [infantInputPassportNumber, setInfantInputPassportNumber] = useState("");
  const [infantInputCountryOfIssue, setInfantInputCountryOfIssue] = useState("TH");
  const [infantInputExpiryDate, setInfantinputExpiryDate] = useState("");
  const [infantInputIssueDate, setInfantinputIssueDate] = useState("");

  return (
    <PassengerContractInfoContext.Provider
      value={{
        inputTitle,
        setInputTitle,
        inputFirstName,
        setInputFirstName,
        inputMiddleName,
        setInputMiddleName,
        inputLastName,
        setInputLastName,
        inputDateOfBirth,
        setInputDateOfBirth,
        inputNationality,
        setInputNationality,
        inputMobilePhone,
        setInputinputMobilePhone,
        inputEmail,
        setInputEmail,
        inputPassportNumber,
        setInputPassportNumber,
        inputCountryOfIssue,
        setInputCountryOfIssue,
        inputExpiryDate,
        setinputExpiryDate,
        inputIssueDate,
        setinputIssueDate,

        childInputTitle,
        setChildInputTitle,
        childInputFirstName,
        setChildInputFirstName,
        childInputMiddleName,
        setChildInputMiddleName,
        childInputLastName,
        setChildInputLastName,
        childInputDateOfBirth,
        setChildInputDateOfBirth,
        childInputNationality,
        setChildInputNationality,
        childInputinputMobilePhone,
        setChildInputinputMobilePhone,
        childInputEmail,
        setChildInputEmail,
        childInputPassportNumber,
        setChildInputPassportNumber,
        childInputCountryOfIssue,
        setChildInputCountryOfIssue,
        childInputExpiryDate,
        setChildchildInputExpiryDate,
        childInputIssueDate,
        setChildinputIssueDate,

        infantInputTitle,
        setInfantInputTitle,
        infantInputFirstName,
        setInfantInputFirstName,
        infantInputMiddleName,
        setInfantInputMiddleName,
        infantInputLastName,
        setInfantInputLastName,
        infantInputDateOfBirth,
        setInfantInputDateOfBirth,
        infantInputNationality,
        setInfantInputNationality,
        infantInputMobilePhone,
        setInfantInputinputMobilePhone,
        infantInputEmail,
        setInfantInputEmail,
        infantInputPassportNumber,
        setInfantInputPassportNumber,
        infantInputCountryOfIssue,
        setInfantInputCountryOfIssue,
        infantInputExpiryDate,
        setInfantinputExpiryDate,
        infantInputIssueDate,
        setInfantinputIssueDate,
      }}
    >
      {children}
    </PassengerContractInfoContext.Provider>
  );
}

const usePassengerContractInfoContext = () => {
  const ctx = useContext(PassengerContractInfoContext);
  return ctx;
};

export default PassengerContractInfoContextProvider;

export { usePassengerContractInfoContext };
