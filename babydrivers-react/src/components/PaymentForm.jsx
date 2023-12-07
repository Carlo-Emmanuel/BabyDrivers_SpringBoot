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
            placeholder="Another input placeholder"
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
            placeholder="Another input placeholder"
          />
        </div>
        <div class="mb-3">
          <label for="user-check-in" class="form-label">
            Check In Day
          </label>
          <input
            type="date"
            id="user-check-in"
            min="2023-12-01"
            max="2040-12-31"
          />
        </div>
        <div class="mb-3">
          <label for="user-check-out" class="form-label">
            Check Out Day
          </label>
          <input
            type="date"
            id="user-check-out"
            min="2023-12-01"
            max="2040-12-31"
          />
        </div>
        {/*         
        <div class="form-part">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="" required />
        </div>
        <div class="form-part">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="" required />
        </div>

        <div class="form-part">
          <label htmlFor="userEmail">Email:</label>
          <input type="email" id="userEmail" name="" required />
        </div>
        <div class="form-part">
          <label htmlFor="userPhone">Phone Number:</label>
          <input
            type="tel"
            id="userPhone"
            name=""
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>

        <div class="form-part">
          <label htmlFor="start"> Check in date:</label>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2023-12-01"
            max="2040-12-31"
          />
        </div>
        <div class="form-part">
          <label htmlFor="start"> Check out date:</label>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2023-12-01"
            max="2040-12-31"
          />
          <button type="submit" id="submit">
            Create Reservation
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default PaymentForm;
