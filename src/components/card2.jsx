import React from 'react'
import Share from "../Page/Share";
import { useBetween } from 'use-between';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Radio } from 'antd';


function card() {
    const { share } = useBetween(Share)
    const { info } = useBetween(Share)
    const { bookingInfo_, setBookingInfo } = useBetween(Share)
    const { triptype, setTriptype } = useBetween(Share)
    const { checkedDirect, setCheckedDirect } = useBetween(Share)
    const { checkedOneStop, setCheckedOneStop } = useBetween(Share)
    // console.log(checkedDirect);
    // console.log(checkedOneStop);
    // console.log(bookingInfo_);
    // console.log(share);
    // console.log(info);

    // const departureFlight = share.data.departureFlight;
    const returnFlight = share.data.returnFlight;
    console.log(returnFlight);

    // returnFlight.forEach((item) => {
    //     item.showDetail = true;
    //     console.log(item); 
    // })

    // console.log("Seq:0",returnFlight.map((seq0) => seq0.flightDetails[0]));
    // console.log("Seq:1",returnFlight.map((seq1) => seq1.flightDetails[1]));

    // const [any_, setAny_] = useState([]);
    // const [objDirect_, setobjDirect_] = useState([]);
    // const [objOneStop_, setobjOneStop_] = useState([]);
    // const [objTwoStop_, setobjTwoStop_] = useState([]);


    // const [tempData, setTempData] = useState([])
    // console.log(tempData);

    //รายละเอียดเที่ยวบิน(Seq:1)
    const [depDisplayTime_1, setdepDisplayTime_1] = useState()
    console.log(depDisplayTime_1);
    const [depShortDateWithoutDay_1, setdepShortDateWithoutDay_1] = useState()
    console.log(depShortDateWithoutDay_1);
    const [arrDisplayTime_1, setarrDisplayTime_1] = useState()
    console.log(arrDisplayTime_1);
    const [arrShortDateWithoutDay_1, setarrShortDateWithoutDay_1] = useState()
    console.log(arrShortDateWithoutDay_1);
    const [depCity_1, setdepCity_1] = useState()
    console.log(depCity_1);
    const [depCityCode_1, setdepCityCode_1] = useState()
    console.log(depCityCode_1);
    const [arrCityCode_1, setarrCityCode_1] = useState()
    console.log(arrCityCode_1);
    const [arrCityName_1, setarrCityName_1] = useState()
    console.log(arrCityName_1);
    const [airlineName_1, setAirlineName_1] = useState()
    console.log(airlineName_1);
    const [flightNumber_1, setFlightNumber_1] = useState()
    console.log(flightNumber_1);
    const [operatedAirline_1, setOperatedAirline_1] = useState()
    console.log(operatedAirline_1);
    const [airlineCode_1, setairlineCode_1] = useState()
    console.log(airlineCode_1);

    //รายละเอียดเที่ยวบิน(Seq:2)
    const [depDisplayTime_2, setdepDisplayTime_2] = useState()
    console.log(depDisplayTime_2);
    const [depShortDateWithoutDay_2, setdepShortDateWithoutDay_2] = useState()
    console.log(depShortDateWithoutDay_2);
    const [arrDisplayTime_2, setarrDisplayTime_2] = useState()
    console.log(arrDisplayTime_2);
    const [arrShortDateWithoutDay_2, setarrShortDateWithoutDay_2] = useState()
    console.log(arrShortDateWithoutDay_2);
    const [depCity_2, setdepCity_2] = useState()
    console.log(depCity_2);
    const [depCityCode_2, setdepCityCode_2] = useState()
    console.log(depCityCode_2);
    const [arrCityCode_2, setarrCityCode_2] = useState()
    console.log(arrCityCode_2);
    const [arrCityName_2, setarrCityName_2] = useState()
    console.log(arrCityName_2);
    const [airlineName_2, setAirlineName_2] = useState()
    console.log(airlineName_2);
    const [flightNumber_2, setFlightNumber_2] = useState()
    console.log(flightNumber_2);
    const [operatedAirline_2, setOperatedAirline_2] = useState()
    console.log(operatedAirline_2);
    const [airlineCode_2, setairlineCode_2] = useState()
    console.log(airlineCode_2);

    const handleShowDetail = (data) => {
        let tempData = [data.flightDetails[0], data.flightDetails[1], data.flightDetails[2]]
        console.log(tempData);

        //Detail for Seq:1 
        setdepDisplayTime_1(tempData[0].depDisplayDateTime.displayTime)
        setdepShortDateWithoutDay_1(tempData[0].depDisplayDateTime.shortDateWithoutDay)
        setarrDisplayTime_1(tempData[0].arrDisplayDateTime.displayTime)
        setarrShortDateWithoutDay_1(tempData[0].arrDisplayDateTime.shortDateWithoutDay)
        setdepCity_1(tempData[0].depCity.name)
        setdepCityCode_1(tempData[0].depCity.code)
        setarrCityCode_1(tempData[0].arrCity.code)
        setarrCityName_1(tempData[0].arrCity.name)
        setAirlineName_1(tempData[0].airline.name)
        setFlightNumber_1(tempData[0].flightNumber)
        setOperatedAirline_1(tempData[0].operatedAirline.name)
        setairlineCode_1(tempData[0].airline.code)
        setLongDate_1(tempData[0].airline.code)

        //Detail for Seq:2 
        setdepDisplayTime_2(tempData[1].depDisplayDateTime.displayTime)
        setdepShortDateWithoutDay_2(tempData[1].depDisplayDateTime.shortDateWithoutDay)
        setarrDisplayTime_2(tempData[1].arrDisplayDateTime.displayTime)
        setarrShortDateWithoutDay_2(tempData[1].arrDisplayDateTime.shortDateWithoutDay)
        setdepCity_2(tempData[1].depCity.name)
        setdepCityCode_2(tempData[1].depCity.code)
        setarrCityCode_2(tempData[1].arrCity.code)
        setarrCityName_2(tempData[1].arrCity.name)
        setAirlineName_2(tempData[1].airline.name)
        setFlightNumber_2(tempData[1].flightNumber)
        setOperatedAirline_2(tempData[1].operatedAirline.name)
        setairlineCode_2(tempData[1].airline.code)
    }


    // console.log("any_", any_);
    // console.log("objDirect_", objDirect_);
    // console.log("objOneStop_", objOneStop_);
    // console.log("objTwoStop_", objTwoStop_);

    // const objNewOnestop = () => {

    //     const any = [];
    //     const non = [];
    //     const stp1 = [];
    //     const stp2 = [];

    //     //Direct Flight
    //     const objDirect_ = returnFlight
    //         .filter((data) => data.flightDetails.length === 1)
    //         .map((data) => data.flightDetails[0])

    //     //One Stop Flight
    //     const objOneStop_0 = returnFlight
    //         .filter((data) => data.flightDetails.length === 2)
    //         .map((data) => data.flightDetails[0])

    //     const objOneStop_1 = returnFlight
    //         .filter((data) => data.flightDetails.length === 2)
    //         .map((data) => data.flightDetails[1])

    //     //Two Stop Flight
    //     const objTwoStop_0 = returnFlight
    //         .filter((data) => data.flightDetails.length === 3)
    //         .map((data) => data.flightDetails[0])

    //     const objTwoStop_1 = returnFlight
    //         .filter((data) => data.flightDetails.length === 3)
    //         .map((data) => data.flightDetails[1])

    //     const objTwoStop_2 = returnFlight
    //         .filter((data) => data.flightDetails.length === 3)
    //         .map((data) => data.flightDetails[2])


    //     any.push(objDirect_, objOneStop_0, objOneStop_1, objTwoStop_0, objTwoStop_1, objTwoStop_2);
    //     non.push(objDirect_);
    //     stp1.push(objOneStop_0, objOneStop_1);
    //     stp2.push(objTwoStop_0, objTwoStop_1, objTwoStop_2);

    //     setAny_(any)
    //     setobjDirect_(non)
    //     setobjOneStop_(stp1)
    //     setobjTwoStop_(stp2)
    // }

    // useEffect(() => {
    //     objNewOnestop();
    // }, [])



    const selectFlight = info;

    let navigate = useNavigate();

    const onChangeDeparture = (e, item) => {
        console.log('radio checked', e.target.value); //Check ที่นั่ง
        item.status = e.target.value;
    };

    const onChangeReturn = (e, item) => { //Check ที่นั่ง
        item.status = e.target.value;
    };

    const handleAccountsChanged = () => {
        window.ethereum.on('accountsChanged', (newAccount, string) => {
            window.location.href = "http://localhost:3000/";
        });
    }

    useEffect(() => {
        handleAccountsChanged();
    }, [handleAccountsChanged]);

    // const {airline, setAirline} = useState('')
    // const {name, setName} = useState('')
    // const [flightNumber, setFlightNumber] = useState('')
    // const {arrCity, setArrCityName} = useState('')
    // const [arrCityCode, setArrCityCode] = useState('')
    // const {longDate, setLongDate} = useState('')
    // const [depCityCode, setDepCityCode] = useState('')
    // const {depCity, setDepCity} = useState('')
    // const [airCraft, setAirCraft] = useState('')
    // const {depTime, setDepTime} = useState('')
    // const {arrTime, setArrTime} = useState('')
    // const [totalTime, setTotalTime] = useState('')

    // const [adult, setAdult] = useState('')
    // const [child, setChild] = useState('')
    // const [infant, setInfant] = useState('')

    // const [operateCode, setOperateCode] = useState('')
    // const [operateName, setOperateName] = useState('')
    // const [arrivalDateTime, setArrivalDateTime] = useState('')
    // const [departureDateTime, setDepartureDateTime] = useState('')
    // const [seq, setSeq] = useState('')
    // const {RBD, setRBD} = useState('')
    // const {year, setYear} = useState('')


    // const handleDepartureSelected = (data2, data) => {
    //     console.log(data2.airline.code); // H1
    //     setAirline(data2.airline.code)
    //     console.log(data2.airline.name); // Hahn Air
    //     setName(data2.airline.name)
    //     console.log(data2.flightNumber); // 4727
    //     setFlightNumber(data2.flightNumber);
    //     console.log(data2.arrCity.name); // Chiang Mai Int'l, เชียงใหม่
    //     setArrCityName(data2.arrCity.name)
    //     console.log(data2.arrCity.code);
    //     setArrCityCode(data2.arrCity.code)
    //     console.log(data2.arrDisplayDateTime.longDate);
    //     setLongDate(data2.arrDisplayDateTime.longDate)
    //     console.log(data2.depCity.code);
    //     setDepCityCode(data2.depCity.code)
    //     console.log(data2.depCity.name);
    //     setDepCity(data2.depCity.name);
    //     console.log(data2.typeOfAircraft);
    //     setAirCraft(data2.typeOfAircraft);
    //     console.log(data2.depDisplayDateTime.displayTime);
    //     setDepTime(data2.depDisplayDateTime.displayTime);
    //     console.log(data2.arrDisplayDateTime.displayTime);
    //     setArrTime(data2.arrDisplayDateTime.displayTime);
    //     console.log(data.totalTime);
    //     setTotalTime(data.totalTime);
    //     console.log(selectFlight.adult)
    //     setAdult(selectFlight.adult);
    //     console.log(selectFlight.child)
    //     setChild(selectFlight.child);
    //     console.log(selectFlight.infant)
    //     setInfant(selectFlight.infant);
    //     console.log(data2.operatedAirline.code)
    //     setOperateCode(data2.operatedAirline.code);
    //     console.log(data2.operatedAirline.name)
    //     setOperateName(data2.operatedAirline.name);
    //     console.log(data2.arrivalDateTime);
    //     setArrivalDateTime(data2.arrivalDateTime)
    //     console.log(data2.departureDateTime);
    //     setDepartureDateTime(data2.departureDateTime)
    //     console.log("Seq", data2.Seq);
    //     setSeq(data2.Seq);
    //     console.log(data2.status);
    //     setRBD(data2.status)
    //     console.log(data2.depDisplayDateTime.year);
    //     setYear(data2.depDisplayDateTime.year)
    // }

    // const { airline2, setAirline2 } = useBetween(Share)
    // const { name2, setName2 } = useBetween(Share)
    // const { flightNumber2, setFlightNumber2 } = useBetween(Share)
    // const { arrCity2, setArrCityName2 } = useBetween(Share)
    // const { arrCityCode2, setArrCityCode2 } = useBetween(Share)
    // const { longDate2, setLongDate2 } = useBetween(Share)
    // const { depCityCode2, setDepCityCode2 } = useBetween(Share)
    // const { depCity2, setDepCity2 } = useBetween(Share)
    // const [airCraft2, setAirCraft2] = useState('')
    // const { depTime2, setDepTime2 } = useBetween(Share)
    // const { arrTime2, setArrTime2 } = useBetween(Share)
    // const [totalTime2, setTotalTime2] = useState('')

    // const [adult2, setAdult2] = useState('')
    // const [child2, setChild2] = useState('')
    // const [infant2, setInfant2] = useState('')

    // const { operateCode2, setOperateCode2 } = useBetween(Share)
    // const { operateName2, setOperateName2 } = useBetween(Share)
    // const { arrivalDateTime2, setArrivalDateTime2 } = useBetween(Share)
    // const { departureDateTime2, setDepartureDateTime2 } = useBetween(Share)
    // const { seq2, setSeq2 } = useBetween(Share)
    // const { RBD2, setRBD2 } = useBetween(Share)
    // const { year2, setYear2 } = useBetween(Share)


    // const handleArrSelected = (data) => { 
    //     console.log(data);
    //     console.log(data.airline.code);
    //     setAirline2(data.airline.code)
    //     console.log(data.airline.name);
    //     setName2(data.airline.name)
    //     console.log(data.flightNumber);
    //     setFlightNumber2(data.flightNumber);
    //     console.log(data.arrCity.name);
    //     setArrCityName2(data.arrCity.name)
    //     console.log(data.arrCity.code);
    //     setArrCityCode2(data.arrCity.code)
    //     console.log(data.arrDisplayDateTime.longDate);
    //     setLongDate2(data.arrDisplayDateTime.longDate)
    //     console.log(data.depCity.code);
    //     setDepCityCode2(data.depCity.code)
    //     console.log(data.depCity.name);
    //     setDepCity2(data.depCity.name);
    //     console.log(data.typeOfAircraft);
    //     setAirCraft2(data.typeOfAircraft);
    //     console.log(data.depDisplayDateTime.displayTime);
    //     setDepTime2(data.depDisplayDateTime.displayTime);
    //     console.log(data.arrDisplayDateTime.displayTime);
    //     setArrTime2(data.arrDisplayDateTime.displayTime);
    //     console.log(data_.totalTime);
    //     setTotalTime2(data_.totalTime);
    //     console.log(selectFlight.adult)
    //     setAdult2(selectFlight.adult);
    //     console.log(selectFlight.child)
    //     setChild2(selectFlight.child);
    //     console.log(selectFlight.infant)
    //     setInfant2(selectFlight.infant);
    //     console.log(data.operatedAirline.code)
    //     setOperateCode2(data.operatedAirline.code);
    //     console.log(data.operatedAirline.name)
    //     setOperateName2(data.operatedAirline.name);
    //     console.log(data.arrivalDateTime);
    //     setArrivalDateTime2(data.arrivalDateTime)
    //     console.log(data.departureDateTime);
    //     setDepartureDateTime2(data.departureDateTime)
    //     console.log(data.Seq);
    //     setSeq2(data.Seq);
    //     console.log(data.status);
    //     setRBD2(data.status)
    //     console.log(data.depDisplayDateTime.year);
    //     setYear2(data.depDisplayDateTime.year)

    // }

    // const handleBooking = (
    // name,
    // flightNumber,
    // arrCity,
    // arrCityCode,
    // longDate,
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
    // seq,
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
    // seq2,
    // RBD2,
    // RBD

    // ) => {
    // const BookingInfo_ = (Object.values(
    //     [{
    //         "noOfAdult": adult,
    //         "noOfChildren": child,
    //         "noOfInfants": infant,
    //         "svc_class": "Y",
    //         "depFlight": [{
    //             "depCity": {
    //                 "code": depCityCode,
    //                 "name": depCity,
    //             },
    //             "arrCity": {
    //                 "code": arrCityCode,
    //                 "name": arrCity
    //             },
    //             "airline": {
    //                 "code": airline, //H1ntractInfo
    //                 "name": name // Hahn Air
    //             },
    //             "flightNumber": flightNumber,
    //             "operatedAirline": {
    //                 "code": operateCode,
    //                 "name": operateName
    //             },
    //             "departureDateTime": departureDateTime,
    //             "arrivalDateTime": arrivalDateTime,
    //             "rbd": RBD,
    //             "Seq": seq,
    //             "longDate": longDate,
    //             "depTime": depTime,
    //             "arrTime": arrTime,
    //         }
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
    // ],
    // "retFlight": [{
    //     "depCity": {
    //         "code": depCityCode2,
    //         "name": depCity2,
    //     },
    //     "arrCity": {
    //         "code": arrCityCode2,
    //         "name": arrCity2
    //     },
    //     "airline": {
    //         "code": airline2, //H1
    //         "name": name2 // Hahn Air
    //     },
    //     "flightNumber": flightNumber2,
    //     "operatedAirline": {
    //         "code": operateCode2,
    //         "name": operateName2
    //     },
    //     "departureDateTime": departureDateTime2,
    //     "arrivalDateTime": arrivalDateTime2,
    //     "rbd": RBD2,
    //     "Seq": seq2,
    //     "longDate": longDate2,
    //     "depTime": depTime2,
    //     "arrTime": arrTime2
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
    // }],

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
    //         }
    //         ]));
    //     setBookingInfo(BookingInfo_)
    //     navigate("/ContractInfo", { replace: true });
    // }

    // console.log("Booking", BookingInfo_);
    return (
        <div className="">
            {checkedDirect ?
                returnFlight
                    .filter(data => data.flightDetails.length === 1)
                    .map((data, index) => (
                        <div key={index} className=""> {
                            // data.flightDetails[0].airline.code
                            <div className='p-2 my-4 mx-2 border-gray border rounded-box shadow-lg'>
                                <img className="w-12" src={`src/assets/img/square/${data.flightDetails[0].airline.code}.png`} alt="Icon" />
                                <div className='flex justify-between'>
                                    <p>{data.flightDetails[0].airline.name}</p>
                                    <div className='text-right'>
                                        <p>{data.flightDetails[0].depDisplayDateTime.shortDate} {data.flightDetails[0].depDisplayDateTime.year}</p>
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='flex justify-around mt-4 text-center'>
                                        <div className=''>
                                            <p className=''>{data.flightDetails[0].depDisplayDateTime.displayTime}</p>
                                            <p className=''>{data.flightDetails[0].depCity.code}</p>
                                        </div>

                                        <div className='text-center'>
                                            <p>Direct</p>
                                            <svg width="300" height="9" viewBox="0 0 358 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.19141 4.21484L352.733 4.21486" stroke="#004FBC" />
                                                <circle cx="4" cy="4.5" r="3.5" fill="#DEDEDE" stroke="#004FBC" />
                                                <circle cx="179" cy="4.5" r="3.5" fill="white" stroke="#004FBC" />
                                                <circle cx="354" cy="4.5" r="3.5" fill="#DEDEDE" stroke="#004FBC" />
                                            </svg>
                                            <p>{data.totalTime} ชั่วโมง</p>
                                        </div>

                                        <div className=''>
                                            <p className=''>{data.flightDetails[0].arrDisplayDateTime.displayTime}</p>
                                            <p className=''>{data.flightDetails[0].arrCity.code}</p>
                                        </div>
                                    </div>

                                </div>

                                <div className=''>

                                    {/* <Radio.Group className="grid grid-cols-5 mx-2 " name={"back"} onChange={(e) => onChangeDeparture(e, data2)}>
                                    {data2.productInfo.map((data3, index3) => (<Radio value={data3.rbd} key={index + '' + index2 + '' + index3 + '' + data2.bookingCode}>{data3.rbd} {data3.availabilityStatus}</Radio>))}
                                </Radio.Group> */}
                                </div>
                                <div className='flex justify-center my-4'>
                                    <button className="text-white  text-lg lg:text-lg my-[2px] flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-500 hover:from-pink-500 hover:to-yellow-500 h-[2rem] w-[6rem]  border-2 border-black rounded-full" type="button" onClick={() => handleShowDetail(data)}>Select</button>
                                </div>

                                <div className=''>
                                    <div tabIndex={index} className="collapse" onClick={() => handleShowDetail(data)}>
                                        <div className="cursor-pointer focus:cursor-auto hover:text-sky-400 font-bold mx-4">
                                            รายละเอียดเที่ยวบิน
                                        </div>

                                        <div className="collapse-content">
                                            <div className='flex'>
                                                <div className='flex w-[100px]'>
                                                    <div className='flex flex-col items-center'>
                                                        <p className=''>{depDisplayTime_1}</p>
                                                        <p className=''>{depShortDateWithoutDay_1}</p>
                                                        <p className='my-auto'></p> 
                                                        <p className=''>{arrDisplayTime_1}</p>
                                                        <p className=''>{arrShortDateWithoutDay_1}</p>
                                                    </div>

                                                    <div className=''>
                                                        <img src='src/assets/img/LineairPlane.jpg' alt="LineairPlane" />
                                                    </div>
                                                </div>



                                                <div className='flex flex-col w-full ml-4'>
                                                    <div className='flex flex-col justify-start text-start'>
                                                        <p className=''>{depCity_1}</p>
                                                        <p className=''>({depCityCode_1})</p>
                                                    </div>

                                                    <div className='flex border border-black rounded-box my-auto p-2 text-start'>
                                                        <div>
                                                            <img className="w-100%" src={`src/assets/img/square/${data.flightDetails[0].airline.code}.png`} alt="Icon" />
                                                        </div>

                                                        <div className='flex flex-col ml-4 w-full'>
                                                            <p className=''>{airlineName_1}</p>
                                                            <div className='flex justify-between'>
                                                                <p className=''>Flight No.</p>
                                                                <p className=''>{airlineCode_1} {flightNumber_1} </p>
                                                            </div>

                                                            <div className='flex justify-between'>
                                                                <p>Operate By : </p>
                                                                <p className=''>{operatedAirline_1}</p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className='flex flex-col justify-start text-start'>
                                                        <p className=''>{arrCityName_1}</p>
                                                        <p className=''>({arrCityCode_1})</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        }
                        </div>
                    ))
                : null}

            {checkedOneStop ?
                returnFlight
                    .filter(data => data.flightDetails.length === 2)
                    .map((data, index) => (
                        <div key={index} className=""> {
                            // data.flightDetails[0].airline.code
                            <div className='p-2 my-4 mx-2 border-gray border rounded-box shadow-lg'>
                                
                                <div className='flex'>
                                <img className="w-100% " src={`src/assets/img/square/${data.flightDetails[0].airline.code}.png`} alt="Icon" />
                                <img className="w-8 h-8 ml-4" src={`src/assets/img/square/${data.flightDetails[1].airline.code}.png`} alt="Icon" />
                                </div>
                                <div className='flex justify-between'>
                                    <p>{data.flightDetails[0].airline.name}</p>
                                    <div className='text-right'>
                                        <p>{data.flightDetails[0].depDisplayDateTime.shortDate} {data.flightDetails[0].depDisplayDateTime.year}</p>
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='flex justify-around mt-4 text-center'>
                                        <div className=''>
                                            <p className=''>{data.flightDetails[0].depDisplayDateTime.displayTime}</p>
                                            <p className=''>{data.flightDetails[0].depCity.code}</p>
                                        </div>

                                        <div className='text-center'>
                                            <p>1 stop</p>
                                            <svg width="300" height="9" viewBox="0 0 358 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.19141 4.21484L352.733 4.21486" stroke="#004FBC" />
                                                <circle cx="4" cy="4.5" r="3.5" fill="#DEDEDE" stroke="#004FBC" />
                                                <circle cx="179" cy="4.5" r="3.5" fill="white" stroke="#004FBC" />
                                                <circle cx="354" cy="4.5" r="3.5" fill="#DEDEDE" stroke="#004FBC" />
                                            </svg>
                                            <p>{data.totalTime} ชั่วโมง</p>
                                        </div>

                                        <div className=''>
                                            <p className=''>{data.flightDetails[1].arrDisplayDateTime.displayTime}</p>
                                            <p className=''>{data.flightDetails[1].arrCity.code}</p>
                                        </div>
                                    </div>

                                </div>

                                <div className=''>

                                    {/* <Radio.Group className="grid grid-cols-5 mx-2 " name={"back"} onChange={(e) => onChangeDeparture(e, data2)}>
                                        {data2.productInfo.map((data3, index3) => (<Radio value={data3.rbd} key={index + '' + index2 + '' + index3 + '' + data2.bookingCode}>{data3.rbd} {data3.availabilityStatus}</Radio>))}
                                    </Radio.Group> */}
                                </div>
                                <div className='flex justify-center my-4'>
                                    <button className="text-white  text-lg lg:text-lg my-[2px] flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-500 hover:from-pink-500 hover:to-yellow-500 h-[2rem] w-[6rem]  border-2 border-black rounded-full" type="button" onClick={() => handleShowDetail(data)}>Select</button>
                                </div>

                                <div className=''>
                                    <div tabIndex={index} className="collapse" onClick={() => handleShowDetail(data)}>
                                        <div className="cursor-pointer focus:cursor-auto hover:text-sky-400 font-bold mx-4">
                                            รายละเอียดเที่ยวบิน
                                        </div>

                                        <div className="collapse-content my-2 ">
                                            <div className='flex'>
                                                <div className='flex w-[100px]'>
                                                    <div className='flex flex-col items-center'>
                                                        <p className=''>{depDisplayTime_1}</p>
                                                        <p className=''>{depShortDateWithoutDay_1}</p>
                                                        <p className='my-auto'></p>
                                                        <p className=''>{arrDisplayTime_1}</p>
                                                        <p className=''>{arrShortDateWithoutDay_1}</p>
                                                    </div>

                                                    <div className='ml-4'>
                                                        <img src='src/assets/img/LineairPlane.jpg' alt="LineairPlane" />
                                                    </div>
                                                </div>



                                                <div className='flex flex-col w-full ml-4'>
                                                    <div className='flex flex-col justify-start text-start'>
                                                        <p className=''>{depCity_1}</p>
                                                        <p className=''>({depCityCode_1})</p>
                                                    </div>

                                                    <div className='flex border border-black rounded-box my-auto p-2 text-start'>
                                                        <div>
                                                            <img className="w-100%" src={`src/assets/img/square/${data.flightDetails[0].airline.code}.png`} alt="Icon" />
                                                        </div>

                                                        <div className='flex flex-col ml-4 w-full'>
                                                            <p className=''>{airlineName_1}</p>
                                                            <div className='flex justify-between'>
                                                                <p className=''>Flight No.</p>
                                                                <p className=''>{airlineCode_1} {flightNumber_1} </p>
                                                            </div>

                                                            <div className='flex justify-between'>
                                                                <p>Operate By : </p>
                                                                <p className=''>{operatedAirline_1}</p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className='flex flex-col justify-start text-start'>
                                                        <p className=''>{arrCityName_1}</p>
                                                        <p className=''>({arrCityCode_1})</p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='my-4 bg-teal-200 text-center'>
                                                <span className='font-bold text-lg'>จุดแวะพักที่ {arrCityName_1} </span>
                                            </div>

                                            <div className='flex'>
                                                <div className='flex w-[100px]'>
                                                    <div className='flex flex-col items-center'>
                                                        <p className=''>{depDisplayTime_2}</p>
                                                        <p className=''>{depShortDateWithoutDay_2}</p>
                                                        <p className='my-auto'></p>
                                                        <p className=''>{arrDisplayTime_2}</p>
                                                        <p className=''>{arrShortDateWithoutDay_2}</p>
                                                    </div>

                                                    <div className='ml-4'>
                                                        <img src='src/assets/img/LineairPlane.jpg' alt="LineairPlane" />
                                                    </div>
                                                </div>



                                                <div className='flex flex-col w-full ml-4'>
                                                    <div className='flex flex-col justify-start text-start'>
                                                        <p className=''>{depCity_2}</p>
                                                        <p className=''>({depCityCode_2})</p>
                                                    </div>

                                                    <div className='flex border border-black rounded-box my-auto p-2 text-start'>
                                                        <div>
                                                            <img className="w-100%" src={`src/assets/img/square/${data.flightDetails[1].airline.code}.png`} alt="Icon" />
                                                        </div>

                                                        <div className='flex flex-col ml-4 w-full'>
                                                            <p className=''>{airlineName_2}</p>
                                                            <div className='flex justify-between'>
                                                                <p className=''>Flight No.</p>
                                                                <p className=''>{airlineCode_2} {flightNumber_2} </p>
                                                            </div>

                                                            <div className='flex justify-between'>
                                                                <p>Operate By : </p>
                                                                <p className=''>{operatedAirline_2}</p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className='flex flex-col justify-start text-start'>
                                                        <p className=''>{arrCityName_2}</p>
                                                        <p className=''>({arrCityCode_2})</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div>

                                </div>


                            </div>
                        }

                        </div>
                    ))
                : null}
        </div>
    )
}
export default card
