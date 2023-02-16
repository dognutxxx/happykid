import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Page/Home";
import FlightSearch from "./Page/FlightSearch";
import ContractInfo from "./Page/ContractInfo";
import Booking from "./Page/Booking";
import BookingResult from "./Page/BookingResult";
import FinalTicket from "./Page/FinalTicket";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="" element={<Home />} />
        <Route path="/FlightSearch" element={<FlightSearch />} />
        <Route path="/ContractInfo" element={<ContractInfo />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/BookingResult" element={<BookingResult />} />
        <Route path="/FinalTicket" element={<FinalTicket />} />
      </Route>
    </Routes>
  );
}

export default App;
