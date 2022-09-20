import React from "react";
import BigCard from "../components/BigCard";
import TransactionItem from "../components/TransactionItem";
import { ReactComponent as AddIcon } from "../assets/icons/add.svg";
import { Link } from "react-router-dom";

const Bills = () => {
  return (
    <div className="page">
      <div className="subpage hasunder green cardcontainer">
        <div className="homecard">
          <BigCard />
        </div>
        <div className="addbill">
          <Link to="/bill">
            <AddIcon />
            <span>Add bill</span>
          </Link>
        </div>
      </div>
      <div className="subpage under gray billscontainer">
        <div className="title">
          <h2>Bills</h2>
        </div>
        {Array(20)
          .fill(0)
          .map((iten, i) => (
            <TransactionItem key={i} />
          ))}
      </div>
    </div>
  );
};

export default Bills;
