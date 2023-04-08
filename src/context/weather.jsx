import React, { useMemo, createContext } from "react";
import { getWeather } from "../service/weather";

// Create Context Object
export const WeatherContext = createContext();

function weatherReducer(state, action) {
  switch (action.type) {
    case "start": {
      return { ...state, loading: true };
    }
    case "finish": {
      return { ...state, loading: false, data: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const WeatherContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(weatherReducer, {
    data: null,
    loading: true,
  });

  const getData = async (params) => {
    dispatch({ type: "start" });
    const result = await getWeather(params);
    dispatch({ type: "finish", payload: result });
  };
  const value = useMemo(
    () => ({
      state,
      dispatch,
      getData,
    }),
    [state, dispatch, getData]
  );
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export function useWeather() {
  const context = React.useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
}
