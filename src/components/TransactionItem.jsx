import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import { formatNumber, getFormatedDate, getPayDate } from "../lib/functions";

const TransactionItem = ({
  link = "",
  title = "",
  date = "",
  category = "",
  price = 0,
  hasStatus = false,
  usePayday = false,
  paydate = "",
  status = "",
}) => {
  const { categories } = useContext(DataContext);

  const getCurrentCategory = () => {
    return categories.find((categ) => categ.id === category);
  };

  const getEmoji = () => {
    if (category) return getCurrentCategory()?.emoji || "🙁";
    return "🙁";
  };

  const getColor = () => {
    if (category) return getCurrentCategory()?.color || "#ff7b7b";
    return "#ff7b7b";
  };

  return (
    <Link to={link} className="transactionItem">
      <div
        className="transactionItem-icon"
        style={{ backgroundColor: getColor() }}
      >
        {getEmoji()}
      </div>
      <div className="transactionItem-content">
        <h3>{title}</h3>
        <h4>{getCurrentCategory()?.name || ""}</h4>
        <p
          dangerouslySetInnerHTML={{
            __html: usePayday
              ? `Every ${getPayDate(paydate)} of the month`
              : getFormatedDate(date),
          }}
        />
      </div>
      <div className="transactionItem-price">
        <h2>{formatNumber(price)} Ar</h2>
        {hasStatus && <p>{status}</p>}
      </div>
    </Link>
  );
};

export default TransactionItem;
