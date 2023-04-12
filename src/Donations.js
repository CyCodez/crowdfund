import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";

function Donatepay() {
  const navigate = useNavigate();
  const onSuccess = () => {
    if (state) {
      setState("");
    }
    if (email) {
      setEmail("");
    }

    return navigate("/home");
  };
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const amount = (e) => setState(e.target.value);
  const mail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <div>
        <div>
          <p className="pb">
            amount:
            <input
              type="text"
              value={state}
              onChange={amount}
              className="inputF"
            />
          </p>
          <p className="pb">
            email:
            <input
              type="email"
              value={email}
              onChange={mail}
              className="inputF"
            />
          </p>
          <PaystackButton
            className="paystack-button"
            class="color:'red'"
            text="Donate USD"
            amount={state}
            currency="USD"
            email={email}
            publicKey={"pk_test_dd5f188919545e617ce374868d5438c118409e61"}
            onSuccess={onSuccess}
            onClose={() => alert("Transaction closed")}
          />
          <PaystackButton
            className="paystack-button"
            class="color:'red'"
            text="Donate NGN"
            amount={state * 100}
            currency="NGN"
            email={email}
            publicKey={"pk_test_dd5f188919545e617ce374868d5438c118409e61"}
            onSuccess={onSuccess}
            onClose={() => console.log("Transaction closed")}
          />
          <PaystackButton
            className="paystack-button"
            class="color:'red'"
            text="Donate GPB"
            amount={400000}
            currency="GBP"
            email="donor@example.com"
            publicKey={"pk_test_dd5f188919545e617ce374868d5438c118409e61"}
            onSuccess={onSuccess}
            onClose={() => console.log("Transaction closed")}
          />
        </div>
      </div>
    </div>
  );
}

export default Donatepay;
