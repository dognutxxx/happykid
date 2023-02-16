import React from "react";
import { useBetween } from "use-between";
import Share from "../Page/Share";
import { useEffect } from "react";
import { useState } from "react";
import CardReturnDirectFlightFilter from "../components/card/CardReturnDirectFlightFilter";
import CardReturnOneStopFlightFilter from "../components/card/CardReturnOneStopFlightFilter";
import CardReturnTwoStopFlightFilter from "../components/card/CardReturnTwoStopFlightFilter";
import { usePnrContext } from "../context/PnrContext";

import { EncryptStorage } from "encrypt-storage";
import { logger } from "ethers";
const encryptStorage1 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function card2_copy() {
  const { share } = useBetween(Share);
  const { checkedAny, setCheckedAny } = useBetween(Share);
  const { checkedAirline, setCheckedAirline } = useBetween(Share);

  const checkboxArray2 = usePnrContext();

  const access_ = localStorage.access_;
  const value_ = encryptStorage1.decryptString(access_);
  const access = JSON.parse(value_);

  const localStorageReturnFlight = localStorage.dataSearch;
  const value = encryptStorage1.decryptString(localStorageReturnFlight);

  const returnFlight = JSON.parse(value).data.returnFlight;


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

  useEffect(() => {
    setCheckedAny("any");
  }, []);

  useEffect(() => {
    if (checkedAny === "any") {
      const Any = returnFlight;
      setAnyFilter(Any);
    }

    if (checkedAny === "direct") {
      const DirectFilter = returnFlight?.filter((el) => {
        return el.flightDetails.length === 1;
      });
      setDirectFilter(DirectFilter);
    }

    if (checkedAny === "oneStop") {
      const OneStopFilter = returnFlight?.filter((el) => {
        return el.flightDetails.length === 2;
      });
      setOneStopFilter(OneStopFilter);
    }

    if (checkedAny === "twoStop") {
      const TwoStopFilter = returnFlight?.filter((el) => {
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
        returnFlight?.map((data, idx) => {
          if (data.flightDetails.length === 1) {
            const flightArray = data.flightDetails.filter((el) => {
              if (checkboxArray2.checkboxArray2.length === 0) {
                return data.flightDetails;
              } else {
                const isInArray = checkboxArray2.checkboxArray2.find((i) => {
                  return i === el.airline.name;
                });
                if (isInArray) {
                  return el;
                }
              }
            });

            return flightArray?.map((el, idx) => {
              const selectedRBD = el.productInfo.find((el) => {
                if (access.adult <= el.availabilityStatus) {
                  return el;
                }
              });

              return (
                <CardReturnDirectFlightFilter
                  key={idx}
                  src={data.flightDetails[0].airline.code}
                  airline={el.airline.name}
                  timeDuration={data.totalTime}
                  departureNameCity={el.depCity.name}
                  arriveNameCity={el.arrCity.name}
                  departureCodeCity={el.depCity.code}
                  arriveCodeCity={el.arrCity.code}
                  departureDateTime={el.depDisplayDateTime.displayTime}
                  arriveDateTime={el.arrDisplayDateTime.displayTime}
                  //new
                  returnDirectDepCityCode_s1={el.depCity.code}
                  returnDirectDepCityName_s1={el.depCity.name}
                  returnDirectArrCityCode_s1={el.arrCity.code}
                  returnDirectArrCityName_s1={el.arrCity.name}
                  returnDirectAirlineCode_s1={el.airline.code}
                  returnDirectAirlineName_s1={el.airline.name}
                  returnDirectFlightNumber_s1={el.flightNumber}
                  returnDirectOperatedAirlineCode_s1={el.operatedAirline.code}
                  returnDirectOperatedAirlineName_s1={el.operatedAirline.name}
                  returnDirectDepartureDateTime_s1={el.departureDateTime}
                  returnDirectArriveDateTime_s1={el.arrivalDateTime}
                  returnDirectRBD_s1={selectedRBD?.rbd}
                  returnDirectSeq_s1={el.Seq}
                />
              );
            });
          }

          if (data.flightDetails.length === 2) {
            const flightArray = data.flightDetails.filter((el) => {
              if (checkboxArray2.checkboxArray2.length === 0) {
                return data.flightDetails;
              } else {
                const isInArray = checkboxArray2.checkboxArray2.find((i) => {
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
              const productInfoReverse_s1 = [...data.flightDetails[0].productInfo].reverse();
              const productInfoReverse_s2 = [...data.flightDetails[1].productInfo].reverse();
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
                  <CardReturnOneStopFlightFilter
                    key={idx}
                    src={data.flightDetails[0].airline.code}
                    airline={data.flightDetails[0].airline.name}
                    departureNameCity={data.flightDetails[0].depCity.name}
                    oneStopCity={data.flightDetails[0].arrCity.name}
                    oneStopCodeCity={data.flightDetails[0].arrCity.code}
                    departureCodeCity={data.flightDetails[0].depCity.code}
                    departureDateTime={data.flightDetails[0].depDisplayDateTime.displayTime}
                    arriveNameCity={data.flightDetails[1].arrCity.name}
                    arriveCodeCity={data.flightDetails[1].arrCity.code}
                    arriveDateTime={data.flightDetails[1].arrDisplayDateTime.displayTime}
                    timeDuration={data.totalTime}
                    departureDateTimeSeq_1={data.flightDetails[0].depDisplayDateTime.displayTime}
                    departureDateTimeSeq_2={data.flightDetails[1].depDisplayDateTime.displayTime}
                    arrivalDateTimeSeq_1={data.flightDetails[0].arrDisplayDateTime.displayTime}
                    arrivalDateTimeSeq_2={data.flightDetails[1].arrDisplayDateTime.displayTime}
                    flightNumberSeq1={data.flightDetails[0].flightNumber}
                    flightNumberSeq2={data.flightDetails[1].flightNumber}
                    operatedAirlineNameSeq1={data.flightDetails[0].operatedAirline.name}
                    operatedAirlineNameSeq2={data.flightDetails[1].operatedAirline.name}
                    operatedAirlineCodeSeq1={data.flightDetails[0].operatedAirline.code}
                    operatedAirlineCodeSeq2={data.flightDetails[1].operatedAirline.code}
                    seqOneFlight={data.flightDetails[0].seq}
                    seqTwoFlight={data.flightDetails[1].seq}
                    //New
                    returnOneStopDepCityCode_s1={data.flightDetails[0].depCity.code}
                    returnOneStopDepCityCode_s2={data.flightDetails[1].depCity.code}
                    returnOneStopDepCityName_s1={data.flightDetails[0].depCity.name}
                    returnOneStopDepCityName_s2={data.flightDetails[1].depCity.name}
                    returnOneStopArrCityCode_s1={data.flightDetails[0].arrCity.code}
                    returnOneStopArrCityCode_s2={data.flightDetails[1].arrCity.code}
                    returnOneStopArrCityName_s1={data.flightDetails[0].arrCity.name}
                    returnOneStopArrCityName_s2={data.flightDetails[1].arrCity.name}
                    returnOneStopAirlineCode_s1={data.flightDetails[0].airline.code}
                    returnOneStopAirlineCode_s2={data.flightDetails[1].airline.code}
                    returnOneStopAirlineName_s1={data.flightDetails[0].airline.name}
                    returnOneStopAirlineName_s2={data.flightDetails[1].airline.name}
                    returnOneStopFlightNumber_s1={data.flightDetails[0].flightNumber}
                    returnOneStopFlightNumber_s2={data.flightDetails[1].flightNumber}
                    returnOneStopOperatedAirlineCode_s1={data.flightDetails[0].operatedAirline.code}
                    returnOneStopOperatedAirlineCode_s2={data.flightDetails[1].operatedAirline.code}
                    returnOneStopOperatedAirlineName_s1={data.flightDetails[0].operatedAirline.name}
                    returnOneStopOperatedAirlineName_s2={data.flightDetails[1].operatedAirline.name}
                    returnOneStopDepartureDateTime_s1={data.flightDetails[0].departureDateTime}
                    returnOneStopDepartureDateTime_s2={data.flightDetails[1].departureDateTime}
                    returnOneStoparriveDateTime_s1={data.flightDetails[0].arrivalDateTime}
                    returnOneStoparriveDateTime_s2={data.flightDetails[1].arrivalDateTime}
                    returnOneStopRBD_s1={selectedRBD_s1.rbd}
                    returnOneStopRBD_s2={selectedRBD_s2.rbd}
                    returnOneStopSeq_s1={data.flightDetails[0].Seq}
                    returnOneStopSeq_s2={data.flightDetails[1].Seq}
                  />
                );
              }
            });
          }

          //FOR FURTURE 2 STOP
          if (data.flightDetails.length === 3) {
            const flightArray = data.flightDetails.filter((el) => {
              if (checkboxArray2.checkboxArray2.length === 0) {
                return data.flightDetails;
              } else {
                const isInArray = checkboxArray2.checkboxArray2.find((i) => {
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
              const selectedRBD_s1 = data.flightDetails[0].productInfo.find((el) => {
                if (access.adult <= el.availabilityStatus) {
                  return el;
                }
              });

              const selectedRBD_s2 = data.flightDetails[1].productInfo.find((el) => {
                if (access.adult <= el.availabilityStatus) {
                  return el;
                }
              });

              const selectedRBD_s3 = data.flightDetails[2].productInfo.find((el) => {
                if (access.adult <= el.availabilityStatus) {
                  return el;
                }
              });

              if (el.Seq === 1) {
                return (
                  <CardReturnTwoStopFlightFilter
                    key={idx}
                    src={data.flightDetails[0].airline.code}
                    airline={data.flightDetails[0].airline.name}
                    departureNameCity={data.flightDetails[0].depCity.name}
                    oneStopCity={data.flightDetails[0].arrCity.name}
                    twoStopCity={data.flightDetails[1].arrCity.name}
                    oneStopCodeCity={data.flightDetails[0].arrCity.code}
                    twoStopCodeCity={data.flightDetails[1].arrCity.code}
                    departureCodeCity={data.flightDetails[0].depCity.code}
                    departureDateTime={el.depDisplayDateTime.displayTime}
                    arriveNameCity={data.flightDetails[2].arrCity.name}
                    arriveCodeCity={data.flightDetails[2].arrCity.code}
                    arriveDateTime={data.flightDetails[1].arrDisplayDateTime.displayTime}
                    timeDuration={data.totalTime}
                    departureDateTimeSeq_1={data.flightDetails[0].depDisplayDateTime.displayTime}
                    departureDateTimeSeq_2={data.flightDetails[1].depDisplayDateTime.displayTime}
                    departureDateTimeSeq_3={data.flightDetails[2].depDisplayDateTime.displayTime}
                    arrivalDateTimeSeq_1={data.flightDetails[0].arrDisplayDateTime.displayTime}
                    arrivalDateTimeSeq_2={data.flightDetails[1].arrDisplayDateTime.displayTime}
                    arrivalDateTimeSeq_3={data.flightDetails[2].arrDisplayDateTime.displayTime}
                    flightNumberSeq1={data.flightDetails[0].flightNumber}
                    flightNumberSeq2={data.flightDetails[1].flightNumber}
                    flightNumberSeq3={data.flightDetails[2].flightNumber}
                    operatedAirlineNameSeq1={data.flightDetails[0].operatedAirline.name}
                    operatedAirlineNameSeq2={data.flightDetails[1].operatedAirline.name}
                    operatedAirlineNameSeq3={data.flightDetails[2].operatedAirline.name}
                    operatedAirlineCodeSeq1={data.flightDetails[0].operatedAirline.code}
                    operatedAirlineCodeSeq2={data.flightDetails[1].operatedAirline.code}
                    operatedAirlineCodeSeq3={data.flightDetails[2].operatedAirline.code}
                    seqOneFlight={data.flightDetails[0].seq}
                    seqTwoFlight={data.flightDetails[1].seq}
                    seqThreeFlight={data.flightDetails[2].seq}
                    //new
                    returnTwoStopDepCityCode_s1={data.flightDetails[0].depCity.code}
                    returnTwoStopDepCityCode_s2={data.flightDetails[1].depCity.code}
                    returnTwoStopDepCityCode_s3={data.flightDetails[2].depCity.code}
                    returnTwoStopDepCityName_s1={data.flightDetails[0].depCity.name}
                    returnTwoStopDepCityName_s2={data.flightDetails[1].depCity.name}
                    returnTwoStopDepCityName_s3={data.flightDetails[2].depCity.name}
                    returnTwoStopArrCityCode_s1={data.flightDetails[0].arrCity.code}
                    returnTwoStopArrCityCode_s2={data.flightDetails[1].arrCity.code}
                    returnTwoStopArrCityCode_s3={data.flightDetails[2].arrCity.code}
                    returnTwoStopArrCityName_s1={data.flightDetails[0].arrCity.name}
                    returnTwoStopArrCityName_s2={data.flightDetails[1].arrCity.name}
                    returnTwoStopArrCityName_s3={data.flightDetails[2].arrCity.name}
                    returnTwoStopAirlineCode_s1={data.flightDetails[0].airline.code}
                    returnTwoStopAirlineCode_s2={data.flightDetails[1].airline.code}
                    returnTwoStopAirlineCode_s3={data.flightDetails[2].airline.code}
                    returnTwoStopAirlineName_s1={data.flightDetails[0].airline.name}
                    returnTwoStopAirlineName_s2={data.flightDetails[1].airline.name}
                    returnTwoStopAirlineName_s3={data.flightDetails[2].airline.name}
                    returnTwoStopFlightNumber_s1={data.flightDetails[0].flightNumber}
                    returnTwoStopFlightNumber_s2={data.flightDetails[1].flightNumber}
                    returnTwoStopFlightNumber_s3={data.flightDetails[2].flightNumber}
                    returnTwoStopOperatedAirlineCode_s1={data.flightDetails[0].operatedAirline.code}
                    returnTwoStopOperatedAirlineCode_s2={data.flightDetails[1].operatedAirline.code}
                    returnTwoStopOperatedAirlineCode_s3={data.flightDetails[2].operatedAirline.code}
                    returnTwoStopOperatedAirlineName_s1={data.flightDetails[0].operatedAirline.name}
                    returnTwoStopOperatedAirlineName_s2={data.flightDetails[1].operatedAirline.name}
                    returnTwoStopOperatedAirlineName_s3={data.flightDetails[2].operatedAirline.name}
                    returnTwoStopDepartureDateTime_s1={data.flightDetails[0].departureDateTime}
                    returnTwoStopDepartureDateTime_s2={data.flightDetails[1].departureDateTime}
                    returnTwoStopDepartureDateTime_s3={data.flightDetails[2].departureDateTime}
                    returnTwoStoparriveDateTime_s1={data.flightDetails[0].arrivalDateTime}
                    returnTwoStoparriveDateTime_s2={data.flightDetails[1].arrivalDateTime}
                    returnTwoStoparriveDateTime_s3={data.flightDetails[2].arrivalDateTime}
                    returnTwoStopRBD_s1={selectedRBD_s1.rbd}
                    returnTwoStopRBD_s2={selectedRBD_s2.rbd}
                    returnTwoStopRBD_s3={selectedRBD_s3.rbd}
                    returnTwoStopSeq_s1={data.flightDetails[0].Seq}
                    returnTwoStopSeq_s2={data.flightDetails[1].Seq}
                    returnTwoStopSeq_s3={data.flightDetails[2].Seq}
                  />
                );
              }
            });
          }
        })}

      {checkedAny === "direct" &&
        directFilter.map((data, index) => {
          if (data.flightDetails.length === 1) {
            const flightArray = data.flightDetails.filter((el) => {
              if (checkboxArray2.checkboxArray2.length === 0) {
                return data.flightDetails;
              } else {
                const isInArray = checkboxArray2.checkboxArray2.find((i) => {
                  return i === el.airline.name;
                });
                if (isInArray) {
                  return el;
                }
              }
            });

            return flightArray?.map((el) => {
              const productInfoReverse_s1 = [...data.flightDetails[0].productInfo].reverse();
              const selectedRBD = productInfoReverse_s1.find((el) => {
                if (access.adult <= el.availabilityStatus) {
                  return el;
                }
              });

              return (
                <CardReturnDirectFlightFilter
                  key={index}
                  src={data.flightDetails[0].airline.code}
                  airline={el.airline.name}
                  timeDuration={data.totalTime}
                  departureNameCity={el.depCity.name}
                  arriveNameCity={el.arrCity.name}
                  departureCodeCity={el.depCity.code}
                  arriveCodeCity={el.arrCity.code}
                  departureDateTime={el.depDisplayDateTime.displayTime}
                  arriveDateTime={el.arrDisplayDateTime.displayTime}
                  //new
                  returnDirectDepCityCode_s1={el.depCity.code}
                  returnDirectDepCityName_s1={el.depCity.name}
                  returnDirectArrCityCode_s1={el.arrCity.code}
                  returnDirectArrCityName_s1={el.arrCity.name}
                  returnDirectAirlineCode_s1={el.airline.code}
                  returnDirectAirlineName_s1={el.airline.name}
                  returnDirectFlightNumber_s1={el.flightNumber}
                  returnDirectOperatedAirlineCode_s1={el.operatedAirline.code}
                  returnDirectOperatedAirlineName_s1={el.operatedAirline.name}
                  returnDirectDepartureDateTime_s1={el.departureDateTime}
                  returnDirectArriveDateTime_s1={el.arrivalDateTime}
                  returnDirectRBD_s1={selectedRBD?.rbd}
                  returnDirectSeq_s1={el.Seq}
                />
              );
            });
          }
        })}

      {checkedAny === "oneStop" &&
        oneStopFilter.map((data, index) => {
          const flightArray = data.flightDetails.filter((el) => {
            if (checkboxArray2.checkboxArray2.length === 0) {
              return data.flightDetails;
            } else {
              const isInArray = checkboxArray2.checkboxArray2.find((i) => {
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
            const productInfoReverse_s1 = [...data.flightDetails[0].productInfo].reverse();
            const productInfoReverse_s2 = [...data.flightDetails[1].productInfo].reverse();
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
                <CardReturnOneStopFlightFilter
                  key={idx}
                  src={data.flightDetails[0].airline.code}
                  airline={data.flightDetails[0].airline.name}
                  departureNameCity={data.flightDetails[0].depCity.name}
                  oneStopCity={data.flightDetails[0].arrCity.name}
                  oneStopCodeCity={data.flightDetails[0].arrCity.code}
                  departureCodeCity={data.flightDetails[0].depCity.code}
                  departureDateTime={data.flightDetails[0].depDisplayDateTime.displayTime}
                  arriveNameCity={data.flightDetails[1].arrCity.name}
                  arriveCodeCity={data.flightDetails[1].arrCity.code}
                  arriveDateTime={data.flightDetails[1].arrDisplayDateTime.displayTime}
                  timeDuration={data.totalTime}
                  departureDateTimeSeq_1={data.flightDetails[0].depDisplayDateTime.displayTime}
                  departureDateTimeSeq_2={data.flightDetails[1].depDisplayDateTime.displayTime}
                  arrivalDateTimeSeq_1={data.flightDetails[0].arrDisplayDateTime.displayTime}
                  arrivalDateTimeSeq_2={data.flightDetails[1].arrDisplayDateTime.displayTime}
                  flightNumberSeq1={data.flightDetails[0].flightNumber}
                  flightNumberSeq2={data.flightDetails[1].flightNumber}
                  operatedAirlineNameSeq1={data.flightDetails[0].operatedAirline.name}
                  operatedAirlineNameSeq2={data.flightDetails[1].operatedAirline.name}
                  operatedAirlineCodeSeq1={data.flightDetails[0].operatedAirline.code}
                  operatedAirlineCodeSeq2={data.flightDetails[1].operatedAirline.code}
                  seqOneFlight={data.flightDetails[0].seq}
                  seqTwoFlight={data.flightDetails[1].seq}
                  //new
                  returnOneStopDepCityCode_s1={data.flightDetails[0].depCity.code}
                  returnOneStopDepCityCode_s2={data.flightDetails[1].depCity.code}
                  returnOneStopDepCityName_s1={data.flightDetails[0].depCity.name}
                  returnOneStopDepCityName_s2={data.flightDetails[1].depCity.name}
                  returnOneStopArrCityCode_s1={data.flightDetails[0].arrCity.code}
                  returnOneStopArrCityCode_s2={data.flightDetails[1].arrCity.code}
                  returnOneStopArrCityName_s1={data.flightDetails[0].arrCity.name}
                  returnOneStopArrCityName_s2={data.flightDetails[1].arrCity.name}
                  returnOneStopAirlineCode_s1={data.flightDetails[0].airline.code}
                  returnOneStopAirlineCode_s2={data.flightDetails[1].airline.code}
                  returnOneStopAirlineName_s1={data.flightDetails[0].airline.name}
                  returnOneStopAirlineName_s2={data.flightDetails[1].airline.name}
                  returnOneStopFlightNumber_s1={data.flightDetails[0].flightNumber}
                  returnOneStopFlightNumber_s2={data.flightDetails[1].flightNumber}
                  returnOneStopOperatedAirlineCode_s1={data.flightDetails[0].operatedAirline.code}
                  returnOneStopOperatedAirlineCode_s2={data.flightDetails[1].operatedAirline.code}
                  returnOneStopOperatedAirlineName_s1={data.flightDetails[0].operatedAirline.name}
                  returnOneStopOperatedAirlineName_s2={data.flightDetails[1].operatedAirline.name}
                  returnOneStopDepartureDateTime_s1={data.flightDetails[0].departureDateTime}
                  returnOneStopDepartureDateTime_s2={data.flightDetails[1].departureDateTime}
                  returnOneStoparriveDateTime_s1={data.flightDetails[0].arrivalDateTime}
                  returnOneStoparriveDateTime_s2={data.flightDetails[1].arrivalDateTime}
                  returnOneStopRBD_s1={selectedRBD_s1.rbd}
                  returnOneStopRBD_s2={selectedRBD_s2.rbd}
                  returnOneStopSeq_s1={data.flightDetails[0].Seq}
                  returnOneStopSeq_s2={data.flightDetails[1].Seq}
                />
              );
            }
          });
        })}

      {/* // for future */}
      {/* {checkedAny === "twoStop" &&
        twoStopFilter.map((data) => {
          return (
            <CardReturnTwoStopFlightFilter
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

      {checkedAny === "twoStop" &&
        twoStopFilter.map((data, index) => {
          const flightArray = data.flightDetails.filter((el) => {
            if (checkboxArray2.checkboxArray2.length === 0) {
              return data.flightDetails;
            } else {
              const isInArray = checkboxArray2.checkboxArray2.find((i) => {
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
            const selectedRBD_s1 = data.flightDetails[0].productInfo.find((el) => {
              if (access.adult <= el.availabilityStatus) {
                return el;
              }
            });

            const selectedRBD_s2 = data.flightDetails[1].productInfo.find((el) => {
              if (access.adult <= el.availabilityStatus) {
                return el;
              }
            });

            const selectedRBD_s3 = data.flightDetails[2].productInfo.find((el) => {
              if (access.adult <= el.availabilityStatus) {
                return el;
              }
            });

            if (el.Seq === 1) {
              return (
                <CardReturnTwoStopFlightFilter
                  key={idx}
                  src={data.flightDetails[0].airline.code}
                  airline={data.flightDetails[0].airline.name}
                  departureNameCity={data.flightDetails[0].depCity.name}
                  oneStopCity={data.flightDetails[0].arrCity.name}
                  twoStopCity={data.flightDetails[1].arrCity.name}
                  oneStopCodeCity={data.flightDetails[0].arrCity.code}
                  twoStopCodeCity={data.flightDetails[1].arrCity.code}
                  departureCodeCity={data.flightDetails[0].depCity.code}
                  departureDateTime={data.flightDetails[0].depDisplayDateTime.displayTime}
                  arriveNameCity={data.flightDetails[2].arrCity.name}
                  arriveCodeCity={data.flightDetails[2].arrCity.code}
                  arriveDateTime={data.flightDetails[2].arrDisplayDateTime.displayTime}
                  timeDuration={data.totalTime}
                  departureDateTimeSeq_1={data.flightDetails[0].depDisplayDateTime.displayTime}
                  departureDateTimeSeq_2={data.flightDetails[1].depDisplayDateTime.displayTime}
                  departureDateTimeSeq_3={data.flightDetails[2].depDisplayDateTime.displayTime}
                  arrivalDateTimeSeq_1={data.flightDetails[0].arrDisplayDateTime.displayTime}
                  arrivalDateTimeSeq_2={data.flightDetails[1].arrDisplayDateTime.displayTime}
                  arrivalDateTimeSeq_3={data.flightDetails[2].arrDisplayDateTime.displayTime}
                  flightNumberSeq1={data.flightDetails[0].flightNumber}
                  flightNumberSeq2={data.flightDetails[1].flightNumber}
                  flightNumberSeq3={data.flightDetails[2].flightNumber}
                  operatedAirlineNameSeq1={data.flightDetails[0].operatedAirline.name}
                  operatedAirlineNameSeq2={data.flightDetails[1].operatedAirline.name}
                  operatedAirlineNameSeq3={data.flightDetails[2].operatedAirline.name}
                  operatedAirlineCodeSeq1={data.flightDetails[0].operatedAirline.code}
                  operatedAirlineCodeSeq2={data.flightDetails[1].operatedAirline.code}
                  operatedAirlineCodeSeq3={data.flightDetails[2].operatedAirline.code}
                  seqOneFlight={data.flightDetails[0].seq}
                  seqTwoFlight={data.flightDetails[1].seq}
                  seqThreeFlight={data.flightDetails[2].seq}
                  //new
                  returnTwoStopDepCityCode_s1={data.flightDetails[0].depCity.code}
                  returnTwoStopDepCityCode_s2={data.flightDetails[1].depCity.code}
                  returnTwoStopDepCityCode_s3={data.flightDetails[2].depCity.code}
                  returnTwoStopDepCityName_s1={data.flightDetails[0].depCity.name}
                  returnTwoStopDepCityName_s2={data.flightDetails[1].depCity.name}
                  returnTwoStopDepCityName_s3={data.flightDetails[2].depCity.name}
                  returnTwoStopArrCityCode_s1={data.flightDetails[0].arrCity.code}
                  returnTwoStopArrCityCode_s2={data.flightDetails[1].arrCity.code}
                  returnTwoStopArrCityCode_s3={data.flightDetails[2].arrCity.code}
                  returnTwoStopArrCityName_s1={data.flightDetails[0].arrCity.name}
                  returnTwoStopArrCityName_s2={data.flightDetails[1].arrCity.name}
                  returnTwoStopArrCityName_s3={data.flightDetails[2].arrCity.name}
                  returnTwoStopAirlineCode_s1={data.flightDetails[0].airline.code}
                  returnTwoStopAirlineCode_s2={data.flightDetails[1].airline.code}
                  returnTwoStopAirlineCode_s3={data.flightDetails[2].airline.code}
                  returnTwoStopAirlineName_s1={data.flightDetails[0].airline.name}
                  returnTwoStopAirlineName_s2={data.flightDetails[1].airline.name}
                  returnTwoStopAirlineName_s3={data.flightDetails[2].airline.name}
                  returnTwoStopFlightNumber_s1={data.flightDetails[0].flightNumber}
                  returnTwoStopFlightNumber_s2={data.flightDetails[1].flightNumber}
                  returnTwoStopFlightNumber_s3={data.flightDetails[2].flightNumber}
                  returnTwoStopOperatedAirlineCode_s1={data.flightDetails[0].operatedAirline.code}
                  returnTwoStopOperatedAirlineCode_s2={data.flightDetails[1].operatedAirline.code}
                  returnTwoStopOperatedAirlineCode_s3={data.flightDetails[2].operatedAirline.code}
                  returnTwoStopOperatedAirlineName_s1={data.flightDetails[0].operatedAirline.name}
                  returnTwoStopOperatedAirlineName_s2={data.flightDetails[1].operatedAirline.name}
                  returnTwoStopOperatedAirlineName_s3={data.flightDetails[2].operatedAirline.name}
                  returnTwoStopDepartureDateTime_s1={data.flightDetails[0].departureDateTime}
                  returnTwoStopDepartureDateTime_s2={data.flightDetails[1].departureDateTime}
                  returnTwoStopDepartureDateTime_s3={data.flightDetails[2].departureDateTime}
                  returnTwoStoparriveDateTime_s1={data.flightDetails[0].arrivalDateTime}
                  returnTwoStoparriveDateTime_s2={data.flightDetails[1].arrivalDateTime}
                  returnTwoStoparriveDateTime_s3={data.flightDetails[2].arrivalDateTime}
                  returnTwoStopRBD_s1={selectedRBD_s1.rbd}
                  returnTwoStopRBD_s2={selectedRBD_s2.rbd}
                  returnTwoStopRBD_s3={selectedRBD_s3.rbd}
                  returnTwoStopSeq_s1={data.flightDetails[0].Seq}
                  returnTwoStopSeq_s2={data.flightDetails[1].Seq}
                  returnTwoStopSeq_s3={data.flightDetails[2].Seq}
                />
              );
            }
          });
        })}
    </>
  );
}

export default card2_copy;
