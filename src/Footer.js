import React from "react";
import facebook from "./facebook.jpg";
import hello from "./hello-icon.jpg";
import instagram from "./instagram-icon.jpg";
import linkedin from "./linkedIn-icon.png";
import youtube from "./youtube.png";

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

          <div>
            <a href="https://www.linkedin.com/company/chainfundit">
              {" "}
              <img
                src={linkedin}
                alt=""
                style={{
                  margin: "5px",
                  padding: "7px",
                  width: "35px",
                  height: "45px",
                }}
              />
            </a>
            <a href="https://web.facebook.com/chainfundit10?_rdc=1&_rdr">
              <img
                src={facebook}
                alt=""
                style={{
                  margin: "5px",
                  padding: "7px",
                  width: "35px",
                  height: "45px",
                }}
              />
            </a>
            <a href="https://www.instagram.com/chainfundit/">
              <img
                src={instagram}
                alt=""
                style={{
                  margin: "5px",
                  padding: "7px",
                  width: "35px",
                  height: "45px",
                }}
              />
            </a>
            <a href="https://www.youtube.com/@chainfundit">
              <img
                src={youtube}
                alt=""
                style={{
                  margin: "5px",
                  padding: "7px",
                  width: "35px",
                  height: "45px",
                }}
              />
            </a>
          </div>
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
              style={{ width: "300px", height: "30px" }}
              required="required"
            />
          </p>
          <p>
            <textarea rows="4" cols="40" placeholder="Message" required />
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
