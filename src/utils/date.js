export const formatDate = (timeEpoch, params) => {
  const date = new Date(timeEpoch * 1000).toLocaleString("en-us", params);

  return date;
};
