import { useState, useEffect } from "react";
import React from "react";

function Donate() {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    const fetchDonations = async () => {
      const response = await fetch(
        "https://api.paystack.co/transaction?status=success&perPage=20",
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
      <td>{donation.customer.email}</td>
      <td>{new Date(donation.paid_at).toLocaleDateString()}</td>
      <td>{donation.amount + 1000}</td>
      <td>{donation.channel}</td>
      <td>{donation.status}</td>
    </tr>
  ));

  return (
    <div>
      <table id="customers">
        <tr>
          <th>Transaction_id</th>
          <th>customer</th>
          <th>date</th>
          <th>amount</th>
          <th>channel</th>
          <th>status</th>
        </tr>
        {tableRows}
      </table>
    </div>
  );
}

export default Donate;
