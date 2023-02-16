import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Select, Form, DatePicker, Button } from "antd";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useBetween } from "use-between";
import Share from "../page/Share";
import "../App.css";

const FlightApp = () => {
  const { share, setShare } = useBetween(Share);
  const { info, setInfo } = useBetween(Share);
  const { opensea, setOpensea } = useBetween(Share);
  const { ownerAddress, setOwnerAddress } = useBetween(Share);
  const { id, setID } = useBetween(Share); //id ที่เป็น obj จากการเลือก NFT ID ส่งไปหน้า contractInfo
  const { account } = useBetween(Share);

  // const collectionContract = '0x1ec4e92063fcca32836f003c77dbbf205b1e4df2'
  const collectionContract = "0x96c3d1f4446fe5a8d5ffc25d1509d28277959a57";

  const [tripType, setTripType] = useState(""); //Set Hidden Arrival
  const [checkOpenseaAPI, setCheckOpenseaAPI] = useState("");
  const [data, setData] = useState([]);
  const [contract, setContract] = useState("");
  const [metaData, setMetaData] = useState([]);
  const [CID, setCID] = useState("");

  useEffect(() => {
    handleAccountsChanged();
  }, []);

  let navigate = useNavigate();

  const Option = Select.Option;
  const [form] = Form.useForm();
  const dateFormat = "YYYY-MM-DD";
  const [status, setStatus] = useState("");

  //เช็คเรื่องของปุ่ม loading
  const [regised, setRegised] = useState(false);

  const onFinish = (value) => {
    if (checkOpenseaAPI === contract) {
      setRegised(true);
    } else {
      alert(
        "ไม่มี Transaction จาก Opensea API กรุณาติดต่อเจ้าหน้าที่หรือทำการตรวจสอบ Tracsaction บน Blockchain อีกครั้ง"
      );
      window.location.reload();
    }
    if (status === 0) {
      alert("NFT is Ticketed Check information again");
      setRegised(false);
    } else {
      // console.log("Start to API");

      value.returnDate = moment(value.returnDate).format("YYYY-MM-DD");
      value.departDate = moment(value.departDate).format("YYYY-MM-DD");
      value.child = Number(value.child);
      value.infant = Number(value.infant);
      value.adult = Number(value.adult);
      // console.log(value);

      axios
        .post("http://localhost:3001/accesstoken", {
          //Get token จาก server (localhost:3001)
        })
        .then((res) => {
          // console.log(res.data.accessToken);
          axios
            .post(
              "http://localhost:3001/searchflight",
              {
                body: value,
                accessToken: res.data.accessToken,
              },
              {
                headers: res.data.accessToken,
              }
            )
            .then((dataSearch) => {
              setShare(dataSearch);
              setInfo(value);
              navigate("/Booking", { replace: true });
            });
        }, 1500)
        .catch((err) => console.error(err));
    }
  };

  const handleAccountsChanged = () => {
    window.ethereum.on("accountsChanged", (newAccount, string) => {
      window.location.href = "http://localhost:3000/";
    });
  };

  useEffect(() => {
    handleAccountsChanged();
  }, []);

  const getData = async () => {
    const options = { method: "GET", headers: { Accept: "Application/json" } };

    await fetch(
      `https://testnets-api.opensea.io/api/v1/assets?owner=${account}&asset_contract_address=${collectionContract}&order_direction=desc&offset=0&limit=100&include_orders=false`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let filter = response.assets;
        if (filter.length == null) {
          setContract("");
        } else {
          setData(filter);
          setOpensea(filter);
          setOwnerAddress(account);
          setContract(filter[0].asset_contract.address);
        }
      })
      .catch((err) => console.error("No Have NFT"));
  };

  useEffect(() => {
    if (account) {
      connect();
    }
  }, [account]);

  const connect = async () => {
    if (!ethereum) {
      // Wallet not installed
      alert("Get MetaMask!");
      return;
    }

    if (window.ethereum) {
      // Listeners
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }

    await ethereum.enable();
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${Number(5).toString(16)}` }],
      // I have used Rinkeby, so switching to network ID 4
    });

    setLogout(true);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let res = await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    let message = "Please sign for identify your own wallet for NFT Ticket";
    let signature = await signer.signMessage(message);
    let address = ethers.utils.verifyMessage(message, signature);
    setAccount(address);
    // console.log(res); //Accout Metamask
    // console.log("signature", signature);

    await axios
      // .get("https://gateway.pinata.cloud/ipfs/QmSrzMEwwaSXXmtGptAPGN9w3Y2Z6fDC7GSvYeT2CnFVe6/_metadata.json")
      .get(`https://gateway.pinata.cloud/ipfs/${CID}`)
      .then((response) => {
        setMetaData(response.data);
      });
    getData();
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3001/pinata`, {
          //Get token จาก server (localhost:3001)
        })
        .then((res) => {
          setCID(res.data[0].tel);
        });
    };
    fetchData();
  }, []);

  const onValuesChange = (value) => {
    value.nftID = Number(value.nftID);
    if (value.nftID) {
      setID(
        ...metaData.filter((el) => {
          return el.edition === value.nftID;
        })
      );

      const options = { method: "GET" };
      fetch(
        `https://testnets-api.opensea.io/api/v1/assets?owner=${account}&token_ids=${value.nftID}&asset_contract_address=${collectionContract}&order_direction=desc&offset=0&limit=20&include_orders=false`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          response.assets == []
            ? null
            : setCheckOpenseaAPI(response.assets[0].asset_contract.address);
        })
        .catch((err) => console.error(err));
    }
  };

  const checkPNR = async () => {
    await axios
      .get(`http://localhost:3001/read/single/${id.dna}`, {
        //Get token จาก server (localhost:3001)
      })
      .then((res) => {
        if (res.data.length > 0) {
          {
            axios
              .get(`http://localhost:3001/status/single/${id.dna}`, {
                //Get token จาก server (localhost:3001)
              })
              .then((res) => {
                // console.log(res.data);
                setStatus(res.data[0].active);
                // console.log("พบ PNR ออกตั๋วไม่ได้");
              });
          }
        } else {
          setStatus(false);
        }
      });
  };
  checkPNR();

  return (
    <>
      <div className="b">
        {data
          .filter((data) => Number(data.token_id) === id.edition)
          .map((data, index) =>
            contract === collectionContract ? (
              <img
                key={index}
                src={data.image_thumbnail_url}
                alt={"img"}
                width="300"
                height="300"
              />
            ) : null
          )}
      </div>

      <div className="b">
        {status === 0 ? <p>ตั๋วใบนี้ถูกใช้งานเรียบร้อยแล้ว</p> : null}
      </div>

      <div background-color="red">
        <div
          style={{ display: "flex", justifyContent: "center", color: "red" }}
        >
          {account === ""
            ? "Please connect Metamask (Ethereum Chain)"
            : `Your address is : ${account}`}
        </div>
        <hr />

        <div className="d">
          {contract === collectionContract
            ? `You have amount : ${data.length} NFT Ticket `
            : "No have NFT Ticket"}
        </div>

        <hr />

        {contract === collectionContract ? (
          <Form form={form} onFinish={onFinish} onValuesChange={onValuesChange}>
            <Form.Item
              label="NFT ID"
              name="nftID"
              rules={[
                {
                  required: true,
                  message: "Please input your NFT ID!",
                },
              ]}
            >
              <Select placeholder="Select amount a NFT ID">
                {data
                  .filter(
                    (data_) =>
                      data_.asset_contract.address === collectionContract
                  )
                  .map((data_, pass) =>
                    contract === collectionContract ? (
                      <Option key={pass} value={data_.token_id}>
                        {" "}
                        {data_.token_id}{" "}
                      </Option>
                    ) : (
                      ""
                    )
                  )}
              </Select>
            </Form.Item>

            <Form.Item
              label="TripType"
              name="tripType"
              rules={[
                {
                  required: true,
                  message: "Please input your TripType!",
                },
              ]}
            >
              <Select
                placeholder="Select a TripType"
                onChange={(e) => setTripType(e)}
              >
                {/* <Option value="O">One Way</Option>
              <Option value="R">Round Trip</Option> */}
                {Object.keys(id).length > 0
                  ? id.TripType.map((el, index) => {
                      return (
                        <Option key={index} value={el.value}>
                          {el.tripType}
                        </Option>
                      );
                    })
                  : ""}
              </Select>
            </Form.Item>

            <Form.Item
              label="Passenger(adult)"
              name="adult"
              rules={[
                {
                  required: true,
                  message: "Please input your Passenger(adult)!",
                },
              ]}
            >
              <Select placeholder="Select amount a Passenger">
                <Option value="0">0</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Passenger(child)"
              name="child"
              rules={[
                {
                  required: true,
                  message: "Please input your Passenger(child)!",
                },
              ]}
            >
              <Select placeholder="Select amount a Passenger">
                <Option value="0">0</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Passenger(infant)"
              name="infant"
              rules={[
                {
                  required: true,
                  message: "Please input your Passenger(infant)!",
                },
              ]}
            >
              <Select placeholder="Select amount a Passenger">
                <Option value="0">0</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Class"
              name="svcClass"
              rules={[
                {
                  required: true,
                  message: "Please input your Class!",
                },
              ]}
            >
              <Select placeholder="Select a class">
                {/* <Option value="Y">Economy</Option>
              <Option value="C">Bussiness</Option>
              <Option value="P">Primuim</Option>
              <Option value="F">First</Option> */}
                {Object.keys(id).length > 0
                  ? id.cabinClass.map((el, index) => {
                      return (
                        <Option key={index} value={el.value}>
                          {el.cabinClass_type}
                        </Option>
                      );
                    })
                  : ""}
              </Select>
            </Form.Item>

            <Form.Item
              label="Departure"
              name="originCode"
              rules={[
                {
                  required: true,
                  message: "Please input your Departure!",
                },
              ]}
            >
              <Select placeholder="Select the terminal">
                {/* <Option value="BKK"></Option>
              <Option value="CNX"></Option>
              <Option value="CEI"></Option> */}
                {Object.keys(id).length > 0
                  ? id.Departure.map((el, index) => {
                      return (
                        <Option key={index} value={el.value}>
                          {el.AirportName}
                        </Option>
                      );
                    })
                  : ""}
              </Select>
            </Form.Item>

            {tripType === "R" ? (
              <Form.Item
                label="Arrival"
                name="destinationCode"
                rules={[
                  {
                    required: true,
                    message: "Please input your Arrival!",
                  },
                ]}
              >
                <Select placeholder="Select the terminal">
                  {/* <Option value="BKK">BKK</Option>
                <Option value="CNX">CNX</Option>
                <Option value="CEI">CEI</Option> */}
                  {Object.keys(id).length > 0
                    ? id.Arrival.map((el, index) => {
                        return (
                          <Option key={index} value={el.value}>
                            {el.AirportName}
                          </Option>
                        );
                      })
                    : ""}
                </Select>
              </Form.Item>
            ) : null}

            <Form.Item
              label="Language"
              name="languageCode"
              rules={[
                {
                  required: true,
                  message: "Please input your Language!",
                },
              ]}
            >
              <Select placeholder="Select the language">
                <Option value="th">Thai</Option>
                <Option value="en">English</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Airlines"
              name="airlines"
              rules={[
                {
                  required: true,
                  message: "Please input your Airlines!",
                },
              ]}
            >
              <Select
                mode="tags"
                style={{
                  width: "100%",
                }}
                placeholder="Select the Airlines"
              >
                <Option value="TG">Thai Airways International</Option>
                <Option value="PG">Bangkok Airways</Option>
                <Option value="WE">Thai Smaile</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Departure Date"
              name="departDate"
              rules={[
                {
                  required: true,
                  message: "Please input your Departure Date!",
                },
              ]}
            >
              <DatePicker
                disabledDate={(date) =>
                  !date ||
                  date.isAfter(`${id.bookingFinishDate}`) ||
                  date.isSameOrBefore(`${id.bookingStartDate}`)
                }
                format={dateFormat}
                defaultPickerValue={moment("2022-09-01")}
                placeholder="Please select date"
              />
            </Form.Item>

            <Form.Item
              label="Arrival Date"
              name="returnDate"
              rules={[
                {
                  required: true,
                  message: "Please input your Arrival Date!",
                },
              ]}
            >
              <DatePicker
                disabledDate={(date) =>
                  !date ||
                  date.isAfter(`${id.bookingFinishDate}`) ||
                  date.isSameOrBefore(`${id.bookingStartDate}`)
                }
                format={dateFormat}
                defaultPickerValue={moment("2022-10-01")}
                placeholder="Please select date"
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
              <Button loading={regised} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <a href="http://localhost:3003/" target="_blank">
            {" "}
            <button>Mint</button>{" "}
          </a>
        )}
      </div>
    </>
  );
};

export default FlightApp;
