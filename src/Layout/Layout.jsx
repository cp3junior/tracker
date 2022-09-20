import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";

const Layout = () => {
  return (
    <div className="app">
      <Navigation />
      <div className="app-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
