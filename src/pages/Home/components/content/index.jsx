import React from "react";
import { useWeather } from "../../../../context/weather";
import { Typography, Row, Col } from "antd";
import HourlyCard from "../../../../components/card/hourly";
import { formatDate } from "../../../../utils/date";
import DailyCard from "../../../../components/card/daily";

const { Title } = Typography;

const HomeContent = () => {
  const {
    state: { data },
  } = useWeather();
  console.log(data);
  return (
    <Row style={{ marginTop: 20 }}>
      <Col span={24}>
        <Title level={3} style={{ color: "#fff" }}>
          Hourly
        </Title>
      </Col>
      <Col span={24}>
        <Row wrap={false} style={{ overflowX: "auto" }}>
          {data.forecast.forecastday[0].hour.map((item) => (
            <Col style={{ padding: 5 }} key={item.time_epoch}>
              <HourlyCard
                hour={formatDate(item.time_epoch, {
                  hour: "2-digit",
                })}
                url={item.condition.icon}
                temp={`${item.temp_c}°C`}
              />
            </Col>
          ))}
        </Row>
      </Col>
      <Col span={24} style={{ marginTop: 30 }}>
        <Title level={3} style={{ color: "#fff" }}>
          Daily
        </Title>
      </Col>
      <Col span={24}>
        <Row>
          {data.forecast.forecastday.map((item) => (
            <Col span={24} style={{ padding: 5 }} key={item.date_epoch}>
              <DailyCard
                day={formatDate(item.date_epoch, {
                  weekday: "long",
                })}
                url={item.day.condition.icon}
                temp={`${item.day.mintemp_c}°C / ${item.day.maxtemp_c}°C`}
                desc={item.day.condition.text}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default HomeContent;
