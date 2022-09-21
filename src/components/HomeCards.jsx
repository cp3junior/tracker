import { formatNumber } from "../lib/functions";
import BigCard from "./BigCard";
import MiniCard from "./MiniCard";

const HomeCards = () => {
  return (
    <div className="homecard">
      <BigCard title="Available balance" price="3000000" link="/transactions" />
      <div className="homecard-small bulbles">
        <p>September Cashflow</p>
        <div className="homecard-small-container">
          <MiniCard title="Income" price="2000000" />
          <div className="homecard-small-separation" />
          <MiniCard
            effect="mirror"
            title="Expense"
            price="1000000"
            direction="up"
          />
        </div>
      </div>
      <div className="homecard-small blue">
        <p>Today's Spending</p>
        <h2>{formatNumber(23000)} Ar</h2>
      </div>
    </div>
  );
};

export default HomeCards;
