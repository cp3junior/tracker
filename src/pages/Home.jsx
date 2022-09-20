import React from "react";
import { Link } from "react-router-dom";
import AddButton from "../components/AddButton";
import HomeCard from "../components/HomeCard";
import HomeIntro from "../components/HomeIntro";
import TransactionItem from "../components/TransactionItem";

const Home = () => {
  return (
    <div className="page green">
      <AddButton />
      <HomeIntro />
      <div className="subpage hasunder">
        <HomeCard />
      </div>
      <div className="subpage under gray">
        <div className="title">
          <h2>Transactions</h2>
          <Link to="/">See all</Link>
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
