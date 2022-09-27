import { useContext, useEffect, useState } from "react";
import TransactionItem from "../components/TransactionItem";
import { ReactComponent as FilterIcon } from "../assets/icons/filter.svg";
import { ReactComponent as AddIcon } from "../assets/icons/add.svg";
import DataContext from "../context/DataContext";
import { getTransactionsPage } from "../db/collections";
import Loader from "../components/Loader";

const Transactions = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { transactions, updateTransactions } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const data = await getTransactionsPage();
      if (data.length > 0) {
        updateTransactions(data);
      }
      setIsLoading(false);
    };

    if (transactions.length === 0) fetchData();
  }, [transactions, updateTransactions]);

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
          <button type="submit" onClick={showFilter}>
            <FilterIcon />
          </button>
        </div>
        {isLoading ? (
          <div className="loadingContainer">
            <Loader />
          </div>
        ) : transactions.length > 0 ? (
          transactions.map((item) => (
            <TransactionItem
              key={item.id}
              price={item?.price}
              title={item?.title}
              date={item?.date}
              category={item?.category}
              transactionType={item?.type}
              link={`/transaction/${item.id}/view`}
              isTransaction
            />
          ))
        ) : (
          <div className="nodata">
            <p>No Data</p>
          </div>
        )}
      </div>

      {/* Filter */}
      {show && (
        <div className="transactionfilteroverlay" onClick={hideFilter} />
      )}
      <div className={`transactionfilter ${show ? "" : "hidden"}`}>
        <div className="transactionfilter-header">
          <button type="submit" onClick={hideFilter}>
            <AddIcon />
          </button>
          <h3>Filters</h3>
        </div>
        <div className="transactionfilter-content">
          <div className="transactionfilter-content-form">
            <label htmlFor="category">Categories</label>
            <input type="text" name="category" />
          </div>
          <button type="submit">Filter</button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
