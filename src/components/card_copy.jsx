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

  const access_ = localStorage.access_;
  const value_ = encryptStorage1.decryptString(access_);
  const access = JSON.parse(value_);

  const localStorageDepartureFlight = localStorage.dataSearch;
  const value = encryptStorage1.decryptString(localStorageDepartureFlight);

  const departureFlight = JSON.parse(value).data.departureFlight;
  // console.log("departureFlight",departureFlight);



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
      window.location.href = "https://front-nftant-uat.azurewebsites.net/";
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

              const productInfoReverse_s1 = [...data.flightDetails[0].productInfo].reverse();
              const selectedRBD = productInfoReverse_s1.find((el) => {
                if (access.adult <= el.availabilityStatus) {
                  return el;
                }
              });

              return (
                <CardDirectFlightFilter
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
                  flightNumber={el.flightNumber}
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
                  <CardOneStopFlightFilter
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

          if (data.flightDetails.length === 3) {
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
                  <CardTwoStopFlightFilter
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
                   depTwoStopDepCityCode_s1={data.flightDetails[0].depCity.code}
                   depTwoStopDepCityCode_s2={data.flightDetails[1].depCity.code}
                   depTwoStopDepCityCode_s3={data.flightDetails[2].depCity.code}
                   depTwoStopDepCityName_s1={data.flightDetails[0].depCity.name}
                   depTwoStopDepCityName_s2={data.flightDetails[1].depCity.name}
                   depTwoStopDepCityName_s3={data.flightDetails[2].depCity.name}
                   depTwoStopArrCityCode_s1={data.flightDetails[0].arrCity.code}
                   depTwoStopArrCityCode_s2={data.flightDetails[1].arrCity.code}
                   depTwoStopArrCityCode_s3={data.flightDetails[2].arrCity.code}
                   depTwoStopArrCityName_s1={data.flightDetails[0].arrCity.name}
                   depTwoStopArrCityName_s2={data.flightDetails[1].arrCity.name}
                   depTwoStopArrCityName_s3={data.flightDetails[2].arrCity.name}
                   depTwoStopAirlineCode_s1={data.flightDetails[0].airline.code}
                   depTwoStopAirlineCode_s2={data.flightDetails[1].airline.code}
                   depTwoStopAirlineCode_s3={data.flightDetails[2].airline.code}
                   depTwoStopAirlineName_s1={data.flightDetails[0].airline.name}
                   depTwoStopAirlineName_s2={data.flightDetails[1].airline.name}
                   depTwoStopAirlineName_s3={data.flightDetails[2].airline.name}
                   depTwoStopFlightNumber_s1={data.flightDetails[0].flightNumber}
                   depTwoStopFlightNumber_s2={data.flightDetails[1].flightNumber}
                   depTwoStopFlightNumber_s3={data.flightDetails[2].flightNumber}
                   depTwoStopOperatedAirlineCode_s1={data.flightDetails[0].operatedAirline.code}
                   depTwoStopOperatedAirlineCode_s2={data.flightDetails[1].operatedAirline.code}
                   depTwoStopOperatedAirlineCode_s3={data.flightDetails[2].operatedAirline.code}
                   depTwoStopOperatedAirlineName_s1={data.flightDetails[0].operatedAirline.name}
                   depTwoStopOperatedAirlineName_s2={data.flightDetails[1].operatedAirline.name}
                   depTwoStopOperatedAirlineName_s3={data.flightDetails[2].operatedAirline.name}
                   depTwoStopDepartureDateTime_s1={data.flightDetails[0].departureDateTime}
                   depTwoStopDepartureDateTime_s2={data.flightDetails[1].departureDateTime}
                   depTwoStopDepartureDateTime_s3={data.flightDetails[2].departureDateTime}
                   depTwoStoparriveDateTime_s1={data.flightDetails[0].arrivalDateTime}
                   depTwoStoparriveDateTime_s2={data.flightDetails[1].arrivalDateTime}
                   depTwoStoparriveDateTime_s3={data.flightDetails[2].arrivalDateTime}
                   depTwoStopRBD_s1={selectedRBD_s1.rbd}
                   depTwoStopRBD_s2={selectedRBD_s2.rbd}
                   depTwoStopRBD_s3={selectedRBD_s3.rbd}
                   depTwoStopSeq_s1={data.flightDetails[0].Seq}
                   depTwoStopSeq_s2={data.flightDetails[1].Seq}
                   depTwoStopSeq_s3={data.flightDetails[2].Seq}
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
              const productInfoReverse_s1 = [...data.flightDetails[0].productInfo].reverse();
              const selectedRBD = productInfoReverse_s1.find((el) => {
                if (access.adult <= el.availabilityStatus) {
                  return el;
                }
              });

              return (
                <CardDirectFlightFilter
                  key={index}
                  // src={`src/assets/img/square/${data.flightDetails[0].airline.code}.png`}
                  src={el.airline.code}
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
                <CardOneStopFlightFilter
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
      {checkedAny === "twoStop" &&
        twoStopFilter.map((data, index) => {
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
                <CardTwoStopFlightFilter
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
                  depTwoStopDepCityCode_s1={data.flightDetails[0].depCity.code}
                   depTwoStopDepCityCode_s2={data.flightDetails[1].depCity.code}
                   depTwoStopDepCityCode_s3={data.flightDetails[2].depCity.code}
                   depTwoStopDepCityName_s1={data.flightDetails[0].depCity.name}
                   depTwoStopDepCityName_s2={data.flightDetails[1].depCity.name}
                   depTwoStopDepCityName_s3={data.flightDetails[2].depCity.name}
                   depTwoStopArrCityCode_s1={data.flightDetails[0].arrCity.code}
                   depTwoStopArrCityCode_s2={data.flightDetails[1].arrCity.code}
                   depTwoStopArrCityCode_s3={data.flightDetails[2].arrCity.code}
                   depTwoStopArrCityName_s1={data.flightDetails[0].arrCity.name}
                   depTwoStopArrCityName_s2={data.flightDetails[1].arrCity.name}
                   depTwoStopArrCityName_s3={data.flightDetails[2].arrCity.name}
                   depTwoStopAirlineCode_s1={data.flightDetails[0].airline.code}
                   depTwoStopAirlineCode_s2={data.flightDetails[1].airline.code}
                   depTwoStopAirlineCode_s3={data.flightDetails[2].airline.code}
                   depTwoStopAirlineName_s1={data.flightDetails[0].airline.name}
                   depTwoStopAirlineName_s2={data.flightDetails[1].airline.name}
                   depTwoStopAirlineName_s3={data.flightDetails[2].airline.name}
                   depTwoStopFlightNumber_s1={data.flightDetails[0].flightNumber}
                   depTwoStopFlightNumber_s2={data.flightDetails[1].flightNumber}
                   depTwoStopFlightNumber_s3={data.flightDetails[2].flightNumber}
                   depTwoStopOperatedAirlineCode_s1={data.flightDetails[0].operatedAirline.code}
                   depTwoStopOperatedAirlineCode_s2={data.flightDetails[1].operatedAirline.code}
                   depTwoStopOperatedAirlineCode_s3={data.flightDetails[2].operatedAirline.code}
                   depTwoStopOperatedAirlineName_s1={data.flightDetails[0].operatedAirline.name}
                   depTwoStopOperatedAirlineName_s2={data.flightDetails[1].operatedAirline.name}
                   depTwoStopOperatedAirlineName_s3={data.flightDetails[2].operatedAirline.name}
                   depTwoStopDepartureDateTime_s1={data.flightDetails[0].departureDateTime}
                   depTwoStopDepartureDateTime_s2={data.flightDetails[1].departureDateTime}
                   depTwoStopDepartureDateTime_s3={data.flightDetails[2].departureDateTime}
                   depTwoStoparriveDateTime_s1={data.flightDetails[0].arrivalDateTime}
                   depTwoStoparriveDateTime_s2={data.flightDetails[1].arrivalDateTime}
                   depTwoStoparriveDateTime_s3={data.flightDetails[2].arrivalDateTime}
                   depTwoStopRBD_s1={selectedRBD_s1.rbd}
                   depTwoStopRBD_s2={selectedRBD_s2.rbd}
                   depTwoStopRBD_s3={selectedRBD_s3.rbd}
                   depTwoStopSeq_s1={data.flightDetails[0].Seq}
                   depTwoStopSeq_s2={data.flightDetails[1].Seq}
                   depTwoStopSeq_s3={data.flightDetails[2].Seq}
                />
              );
            }
          });
        })}
    </>
  );
}

export default card_copy;
