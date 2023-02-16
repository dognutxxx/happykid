import axios from "axios";
import { useState } from "react";

function CardShowNFT({ name, src, collection, departure, arrival, description, Class, dna, bookingPerson }) {
  return (
    <div className="flex flex-wrap items-center font-bold text-start">
      <div className="mb-4">{src && <img className="rounded-xl border" src={src} alt="icon" />}</div>

      <div className="">
        <div className="mb-4">
          {name && <p className="text-xl font-bold">Name: {name}</p>}
          {collection && <p className="font-extralight">Limited Series: {collection}</p>}
        </div>

        <div className="mb-4">
        <div className="">
          <p className="mt-2">ROUTE</p>
          <img src="src/assets/img/line.png" alt="" />
        </div>
        

          {departure && (
            <div className="font-extralight w-[100%]">
              {/* Departure : {departure[0].value}, {departure[1].value}, {departure[2].value}, {departure[3].value} */}
              <p className="font-semibold">Departure :</p>
              BKK, CNX, CEI, HDY, KKC, KBV, LPT, KOP, NNT, NAN, PHS, HKT, USM, KOH, THS, URT, TST, TDX, UBP, UTH
            </div>
          )}

          {arrival && (
            <div className="font-extralight">
              {/* Arrival : {arrival[0].value}, {arrival[1].value}, {arrival[2].value}, {arrival[3].value} */}
              <p className="font-semibold">Arrival :</p>
              BKK, CNX, CEI, HDY, KKC, KBV, LPT, KOP, NNT, NAN, PHS, HKT, USM, KOH, THS, URT, TST, TDX, UBP, UTH
            </div>
          )}
        </div>

        {/* <div className="">
          <p className="mt-2">CLASS</p> 
          <img src="src/assets/img/line.png" alt="" />
        </div> */}
        {/* {Class && (
          <p>
            Class : {Class[0].cabinClass_type}, {Class[1].cabinClass_type}, {Class[2].cabinClass_type},{" "}
            {Class[3].cabinClass_type}
          </p>
        )} */}

        <div className="">
          <p className="mt-2">DESCRIPTION</p>
          <img src="src/assets/img/line.png" alt="" />
        </div>
        {description && <p className="font-extralight">{description}</p>}

        <div className="">
          <p className="mt-2">Segments used</p>
          <img src="src/assets/img/line.png" alt="" />
        </div>
        <p className="font-extralight">{bookingPerson} / 8 </p>
      </div>
    </div>
  );
}

export default CardShowNFT;
