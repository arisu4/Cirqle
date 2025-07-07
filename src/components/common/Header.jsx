import "./Header.css";
import cirqlelogo from "../../assets/images/logo.png";
import cirqlelogo2 from "../../assets/images/logo2.png";
import location from "../../assets/images/location.png";
import gps from "../../assets/images/gps.png";
import userimage from "../../assets/images/user.png";
import lock from "../../assets/images/Lock.png";
import lockactive from "../../assets/images/lockactive.png";
import linkshare from "../../assets/images/linkshare.png";
import linkshareactive from "../../assets/images/linkshareactive.png";
import myaccountactive from "../../assets/images/myaccountactive.png";
import dropdown from "../../assets/images/dropdown.png";
import myaccount from "../../assets/images/myaccount.png";
import logout from "../../assets/images/logout.png";
import mycoupon from "../../assets/images/Tag.png";
import camera from "../../assets/images/camera.png";
import profiletiktok from "../../assets/images/profiletiktok.png";
import profileyoutube from "../../assets/images/profileyoutube.png";
import profilefacebook from "../../assets/images/profilefacebook.png";
import profiileinstagram from "../../assets/images/profiileinstagram.png";
import { FiSearch, FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const [showAccountModal, setShowAccountModal] = useState(false);
  const [activeSection, setActiveSection] = useState("profile"); // 'profile' | 'password' | 'socialmedia'
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  return (
    <>
      <div className="header-space"></div>

      <div className="header-container">
        {/* Logos */}
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
          {/* Location Button - only shows location dropdown */}
          <div className="location-wrapper">
            <button className="location-button">
              <img src={location} alt="Location" className="location-icon" />
              <span className="location-text" style={{ marginRight: "12px" }}>
                Texas
              </span>
              <img src={gps} alt="GPS Icon" className="gps-icon" />
            </button>
          </div>

          {/* User/Login Button - shows different options based on auth state */}
          <div className="login-wrapper">
            <button
              onClick={() => setShowLoginOptions((prev) => !prev)}
              className="login-button"
            >
              <img src={userimage} alt="User image" className="user-icon" />
              <span className="login-text">
                {user ? ` ${user.name}` : "Login"}
              </span>
            </button>

            {showLoginOptions && (
              <div className="login-dropdown">
                {user ? (
                  <>
                    <button
                      className="login-option"
                      onClick={() => navigate("/coupon")}
                    >
                      <img
                        src={mycoupon}
                        alt="My Coupons"
                        className="option-icon"
                      />
                      My Coupons
                    </button>

                    <button
                      className="login-option"
                      onClick={() => {
                        setShowAccountModal(true);
                        setShowLoginOptions(false);
                      }}
                    >
                      <img
                        src={myaccount}
                        alt="My Account"
                        className="option-icon"
                      />
                      My Account
                    </button>

                    <button
                      className="login-option"
                      onClick={() => {
                        // Logout logic
                        sessionStorage.removeItem("authToken");
                        setUser(null);
                        navigate("/");
                      }}
                    >
                      <img src={logout} alt="Logout" className="option-icon" />
                      Logout
                    </button>
                  </>
                ) : (
                  // Show login options when not logged in
                  <>
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
                  </>
                )}
              </div>
            )}
          </div>
          <FiMenu className="menu-icon" />
        </div>
      </div>

      {/* Account Modal remains the same */}
      {showAccountModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h2>Manage Account</h2>
              <button
                className="close-button"
                onClick={() => setShowAccountModal(false)}
              >
                ×
              </button>
            </div>

            <div className="modal-content">
              <div className="modal-sidebar">
                <button
                  className={activeSection === "profile" ? "active" : ""}
                  onClick={() => setActiveSection("profile")}
                >
                  <img
                    src={
                      activeSection === "profile" ? myaccountactive : myaccount
                    }
                    alt="My Profile"
                    className="sidebar-icon"
                  />
                  My Profile
                </button>

                <button
                  className={activeSection === "password" ? "active" : ""}
                  onClick={() => setActiveSection("password")}
                >
                  <img
                    src={activeSection === "password" ? lockactive : lock}
                    alt="Password"
                    className="sidebar-icon"
                  />
                  Password
                </button>

                <button
                  className={activeSection === "social" ? "active" : ""}
                  onClick={() => setActiveSection("social")}
                >
                  <img
                    src={
                      activeSection === "social" ? linkshareactive : linkshare
                    }
                    alt="Social Profile Link"
                    className="sidebar-icon"
                  />
                  Social Profile Link
                </button>
              </div>

              {/* My profile modal */}
              <div className="modal-main">
                {activeSection === "profile" && (
                  <>
                    <h3>My Profile</h3>
                    <div className="profile-image-wrapper">
                      <img
                        src="https://via.placeholder.com/100"
                        alt="Profile"
                        className="profile-image"
                      />
                      <div className="camera-icon-wrapper">
                        <img
                          src={camera}
                          alt="Camera Icon"
                          className="camera-icon"
                        />
                      </div>
                    </div>

                    <label>
                      Email Address <span className="required-star">*</span>
                    </label>
                    <input type="email" className="modal-input" />

                    <label>Name</label>
                    <input type="text" className="modal-input" />
                  </>
                )}
                {/* password modal */}
                {activeSection === "password" && (
                  <div className="password-section">
                    <h3>Change Password</h3>

                    <label>
                      Old Password <span className="required-star">*</span>
                    </label>
                    <div className="password-input-wrapper">
                      <input
                        type={showOldPassword ? "text" : "password"}
                        className="password-modal-input"
                      />
                      <span
                        className="toggle-password-visibility"
                        onClick={() => setShowOldPassword(!showOldPassword)}
                      >
                        {showOldPassword ? <FiEyeOff /> : <FiEye />}
                      </span>
                    </div>
                    <p className="forgot-password-text">Forgot password?</p>

                    <label>
                      New Password <span className="required-star">*</span>
                    </label>
                    <div className="password-input-wrapper">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        className="password-modal-input"
                      />
                      <span
                        className="toggle-password-visibility"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? <FiEyeOff /> : <FiEye />}
                      </span>
                    </div>

                    <label>
                      Confirm New Password
                      <span className="required-star"> *</span>
                    </label>
                    <div className="password-input-wrapper">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="password-modal-input"
                      />
                      <span
                        className="toggle-password-visibility"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                      </span>
                    </div>
                  </div>
                )}

                {/* social profile link modal */}
                {activeSection === "social" && (
                  <>
                    <h3 style={{ color: "#000000", fontWeight: "600" }}>
                      Add Your Social Media Link
                    </h3>

                    <div className="input-with-icon">
                      <img
                        src={profilefacebook}
                        alt="Facebook"
                        className="input-icon"
                      />
                      <input
                        type="url"
                        className="modal-input"
                        placeholder="Facebook URL"
                      />
                    </div>

                    <div className="input-with-icon">
                      <img
                        src={profiileinstagram}
                        alt="Instagram"
                        className="input-icon"
                      />
                      <input
                        type="url"
                        className="modal-input"
                        placeholder="Instagram URL"
                      />
                    </div>

                    <div className="input-with-icon">
                      <img
                        src={profileyoutube}
                        alt="youtube"
                        className="input-icon"
                      />
                      <input
                        type="url"
                        className="modal-input"
                        placeholder="Twitter URL"
                      />
                    </div>

                    <div className="input-with-icon">
                      <img
                        src={profiletiktok}
                        alt="tiktok"
                        className="input-icon"
                      />
                      <input
                        type="url"
                        className="modal-input"
                        placeholder="LinkedIn URL"
                      />
                    </div>
                  </>
                )}

                <div className="modal-actions">
                  <button
                    className="cancel-btn"
                    onClick={() => setShowAccountModal(false)}
                  >
                    Cancel
                  </button>
                  <button className="save-btn">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

