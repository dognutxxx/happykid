import { useContext, useState, createContext } from 'react';

const BookingContext = createContext();

function BookingContextProvider({children}) {
    const [dataSeclect, setDataSeclect] = useState();
    const [dataResponse, setDataResponse] = useState();

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