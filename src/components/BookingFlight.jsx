import React from 'react'
import Share from "../Page/Share";
import { useBetween } from 'use-between';
import 'antd/dist/antd.css';
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Card from "./card"
import Card2 from "./card2"

function BookingFlight() {
  const { bookingInfo, setBookingInfo } = useBetween(Share)
  const { triptype, setTriptype } = useBetween(Share)
  // console.log("BookingInfo", bookingInfo);

  const { longDate, setLongDate } = useBetween(Share)
  const { depCity, setDepCity } = useBetween(Share)
  const { year, setYear } = useBetween(Share)
  const { arrCity, setArrCityName } = useBetween(Share)
  const { airline, setAirline } = useBetween(Share)
  const { depTime, setDepTime } = useBetween(Share)
  const { arrTime, setArrTime } = useBetween(Share)
  const { name, setName } = useBetween(Share)
  const { RBD, setRBD } = useBetween(Share)
  const { flightNumber, setFlightNumber } = useBetween(Share)
  const { arrCityCode, setArrCityCode } = useBetween(Share)
  const { depCityCode, setDepCityCode } = useBetween(Share)
  const { adult, setAdult } = useBetween(Share)
  const { child, setChild } = useBetween(Share)
  const { infant, setInfant } = useBetween(Share)
  const { operateCode, setOperateCode } = useBetween(Share)
  const { operateName, setOperateName } = useBetween(Share)
  const { arrivalDateTime, setArrivalDateTime } = useBetween(Share)
  const { departureDateTime, setDepartureDateTime } = useBetween(Share)
  const { seq, setSeq } = useBetween(Share)
  const { longDate2, setLongDate2 } = useBetween(Share)
  const { year2, setYear2 } = useBetween(Share)
  const { depCity2, setDepCity2 } = useBetween(Share)
  const { arrCity2, setArrCityName2 } = useBetween(Share)
  const { airline2, setAirline2 } = useBetween(Share)
  const { depTime2, setDepTime2 } = useBetween(Share)
  const { arrTime2, setArrTime2 } = useBetween(Share)
  const { name2, setName2 } = useBetween(Share)
  const { RBD2, setRBD2 } = useBetween(Share)
  const { flightNumber2, setFlightNumber2 } = useBetween(Share)
  const { arrCityCode2, setArrCityCode2 } = useBetween(Share)
  const { depCityCode2, setDepCityCode2 } = useBetween(Share)
  const { operateCode2, setOperateCode2 } = useBetween(Share)
  const { operateName2, setOperateName2 } = useBetween(Share)
  const { arrivalDateTime2, setArrivalDateTime2 } = useBetween(Share)
  const { departureDateTime2, setDepartureDateTime2 } = useBetween(Share)
  const { seq2, setSeq2 } = useBetween(Share)

  let navigate = useNavigate();

  const { checkedDirect, setCheckedDirect } = useBetween(Share)
  const { checkedOneStop, setCheckedOneStop } = useBetween(Share)
  console.log("Direct", checkedDirect);
  console.log("One Stop", checkedOneStop);

  const handleChangeDirect = () => {
    setCheckedDirect(true);
    setCheckedOneStop(false);
  };

  const handleChangeOneStop = () => {
    setCheckedOneStop(true);
    setCheckedDirect(false);

  };

  const handleBooking = (
    name,
    flightNumber,
    arrCity,
    arrCityCode,
    longDate,
    depCity,
    depCityCode,
    // airCraft,
    depTime,
    arrTime,
    // totalTime,
    airline,
    adult,
    child,
    infant,
    operateCode,
    operateName,
    arrivalDateTime,
    departureDateTime,
    seq,
    name2,
    flightNumber2,
    arrCity2,
    arrCityCode2,
    longDate2,
    depCity2,
    depCityCode2,
    // airCraft2,
    depTime2,
    arrTime2,
    // totalTime2,
    airline2,
    // adult2,
    // child2,
    // infant2,
    operateCode2,
    operateName2,
    arrivalDateTime2,
    departureDateTime2,
    seq2,
    RBD2,
    RBD

  ) => {
    const BookingInfo_ = (Object.values(
      [{
        "noOfAdult": adult,
        "noOfChildren": child,
        "noOfInfants": infant,
        "svc_class": "Y",
        "depFlight": [{
          "depCity": {
            "code": depCityCode,
            "name": depCity,
          },
          "arrCity": {
            "code": arrCityCode,
            "name": arrCity
          },
          "airline": {
            "code": airline, //H1ntractInfo
            "name": name // Hahn Air
          },
          "flightNumber": flightNumber,
          "operatedAirline": {
            "code": operateCode,
            "name": operateName
          },
          "departureDateTime": departureDateTime,
          "arrivalDateTime": arrivalDateTime,
          "rbd": RBD,
          "Seq": seq,
          "longDate": longDate,
          "depTime": depTime,
          "arrTime": arrTime,
        }
          // name,
          // flightNumber,
          // arrCity,
          // arrCityCode,
          // longDate
          // depCity,
          // depCityCode,
          // airCraft,
          // depTime,
          // arrTime,
          // totalTime,
          // airline,
          // adult,
          // child,
          // infant,
          // operateCode,
          // operateName,
          // arrivalDateTime,
          // departureDateTime,
          // seq
        ],
        "retFlight": [{
          "depCity": {
            "code": depCityCode2,
            "name": depCity2,
          },
          "arrCity": {
            "code": arrCityCode2,
            "name": arrCity2
          },
          "airline": {
            "code": airline2, //H1
            "name": name2 // Hahn Air
          },
          "flightNumber": flightNumber2,
          "operatedAirline": {
            "code": operateCode2,
            "name": operateName2
          },
          "departureDateTime": departureDateTime2,
          "arrivalDateTime": arrivalDateTime2,
          "rbd": RBD2,
          "Seq": seq2,
          "longDate": longDate2,
          "depTime": depTime2,
          "arrTime": arrTime2
          // name2,
          // flightNumber2,
          // arrCity2,
          // arrCityCode2,
          // longDate2,
          // depCity2,
          // depCityCode2,
          // airCraft2,
          // depTime2,
          // arrTime2,
          // totalTime2,
          // airline2,
          // adult2,
          // child2,
          // infant2,
          // operateCode2,
          // operateName2,
          // arrivalDateTime2,
          // departureDateTime2,
          // seq2
        }],

        // "contractInfo": {
        //   "title": "MR",
        //   "firstname": "ning",
        //   "middlename": null,
        //   "lastname": "aisoft",
        //   "email": "butsanee@aisoftthailand.com",
        //   "telNo": "660891223223",
        //   "countryCode": "TH"
        // },
        // "adtPaxs": {},
        // "adtPaxs": [{}],
        // "chdPaxs": [{}],
        // "infPaxs": [{}],
        // "languageCode": "th"
      }
      ]));

    setBookingInfo(BookingInfo_)

    console.log("Booking suscess");
    // navigate("/ContractInfo", { replace: true });
  }

  // console.log("Booking", bookingInfo);

  return (
    <>
      <div className='flex mx-auto my-auto '>
        <div className='flex-none border border-white w-[30%]'>
          <div className='border-4 rounded-lg p-2 m-2'>
            <div className='border rounded-full p-1'>เที่ยวบินขาไป</div>
            <div className=''>
              <p>{longDate} {year}</p>
              <p>{depCity} - {arrCity}</p> <hr></hr>
              {
                 <p>Seat:{RBD}</p> 
              }
            </div>

            <div>
              <p>{name}</p>
              <p>{depTime}-{arrTime}</p>
            </div>
          </div>

          {triptype === "R" ?
            <div className='border-4 m-2 border rounded-lg p-2'>
              <div className='border rounded-full p-1'>เที่ยวบินขากลับ</div>
              <div className=''>
                <p>{longDate2} {year2}</p>
                <p>{depCity2} - {arrCity2}</p> <hr></hr>
                {
                <p>Seat:{RBD2}</p>
                }
              </div>

              <div>
                <p>{name2}</p>
                <p>{depTime2}-{arrTime2}</p>
              </div>
            </div> : null}

          <div className='border-4 m-2 border rounded-lg p-2'>
            <div className='border rounded-full p-1'>รายละเอียดเที่ยวบิน</div>
            <div className='my-2'>
              <p>จุดแวะพัก</p>
              <hr></hr>
            </div>

            <div className=''>
              {/* <label>
                <input className=''
                  type="checkbox"
                  checked={checkedDirect}
                  name="aa"
                  onChange={handleChangeDirect}
                /> &nbsp;
                Direct
              </label> */}
              <div>
                <input type="radio" id="NonStop" name="check" value="" onChange={handleChangeDirect} />
                <label className="mx-2" for="html">Non Stop</label>
              </div>

              <div>
                <input type="radio" id="OneStop" name="check" value="" onChange={handleChangeOneStop} />
                <label className="mx-2" for="OneStop">1 Stop</label>
              </div>
            </div>
          </div>

          {triptype === "R" ? <div className='flex justify-center items-center'>
            <div className='text-white font-bold text-lg lg:text-xl my-[2px] flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-500 hover:from-pink-500 hover:to-yellow-500  border-4 border-black rounded-full'>
              <center>
                <button type="button" onClick={() => handleBooking(
                  name,
                  flightNumber,
                  arrCity,
                  arrCityCode,
                  longDate,
                  depCity,
                  depCityCode,
                  // airCraft,
                  depTime,
                  arrTime,
                  // totalTime,
                  airline,
                  adult,
                  child,
                  infant,
                  operateCode,
                  operateName,
                  arrivalDateTime,
                  departureDateTime,
                  seq,
                  name2,
                  flightNumber2,
                  arrCity2,
                  arrCityCode2,
                  longDate2,
                  depCity2,
                  depCityCode2,
                  // airCraft2,
                  depTime2,
                  arrTime2,
                  // totalTime2,
                  airline2,
                  // adult2,
                  // child2,
                  // infant2,
                  operateCode2,
                  operateName2,
                  arrivalDateTime2,
                  departureDateTime2,
                  seq2,
                  RBD,
                  RBD2
                )}>Booking</button>
              </center>
            </div> 

          </div> : null}

          {triptype === "O" ? <div className='flex justify-center items-center'>
             <div className='text-white font-bold text-lg lg:text-xl my-[2px] flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-500 hover:from-pink-500 hover:to-yellow-500 h-[40px] w-[12rem] border-4 border-black rounded-full'>
              <center>
                <button type="button" onClick={() => handleBooking(
                  name,
                  flightNumber,
                  arrCity,
                  arrCityCode,
                  longDate,
                  depCity,
                  depCityCode,
                  // airCraft,
                  depTime,
                  arrTime,
                  // totalTime,
                  airline,
                  adult,
                  child,
                  infant,
                  operateCode,
                  operateName,
                  arrivalDateTime,
                  departureDateTime,
                  seq,
                  name2,
                  flightNumber2,
                  arrCity2,
                  arrCityCode2,
                  longDate2,
                  depCity2,
                  depCityCode2,
                  // airCraft2,
                  depTime2,
                  arrTime2,
                  // totalTime2,
                  airline2,
                  // adult2,
                  // child2,
                  // infant2,
                  operateCode2,
                  operateName2,
                  arrivalDateTime2,
                  departureDateTime2,
                  seq2,
                  RBD,
                  RBD2
                )}>Booking</button>
              </center>
            </div> 
          </div> : null}
        </div>


        <div className='flex'>
            <div className='flex flex-col '>
              <div className='flex justify-center my-2'>
                <p className='border-4 border-rounder rounded-full w-80 text-center font-bold'>เที่ยวบินขาไป (Departure)</p>
              </div>

              <div className='flex-initial border mx-2 my-2 overflow-y-scroll h-[35rem]'>
                <div className="w-[500px]">
                  <Card />
                </div>
              </div>
            </div> 
            

          {triptype === "R" ?
            <div className='flex flex-col'>
              <div className='flex justify-center my-2 '>
                <p className='border-4 border-rounder rounded-full w-80 text-center font-bold'>เที่ยวบินขากลับ (Return)</p>
              </div>
              <div className='flex-initial border mx-2 my-2 overflow-y-scroll h-[35rem]'>
                <div className="w-[500px]">
                  <Card2 />
                </div>
              </div>
            </div> : null}
        </div>
      </div>
    </>
  )
}

export default BookingFlight