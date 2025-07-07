

// export const registerUser = async (data) => {
//   const response = await axios.post(
//     "http://cirqle.eu-west-2.elasticbeanstalk.com/api/v1/user/register",
//     data,
//     {
//       headers: {
//         "x-api-key": "UKIA2LKKFVLMWXY7YONS", // Replace if there's a different header name
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   return response.data;
// };]

import axios from "axios";
import { loginApi } from "../utils/apis";
//this is for resgister
export const registerUser = async (data) => {
  try {
    const response = await axios.post(
      "/api/user/register",
      data,
      {
        headers: {
          "x-api-key": "UKIA2LKKFVLMWXY7YONS",
          "Content-Type": "application/json",
          "accept": "*/*",
        },
      }
    );
    console.log("Response ===>", response.data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.status, error.response?.data);
    throw error;
  }
};


// this is for login

export const loginUser = async (data) => {
  try {
    const response = await axios.post(
      loginApi,
      data,
      {
        headers: {
          "x-api-key": "UKIA2LKKFVLMWXY7YONS",
          "Content-Type": "application/json",
          "accept": "*/*",
        },
      }
    );
    console.log("Login response:", response.data);
    console.log("Full login response:", response);

    return response;
  } catch (error) {
    console.error("Login error:", error.response?.status, error.response?.data);
    throw error;
  }
};


