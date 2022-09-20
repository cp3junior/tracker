import { ReactComponent as ArrowIcon } from "../assets/icons/arrow.svg";
import BigCard from "./BigCard";

const HomeCard = () => {
  return (
    <div className="homecard">
      <BigCard />
      <div className="homecard-small bulbles">
        <p>September Cashflow</p>
        <div className="homecard-small-container">
          <div className="homecard-small-mini">
            <div className="homecard-small-mini-icon">
              <ArrowIcon />
            </div>
            <div className="homecard-small-mini-content">
              <p>Income</p>
              <h2>20.000.000 Ar</h2>
            </div>
          </div>
          <div className="homecard-small-separation" />
          <div className="homecard-small-mini">
            <div className="homecard-small-mini-icon red">
              <ArrowIcon />
            </div>
            <div className="homecard-small-mini-content">
              <p>Expense</p>
              <h2>10.000.000 Ar</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="homecard-small blue">
        <p>Today's Spending</p>
        <h2>20.000 Ar</h2>
      </div>
    </div>
  );
};

export default HomeCard;
