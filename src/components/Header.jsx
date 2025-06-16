// import cirqle from '../assets/images/Layer 2.png'
// import cirqlelogo from '../assets/images/Layer 1.png'
// import loginpic from '../assets/images/login.png'
// import Texas from '../assets/images/texas.png'
// import gps from '../assets/images/gps.png'
// import search from '../assets/images/search.png'
// import dropdown from '../assets/images/dropdown.png'
// import './Header.css';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//   const navigate = useNavigate();

//   return (
//     <header className="header">
//  <div className="header-wrapper">
//       {/* Left side logo */}
//       <div className="header-container">
//   <div className="logo-left">
//     <img src={cirqlelogo} alt="Circle Logo" className="logo-left-img" />
//   </div>

//   <div className="circle-center">
//     <span className="tagline">SAVING YOUR MONEY</span>
//     <img src={cirqle} alt="Circle" className="circle-img" />
//   </div>
// </div>

// <div className="vertical-divider"></div>
//       {/* Search section */}
//       <div className="outer-box">
//   <div className="inner-box">
//     <span style={{ color: '#667085' }}>Categories:</span>
//     <span>&nbsp;Books, Mus..</span>
//     <img
//       src={dropdown}
//       alt="Category Icon"
//       style={{ marginLeft: '5px', width: '16px', height: '16px' }}
//     />
//   </div>
//   <span className="placeholder">Search</span>
//   <img src={search} alt="Search" className="search-icon" />
// </div>

// <div className="vertical-divider"></div>
//       {/* Right side buttons */}
//       <div className="right-section">
//   <button className="location-btn box-btn">
//     <img src={Texas} alt="Location" className="location-icon" />
//     <img src={gps} alt="Texas" className="state-icon" />
//   </button>
//   <div className="vertical-divider"></div>

//   {/* Wrap login icon and button in a flex container */}
//   <div className="login-container">
//   <img src={loginpic} alt="icon" className="login-icon" />
//   <button className="login-btn">Login/Signup</button>

//   {/* Dropdown box */}
//   <div className="login-dropdown">
//     <div className="dropdown-option" onClick={() => navigate('/signin')}>
//               Sign up / Create Account
//             </div>
//     <div className="dropdown-option">Login to the portal</div>
//   </div>
// </div>

// </div>
// </div>
//     </header>
//   )
// }

// export default Header;

import cirqlelogo from "../assets/images/logo.png";
import cirqlelogo2 from "../assets/images/logo2.png";
import location from "../assets/images/location.png";
import gps from "../assets/images/gps.png";
import user from "../assets/images/user.png";
import { FiSearch, FiMapPin, FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const [category, setCategory] = useState("All Categories");
  const [showLoginOptions, setShowLoginOptions] = useState(false); // 👈 added state
  const navigate = useNavigate();


  return (
    <>
      <div className="h-16 md:h-20"></div>

      <div
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-screen-lg bg-white py-2 px-3 md:py-3 md:px-4 rounded-full flex flex-wrap items-center justify-between gap-2"
        style={{ boxShadow: "0 0 40px 10px #F2F2F2" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-1 order-1 flex-shrink-0">
          <img src={cirqlelogo} alt="logo" className="w-6 h-6 md:w-7 md:h-7" />
          <div className="flex flex-col leading-3">
            <img
              src={cirqlelogo2}
              alt="CIRQLE Logo"
              className="w-16 h-3 md:w-18 md:h-4 object-contain"
            />
            <span className="text-[7px] font-bold" style={{ color: "#0C111D" }}>
              SAVING YOUR MONEY
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className="flex items-center w-full md:w-auto md:flex-1 order-3 md:order-2 mx-0 md:mx-1 rounded-full px-1.5 py-1.5 mt-2 md:mt-0"
          style={{ backgroundColor: "#318CE714" }}
        >
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-xs text-gray-700 outline-none mr-1 rounded-full px-2 py-1 hidden sm:block"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <option>All Categories:</option>
          </select>

          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent outline-none px-2 py-1 text-xs min-w-0"
          />
          <button className="text-white bg-blue-500 p-1.5 md:p-2 rounded-full flex-shrink-0">
            <FiSearch size={12} />
          </button>
        </div>

        {/* Location + Login */}
        <div className="relative flex items-center gap-2 order-2 md:order-3 ml-auto md:ml-0">
          <button className="hidden sm:flex items-center gap-0.5 border px-2 py-1.5 rounded-full text-xs mr-1 md:mr-2">
            <img src={location} alt="Location" className="w-3 h-3" />
            <span className="ml-0.5 text-gray-800 font-medium hidden md:inline">Texas</span>
            <img src={gps} alt="Another Icon" className="w-3 h-3 ml-1 md:ml-3" />
          </button>

          {/* Login Button */}
          <button
            onClick={() => setShowLoginOptions((prev) => !prev)}
            className="flex items-center gap-0.5 bg-[#318CE7] text-white px-2 py-1.5 rounded-full text-xs w-20 md:w-24 relative"
          >
            <img src={user} alt="User" className="w-3 h-3" />
            <span className="ml-0.5 font-medium hidden sm:inline">Login</span>
          </button>

          {/* Login Options Dropdown */}
            {showLoginOptions && (
        <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md text-sm py-2 w-48 border z-50">
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => navigate("/signin")} // ✅ Sign Up
          >
            Sign Up / Create Account
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => navigate("/login")} // ✅ Login
          >
            Login to the Portal
          </button>
        </div>
      )}

          <FiMenu className="text-base cursor-pointer ml-1 md:ml-0" />
        </div>
      </div>
    </>
  );
};

export default Header;
