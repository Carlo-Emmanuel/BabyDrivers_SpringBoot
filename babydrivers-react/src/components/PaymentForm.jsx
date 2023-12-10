import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    try{
   
      alert("Email Confirmation Sent!");
      // alert(
      //   `Form submitted successfully!\n\nReservation No: ${response.data.reservationNo}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nCheck In Date: ${checkInDate}\nCheck Out Date: ${checkOutDate}\nReservation Total: $${response.data.reservationTotal}\n`
      // );
      navigateTo("/");
    } catch (error) {
      console.error("Error processing payment:", error.responses);
    }
  };

  return (
    <div className="payment-container">
      <form action="" id="payment-form" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="card-number" class="form-label">
            Card Number
          </label>
          <input
            type="text"
            class="form-control"
            id="card-number"
            placeholder="**** **** **** ****"
            required
          />
        </div>
        <div class="mb-3">
          <label for="cvv-number" class="form-label">
            CVV Number
          </label>
          <input
            type="password"
            class="form-control"
            id="cvv-number"
            placeholder="***"
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Expiration:</label>
          <input
            type="month"
            id="start"
            name="start"
            min="2018-03"
            value="2027-05"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="first-name" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="first-name"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last-name" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="last-name"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div class="payment-button-container">
          <button type="submit" id="submit">
            Submit Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
