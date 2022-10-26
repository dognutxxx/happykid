import React from 'react'
import Share from "../Page/Share";
import { useBetween } from 'use-between';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'

function card() {
    const { share } = useBetween(Share)
    const { info } = useBetween(Share)
    const { bookingInfo_, setBookingInfo } = useBetween(Share)
    const { checkedDirect, setCheckedDirect } = useBetween(Share)
    const { checkedOneStop, setCheckedOneStop } = useBetween(Share)
    // console.log(bookingInfo_);
    // console.log(checkedOneStop);

    const departureFlight = share.data.departureFlight;
    // console.log(departureFlight);
    // const returnFlight = share.data.returnFlight;

    const selectFlight = info;


    let navigate = useNavigate();

    const onChangeDeparture = (e, item) => {
        console.log('radio checked', e.target.value); //Check ที่นั่ง
        item.status = e.target.value;
    };

    // const onChangeReturn = (e, item) => { //Check ที่นั่ง
    //     item.status = e.target.value;
    // };

    const handleAccountsChanged = () => {
        window.ethereum.on('accountsChanged', (newAccount, string) => {
            window.location.href = "http://localhost:3000/";
        });
    }

    useEffect(() => {
        handleAccountsChanged();
    }, [handleAccountsChanged]);

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

    const { airline, setAirline } = useBetween(Share)
    const { name, setName } = useBetween(Share)
    const { flightNumber, setFlightNumber } = useBetween(Share)
    const { arrCity, setArrCityName } = useBetween(Share)
    const { arrCityCode, setArrCityCode } = useBetween(Share)
    const { longDate, setLongDate } = useBetween(Share)
    const { depCityCode, setDepCityCode } = useBetween(Share)
    const { depCity, setDepCity } = useBetween(Share)
    const [airCraft, setAirCraft] = useState('')
    const { depTime, setDepTime } = useBetween(Share)
    const { arrTime, setArrTime } = useBetween(Share)
    const [totalTime, setTotalTime] = useState('')

    const { adult, setAdult } = useBetween(Share)
    const { child, setChild } = useBetween(Share)
    const { infant, setInfant } = useBetween(Share)

    const { operateCode, setOperateCode } = useBetween(Share)
    const { operateName, setOperateName } = useBetween(Share)
    const { arrivalDateTime, setArrivalDateTime } = useBetween(Share)
    const { departureDateTime, setDepartureDateTime } = useBetween(Share)
    const { seq, setSeq } = useBetween(Share)
    const { RBD, setRBD } = useBetween(Share)
    const { year, setYear } = useBetween(Share)

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

    const handleDepartureSelected = (data) => {   
        console.log(data.flightDetails.airline.code); // H1
        setAirline(data.flightDetails.airline.code)
        console.log(data.airline.name); // Hahn Air
        setName(data.airline.name)
        console.log(data.flightNumber); // 4727
        setFlightNumber(data.flightNumber);
        console.log(data.arrCity.name); // Chiang Mai Int'l, เชียงใหม่
        setArrCityName(data.arrCity.name)
        console.log(data.arrCity.code);
        setArrCityCode(data.arrCity.code)
        console.log(data.arrDisplayDateTime.longDate);
        setLongDate(data.arrDisplayDateTime.longDate)
        console.log(data.depCity.code);
        setDepCityCode(data.depCity.code)
        console.log(data.depCity.name);
        setDepCity(data.depCity.name);
        console.log(data.typeOfAircraft);
        setAirCraft(data.typeOfAircraft);
        console.log(data.depDisplayDateTime.displayTime);
        setDepTime(data.depDisplayDateTime.displayTime);
        console.log(data.arrDisplayDateTime.displayTime);
        setArrTime(data.arrDisplayDateTime.displayTime);
        console.log(data.totalTime);
        setTotalTime(data.totalTime);
        console.log(selectFlight.adult)
        setAdult(selectFlight.adult);
        console.log(selectFlight.child)
        setChild(selectFlight.child);
        console.log(selectFlight.infant)
        setInfant(selectFlight.infant);
        console.log(data2.operatedAirline.code)
        setOperateCode(data2.operatedAirline.code);
        console.log(data2.operatedAirline.name)
        setOperateName(data2.operatedAirline.name);
        console.log(data2.arrivalDateTime);
        setArrivalDateTime(data2.arrivalDateTime)
        console.log(data2.departureDateTime);
        setDepartureDateTime(data2.departureDateTime)
        console.log("Seq", data2.Seq);
        setSeq(data2.Seq);
        console.log(data2.status);
        setRBD(data2.status)
        console.log(data2.depDisplayDateTime.year);
        setYear(data2.depDisplayDateTime.year)
    }

    return (
        <div className="">
            {checkedDirect ?
                departureFlight
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
                                    <button className="text-white  text-lg lg:text-lg my-[2px] flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-500 hover:from-pink-500 hover:to-yellow-500 h-[2rem] w-[6rem]  border-2 border-black rounded-full" type="button" onClick={() => handleDepartureSelected(data)}>Select</button>
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
                departureFlight
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
                                    <button className="text-white  text-lg lg:text-lg my-[2px] flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-500 hover:from-pink-500 hover:to-yellow-500 h-[2rem] w-[6rem]  border-2 border-black rounded-full" type="button" onClick={() => handleDepartureSelected(data)}>Select</button>
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
