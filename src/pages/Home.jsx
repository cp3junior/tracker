import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeCards from "../components/HomeCards";
import HomeIntro from "../components/HomeIntro";
import Loader from "../components/Loader";
import TransactionItem from "../components/TransactionItem";
import DataContext from "../context/DataContext";
import { getTransactionsMonth } from "../db/collections";
import { monthMap } from "../lib/constants";

// const today = new Date("06 22 2022");
const today = new Date();
const monthIndex = moment(today).get("month");
const month = monthMap[monthIndex];

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { homeTransactions, updateHomeTransactions } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const data = await getTransactionsMonth();
      if (data.length > 0) {
        updateHomeTransactions(data);
      }
      setIsLoading(false);
    };

    if (homeTransactions.length === 0) fetchData();
  }, [homeTransactions, updateHomeTransactions]);

  return (
    <div className="page green">
      <HomeIntro />
      <div className="subpage hasunder">
        <HomeCards month={month} />
      </div>
      <div className="subpage under gray">
        <div className="title">
          <h2>Transactions</h2>
          <Link to="/transaction">See all</Link>
        </div>
        {isLoading ? (
          <div className="loadingContainer">
            <Loader />
          </div>
        ) : homeTransactions.length > 0 ? (
          homeTransactions
            .filter((_, i) => i < 10)
            .map((item) => (
              <TransactionItem
                key={item.id}
                price={item?.price}
                title={item?.title}
                category={item?.category}
                date={item?.date}
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
    </div>
  );
};

export default Home;
