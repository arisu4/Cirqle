import axios from "axios";

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
// };
export const registerUser = async (data) => {
  try {
    const response = await axios.post(
      "/api/user/register", // ⚠️ Note: NO `/api/v1` — match cURL exactly
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


