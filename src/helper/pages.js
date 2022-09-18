import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as BillsIcon } from "../assets/icons/bills.svg";
import { ReactComponent as SummaryIcon } from "../assets/icons/summary.svg";
import { ReactComponent as TransactionsIcon } from "../assets/icons/transactions.svg";

const pages = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: "Bills",
    path: "/bills",
    icon: <BillsIcon />,
  },
  {
    id: 3,
    title: "Summary",
    path: "/summary",
    icon: <SummaryIcon />,
  },
  {
    id: 4,
    title: "Transactions",
    path: "/transactions",
    icon: <TransactionsIcon />,
  },
];

export default pages;
