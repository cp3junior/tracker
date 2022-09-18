import React from "react";

import HomeTotal from "../../components/HomeTotal/HomeTotal";

const Home = () => {
  return (
    <div className="page">
      <HomeTotal />
      {Array(20)
        .fill(0)
        .map((iten, i) => (
          <p key={i}>
            lorem hdjs djksd jsk dhjshdjs dshdjs djs djshjdshjdshjdas
            hdsajdhksaj djkas djas hdjksad{" "}
          </p>
        ))}
    </div>
  );
};

export default Home;
