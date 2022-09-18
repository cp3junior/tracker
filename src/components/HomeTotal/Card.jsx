import React from "react";
import { CardInfo, CardValue } from "./HomeTotalStyle";

const Card = ({ color, small = false, title, value }) => {
  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };
  return (
    <div className="card">
      <CardInfo color={color}>{title}</CardInfo>
      <CardValue small={small}>{formatNumber(value)} Ar</CardValue>
    </div>
  );
};

export default Card;
