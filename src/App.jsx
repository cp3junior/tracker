import { Suspense, lazy, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import PassCode from "./pages/PassCode/PassCode";
import FallBack from "./components/FallBack";
import AuthContext from "./context/AuthContext";

const Bills = lazy(() => import("./pages/Bills"));
const Summary = lazy(() => import("./pages/Summary"));
const Transactions = lazy(() => import("./pages/Transactions"));
const TransactionsDetail = lazy(() => import("./pages/TransactionsDetail"));
const BillsDetail = lazy(() => import("./pages/BillsDetail"));

const App = () => {
  const { isConnected, disconnect } = useContext(AuthContext);

  useEffect(() => {
    return () => {
      // disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isConnected ? (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="bills"
            element={
              <Suspense fallback={<FallBack />}>
                <Bills />
              </Suspense>
            }
          />
          <Route
            path="bill"
            element={
              <Suspense fallback={<FallBack />}>
                <BillsDetail />
              </Suspense>
            }
          />
          <Route
            path="summary"
            element={
              <Suspense fallback={<FallBack />}>
                <Summary />
              </Suspense>
            }
          />
          <Route
            path="transactions"
            element={
              <Suspense fallback={<FallBack />}>
                <Transactions />
              </Suspense>
            }
          />
          <Route
            path="transaction"
            element={
              <Suspense fallback={<FallBack />}>
                <TransactionsDetail />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  ) : (
    <PassCode />
  );
};

export default App;
