import React from 'react'
import Share from "./Share";
import { useBetween } from 'use-between';
import 'antd/dist/antd.css';
import { useState, useEffect } from "react"
import axios from "axios";


function ContractInfo() {
  const { bookingInfo } = useBetween(Share)
  const { resBooking, setResBooking } = useBetween(Share)
  const { opensea } = useBetween(Share)
  const { info } = useBetween(Share)
  const { ownerAddress } = useBetween(Share)
  const { id } = useBetween(Share)
  // console.log("Opensea API", opensea);
  // console.log("Metamask", ownerAddress);
  // console.log("IPFS", info);
  // console.log("ID", id);
  // console.log(ObjBookingInfo);
  // const Option = Select.Option;
  // console.log("registered", res.data);
  // console.log("DNA", id.dna);
  // console.log(bookingInfo[0].depFlight[0]);
  // console.log(noOfAdult);
  // console.log(noOfChildren);
  // console.log(noOfInfants);
  // console.log(svc_class);
  // "collectionName": `${ownerAddress}`,
  // "nftID": `${ownerAddress}`

  const handleAccountsChanged = () => {
    window.ethereum.on('accountsChanged', (newAccount, string) => {
      window.location.href="http://localhost:3000/";
    });
  }

  useEffect(() => {
    handleAccountsChanged();
  }, [handleAccountsChanged]);


  const formatted_date = () => {
    var result = "";
    var d = new Date();
    result += d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() +
      " " + d.getHours() + ":" + d.getMinutes() + ":" +
      d.getSeconds();
    return result;
  }

  const [status, setStatus] = useState(false)

  const checkPNR = async () => {
    await axios.get(`http://localhost:3001/read/single/${id.dna}`, { //Get token จาก server (localhost:3001)
    }).then(res => {
      if (res.data.length === 0) {
      } else {
        {
          axios.get(`http://localhost:3001/status/single/${id.dna}`, { //Get token จาก server (localhost:3001)
          }).then(res => {
            setStatus(res.data[0].active)
          })
        };
      };

    })
  };
  checkPNR();

  const DepFlight = bookingInfo[0].depFlight[0]
  const RetFlight = bookingInfo[0].retFlight[0]
  const svc_class = bookingInfo[0].svc_class
  const noOfAdult = bookingInfo[0].noOfAdult
  const noOfChildren = bookingInfo[0].noOfChildren
  const noOfInfants = bookingInfo[0].noOfInfants

  const showPNR = resBooking.recordLocator

  const handleEvent = (inputTitle, inputFirstName, inputMiddlename, inputLastName, inputEmail, inputTelNo, CountryCode, noOfAdult, noOfChildren, noOfInfants, svc_class, DepFlight, RetFlight, ownerAddress) => {
    if (inputTitle && inputFirstName && inputMiddlename && inputLastName && inputEmail && inputTelNo && CountryCode && noOfAdult || noOfChildren || noOfInfants && svc_class && DepFlight && RetFlight && ownerAddress !== null) {
      axios.post("http://localhost:3001/accesstoken", { //Get token จาก server (localhost:3001)
      }).then(async res => {
        await axios.post("http://localhost:3001/bookingInfo", {
          body: ObjBookingInfo,
          accessToken: res.data.accessToken
        }, {
          headers: res.data.accessToken
        }).then(dataSearch => {
          if (status === false) {
            setResBooking(dataSearch.data);
  
            axios.post("http://localhost:3001/create",
              {
                "pnr": `${dataSearch.data.recordLocator}`,
                "dna": `${id.dna}`,
                "datetime": `${formatted_date()}`,
                "active": false,
                "address": `${ownerAddress}`,
              })
              alert('การออกตั๋วเสร็จสิ้น สามารถนำไปออกตั๋วที่สนามบินได้')
              window.location.href = 'http://localhost:3000';
          } else {
           alert('Already NFT actived, Please contract admin or reserve again');
          }
        })
      }, 1500)

      const ObjBookingInfo = (Object.values([{
        "noOfAdults": noOfAdult,
        "noOfChildren": noOfChildren,
        "noOfInfants": noOfInfants,
        "svc_class": svc_class,
        "depFlight": [
          {
            "depCity": {
              "code": DepFlight.depCity.code,
              "name": DepFlight.depCity.name
            },
            "arrCity": {
              "code": DepFlight.arrCity.code,
              "name": DepFlight.arrCity.name
            },
            "airline": {
              "code": DepFlight.airline.code,
              "name": DepFlight.airline.name
            },
            "flightNumber": DepFlight.flightNumber,
            "operatedAirline": {
              "code": DepFlight.operatedAirline.code,
              "name": DepFlight.operatedAirline.name
            },
            "departureDateTime": DepFlight.departureDateTime,
            "arrivalDateTime": DepFlight.arrivalDateTime,
            "rbd": DepFlight.rbd,
            "Seq": DepFlight.Seq
          }
        ],
        "retFlight": [
          {
            "depCity": {
              "code": RetFlight.depCity.code,
              "name": RetFlight.depCity.name
            },
            "arrCity": {
              "code": RetFlight.arrCity.code,
              "name": RetFlight.arrCity.name
            },
            "airline": {
              "code": RetFlight.airline.code,
              "name": RetFlight.airline.name
            },
            "flightNumber": RetFlight.flightNumber,
            "operatedAirline": {
              "code": RetFlight.operatedAirline.code,
              "name": RetFlight.operatedAirline.name
            },
            "departureDateTime": RetFlight.departureDateTime,
            "arrivalDateTime": RetFlight.arrivalDateTime,
            "rbd": RetFlight.rbd,
            "Seq": RetFlight.Seq
          }
        ],
        "contactInfo": {
          "title": inputTitle,
          "firstname": inputFirstName,
          "middlename": inputMiddlename,
          "lastname": inputLastName,
          "email": inputEmail,
          "telNo": inputTelNo,
          "countryCode": CountryCode
        },
        "adtPaxs": [
          {
            "id": 1,
            "paxType": "ADT",
            "title": "MR",
            "firstname": "ning",
            "middlename": null,
            "lastname": "aisoft",
            "birthday": "1988-01-01T00:00:00",
            "email": null,
            "telNo": null,
            "passportNumber": null,
            "passportIssuingDate": "0001-01-01T00:00:00",
            "passportExpiryDate": "0001-01-01T00:00:00",
            "passportIssuingCountry": null,
            "passportNationality": null,
            "frequencyFlyerAirline": null,
            "frequencyFlyerNumber": null,
            "seatRequest": null,
            "mealRequest": null,
            "travelWithAdultID": 0,
            "netRefund": 0.0,
            "agentRefund": 0.0,
            "refundAmount": 0.0,
            "tickNoRefund": null,
            "remarkRefund": null,
            "StatusRefund": false,
            "netReissue": 0.0,
            "agentReissue": 0.0,
            "reissueSelling": 0.0,
            "tickNoReissueOld": null,
            "tickNoReissueNew": null,
            "remarkReissue": null,
            "StatusReissue": false
          }
        ],
        "chdPaxs": [
          {
            "id": 2,
            "paxType": "CHD",
            "title": "MSTR",
            "firstname": "nina",
            "middlename": null,
            "lastname": "aisoft",
            "birthday": "2015-05-20T00:00:00",
            "email": null,
            "telNo": null,
            "passportNumber": null,
            "passportIssuingDate": "0001-01-01T00:00:00",
            "passportExpiryDate": "0001-01-01T00:00:00",
            "passportIssuingCountry": null,
            "passportNationality": null,
            "frequencyFlyerAirline": null,
            "frequencyFlyerNumber": null,
            "seatRequest": null,
            "mealRequest": null,
            "travelWithAdultID": 1,
            "netRefund": 0.0,
            "agentRefund": 0.0,
            "refundAmount": 0.0,
            "tickNoRefund": null,
            "remarkRefund": null,
            "StatusRefund": false,
            "netReissue": 0.0,
            "agentReissue": 0.0,
            "reissueSelling": 0.0,
            "tickNoReissueOld": null,
            "tickNoReissueNew": null,
            "remarkReissue": null,
            "StatusReissue": false
          }
        ],
        "infPaxs": [
          {
            "id": 3,
            "paxType": "INF",
            "title": "MSTR",
            "firstname": "non",
            "middlename": null,
            "lastname": "aisoft",
            "birthday": "2021-02-06T00:00:00",
            "email": null,
            "telNo": null,
            "passportNumber": null,
            "passportIssuingDate": "0001-01-01T00:00:00",
            "passportExpiryDate": "0001-01-01T00:00:00",
            "passportIssuingCountry": null,
            "passportNationality": null,
            "frequencyFlyerAirline": null,
            "frequencyFlyerNumber": null,
            "seatRequest": null,
            "mealRequest": null,
            "travelWithAdultID": 0,
            "netRefund": 0.0,
            "agentRefund": 0.0,
            "refundAmount": 0.0,
            "tickNoRefund": null,
            "remarkRefund": null,
            "StatusRefund": false,
            "netReissue": 0.0,
            "agentReissue": 0.0,
            "reissueSelling": 0.0,
            "tickNoReissueOld": null,
            "tickNoReissueNew": null,
            "remarkReissue": null,
            "StatusReissue": false
          }
        ],
        "languageCode": "th"
      }]))
      console.log("Confirm Booking", ObjBookingInfo);
    } else {
      alert('กรอกให้ครบนะ !!')
    }
  };

  const [inputTitle, setInputTitle] = useState("");
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputMiddlename, setInputMiddlename] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputTelNo, setInputTelNo] = useState("");
  const [CountryCode, setCountryCode] = useState("");

  const onChangeTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const onChangeFirstName = (e) => {
    setInputFirstName(e.target.value);
  };

  const onChangeMiddlename = (e) => {
    setInputMiddlename(e.target.value);
  };

  const onChangeLastName = (e) => {
    setInputLastName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const onChangeTelNo = (e) => {
    setInputTelNo(e.target.value);
  };

  const onChangeCountryCode = (e) => {
    setCountryCode(e.target.value);
  };

  return (
    <>
      <h3>Flight Detail :</h3> <hr></hr>
      <div className=''>
        <div className='b'>
          <div className='c'>
            <h3>DEPARTURE FLIGHT</h3>
            {/* "noOfAdults": {noOfAdult} <br></br>
      "noOfChildren": {noOfChildren} <br></br>
      "noOfInfants": {noOfInfants} <br></br> */}
            Departure Code: {DepFlight.depCity.code} <br></br>
            Departure Name: {DepFlight.depCity.name} <br></br>
            Arrival Code: {DepFlight.arrCity.code} <br></br>
            Arrival Name: {DepFlight.arrCity.name} <br></br>
            Airline Code: {DepFlight.airline.code} <br></br>
            Airline Name: {DepFlight.airline.name} <br></br>
            Flight No. : {DepFlight.flightNumber} <br></br>
            Date Travel: {DepFlight.longDate} <br></br>
            Departure Time: {DepFlight.depTime} <br></br>
            Arrival Time: {DepFlight.arrTime}
          </div>

          <div className='c'>
            <h3>RETURN FLIGHT</h3>
            Departure Code: {RetFlight.depCity.code} <br></br>
            Departure Name: {RetFlight.depCity.name} <br></br>
            Arrival Code: {RetFlight.arrCity.code} <br></br>
            Arrival Name: {RetFlight.arrCity.name} <br></br>
            Airline Code: {RetFlight.airline.code} <br></br>
            Airline Name: {RetFlight.airline.name} <br></br>
            Flight No. : {RetFlight.flightNumber} <br></br>
            Date Travel: {RetFlight.longDate} <br></br>
            Departure Time: {RetFlight.depTime} <br></br>
            Arrival Time: {RetFlight.arrTime}
          </div>
        </div > <br></br>

        <h3>Passenger Detail :</h3> <hr></hr>

        <div className='z'>
          <form >
            <label htmlFor="title">Title : </label> &nbsp;
            <select name="title" id="title" onClick={onChangeTitle} style={{ width: 881 }} required>
              <option value="">โปรดระบุ</option>
              <option value="MR">Mr.</option>
              <option value="Mrs">Mrs.</option>
              <option value="Ms">Ms.</option>
              <option value="Dr">Dr.</option>
              <option value="Phra">Phr.a</option>
              <option value="Phramaha">Phramaha.</option>
            </select>  <br></br>
            <label htmlFor="firstname">Firstname : </label> &nbsp;
            <input placeholder="โปรดระบุ" type="text" name="firstname" onChange={onChangeFirstName} value={inputFirstName} style={{ width: 847 }} required /> <br></br>
            <label htmlFor="middlename">Middlename : </label> &nbsp;
            <input placeholder="โปรดระบุ" type="text" name="middlename" onChange={onChangeMiddlename} value={inputMiddlename} style={{ width: 830 }} required /> <br></br>
            <label htmlFor="lastname">Lastname : </label> &nbsp;
            <input placeholder="โปรดระบุ" type="text" name="lastname" onChange={onChangeLastName} value={inputLastName} style={{ width: 849 }} required /> <br></br>
            <label htmlFor="title">Email : </label> &nbsp;
            <input placeholder="โปรดระบุ" type="text" name="email" onChange={onChangeEmail} value={inputEmail} style={{ width: 874 }} required /> <br></br>
            <label htmlFor="telNo">TelNo : </label> &nbsp;
            <input placeholder="โปรดระบุ" type="text" name="telNo" onChange={onChangeTelNo} value={inputTelNo} style={{ width: 872 }} required /> <br></br>
            <label htmlFor="countryCode">CountryCode : </label> &nbsp;
            <select name="countryCode" id="countryCode" onClick={onChangeCountryCode} defaultValue="" style={{ width: 826 }} required >
              <option value="">โปรดระบุ</option>
              <option value="TH">TH</option>
            </select>  <br></br>
            <center>
              <button type="button" onClick={() => handleEvent(inputTitle, inputFirstName, inputMiddlename, inputLastName, inputEmail, inputTelNo, CountryCode, noOfAdult, noOfChildren, noOfInfants, svc_class, DepFlight, RetFlight, ownerAddress)} >Confirm Booking</button >
            </center>
          </form>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {
                  opensea
                    .filter(data => data.token_id === info.nftID)
                    .map((data, index) => (<img key={index} src={data.image_thumbnail_url} alt={"img"} width="300" height="300" value={data.token_id} />))
                }
              </div>

              <div className="flip-card-back">
                <h4>{inputFirstName} {inputLastName}</h4> <hr></hr>
                <p>{DepFlight.depCity.code} </p>
                <p>{DepFlight.longDate}</p> <hr></hr>
                <p>{RetFlight.depCity.code}</p>
                <p>{RetFlight.longDate}</p> <hr></hr>
                <p>{inputEmail}</p>
              </div>
            </div>

            <div className='b'>
              <center>
                PNR : {showPNR}
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContractInfo
