import React from "react";
import { Typography, Row, Col } from "antd";
import { CardImage, CardText } from ".";

const HourlyCard = ({ hour, url, temp }) => {
  return (
    <Row style={{ width: "120px", background: "#002952", borderRadius: 16 }}>
      <Col span={24}>
        <CardText style={{ textAlign: "center" }}>{hour}</CardText>
      </Col>
      <Col span={24}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CardImage url={url} />
        </div>
      </Col>
      <Col span={24}>
        <CardText style={{ textAlign: "center" }}>{temp}</CardText>
      </Col>
    </Row>
  );
};

export default HourlyCard;
