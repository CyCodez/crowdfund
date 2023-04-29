import React from "react";
import hello from "./image/hello-icon.jpg";
import social from "./social";

function Footer() {
  return (
    <div style={{ backgroundColor: "#104901" }}>
      <h2 id="contact" style={{ textAlign: "center", marginTop: "40px" }}>
        Contact Us
      </h2>
      <div class="flex flex3">
        <div class="flex-project2">
          <h2>
            Get In Touch{" "}
            <img
              src={hello}
              alt=""
              width="50px"
              style={{ backgroundColor: "black", color: "black" }}
            />
          </h2>
          <div className="footT">
            <p>Feel free to reach out to us</p>
            <p>Either for Donation, Enquiry or support</p>
          </div>
          <ul className="social-icons social-icons-vis">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div class="flex-project2">
          <p>
            <input
              type="text"
              placeholder="full Name"
              style={{ width: "100px", height: "30px" }}
              required="required"
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="email Address"
              style={{ width: "200px", height: "30px" }}
              required="required"
            />
          </p>
          <p>
            <textarea rows="4" cols="50" placeholder="Message" required />
          </p>
          <p>
            <a href="mailto:campaigns@chainfundit.com">
              <button className="sendBtn">send</button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
