import { useState } from "react";
import TransactionItem from "../components/TransactionItem";
import { ReactComponent as FilterIcon } from "../assets/icons/filter.svg";
import { ReactComponent as AddIcon } from "../assets/icons/add.svg";

const Transactions = () => {
  const [show, setShow] = useState(false);

  const showFilter = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const hideFilter = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <div className="page">
      <div className="transactioncontainer">
        <div className="title">
          <h2>Transactions</h2>
          <button onClick={showFilter}>
            <FilterIcon />
          </button>
        </div>
        {Array(20)
          .fill(0)
          .map((iten, i) => (
            <TransactionItem key={i} />
          ))}
      </div>
      {show && (
        <div className="transactionfilteroverlay" onClick={hideFilter} />
      )}
      <div className={`transactionfilter ${show ? "" : "hidden"}`}>
        <div className="transactionfilter-header">
          <button onClick={hideFilter}>
            <AddIcon />
          </button>
          <h3>Filters</h3>
        </div>
        <div className="transactionfilter-content">
          <div className="transactionfilter-content-form">
            <label htmlFor="category">Categories</label>
            <input type="text" name="category" />
          </div>
          <button>Filter</button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
