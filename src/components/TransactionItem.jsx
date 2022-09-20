import { Link } from "react-router-dom";

const TransactionItem = () => {
  return (
    <Link to="/transaction" className="transactionItem">
      <div className="transactionItem-icon">🤐</div>
      <div className="transactionItem-content">
        <h3>Shopping</h3>
        <p>10 September 2022</p>
      </div>
      <div className="transactionItem-price">
        <h2>20.020.000 Ar</h2>
        <p>Paid</p>
      </div>
    </Link>
  );
};

export default TransactionItem;
