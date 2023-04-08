import React from "react";
import { Typography, Row, Col } from "antd";

const { Paragraph } = Typography;

export const CardText = ({ children, size = "small", style, ...props }) => {
  return (
    <Paragraph size={size} {...props} style={{ color: "white", ...style }}>
      {children}
    </Paragraph>
  );
};

export const CardSecondaryText = ({
  children,
  size = "small",
  style,
  ...props
}) => {
  return (
    <Paragraph style={{ color: "#838D9C", ...style }} {...props}>
      {children}
    </Paragraph>
  );
};

export const CardImage = ({ url, width = 64, height = 64 }) => {
  return <img src={url} alt="" {...{ width, height }} />;
};
