import { useState, useEffect } from "react";
import React from "react";

function Donate() {
  const [paystackClient, setPaystackClient] = useState(
    "pk_test_dd5f188919545e617ce374868d5438c118409e61"
  );
  const [donations, setDonations] = useState([]);
  const [state, setState] = useState("");

  useEffect(() => {
    setPaystackClient(window.PaystackPop);
  }, []);

  useEffect(() => {
    const fetchDonations = async () => {
      const response = await fetch(
        "https://api.paystack.co/transaction?status=success&perPage=10",
        {
          headers: {
            Authorization: `Bearer ${"sk_test_ebcb964a83cff3bbb27b251ebfe650920e68b723"}`,
          },
        }
      );
      const data = await response.json();
      setDonations(data.data);
      console.log(data.data);
    };
    fetchDonations();
  }, []);

  const tableRows = donations.map((donation) => (
    <tr>
      <td>{donation.id}</td>
      <td>{new Date(donation.paid_at).toLocaleDateString()}</td>
      <td>{donation.amount / 100} NGN</td>
      <td>{donation.status}</td>
    </tr>
  ));

  return (
    <div>
      <table id="customers">
        <tr>
          <th>Transaction_id</th>
          <th>date</th>
          <th>amount</th>
          <th>status</th>
        </tr>
        {tableRows}
      </table>
      {/* <table id="customers">
        <tr>
          <th>Transction_id</th>
          <th>date</th>
          <th>amount</th>
          <th>status</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Königlich Essen</td>
          <td>Philip Cramer</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
        <tr>
          <td>North/South</td>
          <td>Simon Crowther</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Paris spécialités</td>
          <td>Marie Bertrand</td>
          <td>France</td>
        </tr>
      </table> */}
    </div>
  );
}

export default Donate;
