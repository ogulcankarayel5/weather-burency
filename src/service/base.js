import axiosInstance from "./client";

export const makeRequest = async (parameters, endpoint) => {
  return new Promise((resolve, reject) => {
    const { method, params = {} } = parameters;

    const queryParams = getParams(params);

    const config = {
      method,
      url: `${endpoint}?key=0ac33ffcad3146778e684623210905${queryParams}`,
    };

    axiosInstance(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getParams = (params = {}) => {
  let queryParams = "";

  if (Object.keys(params).length > 0) {
    queryParams = `&${Object.entries(params)
      .map(([key, value]) => {
        return `${key}=${value}`;
      })
      .join("&")}`;
  }

  return queryParams;
};
