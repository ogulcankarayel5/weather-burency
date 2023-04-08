import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

import { WeatherContextProvider, useWeather } from "../../context/weather";
import { Spin } from "antd";
import HomeHeader from "./components/header";

const Home = () => {
  const {
    getData,
    state: { loading },
  } = useWeather();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          getData({
            q: `${latitude},${longitude}`,
            days: 7,
          });
        },
        (err) => {
          alert("You need to give permission to get your location");
        }
      );
    } else {
      alert("Sorry Not available!");
    }
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <Spin />
      ) : (
        <>
          <HomeHeader />
        </>
      )}
    </div>
  );
};

export default Home;
