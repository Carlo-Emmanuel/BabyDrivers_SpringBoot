import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const PaymentForm = () => {
  const [firstName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [CVV, setCVV] = useState("");
  const [cardExp, setCardExp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, { name: name, email: email });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };

/* 
Cardnumber = int
CVV = int
expiry date = date
first name = text
last name = text
 */

  return (
    <div className="payment-container">
      <form action="" id="payment-form" onSubmit={handleSubmit}>
        <div class="pay">
          <label for="first-name" class="form-label">
            Cardholder's First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="first-name"
            placeholder="John"
            required
          />
        </div>
        <div class="pay">
          <label for="last-name" class="form-label">
            Cardholder's Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="last-name"
            placeholder="Doe"
            required
          />
        </div>
        <div class="pay">
          <label for="user-email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="user-email"
            placeholder="johndoe123@gmail.com"
            required
          />
        </div>
        <div class="mb-3">
          <label for="user-phone" class="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            class="form-control"
            id="user-phone"
            placeholder="818"
            required
            maxLength={11}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </div>
        <div class= "pay">
          <button type="submit" id="submit">
            Submit Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
