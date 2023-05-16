import React from "react";

function Navigation() {
  return (
    <div>
      <div className="header flex3">
        <div className="flex-items">
          <a href="mailto:campaigns@chainfundit.com" className="wt">
            Email:Campaigns@ChanfundIt.com
          </a>
        </div>
        <div class="flex-items">
          <a href="tel:+442038380360" className="mytel wt">
            +442038380360
          </a>
        </div>
        <div class="flex-items">
          <a href="#pay" className="mytel wt">
            DONATE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
