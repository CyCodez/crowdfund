import charity from "./charity.jpg";
import React from "react";

function Home() {
  return (
    <div>
      <div className="img-div">
        <img className="charity" src={charity} alt="" />
        <p className="text">Donate For a Better world</p>
      </div>
    </div>
  );
}

export default Home;
