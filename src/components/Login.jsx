import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import { useBetween } from "use-between";
import Share from "../pages/Share";
import { Button } from "antd";
// import bcrypt from "bcrypt";

function Login() {
  const [logout, setLogout] = useState(false);
  const { setAccount } = useBetween(Share);

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
    console.log(res); //Accout Metamask
    console.log("signature", signature);
  };

  const LogoutMetamask = () => {
    setLogout(false);
    window.location.href = "http://localhost:3000/";
  };
  return (
    <div className="">
      {logout === true ? (
        <Button onClick={LogoutMetamask} className="botton">
          LOGOUT
        </Button>
      ) : (
        <Button onClick={connect} className="botton">
          Connect your wallet
        </Button>
      )}
    </div>
  );
}

export default Login;
