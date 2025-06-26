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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Merchant",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the terms & conditions.");
      return;
    }
    console.log("Submitted data:", formData);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans">
      {/* Left Section - Hidden on small screens */}
      <div className="hidden lg:flex lg:flex-1 items-center justify-center p-5 ">
        <img
          src={frame}
          alt="Laptop"
          className="max-h-[580px] w-full object-contain px-10"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white p-4 sm:p-6 lg:p-10 flex flex-col justify-center items-center relative">
        {/* Visit Home Link */}
        <Link
          to="/"
          className="absolute top-4 right-20 text-sm text-blue-600 hover:opacity-80"
        >
          Visit Home
        </Link>

        {/* Login Content */}
        <div className="w-full max-w-md">
          {/* Header logo */}
          <div className="flex items-center gap-2 mb-4">
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

          {/* Form Title */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">
            Welcome to Circle
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
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
              <div className="text-right mt-1">
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#F04438] underline hover:opacity-80"
                >
                  Forgot password?
                </Link>
              </div>
            </label>

            {/* Password */}
            <label className="w-full text-sm text-gray-800 relative">
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

            {/* Agree Checkbox */}
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
              Login
            </button>
          </form>

          {/* Divider Text */}
          <p className="text-center text-sm my-4 text-[#1D2939]">
            Or Login With
          </p>

          {/* Social Login Buttons */}

          <div className="flex justify-center items-center gap-4 mt-2 flex-wrap">
            <img
              src={apple}
              alt="Apple"
              className="h-9 w-[200px] cursor-pointer"
            />
            <img
              src={google}
              alt="Google"
              className="h-9 w-[200px] cursor-pointer"
            />
            <img
              src={facebook1}
              alt="Facebook"
              className="h-9 w-[200px] cursor-pointer"
            />
          </div>

          {/* Sign Up Prompt */}
          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link
              to="/signin"
              className="text-[#318CE7] font-semibold underline"
            >
              Create
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
