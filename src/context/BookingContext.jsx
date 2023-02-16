import { useContext, useState, createContext } from 'react';

const BookingContext = createContext();

function BookingContextProvider({children}) {
    const [dataSeclect, setDataSeclect] = useState(sessionStorage.dataSelectDetail != undefined ? JSON.parse(sessionStorage.dataSelectDetail) : "");
    const [dataResponse, setDataResponse] = useState(sessionStorage.dataSelectDetail != undefined ? JSON.parse(sessionStorage.dataSelectDetail) : "");

  return (
    <BookingContext.Provider value={{
      dataSeclect, setDataSeclect, 
      dataResponse, setDataResponse
      }}>
        {children}
    </BookingContext.Provider>
    
  )
}

    const useBooking = () => {
        const ctx = useContext(BookingContext);
        return ctx
    }

export default BookingContextProvider;

export {useBooking};