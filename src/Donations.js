import React from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";

function Donatepay() {
  const navigate = useNavigate();
  const onSuccess = () => navigate("/home");
  return (
    <div>
      <div>
        <div style={{ color: "grren" }}>
          <PaystackButton
            className="paystack-button"
            class="color:'red'"
            text="Donate USD"
            amount={400000}
            currency="USD"
            email="donor@example.com"
            publicKey={"pk_test_dd5f188919545e617ce374868d5438c118409e61"}
            onSuccess={onSuccess}
            onClose={() => alert("Transaction closed")}
          />
          <PaystackButton
            className="paystack-button"
            class="color:'red'"
            text="Donate NGN"
            amount={400000}
            currency="NGN"
            email="donor@example.com"
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
