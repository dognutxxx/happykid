import React from "react";
import { useBetween } from "use-between";
import Share from "../Page/Share";
import { ethers } from "ethers";
import { Outlet } from "react-router-dom";
import { EncryptStorage } from "encrypt-storage";
export const encryptStorage1 = new EncryptStorage("H@b'v4U*[8Y,m~:d", {});

function Nav() {
  const { account } = useBetween(Share);
  const { setAccount } = useBetween(Share);
  const { logout, setLogout } = useBetween(Share);

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

    localStorage.setItem("walletAddress", accounts[0]);
  };

  const LogoutMetamask = () => {
    setLogout(false);
    localStorage.clear();
    window.location.href = "http://127.0.0.1:5173/";
  };

  return (
    <>
      <div className="px-2 mx-2">
        <div className="flex flex-wrap justify-around min-h-full min-w-full border-b-4 ">
          <div className="flex flex-row justify-center items-center mx-2">
            <svg width="35" height="44" viewBox="0 0 35 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.4759 -1.5278e-06L17.4759 34.5527L5.32762 43.7402L0 30.3157L17.4759 -1.5278e-06Z"
                fill="url(#paint0_linear_174_6150)"
              />
              <path
                d="M17.4761 1.52781e-06L17.4761 34.5527L29.6244 43.7402L34.9521 30.3157L17.4761 1.52781e-06Z"
                fill="#FBCE51"
              />
              <path d="M0 30.3157L5.32763 43.7402L17.476 -1.5278e-06L0 30.3157Z" fill="#FBCE51" />
              <path
                d="M34.9521 30.3157L29.6243 43.7402L17.4759 1.52782e-06L34.9521 30.3157Z"
                fill="url(#paint1_linear_174_6150)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_174_6150"
                  x1="36.4012"
                  y1="39.4794"
                  x2="9.0874"
                  y2="29.1601"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4E1311" />
                  <stop offset="1" stopColor="#FAA819" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_174_6150"
                  x1="25.5552"
                  y1="20.1402"
                  x2="57.3722"
                  y2="14.5959"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FAA819" />
                  <stop offset="1" stopColor="#4E1311" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              className="mx-2"
              width="50"
              height="18"
              viewBox="0 0 50 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.8851 17.8328H29.2108L22.0581 6.09939V17.8328H18.3838V0H22.0581L29.2231 11.7579V0H32.8851V17.8328Z"
                fill="url(#paint0_linear_174_6142)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.2108 17.8328H32.8851V0H29.2231L29.2108 17.8328ZM22.0581 0H18.3838V14.1584C18.3838 16.1877 20.0288 17.8328 22.0581 17.8328V0Z"
                fill="#350C0A"
              />
              <path
                d="M11.5741 14.1584H5.13182L3.90704 17.8328H0L6.63829 0H10.0432L16.7182 17.8328H12.8112L11.5741 14.1584ZM6.12388 11.1822H10.5821L8.34073 4.50718L6.12388 11.1822Z"
                fill="url(#paint1_linear_174_6142)"
              />
              <path
                d="M49.1504 2.97621H43.6879V17.8328H40.0135V2.97621H34.6245V0H49.1504V2.97621Z"
                fill="url(#paint2_linear_174_6142)"
              />
              <path
                d="M3.90704 17.8328C2.0145 17.8328 0.702788 15.9448 1.36303 14.1712L6.63829 0H10.0432L3.90704 17.8328Z"
                fill="#350C0A"
              />
              <path
                d="M37.6007 2.97621C35.957 2.97621 34.6245 1.64371 34.6245 0H49.1504V2.97621H37.6007Z"
                fill="#350C0A"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_174_6142"
                  x1="21.822"
                  y1="3.89811e-08"
                  x2="28.8453"
                  y2="19.0634"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#350C0A" />
                  <stop offset="1" stopColor="#FBCE51" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_174_6142"
                  x1="12.7921"
                  y1="14.0467"
                  x2="3.26036"
                  y2="9.03004"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#350C0A" />
                  <stop offset="1" stopColor="#FBCE51" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_174_6142"
                  x1="40.8856"
                  y1="17.5584"
                  x2="37.8756"
                  y2="-1.50501"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#350C0A" />
                  <stop offset="1" stopColor="#FBCE51" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-row max-w-full">
            <ul className="lg:flex flex-row flex-none md:grid grid-flow-row auto-cols-fr text-black justify-center items-center font-bold mx-4">
              <li className="mx-[20px]">
                <a href="https://testnets.opensea.io/collection/penguint-travel" target="_blank">
                  OpenSea
                </a>
              </li>
              <li className="mx-[20px]">
                <a href="https://etherscan.io/" target="_blank">
                  Ethereum (ETH) Blockchain Explorer
                </a>
              </li>
            </ul>

            <div className="flex flex-row my-2 ">
              {logout === false ? null : <div className="">{/* {account} */}</div>}

              <div className="font-bold flex flex-row bg-[#FAA819] text-black border border-black rounded-full h-[50px]">
                {logout === true ? (
                  <button className="text-black px-4 " onClick={LogoutMetamask}>
                    Logout
                  </button>
                ) : (
                  <button className="px-4" onClick={connect}>
                    Connect Wallet
                  </button>
                )}
              </div>
              {/* <img className="mx-4 h-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
