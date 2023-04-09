import React, { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleLoginButton } from "react-social-login-buttons";
import { FacebookLoginButton } from "react-social-login-buttons";
import { googleLogout } from "@react-oauth/google";
import { Link } from "react-router-dom";
import LoginWIthEmail from "./LoginWIthEmail";
function SocialLoginDetail() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
    setIsRegister(!isRegister);
  };

  const handleRegister = () => {
    setIsRegister(!isRegister);
  };

  googleLogout();
  return (
    <div className="mx-4">
      <div>
        <div className="h-[100px] flex justify-center items-center mt-[100px]">
          <span className="text-4xl text-mono text-bold">
            <button onClick={handleClick}>{isLoggedIn ? "Sign Up" : "Log In"}</button>
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="mr-2">
            <button onClick={handleClick}>{isLoggedIn ? " Already a member?" : "New to this site?"}</button>
          </div>
          <div className="hover:text-red-600">
            <button onClick={handleClick}>{isLoggedIn ? "Log In" : "Sign Up"}</button>
          </div>
        </div>

        <div className="my-6">
          {/* <GoogleOAuthProvider clientId="34240223999-u007pu8r5t1ubdnsaf3p8pa5k7nao8u2.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
          </GoogleOAuthProvider> */}
          <GoogleLoginButton onClick={() => alert("Google login suscess")} />
          <FacebookLoginButton onClick={() => alert("facebook login suscess")} />
        </div>

        <div className={isRegister ? `` : `hidden`}>
          <LoginWIthEmail />
        </div>

        <div className={isRegister ? `hidden` : `text-center my-4 mt-10`}>or</div>
        <div className={isRegister ? `hidden` : `text-center border border-black p-4 hover:bg-red-500`}>
          <button className="w-[100%]" onClick={handleRegister}>
            {isLoggedIn ? "Sign Up with E-mail" : "Login with E-mail"}
          </button>
        </div>

        <Link to="/" className="CROSS-ICON absolute top-0 right-0 px-8 py-8">
          <div>
            <svg className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SocialLoginDetail;
