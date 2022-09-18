import React from "react";
import Card from "./Card";

const HomeTotal = () => {
  return (
    <div className="hometotal">
      <div>
        <div className="card-container">
          <Card color="blue" title="Total Balance" value="3000000" />
        </div>
      </div>
      <div className="multicard-container">
        <div className="card-container">
          <Card color="pink" small title="Borrowed" value="3000" />
        </div>
        <div className="card-container">
          <Card color="green" small title="Lent" value="10000" />
        </div>
      </div>
    </div>
  );
};

export default HomeTotal;
