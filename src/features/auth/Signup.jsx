import React, { useState } from "react";
import frame from "../../assets/images/frame.png";
import { Eye, EyeOff } from "lucide-react";
import logo2 from "../../assets/images/logo2.png";
import logo from "../../assets/images/logo.png";
import facebook1 from "../../assets/images/facebook1.png";
import instagram from "../../assets/images/instagram.png";
import google from "../../assets/images/google.png";
import apple from "../../assets/images/apple.png";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/authService";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    if (!formData.agree) {
      alert("You must agree to the terms & conditions.");
      return;
    }
  
    // const payload = {
    //   userEmail: formData.email,
    //   userPassword: formData.password,
    //   firstName: formData.firstName,
    //   lastName: formData.lastName,
    // };
       const payload = {
      userEmail: "test1@gmai.com",
      userPassword: "123456",
      firstName: "Testt",
      lastName: "da",
    };
  
    try {
      const res = await registerUser(payload);
      if (res.token) {
        sessionStorage.setItem("authToken", res.token);
        alert("Account created successfully!");
        // navigate("/dashboard"); // If using react-router-dom
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed.");
    }
  };
  
  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans">
      {/* Left Section - Hidden on small screens */}
      <div className="hidden lg:flex lg:flex-1 items-center justify-center p-5 bg-gray-50">
        <img
          src={frame}
          alt="Laptop"
          className="max-h-[580px] w-full object-contain px-10"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white p-4 sm:p-6 lg:p-10 relative">
        <div className="max-w-md mx-auto">
          {/* Header logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <img src={logo} alt="Circle Logo" className="h-[27px]" />
            </div>
            <div className="flex flex-col items-center">
              <img src={logo2} alt="Circle" className="h-[18px]" />
              <span className="text-[8px] font-semibold text-gray-600">
                SAVING YOUR MONEY
              </span>
            </div>
          </div>

          {/* Form */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">
            Welcome to Circle
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <label className="block text-sm text-gray-800">
              First Name
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded-md border border-gray-300"
              />
            </label>

            <label className="block text-sm text-gray-800">
              Last Name
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded-md border border-gray-300"
              />
            </label>

            <label className="block text-sm text-gray-800">
              Email Address <span className="text-red-600">*</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded-md border border-gray-300"
              />
            </label>

            <label className="block text-sm text-gray-800">
              Role <span className="text-red-600">*</span>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-md border border-gray-300"
              >
                <option value="Merchant">Merchant</option>
                <option value="Customer">Customer</option>
              </select>
            </label>

            {/* Passwords - stack on responsive */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {/* Password */}
              <label className="w-full sm:w-1/2 text-sm text-gray-800 relative">
                Password <span className="text-red-600">*</span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="*****"
                  required
                  className="w-full mt-1 p-2 pr-10 rounded-md border border-gray-300 placeholder:text-[#101828]"
                />
                <div
                  className="absolute top-9 right-3 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
              </label>

              {/* Confirm Password */}
              <label className="w-full sm:w-1/2 text-sm text-gray-800 relative">
                Confirm Password <span className="text-red-600">*</span>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="*****"
                  required
                  className="w-full mt-1 p-2 pr-10 rounded-md border border-gray-300 placeholder:text-[#101828]"
                />
                <div
                  className="absolute top-9 right-3 cursor-pointer text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </div>
              </label>
            </div>

            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mr-2"
              />
              <span>I agree to Terms & Conditions</span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-[450px] h-[35px] bg-blue-600 text-white rounded-md text-sm mx-auto block"
            >
              Create Account
            </button>
          </form>
          <p className="text-center text-sm my-4 text-[#1D2939]">
            Or Signup With
          </p>

          <div className="flex justify-center gap-4 mt-2 flex-wrap">
            <img src={apple} alt="Apple" className="h-9 w-24 cursor-pointer" />
            <img
              src={google}
              alt="Google"
              className="h-9 w-24 cursor-pointer"
            />
            <img
              src={facebook1}
              alt="Facebook"
              className="h-9 w-24 cursor-pointer"
            />
            <img
              src={instagram}
              alt="Instagram"
              className="h-9 w-24 cursor-pointer"
            />
          </div>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#318CE7] font-semibold underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
