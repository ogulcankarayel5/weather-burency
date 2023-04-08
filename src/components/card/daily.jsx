import React from "react";
import { Typography, Row, Col } from "antd";
import { CardImage, CardSecondaryText, CardText } from ".";

const DailyCard = ({ day, url, desc, temp }) => {
  return (
    <Row
      style={{
        width: "100%",
        background: "#002952",
        borderRadius: 16,
        padding: 10,
      }}
      justify="space-between"
    >
      <Col>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CardImage url={url} />
          <CardText style={{ textAlign: "center", marginLeft: 10 }}>
            {day}
          </CardText>
        </div>
      </Col>
      <Col>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CardText style={{ textAlign: "center", marginRight: 10 }}>
            {desc}
          </CardText>
          <CardSecondaryText>{temp}</CardSecondaryText>
        </div>
      </Col>
    </Row>
  );
};

export default DailyCard;
