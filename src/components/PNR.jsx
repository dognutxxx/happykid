import React from "react";
import { useNavigate } from "react-router-dom";
import { usePnrContext } from "../context/PnrContext";

function PNR() {
  let navigate = useNavigate();
  const { dataSearch } = usePnrContext();

  const refreshToHome = () => {
    window.location.href = "http://127.0.0.1:5173/"
    localStorage.clear();
    sessionStorage.clear();
  }
  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="flex justify-center items-center w-[70%] h-[300px] text-center border rounded-2xl bg-gray-100">
          <div className="">
            <div className="">
              <p className="my-2 text-[#FAA819] font-bold text-4xl">
                Congratulation
              </p>
              <p className="text-[#828282] font-semibold text-xl">
                Your booking Successfully
              </p>
            </div>

            <div className="border-4 border-[#828282] w-auto my-4 rounded-box">
              <p className="text-[#828282] font-bold text-4xl">Booking Ref.</p>
              <p className="text-[#FAA819] font-bold text-4xl p-4">
                PNR Number {dataSearch}
              </p>
            </div>
            <button
              // onClick={() => (window.location.href = "http://127.0.0.1:5173/")}
              // onClick={() => (window.location.href = "https://front-nftant-uat.azurewebsites.net")}
              onClick={() => refreshToHome()}
            >
              Click or refresh to home page
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PNR;
