import React from "react";
import Donatepay from "./Donations";

function About() {
  return (
    <main>
      <h2 style={{ textAlign: "center", color: "#FF0000" }}>
        Help Ahmed and Peter Pay their Tuition Fees at Unilag
      </h2>
      <section>
        It is the dream of many young Talented Nigerian youth to go to school
        and receive quality education, but without the means to actualize this
        dream. Ahmed and Peter among millions of young, promising and capable
        youth, have the skill, desire and potential to accomplish great things,
        but they really need your support, they have taken part in many
        experimental and research work, one of which was highly successful and
        have led to the construction of a locally made car, they really have
        brilliant ideas, but are limited to what they can accomplish due to lack
        of education. I strongly believe that with the right education and
        exposure they will be able to develop even better cars with the modern
        technology we have today, they will be able to impact positively in the
        growth and development of the automobile industry and even inspire and
        empower other upcoming youth in Nigeria. below is the picture of the
        car. they need your generous support.
      </section>
      <div style={{ textAlign: "left" }}>
        <img
          src="https://autojosh.com/wp-content/uploads/2020/06/light-patrol-vehicle-autojosh.jpg"
          width="100%"
          alt=""
        />
      </div>
      <h2 className="donate-btn">
        Please donate by clicking the donation button
      </h2>
      <Donatepay />
    </main>
  );
}

export default About;
