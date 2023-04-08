import React from "react";
import styles from "./index.module.scss";

import { useWeather } from "../../../../context/weather";
import { formatDate } from "../../../../utils/date";
import { Typography, Row, Col } from "antd";

const { Title, Text } = Typography;
const HomeHeader = () => {
  const {
    state: { data },
  } = useWeather();
  return (
    <div>
      <Row>
        <Col span={24}>
          <Title style={{ color: "white" }}>{data.location.name}</Title>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <Text style={{ color: "#C3C4CA" }}>{data.location.country}</Text>
            </Col>
            <Col>
              <Text style={{ color: "#C3C4CA" }}>
                {formatDate(data.location.localtime_epoch, {
                  weekday: "long",
                })}
                ,
                {formatDate(data.location.localtime_epoch, {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                  hour: "numeric",
                })}
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col flex="1">
          <img
            src={data.current.condition.icon}
            alt=""
            width={64}
            height={64}
          />
        </Col>
        <Col>
          <Row>
            <div className={styles.currentTempContainer}>
              <p>{data.current.temp_c}°C</p>
              <p>Feels like: {data.current.feelslike_c}°C</p>
              <p>{data.current.condition.text}</p>
            </div>
            <Row className={styles.box}>
              <Col xs={24} md={8}>
                <Text style={{ color: "#838D9C" }}>
                  Humudity: %{data.current.humidity}
                </Text>
              </Col>
              <Col xs={24} md={{ span: 8, offset: 8 }}>
                <Text style={{ color: "#838D9C" }}>
                  Visibility: {data.current.vis_km} km
                </Text>
              </Col>
              <Col xs={24} md={8}>
                <Text style={{ color: "#838D9C" }}>
                  Wind Speed: {data.current.wind_kph} km
                </Text>
              </Col>
              <Col xs={24} md={{ span: 8, offset: 8 }}>
                <Text style={{ color: "#838D9C" }}>
                  Pressure: {data.current.pressure_mb}hPa
                </Text>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HomeHeader;
