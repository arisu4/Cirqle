import "./Header.css";
import cirqlelogo from "../../assets/images/logo.png";
import cirqlelogo2 from "../../assets/images/logo2.png";
import location from "../../assets/images/location.png";
import gps from "../../assets/images/gps.png";
import user from "../../assets/images/user.png";
import dropdown from "../../assets/images/dropdown.png";
import { FiSearch, FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="header-space"></div>

      <div className="header-container">
        {/* Logos add  */}
        <div className="header-logo" onClick={() => navigate("/")}>
          <img src={cirqlelogo} alt="logo" className="logo-icon" />
          <div className="logo-text">
            <img src={cirqlelogo2} alt="CIRQLE Logo" className="logo-cirqle" />
            <span className="logo-slogan">SAVING YOUR MONEY</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="header-search">
          <div
            className="search-category"
            onClick={() => navigate("/category")}
          >
            <span>All Categories</span>
            <img src={dropdown} alt="Icon" className="dropdown-icon" />
          </div>

          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">
            <FiSearch size={12} />
          </button>
        </div>

        {/* Location and Login */}
        <div className="header-actions">
          <button className="location-button">
            <img src={location} alt="Location" className="location-icon" />
            <span className="location-text" style={{ marginRight: "12px" }}>
              Texas
            </span>
            <img src={gps} alt="GPS Icon" className="gps-icon" />
          </button>
          <div className="login-wrapper">
            <button
              onClick={() => setShowLoginOptions((prev) => !prev)}
              className="login-button"
            >
              <img src={user} alt="User" className="user-icon" />
              <span className="login-text">Login</span>
            </button>

            {showLoginOptions && (
              <div className="login-dropdown">
                <button
                  className="login-option"
                  onClick={() => navigate("/signin")}
                >
                  Sign Up / Create Account
                </button>
                <button
                  className="login-option"
                  onClick={() => navigate("/login")}
                >
                  Login to the Portal
                </button>
              </div>
            )}
          </div>

          <FiMenu className="menu-icon" />
        </div>
      </div>
    </>
  );
};

export default Header;
