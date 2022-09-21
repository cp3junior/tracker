import React from "react";
import { Link } from "react-router-dom";
import HomeCards from "../components/HomeCards";
import HomeIntro from "../components/HomeIntro";
import TransactionItem from "../components/TransactionItem";

const Home = () => {
  return (
    <div className="page green">
      <HomeIntro />
      <div className="subpage hasunder">
        <HomeCards />
      </div>
      <div className="subpage under gray">
        <div className="title">
          <h2>Transactions</h2>
          <Link to="/transactions">See all</Link>
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

export default Home;
