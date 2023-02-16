const ACCESS = "access";
export const getAccess = () => {
  const item = localStorage.getItem(ACCESS);
  return item;
};

const AIRPORT = "airport";
export const getAirport = () => {
  const item = localStorage.getItem(AIRPORT);
  return JSON.parse(item);
};
