import { ReactComponent as FlowerIcon } from "../assets/icons/flower.svg";
import { Link } from "react-router-dom";

const BigCard = () => {
  return (
    <div className="homecard-big">
      <div className="homecard-big-text">
        <p>Available balance</p>
        <h2>90.000.000 Ar</h2>
      </div>
      <Link to="/bills">See details</Link>
      <div className="homecard-big-illustration">
        <FlowerIcon />
      </div>
    </div>
  );
};

export default BigCard;
