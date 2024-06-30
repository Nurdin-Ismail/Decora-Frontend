import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import axios from "axios";

export default function Checkout({ cart, id, order, setorder }) {
  const [number, setnumber] = useState();

  const [amount, setAmount] = useState(1);
  const [message, setMessage] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/mpesa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number, amount }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(
          "Payment request sent. Please complete the payment on your phone."
        );
      } else {
        setMessage("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      setMessage("Payment failed. Please try again.");
    }

    // let headers = new Headers();
    // headers.append("Content-Type", "application/json");
    // headers.append("Authorization", "Bearer CGqkxpi7GLTiRrW8LlYGkA7HcHSl");

    // fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
    //   method: "POST",
    //   headers,
    //   body: JSON.stringify({
    //     BusinessShortCode: 174379,
    //     Password:
    //       "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwNjIzMjE0ODIz",
    //     Timestamp: "20240623214823",
    //     TransactionType: "CustomerPayBillOnline",
    //     Amount: 1,
    //     PartyA: 254114800794,
    //     PartyB: 174379,
    //     PhoneNumber: 254114800794,
    //     CallBackURL: "https://mydomain.com/path",
    //     AccountReference: "CompanyXLTD",
    //     TransactionDesc: "Payment of X",
    //   }),
    // })
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log(error));
  };
  return (
    <div className='grid h-[34.6vh]'>
      <div className='grid place-content-center'>
        <Alert severity='warning'>
          This is a sample site. For the purpose of testing this site's Mpesa
          integration, the ammount is set to Ksh 1. Enter a number and you'll
          recieve a STK push.
        </Alert>
      </div>
      <div className='grid place-self-center'>
        <form onSubmit={handlePayment} className='grid gap-2'>
          <input
            type='tel'
            value={number}
            onChange={(e) => setnumber(e.target.value)}
            className='h-[4vh] border-[#d3d3d3] border-[1px] focus:outline-dotted focus:border-none placeholder:text-sm pl-2 placeholder:italic placeholder:font-serif'
          />
          <button className='button-23' type='submit'>
            Submit
          </button>

          {message ? <Alert severity='info'>{message}</Alert> : null}
        </form>
      </div>
    </div>
  );
}
