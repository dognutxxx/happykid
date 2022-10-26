import React from 'react'
import Nav from './Nav'
import imgDep from '../assets/img/departure.png'
import imgArr from '../assets/img/landing.png'
import imgTransfer from '../assets/img/transfer.png'
import User from '../assets/img/user.png'
import Window from '../assets/img/window.png'
import imgCalenda from '../assets/img/calenda.png'
import { Form, Button } from 'antd';
import 'antd/dist/antd.css';
import moment from "moment"
import { useBetween } from 'use-between';
import Share from "../Page/Share";
import { useState, useEffect } from 'react'
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

// const { Option } = Select;

function Header() {

    const { account } = useBetween(Share)
    const { ownerAddress, setOwnerAddress } = useBetween(Share)


    const dateFormat = 'YYYY-MM-DD';
    const [form] = Form.useForm();
    const collectionContract = '0x96c3d1f4446fe5a8d5ffc25d1509d28277959a57'
    let navigate = useNavigate();

    const [data, setData] = useState([]);
    const { id, setID } = useBetween(Share); //id ที่เป็น obj จากการเลือก NFT ID ส่งไปหน้า contractInfo
    const [checkOpenseaAPI, setCheckOpenseaAPI] = useState("")
    const [CID, setCID] = useState('');
    const [metaData, setMetaData] = useState([]);
    const { opensea, setOpensea } = useBetween(Share)
    const [status, setStatus] = useState('');  //เช็คเรื่องของ NFT ที่ถูกลงทะเบียนแล้ว
    // const [regised, setRegised] = useState(false)
    const [contract, setContract] = useState('');
    const { share, setShare } = useBetween(Share)
    const { info, setInfo } = useBetween(Share)
    const [loading, setLoading] = useState(false);
    const { triptype, setTriptype } = useBetween(Share);

    const { control, register, formState: { errors }, handleSubmit } = useForm();

    const checkPNR = async () => {
        await axios.get(`http://localhost:3001/read/single/${id.dna}`, { //Get token จาก server (localhost:3001)
        }).then(res => {
            if (res.data.length > 0) {
                {
                    axios.get(`http://localhost:3001/status/single/${id.dna}`, { //Get token จาก server (localhost:3001)
                    }).then(res => {
                        // console.log(res.data);
                        setStatus(res.data[0].active)
                        // console.log("พบ PNR ออกตั๋วไม่ได้");
                    })
                };
            } else {
                setStatus(false)
            };
        })
    };
    checkPNR();

    const onSubmit = async (data) => {
        console.log(data);
        if (checkOpenseaAPI === contract) {
            // setRegised(true)

        } else {
            alert("ไม่มี Transaction จาก Opensea API กรุณาติดต่อเจ้าหน้าที่หรือทำการตรวจสอบ Tracsaction บน Blockchain อีกครั้ง")
            // window.location.reload(); 

        }
        if (status === 0) {
            alert("NFT Ticket ถูกใช้งานแล้ว กรุณาทำการจองใหม่อีกครั้ง")
            // setRegised(false)
        } else {
            // console.log("Start to API");

            data.returnDate = moment(data.returnDate).format("YYYY-MM-DD")
            data.departDate = moment(data.departDate).format("YYYY-MM-DD")
            data.child = Number(data.child)
            data.infant = Number(data.infant)
            data.adult = Number(data.adult)
            setLoading(true)


            await axios.post("http://localhost:3001/accesstoken", { //Get token จาก server (localhost:3001)
            }).then(res => {
                // console.log(res.data.accessToken);
                axios.post("http://localhost:3001/searchflight", {
                    body: data,
                    accessToken: res.data.accessToken
                }, {
                    headers: res.data.accessToken
                }).then(dataSearch => {
                    console.log(dataSearch);
                    sessionStorage.dataSearch = dataSearch;
                    setShare(dataSearch);
                    setInfo(data);


                    setTimeout(() => {
                        if (share != null) {
                            setLoading(false)
                        } navigate("/Booking", { replace: true }), 10000
                    })

                })
            }, 1500)
                .catch(err => console.error(err));
        }
    };

    const handleTriptype = (e) => {
        setTriptype(e.target.value)
    }



    const onValuesChange = (e) => {
        // value.nftID = Number(value.nftID)
        const values = +e.target.value

        if (values) {
            setID(...metaData.filter((el) => {
                return el.edition === values
            }))

            const options = { method: 'GET' };
            fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${account}&token_ids=${values}&asset_contract_address=${collectionContract}&order_direction=desc&offset=0&limit=20&include_orders=false`, options)
                .then(response => response.json())
                .then(response => {
                    // console.log("NFT Minted", response);
                    response.assets == [] ? null : setCheckOpenseaAPI(response.assets[0].asset_contract.address)
                })
                .catch(err => console.error(err));
        };
    };

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:3001/pinata`, { //Get token จาก server (localhost:3001)
            }).then(res => {
                setCID(res.data[0].tel);
            })
        }
        fetchData()

    }, []);

    const connect = async () => {
        await axios
            // .get("https://gateway.pinata.cloud/ipfs/QmSrzMEwwaSXXmtGptAPGN9w3Y2Z6fDC7GSvYeT2CnFVe6/_metadata.json")
            .get(`https://gateway.pinata.cloud/ipfs/${CID}`)
            .then(response => {
                // console.log("Metadata", response);
                setMetaData(response.data)
            });
        getData();
    };

    useEffect(() => {
        if (account) {
            connect();
        }
    }, [account])

    const getData = async () => {

        const options = { method: 'GET', headers: { Accept: "Application/json" } };

        await fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${account}&asset_contract_address=${collectionContract}&order_direction=desc&offset=0&limit=100&include_orders=false`, options)
            .then(response => response.json())
            .then(response => {
                // console.log("Filter", response);
                let filter = response.assets
                if (filter.length == 0) {
                    setContract('')
                } else {
                    setData(filter);
                    // console.log(filter);
                    // console.log(filter[0].asset_contract.address);
                    setOpensea(filter);
                    setContract(filter[0].asset_contract.address);
                    setOwnerAddress(account);
                }
            })
            .catch(err => console.log(err));
    };

    const handleAccountsChanged = () => {
        window.ethereum.on('accountsChanged', (newAccount, string) => {
            window.location.reload();
        });
    }

    useEffect(() => {
        handleAccountsChanged();
    }, [account]);

    // console.log(loading);

    return (

        <div className='App'>
            {loading ?
                <SyncLoader
                    color={'#36d7b7'}
                    loading={loading}
                    size={20}
                /> :
                <div className='w-screen h-screen bg-gradient-to-r from-[#38bdf8] via-[#86efac] to-[#9333ea] text-center'>
                    {/* <Nav /> */}
                    
                    <div className="font-bold text-lg lg:text-2xl flex justify-center items-center container mx-auto h-[5rem] bg-white text-black rounded-full">
                        {contract === collectionContract ? <p className='text-violet-500'>You have amount : {data.length} NFT Ticket.</p>
                            : <a href="https://penguint-travel.web.app/" target="_blank"><p className='font-bold text-sm ml-4 lg:text-lg my-[2px] flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-500 hover:from-pink-500 hover:to-yellow-500 mx-auto h-[60px] lg:h-[40px] p-3 text-black border-4 border-black rounded-full'>No have NFT Please click here to MINT NOW !! </p> </a>}
                        <div className="flex justify-center items-center lg:flex lg:justify-center lg:items-center lg:col-start-1 lg:row-end-3">
                            {/* <img src={Window} width="25" className='mx-[1rem] my-[1rem]' /> */}
                            <p className='mx-4'>Select your NFT ID :</p>
                            <select className='text-center text-lg p-2 mr-4 border-4 border-red-500 rounded-full w-[15rem]'{...register("nftID", { required: true })}
                                aria-invalid={errors.firstName ? "true" : "false"} onChange={onValuesChange}>
                                <option value="" disabled selected >NFT ID </option>
                                {
                                    data
                                        .filter(data_ => data_.asset_contract.address === collectionContract)
                                        .map((data_, pass) =>
                                            contract === collectionContract ? <option key={pass} value={data_.token_id}> {data_.token_id} </option> : ""
                                        )}
                            </select>
                            {errors.nftID?.type === 'required' && <p className='p-1 text-rose-900 text-2xl' role="alert">*</p>}
                        </div>
                    </div>

                    {account === '' ?
                        <div className="font-light p-2 text-lg lg:text-2xl flex justify-center items-center container mx-auto h-[5rem] my-4 text-black ">
                            {account === '' ? "Please connect Metamask (Ethereum Chain)" : null}
                        </div> : null}

                    {contract === collectionContract ?
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="justify-center">
                                <div className="bg mx-[0.5rem] my-[9rem] md:my-[9rem] md:mx-[2rem]">
                                    <div className="">
                                        <div className="mx-4">
                                            <div className="my-4 lg:grid lg:grid-rows-2 lg:grid-flow-col grid grid-rows-3 grid-flow-col">
                                                <div className="flex justify-center items-center lg:flex lg:justify-center lg:mx-2 lg:my-2 lg:items-center lg:col-start-1 lg:row-end-2">
                                                    <img src={imgTransfer} width="25" className='mx-[1rem]' />
                                                    <select className='text-center text-lg p-2 rounded-full w-[15rem]' {...register("tripType", { required: true })}
                                                        aria-invalid={errors.tripType ? "true" : "false"} onChange={handleTriptype}>
                                                        <option value="" disabled selected >TypeTrip</option>
                                                        {Object.keys(id).length > 0 ? id.TripType.map((el, index) => { return <option key={index} value={el.value}>{el.tripType}</option> }) : ""}
                                                    </select>
                                                    {errors.tripType?.type === 'required' && <p className='p-1 text-rose-900 text-2xl' role="alert">*</p>}
                                                </div>

                                                {/* <img src={User} width="25" className='mx-3' /> */}
                                                <div className="flex justify-center items-center lg:flex lg:justify-center lg:items-center col-start-1 row-end-2 lg:col-start-2 lg:row-end-2">
                                                    <img src={User} width="25" className='mx-[1rem]' />
                                                    <select className='text-center text-lg p-2 rounded-full w-[15rem]' {...register("adult", { required: true })}
                                                        aria-invalid={errors.adult ? "true" : "false"} >
                                                        <option value="" disabled selected>adult</option>
                                                        <option value="0">0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                    {errors.adult?.type === 'required' && <p className='p-1 text-rose-900 text-2xl' role="alert">*</p>}
                                                </div>




                                                {/* <img src="~/static/flight-search/Direction.png" width="25"> */}

                                                {/* <img src={User} width="25" className='mx-3' /> */}
                                                <div className="flex justify-center items-center lg:flex lg:justify-center lg:items-center col-start-1 row-end-4 lg:col-start-4 lg:row-end-2">
                                                    <img src={User} width="25" className='mx-[1rem]' />
                                                    <select className='text-center text-lg p-2 rounded-full w-[15rem]' {...register("infant", { required: true })}
                                                        aria-invalid={errors.infant ? "true" : "false"} >
                                                        <option value="" disabled selected>infant</option>
                                                        <option value="0">0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                    {errors.infant?.type === 'required' &&
                                                        <p className='p-1 text-rose-900 text-2xl' role="alert">*</p>}
                                                </div>



                                                {/* <img src="~/static/flight-search/Direction.png" width="25"> */}

                                                {/* <img src={User} width="25" className='mx-3' /> */}
                                                <div className="flex justify-center items-center lg:flex lg:justify-center lg:items-center col-start-1 row-end-3 lg:col-start-3 lg:row-end-2">
                                                    <img src={User} width="25" className='mx-[1rem]' />
                                                    <select className='text-center text-lg p-2 rounded-full w-[15rem]' {...register("child", { required: true })}
                                                        aria-invalid={errors.child ? "true" : "false"} >
                                                        <option value="" disabled selected>child</option>
                                                        <option value="0">0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                    {errors.child?.type === 'required' && <p className='p-1 text-rose-900 text-2xl' role="alert">*</p>}
                                                </div>

                                                {/* <img src={Window} width="25" className='mr-3 lg:mx-3' /> */}
                                                <div className="flex justify-center items-center lg:flex lg:justify-center lg:items-center lg:col-start-1 lg:row-end-3">
                                                    <img src={Window} width="25" className='mx-[1rem] my-[1rem]' />
                                                    <select className='text-center text-lg p-2 rounded-full w-[15rem]' {...register("svcClass", { required: true })}
                                                        aria-invalid={errors.svcClass ? "true" : "false"} >
                                                        <option value="" disabled selected>Class</option>
                                                        {Object.keys(id).length > 0 ? id.cabinClass.map((el, index) => { return <option key={index} value={el.value}>{el.cabinClass_type}</option> }) : ""}
                                                    </select>
                                                    {errors.svcClass?.type === 'required' && <p className='p-1 text-rose-900 text-2xl' role="alert">*</p>}
                                                </div>


                                                {/* <img src="~/static/flight-search/flight.png" width="25"> */}

                                                {/* <img src={Window} width="25" className='mx-3' /> */}
                                                <div className="flex justify-center items-center lg:flex lg:justify-center lg:items-center lg:col-start-3 lg:row-end-3">
                                                    <img src={Window} width="25" className='mx-[1rem] my-[1rem]' />
                                                    <select className='text-center text-lg p-2 rounded-full w-[15rem]' {...register("languageCode", { required: true })}
                                                        aria-invalid={errors.languageCode ? "true" : "false"} >
                                                        <option value="" disabled selected>Language</option>
                                                        <option value="th">Thai</option>
                                                        <option value="en">English</option>
                                                    </select>
                                                    {errors.languageCode?.type === 'required' && <p className='p-1 text-rose-900 text-2xl' role="alert">*</p>}
                                                </div>

                                                {/* <img src="~/static/flight-search/flight.png" width="25"> */}

                                                {/* <img src={Window} width="25" className='mx-3' /> */}
                                                {/* <div className="flex justify-center items-center lg:flex lg:justify-center lg:items-center lg:col-start-1 lg:row-end-3">
                                            <img src={Window} width="25" className='mx-[1rem] my-[1rem]' />
                                            <select className='text-center text-lg p-2 border-4 border-red-500 rounded-full w-[15rem]'{...register("nftID", { required: true })}
                                                aria-invalid={errors.firstName ? "true" : "false"} onChange={onValuesChange}>
                                                <option value="" disabled selected >NFT ID</option>
                                                {
                                                    data
                                                        .filter(data_ => data_.asset_contract.address === collectionContract)
                                                        .map((data_, pass) =>
                                                            contract === collectionContract ? <option key={pass} value={data_.token_id}> {data_.token_id} </option> : ""
                                                        )}
                                            </select>
                                            {errors.nftID?.type === 'required' && <p className='p-1 text-rose-900 text-2xl' role="alert">*</p>}
                                        </div> */}


                                                {/* <img src="~/static/flight-search/flight.png" width="25"> */}
                                                {/* <img src={Window} width="25" className='mr-4 lg:mx-3' /> */}

                                                <div className="flex justify-center items-center lg:flex lg:justify-center lg:items-center lg:col-start-2 lg:row-end-3">
                                                    <img src={Window} width="25" className='mx-[1rem] my-[1rem]' />
                                                    <select className='text-center text-lg p-2 rounded-full w-[15rem]' {...register("airlines", { required: true })}
                                                        aria-invalid={errors.airlines ? "true" : "false"} >
                                                        <option value="" disabled selected>Airlines</option>
                                                        <option value="TG">Thai Airways International</option>
                                                        <option value="PG">Bangkok Airways</option>
                                                        <option value="WE">Thai Smaile</option>
                                                    </select>
                                                    {errors.airlines?.type === 'required' && <p className='p-1 text-rose-900 text-2xl' role="alert">*</p>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center py-2 my-1 mx-4 bg-white border-4 border-black rounded-full">
                                            <div className="w-1/2 border-r-4 border-black">
                                                {/* <img src={imgDep} width="25" /> */}
                                                <div className="flex justify-start items-center">
                                                    <img src={imgDep} width="25" className='mx-[1rem] my-[1rem]' />
                                                    <select className='text-center p-2 border lg:ml-[10rem] lg:mr-[0.5rem] rounded-full w-[15rem]' {...register("originCode", { required: true })}
                                                        aria-invalid={errors.originCode ? "true" : "false"} >
                                                        <option value="" disabled selected>Departure Terminal</option>
                                                        {Object.keys(id).length > 0 ? id.Departure.map((el, index) => { return <option key={index} value={el.value}>{el.AirportName}</option> }) : ""}
                                                    </select>
                                                    {errors.originCode?.type === 'required' && <p className='p-1 text-rose-900 text-2xl' role="alert">*</p>}
                                                </div>
                                            </div>

                                            {
                                                <div className="w-1/2 ">
                                                    {/* <img src={imgArr} width="25" /> */}
                                                    <div className="flex justify-start items-center mr-4">
                                                        <img src={imgArr} width="25" className='mx-[1rem] my-[1rem]' />
                                                        <select className='text-center p-2 border mx-auto lg:ml-[10rem] lg:mr-[0.5rem] rounded-full w-[15rem]' {...register("destinationCode", { required: true })}
                                                            aria-invalid={errors.destinationCode ? "true" : "false"} >
                                                            <option value="" disabled selected>Arrival Terminal</option>
                                                            {Object.keys(id).length > 0 ? id.Arrival.map((el, index) => { return <option key={index} value={el.value}>{el.AirportName}</option> }) : ""}
                                                        </select>
                                                        {errors.destinationCode?.type === 'required' && <p className='p-1 text-rose-900 text-2xl' role="alert">*</p>}
                                                    </div>
                                                </div>
                                            }
                                        </div>



                                        <div className="flex items-center py-2 my-1 mx-4 bg-white border-4 border-black rounded-full">
                                            <div className="w-1/2 border-r-4 border-black" >
                                                {/* <img src={imgDep} width="25" /> */}
                                                <div className="flex justify-center items-center mr-4" >
                                                    <img src={imgCalenda} width="25" className='mx-[1rem] my-[1rem]' />
                                                    <Controller
                                                        control={control}
                                                        name='departDate'
                                                        render={({ field }) => (
                                                            <DatePicker
                                                                className="text-center"
                                                                placeholderText='Select date'
                                                                onChange={(date) => field.onChange(date)}
                                                                selected={field.value}

                                                            />
                                                        )}
                                                    />

                                                </div>
                                            </div>

                                            <div className="w-1/2 ">
                                                {/* <img src={imgArr} width="25" /> */}
                                                <div className="flex justify-center items-center mr-4">
                                                    <img src={imgCalenda} width="25" className='mx-[1rem] my-[1rem]' />
                                                    <Controller
                                                        control={control}
                                                        name='returnDate'
                                                        render={({ field }) => (
                                                            <DatePicker
                                                                className="text-center"
                                                                placeholderText='Select date'
                                                                onChange={(date) => field.onChange(date)}
                                                                selected={field.value}

                                                            />
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <div className="my-[2rem]">

                                                <Button loading={loading} type="primary" htmlType="submit">
                                                    Submit
                                                </Button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form> : null
                    }
                </div >
            }
        </div>
    )
}

export default Header
