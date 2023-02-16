import React from "react";
import moment from "moment/moment";
import round from '../../assets/img/round.png'
import oneWay from '../../assets/img/oneWay.png'

function TableBooking({ historyNFT }) {
  const dataHistory = historyNFT.recordset;
  // console.log(dataHistory);

  const formatDate = (dateTime) => {
    let date = moment(dateTime).format("LL");
    return date;
  };

  return (
    <>
      <div className="overflow-x-auto relative shadow rounded-2xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-map">
            <tr>
              <th scope="col" className="py-3 px-6">
                Action Date/Time
              </th>
              <th scope="col" className="py-3 px-6">
                Trip
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Type
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Used segments
              </th>
            </tr>
          </thead>
          <tbody>
            {dataHistory?.map((el, index) => {
      
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {formatDate(el.datetime)}
                  </th>
                  <td className="py-4 px-6 flex">
                    {el.departureTrip} ({el.departureCity})
                    {el.type === "Round" ? (
                      <img src={round} alt="icon" className="h-5 mx-4" />
                    ) : (
                      <img src={oneWay} alt="icon" className="h-5 mx-4" />
                    )}
                    {el.arrivalTrip} ({el.arrivalCity})
                  </td>
                  <td className="text-center">{el.type}</td>
                  <td className="text-center">{el.person}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableBooking;
