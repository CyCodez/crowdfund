import charity from "./charity.jpg";
import React from "react";

function Home() {
  return (
    <div>
      <div className="img-div">
        <img className="charity" src={charity} alt="" />
        <div>
          Welcome to our crowdfunding campaign! We are excited to share our
          project with you and invite you to become a part of our mission. Our
          project is focused on helping young talented nigerians access quality
          education. We believe that this project will have a significant impact
          on the growth and development of nigeria, and we are excited to bring
          it to life. However, we need your help to make it happen. By
          supporting our crowdfunding campaign, you can be a part of this
          exciting project and help make a difference in the world. Here are
          some of the benefits of supporting our campaign:
        </div>
        <ol>
          <li>
            <b>Be a part of something meaningful:</b> By supporting our project,
            you can be a part of something that has the potential to make a
            significant impact on educational sector in nigeria.
          </li>
          <li>
            <b>Exclusive rewards:</b> We have created a range of rewards
            exclusively for our crowdfunding supporters. From limited-edition
            merchandise to personalized experiences, there is something for
            everyone.
          </li>
          <li>
            <b> Help bring a project to life:</b>
            Your support can make a difference in whether or not this project
            comes to fruition. You can help us bring our idea to life and make a
            positive impact on the world.
          </li>
          <li>
            <b>Join a community:</b>
            By supporting our project, you will become a part of our community.
            We will keep you updated on our progress, and you can share in the
            excitement of bringing this project to life.
          </li>
        </ol>
        <div>
          We are grateful for any support you can provide, whether it's a small
          contribution or a large one. Every Naira counts, and we appreciate
          your generosity. Thank you for considering our crowdfunding campaign.
          We hope that you will join us on this journey and be a part of our
          mission to make the world a better place.
        </div>
      </div>
    </div>
  );
}

export default Home;
