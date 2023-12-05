import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setID] = useState("");
  const [checkInDate, setCheckIn] = useState("");
  const [checkOutDate, setCheckOut] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/reservations/create"; 
      const response = await axios.post(url, {
        firstName: firstName,
        lastName: lastName,
        checkInDate: new Date(checkInDate).toISOString().split('T')[0], //Convert to LocalDate format
        checkOutDate: new Date(checkOutDate).toISOString().split('T')[0], //Convert to LocalDate format
        roomId: Number(id),
      });

      alert(
        `Form submitted successfully!\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nCheck In Date: ${checkInDate}\nCheck Out Date: ${checkOutDate}\nReservation Total: $${response.data.reservationTotal}\nReservation No: ${response.data.reservationNo}`
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error.responses);
    }
  };

  return (
    <div className="form-container">
      <form action="" id="reservation-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="first-name" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            value={firstName}
            id="first-name"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last-name" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            value={lastName}
            id="last-name"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          />
        </div>
        {/* <div class="mb-3">
          <label htmlFor="user-email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            value={email}
            id="user-email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="user-phone" class="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            class="form-control"
            value={phoneNumber}
            id="user-phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone"
          />
        </div> */}
        {/*  <div className="mb-3">
          <label htmlFor=""></label>
          <select id="cars" name="cars">
            <option value="singleBed">Single Bed</option>
            <option value="doubleBed">Double Bed</option>
            <option value="singleSuite">Single Suite</option>
            <option value="doubleSuite">Audi</option>
          </select>
        </div> */}
        <div class="mb-3">
          <label htmlFor="id" class="form-label">
            ID
          </label>
          <input
            type="number"
            class="form-control"
            value={id}
            id="id"
            onChange={(e) => setID(e.target.value)}
            placeholder="Enter room ID"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user-check-in" class="form-label">
            Check In Day
          </label>
          <input
            type="date"
            id="user-check-in"
            value={checkInDate}
            min="2023-12-01"
            max="2040-12-31"
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user-check-out" class="form-label">
            Check Out Day
          </label>
          <input
            type="date"
            id="user-check-out"
            value={checkOutDate}
            min="2023-12-01"
            max="2040-12-31"
            onChange={(e) => setCheckOut(e.target.value)}
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
        <button type="submit" id="submit">
          Create Reservation
        </button>
      </form>
      <div class="dropdown">
        <a
          class="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown link
        </a>

        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Form;
