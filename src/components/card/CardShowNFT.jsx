import axios from "axios";
import { useState } from "react";

function CardShowNFT({ name, src, collection, departure, arrival, description, Class, dna }) {

  const [allPerson, setAllPerson] = useState(0);
  
  const checkAmountNFT = async() => {
    await axios.get(`http://localhost:3001/sumAmountTicket/${dna}`).then((res) => {
      console.log("RES", res.data);
      if (res.data <= 10) {
        setAllPerson(res.data)
        console.log("start");
      } else {
        console.log("error");
      }
    });
  };
  checkAmountNFT();

  return (
    <div className="flex flex-wrap items-center font-bold text-start">
      <div className="mb-4">{src && <img className="rounded-xl border" src={src} alt="icon" />}</div>

      <span>
        <div className="mb-4">
          {name && <p className="text-xl font-bold">Name: {name}</p>}
          {collection && <p className="font-extralight">Limited Serises: {collection}</p>}
        </div>

        <div className="mb-4">
          <div className="">
            <p className="mt-2">ROUTE</p>
            <img src="src/assets/img/line.png" alt="" />
          </div>

          {departure && (
            <p className="font-extralight">
              Departure : {departure[0].value}, {departure[1].value}, {departure[2].value}, {departure[3].value}
            </p>
          )}

          {arrival && (
            <p className="font-extralight">
              Arrival : {arrival[0].value}, {arrival[1].value}, {arrival[2].value}, {arrival[3].value}
            </p>
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
          <p className="mt-2">Registed NFT</p>
          <img src="src/assets/img/line.png" alt="" />
        </div>
        <p className="font-extralight">{allPerson} / 10 </p>
      </span>
    </div>
  );
}

export default CardShowNFT;
