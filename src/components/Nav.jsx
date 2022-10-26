import React from 'react'
import { useBetween } from 'use-between';
import Share from "../Page/Share";
import { useState } from 'react'
import { ethers } from 'ethers'

function Nav() {
  const { account } = useBetween(Share)

  const [logout, setLogout] = useState(false)
  const { setAccount } = useBetween(Share)

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
      })
    };

    await ethereum.enable();
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${Number(5).toString(16)}` }],
      // I have used Rinkeby, so switching to network ID 4
    });
    // console.log("Connected", accounts[0]);
    localStorage.setItem("walletAddress", accounts[0]);

    setLogout(true);
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    let res = await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    let message = "Please sign for identify your own wallet for NFT Ticket"
    let signature = await signer.signMessage(message)
    let address = ethers.utils.verifyMessage(message, signature)
    setAccount(address);
    // console.log(res); //Accout Metamask
    // console.log("signature", signature);
  };

  const LogoutMetamask = () => {
    setLogout(false);
    window.location.href = "http://127.0.0.1:5173/";

  }
  return (
    <div className='flex flex-row justify-between lg:justify-between px-[2rem] py-[1.5rem] bg-gradient-to-r from-[#38bdf8] via-[#86efac] to-[#9333ea]'>
      <div className="logo text-2xl">
        <div>
          <a href='#' className='text-4xl font-bold text-white'>ANT</a>
        </div>
      </div>
      {/* <ul className="menu flex flex-col py-[20px] lg:flex-row items-center text-2xl text-white">
        <li className='mx-[40px] my-[10px]'><a href="#">About</a></li>
        <li className='mx-[40px] my-[10px]'><a href="#">Services</a></li>
        <li className='mx-[40px] my-[10px]'><a href="#">Project</a></li>
      </ul> */}
      <div className='flex justify-center items-center'>
        {logout === false ? null
        : <div className='font-bold text-lg lg:text-2xl my-[2px] mx-4 px-4 h-[40px] flex justify-center items-center bg-none text-black rounded-full'>
        {account}
      </div>}
        
        <div className='font-bold text-lg lg:text-2xl my-[2px] flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-500 hover:from-pink-500 hover:to-yellow-500 mx-auto h-[40px] p-3 text-black border-4 border-black rounded-full'>
          {logout === true ? <button className='text-white' onClick={LogoutMetamask} >Logout</button> :
            <button onClick={connect} >Connect Wallet</button>}
        </div>
      </div>


    </div>

  )
}

export default Nav