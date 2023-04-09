import React from "react";

import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Page/Home";

import ShopCollection from "./Page/ShopCollection";
import OurStory from "./Page/OurStory";
import Contact from "./Page/Contact";
import ShipReturn from "./Page/ShipReturn";
import StorePolicy from "./Page/StorePolicy";
import PaymentMethods from "./Page/PaymentMethods";
import FAQ from "./Page/FAQ";
import SocialLogin from "./Page/SocialLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Home />} />
        <Route path="/ShopCollection" element={<ShopCollection />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ShipReturn" element={<ShipReturn />} />
        <Route path="/StorePolicy" element={<StorePolicy />} />
        <Route path="/PaymentMethods" element={<PaymentMethods />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Route>
      <Route path="/SocialLogin" element={<SocialLogin />} />
    </Routes>
  );
}

export default App;
