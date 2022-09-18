import React from "react";

import { Link, useLocation } from "react-router-dom";
import pages from "../../helper/pages";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <div className="navigation">
      <div className="navigation-container">
        {pages.map((page) => (
          <div
            key={page.id}
            className={`${
              pathname === page.path ? "active" : ""
            } navigation-item`}
          >
            <Link to={page.path}>
              {page.icon}
              <span>{page.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
