import React from "react";
import { useBetween } from "use-between";
import Share from "../Page/Share";
import { useEffect } from "react";
import { useState } from "react";
import CardDirectFlightFilter from "./card/CardDirectFlightFilter";
import CardOneStopFlightFilter from "./card/CardOneStopFlightFilter";
import CardTwoStopFlightFilter from "../components/card/CardTwoStopFlightFilter";
import { usePnrContext } from "../context/PnrContext";

import { EncryptStorage } from "encrypt-storage";
const encryptStorage1 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function card_copy() {
  const { share } = useBetween(Share);
  const { checkedAny, setCheckedAny } = useBetween(Share);
  const { checkedAirline, setCheckedAirline } = useBetween(Share);

  const checkboxArray = usePnrContext();

  const localStorageDepartureFlight = localStorage.dataSearch;
  const value = encryptStorage1.decryptString(localStorageDepartureFlight);

  const departureFlight = JSON.parse(value).data.departureFlight;
  console.log(departureFlight);

  const [anyFilter, setAnyFilter] = useState([]);
  // console.log(anyFilter);

  const [directFilter, setDirectFilter] = useState([]);
  // console.log(directFilter);

  const [oneStopFilter, setOneStopFilter] = useState([]);
  // console.log(oneStopFilter);

  const [twoStopFilter, setTwoStopFilter] = useState([]);
  // console.log(twoStopFilter);

  const [flightStop, setFlightStop] = useState("");
  // console.log("FlightStop", flightStop);4

  const [airlineFilter, setAirlineFilter] = useState([]);
  // console.log(airlineFilter);

  const access_ = localStorage.access_;
  const value_ = encryptStorage1.decryptString(access_);
  const access = JSON.parse(value_);

  useEffect(() => {
    setCheckedAny("any");
  }, []);

  useEffect(() => {
    if (checkedAny === "any") {
      const Any = departureFlight;
      setAnyFilter(Any);
    }

    if (checkedAny === "direct") {
      const DirectFilter = departureFlight?.filter((el) => {
        return el.flightDetails.length === 1;
      });
      setDirectFilter(DirectFilter);
    }

    if (checkedAny === "oneStop") {
      const OneStopFilter = departureFlight?.filter((el) => {
        return el.flightDetails.length === 2;
      });
      setOneStopFilter(OneStopFilter);
    }

    if (checkedAny === "twoStop") {
      const TwoStopFilter = departureFlight?.filter((el) => {
        return el.flightDetails.length === 3;
      });
      setTwoStopFilter(TwoStopFilter);
    }
  }, [checkedAny, checkedAirline]);

  const handleAccountsChanged = () => {
    window.ethereum.on("accountsChanged", (newAccount, string) => {
      window.location.href = "http://localhost:3000/";
    });
  };

  useEffect(() => {
    handleAccountsChanged();
  }, [handleAccountsChanged]);

  return (
    <>
      {checkedAny === "any" &&
        departureFlight.map((data, idx) => {
          if (data.flightDetails.length === 1) {
            const flightArray = data.flightDetails.filter((el) => {
              if (checkboxArray.checkboxArray.length === 0) {
                return data.flightDetails;
              } else {
                const isInArray = checkboxArray.checkboxArray.find((i) => {
                  return i === el.airline.name;
                });
                if (isInArray) {
                  return el;
                }
              }
            });

            return flightArray?.map((el, idx) => {
              const productInfoReverse_s1 = [...data.flightDetails[0].productInfo].reverse()
              const selectedRBD = productInfoReverse_s1.find((el) => {
                if (access.adult <= el.availabilityStatus) {
                  return el;
                }
              });

              return (
                <CardDirectFlightFilter
                  key={idx}
                  src={`src/assets/img/square/${data.flightDetails[0].airline.code}.png`}
                  airline={el.airline.name}
                  timeDuration={data.totalTime}
                  departureNameCity={el.depCity.name}
                  arriveNameCity={el.arrCity.name}
                  departureCodeCity={el.depCity.code}
                  arriveCodeCity={el.arrCity.code}
                  departureDateTime={el.depDisplayDateTime.displayTime}
                  arriveDateTime={el.arrDisplayDateTime.displayTime}
                  //new
                  depDirectDepCityCode_s1={el.depCity.code}
                  depDirectDepCityName_s1={el.depCity.name}
                  depDirectArrCityCode_s1={el.arrCity.code}
                  depDirectArrCityName_s1={el.arrCity.name}
                  depDirectAirlineCode_s1={el.airline.code}
                  depDirectAirlineName_s1={el.airline.name}
                  depDirectFlightNumber_s1={el.flightNumber}
                  depDirectOperatedAirlineCode_s1={el.operatedAirline.code}
                  depDirectOperatedAirlineName_s1={el.operatedAirline.name}
                  depDirectDepartureDateTime_s1={el.departureDateTime}
                  depDirectArriveDateTime_s1={el.arrivalDateTime}
                  depDirectRBD_s1={selectedRBD?.rbd}
                  depDirectSeq_s1={el.Seq}
                />
              );
            });
          }

          if (data.flightDetails.length === 2) {
            const flightArray = data.flightDetails.filter((el) => {
              if (checkboxArray.checkboxArray.length === 0) {
                return data.flightDetails;
              } else {
                const isInArray = checkboxArray.checkboxArray.find((i) => {
                  return i === data.flightDetails[0].airline.name;
                });

                if (isInArray) {
                  if (el.Seq === 1) {
                    return el;
                  }
                }
              }
            });

            return flightArray?.map((el, idx) => {
              const productInfoReverse_s1 = [...data.flightDetails[0].productInfo].reverse()
              const productInfoReverse_s2 = [...data.flightDetails[1].productInfo].reverse()
              const selectedRBD_s1 = productInfoReverse_s1.find((el) => {
                if (access.adult <= el.availabilityStatus) {
                  return el;
                }
              }); 
              
              const selectedRBD_s2 = productInfoReverse_s2.find((el) => {
                if (access.adult <= el.availabilityStatus) {
                  return el; 
                }
              });

              if (el.Seq === 1) {
                return (
                  <CardOneStopFlightFilter
                    key={idx}
                    src={`src/assets/img/square/${el.airline.code}.png`}
                    airline={el.airline.name}
                    departureNameCity={el.depCity.name}
                    oneStopCity={el.arrCity.name}
                    oneStopCodeCity={el.arrCity.code}
                    departureCodeCity={el.depCity.code}
                    departureDateTime={el.depDisplayDateTime.displayTime}
                    arriveNameCity={data.flightDetails[1].arrCity.name}
                    arriveCodeCity={data.flightDetails[1].arrCity.code}
                    arriveCodeCitySeq1={data.flightDetails[0].arrCity.code}
                    arriveDateTime={data.flightDetails[1].arrDisplayDateTime.displayTime}
                    timeDuration={data.totalTime}
                    departureDateTimeSeq1={data.flightDetails[0].arrDisplayDateTime.displayTime}
                    departureDateTimeSeq2={data.flightDetails[1].depDisplayDateTime.displayTime}
                    flightNumberSeq1={data.flightDetails[0].flightNumber}
                    flightNumberSeq2={data.flightDetails[1].flightNumber}
                    operatedAirlineNameSeq1={data.flightDetails[0].operatedAirline.name}
                    operatedAirlineNameSeq2={data.flightDetails[1].operatedAirline.name}
                    operatedAirlineCodeSeq1={data.flightDetails[0].operatedAirline.code}
                    operatedAirlineCodeSeq2={data.flightDetails[1].operatedAirline.code}
                    seqOneFlight={data.flightDetails[0].seq}
                    seqTwoFlight={data.flightDetails[1].seq}
                    //new
                   depOneStopDepCityCode_s1={data.flightDetails[0].depCity.code}
                   depOneStopDepCityCode_s2={data.flightDetails[1].depCity.code}
                   depOneStopDepCityName_s1={data.flightDetails[0].depCity.name}
                   depOneStopDepCityName_s2={data.flightDetails[1].depCity.name}
                   depOneStopArrCityCode_s1={data.flightDetails[0].arrCity.code}
                   depOneStopArrCityCode_s2={data.flightDetails[1].arrCity.code}
                   depOneStopArrCityName_s1={data.flightDetails[0].arrCity.name}
                   depOneStopArrCityName_s2={data.flightDetails[1].arrCity.name}
                   depOneStopAirlineCode_s1={data.flightDetails[0].airline.code}
                   depOneStopAirlineCode_s2={data.flightDetails[1].airline.code}
                   depOneStopAirlineName_s1={data.flightDetails[0].airline.name}
                   depOneStopAirlineName_s2={data.flightDetails[1].airline.name}
                   depOneStopFlightNumber_s1={data.flightDetails[0].flightNumber}
                   depOneStopFlightNumber_s2={data.flightDetails[1].flightNumber}
                   depOneStopOperatedAirlineCode_s1={data.flightDetails[0].operatedAirline.code}
                   depOneStopOperatedAirlineCode_s2={data.flightDetails[1].operatedAirline.code}
                   depOneStopOperatedAirlineName_s1={data.flightDetails[0].operatedAirline.name}
                   depOneStopOperatedAirlineName_s2={data.flightDetails[1].operatedAirline.name}
                   depOneStopDepartureDateTime_s1={data.flightDetails[0].departureDateTime}
                   depOneStopDepartureDateTime_s2={data.flightDetails[1].departureDateTime}
                   depOneStoparriveDateTime_s1={data.flightDetails[0].arrivalDateTime}
                   depOneStoparriveDateTime_s2={data.flightDetails[1].arrivalDateTime}
                   depOneStopRBD_s1={selectedRBD_s1.rbd}
                   depOneStopRBD_s2={selectedRBD_s2.rbd}
                   depOneStopSeq_s1={data.flightDetails[0].Seq}
                   depOneStopSeq_s2={data.flightDetails[1].Seq}
                  />
                );
              }
            });
          }

          //FOR FURTURE 2 STOP

          // if (data.flightDetails.length === 3) {
          //   const flightArray = data.flightDetails.filter((el) => {
          //     if (checkboxArray.checkboxArray.length === 0) {
          //       return data.flightDetails;
          //     } else {
          //       const isInArray = checkboxArray.checkboxArray.find((i) => {
          //         return i === el.airline.name;
          //       });
          //       if (isInArray) {
          //         return el;
          //       }
          //     }
          //   });
          //   return flightArray?.map((el, idx) => {
          //     return (
          //       <CardTwoStopFlightFilter
          //         key={idx}
          //         src={`src/assets/img/square/${data.flightDetails[0].airline.code}.png`}
          //         airline={data.flightDetails[0].airline.name}
          //         departureNameCity={data.flightDetails[0].depCity.name}
          //         departureCodeCity={data.flightDetails[0].depCity.code}
          //         departureDateTime={
          //           data.flightDetails[0].depDisplayDateTime.displayTime
          //         }
          //         firstStopCity={data.flightDetails[0].arrCity.name}
          //         scondStopCity={data.flightDetails[1].arrCity.name}
          //         arriveNameCity={data.flightDetails[2].arrCity.name}
          //         arriveCodeCity={data.flightDetails[2].arrCity.code}
          //         arriveDateTime={
          //           data.flightDetails[2].arrDisplayDateTime.displayTime
          //         }
          //         timeDuration={data.totalTime}
          //       />
          //     );
          //   });
          // }
        })}

      {checkedAny === "direct" &&
        directFilter.map((data, index) => {
          if (data.flightDetails.length === 1) {
            const flightArray = data.flightDetails.filter((el) => {
              if (checkboxArray.checkboxArray.length === 0) {
                return data.flightDetails;
              } else {
                const isInArray = checkboxArray.checkboxArray.find((i) => {
                  return i === el.airline.name;
                });
                if (isInArray) {
                  return el;
                }
              }
            });

            return flightArray?.map((el) => {
              const productInfoReverse_s1 = [...data.flightDetails[0].productInfo].reverse()
              const selectedRBD = productInfoReverse_s1.find((el) => {
                if (access.adult <= el.availabilityStatus) {
                  return el;
                }
              });

              return (
                <CardDirectFlightFilter
                  key={index}
                  src={`src/assets/img/square/${data.flightDetails[0].airline.code}.png`}
                  airline={el.airline.name}
                  timeDuration={data.totalTime}
                  departureNameCity={el.depCity.name}
                  arriveNameCity={el.arrCity.name}
                  departureCodeCity={el.depCity.code}
                  arriveCodeCity={el.arrCity.code}
                  departureDateTime={el.depDisplayDateTime.displayTime}
                  arriveDateTime={el.arrDisplayDateTime.displayTime}
                  //new
                  depDirectDepCityCode_s1={el.depCity.code}
                  depDirectDepCityName_s1={el.depCity.name}
                  depDirectArrCityCode_s1={el.arrCity.code}
                  depDirectArrCityName_s1={el.arrCity.name}
                  depDirectAirlineCode_s1={el.airline.code}
                  depDirectAirlineName_s1={el.airline.name}
                  depDirectFlightNumber_s1={el.flightNumber}
                  depDirectOperatedAirlineCode_s1={el.operatedAirline.code}
                  depDirectOperatedAirlineName_s1={el.operatedAirline.name}
                  depDirectDepartureDateTime_s1={el.departureDateTime}
                  depDirectArriveDateTime_s1={el.arrivalDateTime}
                  depDirectRBD_s1={selectedRBD?.rbd}
                  depDirectSeq_s1={el.Seq}
                />
              );
            });
          }
        })}

      {checkedAny === "oneStop" &&
        oneStopFilter.map((data, index) => {
          const flightArray = data.flightDetails.filter((el) => {
            if (checkboxArray.checkboxArray.length === 0) {
              return data.flightDetails;
            } else {
              const isInArray = checkboxArray.checkboxArray.find((i) => {
                return i === data.flightDetails[0].airline.name;
              });

              if (isInArray) {
                if (el.Seq === 1) {
                  return el;
                }
              }
            }
          });

          console.log(flightArray);

          return flightArray?.map((el, idx) => {
            const productInfoReverse_s1 = [...data.flightDetails[0].productInfo].reverse()
            const productInfoReverse_s2 = [...data.flightDetails[1].productInfo].reverse()
            const selectedRBD_s1 = productInfoReverse_s1.find((el) => {
              if (access.adult <= el.availabilityStatus) {
                return el;
              }
            });
          
            const selectedRBD_s2 = productInfoReverse_s2.find((el) => {
              if (access.adult <= el.availabilityStatus) {
                return el;
              }
            });

            if (el.Seq === 1) {
              return (
                <CardOneStopFlightFilter
                  key={idx}
                  src={`src/assets/img/square/${el.airline.code}.png`}
                  airline={el.airline.name}
                  departureNameCity={el.depCity.name}
                  oneStopCity={el.arrCity.name}
                  oneStopCodeCity={el.arrCity.code}
                  departureCodeCity={el.depCity.code}
                  departureDateTime={el.depDisplayDateTime.displayTime}
                  arriveNameCity={data.flightDetails[1].arrCity.name}
                  arriveCodeCity={data.flightDetails[1].arrCity.code}
                  arriveCodeCitySeq1={data.flightDetails[0].arrCity.code}
                  arriveDateTime={data.flightDetails[1].arrDisplayDateTime.displayTime}
                  timeDuration={data.totalTime}
                  departureDateTimeSeq1={data.flightDetails[0].arrDisplayDateTime.displayTime}
                  departureDateTimeSeq2={data.flightDetails[1].depDisplayDateTime.displayTime}
                  flightNumberSeq1={data.flightDetails[0].flightNumber}
                  flightNumberSeq2={data.flightDetails[1].flightNumber}
                  operatedAirlineNameSeq1={data.flightDetails[0].operatedAirline.name}
                  operatedAirlineNameSeq2={data.flightDetails[1].operatedAirline.name}
                  operatedAirlineCodeSeq1={data.flightDetails[0].operatedAirline.code}
                  operatedAirlineCodeSeq2={data.flightDetails[1].operatedAirline.code}
                  seqOneFlight={data.flightDetails[0].seq}
                  seqTwoFlight={data.flightDetails[1].seq}
                  //new
                  depOneStopDepCityCode_s1={data.flightDetails[0].depCity.code}
                  depOneStopDepCityCode_s2={data.flightDetails[1].depCity.code}
                  depOneStopDepCityName_s1={data.flightDetails[0].depCity.name}
                  depOneStopDepCityName_s2={data.flightDetails[1].depCity.name}
                  depOneStopArrCityCode_s1={data.flightDetails[0].arrCity.code}
                  depOneStopArrCityCode_s2={data.flightDetails[1].arrCity.code}
                  depOneStopArrCityName_s1={data.flightDetails[0].arrCity.name}
                  depOneStopArrCityName_s2={data.flightDetails[1].arrCity.name}
                  depOneStopAirlineCode_s1={data.flightDetails[0].airline.code}
                  depOneStopAirlineCode_s2={data.flightDetails[1].airline.code}
                  depOneStopAirlineName_s1={data.flightDetails[0].airline.name}
                  depOneStopAirlineName_s2={data.flightDetails[1].airline.name}
                  depOneStopFlightNumber_s1={data.flightDetails[0].flightNumber}
                  depOneStopFlightNumber_s2={data.flightDetails[1].flightNumber}
                  depOneStopOperatedAirlineCode_s1={data.flightDetails[0].operatedAirline.code}
                  depOneStopOperatedAirlineCode_s2={data.flightDetails[1].operatedAirline.code}
                  depOneStopOperatedAirlineName_s1={data.flightDetails[0].operatedAirline.name}
                  depOneStopOperatedAirlineName_s2={data.flightDetails[1].operatedAirline.name}
                  depOneStopDepartureDateTime_s1={data.flightDetails[0].departureDateTime}
                  depOneStopDepartureDateTime_s2={data.flightDetails[1].departureDateTime}
                  depOneStoparriveDateTime_s1={data.flightDetails[0].arrivalDateTime}
                  depOneStoparriveDateTime_s2={data.flightDetails[1].arrivalDateTime}
                  depOneStopRBD_s1={selectedRBD_s1.rbd}
                  depOneStopRBD_s2={selectedRBD_s2.rbd}
                  depOneStopSeq_s1={data.flightDetails[0].Seq}
                  depOneStopSeq_s2={data.flightDetails[1].Seq}
                />
              );
            }
          });
        })}

      {/* // for future */}
      {/* {checkedAny === "twoStop" &&
        twoStopFilter.map((data) => {
          return (
            <CardTwoStopFlightFilter
              src={`src/assets/img/square/${data.flightDetails[0].airline.code}.png`}
              airline={data.flightDetails[0].airline.name}
              departureNameCity={data.flightDetails[0].depCity.name}
              departureCodeCity={data.flightDetails[0].depCity.code}
              departureDateTime={data.flightDetails[0].depDisplayDateTime.displayTime}
              firstStopCity={data.flightDetails[0].arrCity.name}
              scondStopCity={data.flightDetails[1].arrCity.name}
              arriveNameCity={data.flightDetails[2].arrCity.name}
              arriveCodeCity={data.flightDetails[2].arrCity.code}
              arriveDateTime={data.flightDetails[2].arrDisplayDateTime.displayTime}
              timeDuration={data.totalTime}
            />
          );
        })} */}
    </>
  );
}

export default card_copy;
