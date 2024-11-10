import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Logo from "../assets/logo.png";
import Purchase from "./Popup";
import userMock from "../mockdata/user.json"; // Import user data

const Navbar = () => {
  const [showPurchase, setShowPurchase] = useState(false);
  const location = useLocation(); // Get the current location

  return (
    <>
      <div className="w-screen h-16 fixed z-50 flex justify-between items-center px-16 bg-white">
        <div className="w-full"></div>
        <img className="h-12" src={Logo} alt="logo" />
        <div className="flex flex-row w-full justify-end items-center space-x-8">
          {location.pathname === "/dashboard" && ( // Conditionally render only if on /dashboard
            <>
              <div className="hidden lg:block">
                <div className="flex flex-row space-x-2">
                  <p className="font-bold">Credits</p>
                  <p>{userMock.credits}</p> {/* Display user credits */}
                </div>
              </div>
              <div
                className="hidden lg:block cursor-pointer"
                onClick={() => setShowPurchase(true)}
              >
                <p className="font-bold"> Buy Credits</p>
              </div>
              <p className="font-bold">Logout</p>
            </>
          )}
        </div>
      </div>
      {showPurchase && <Purchase onClose={() => setShowPurchase(false)} />}
    </>
  );
};

export default Navbar;
