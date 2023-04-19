import charity from "./charity.jpg";
import React from "react";

function Home() {
  return (
    <div>
      <div className="img-div">
        <img className="charity" src={charity} alt="" />
      </div>
    </div>
  );
}

export default Home;
