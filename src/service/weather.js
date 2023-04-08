import { makeRequest } from "./base";

export const getWeather = async (params) => {
  console.log("deneme");
  const response = await makeRequest(
    { params, method: "GET" },
    "/forecast.json"
  );

  return response;
};
