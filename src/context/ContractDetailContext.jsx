import { useContext, useState, createContext } from "react";

const ContractDetailContext = createContext();

function ContractDetailContextProvider({ children }) {
  const [inputTitleContract, setInputTitleContract] = useState("Mr");
  const [inputFirstNameContract, setInputFirstNameContract] = useState("");
  const [inputMiddleNameContract, setInputMiddleNameContract] = useState("");
  const [inputLastNameContract, setInputLastNameContract] = useState("");
  const [inputDateOfBirthContract, setInputDateOfBirthContract] = useState("");
  const [inputNationalityContract, setInputNationalityContract] = useState("");
  const [inputMobilePhoneContract, setInputinputMobilePhoneContract] =useState("");
  const [inputEmailContract, setInputEmailContract] = useState("");
  const [inputPassportNumberContract, setInputPassportNumberContract] = useState("");
  const [inputCountryOfIssueContract, setInputCountryOfIssueContract] =useState("TH");
  const [inputExpiryDateContract, setinputExpiryDateContract] = useState("");

  return (
    <ContractDetailContext.Provider
      value={{
        inputTitleContract,
        setInputTitleContract,
        inputFirstNameContract,
        setInputFirstNameContract,
        inputMiddleNameContract,
        setInputMiddleNameContract,
        inputLastNameContract,
        setInputLastNameContract,
        inputDateOfBirthContract,
        setInputDateOfBirthContract,
        inputNationalityContract,
        setInputNationalityContract,
        inputMobilePhoneContract,
        setInputinputMobilePhoneContract,
        inputEmailContract,
        setInputEmailContract,
        inputPassportNumberContract,
        setInputPassportNumberContract,
        inputCountryOfIssueContract,
        setInputCountryOfIssueContract,
        inputExpiryDateContract,
        setinputExpiryDateContract,
      }}
    >
      {children}
    </ContractDetailContext.Provider>
  );
}

const useContractDetailContext = () => {
  const ctx = useContext(ContractDetailContext);
  return ctx;
};

export default ContractDetailContextProvider;

export { useContractDetailContext };
