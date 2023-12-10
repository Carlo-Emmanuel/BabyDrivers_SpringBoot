import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roomType, setRoomType] = useState("");
  // const [id, setID] = useState("");
  const [checkInDate, setCheckIn] = useState("");
  const [checkOutDate, setCheckOut] = useState("");
  const location = useLocation();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (location.state && location.state.roomType) {
      setRoomType(location.state.roomType);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/reservations/create";
      let id;

      switch (roomType) {
        case "Single Bed($200/night)":
          id = 9;
          break;
        case "Double Bed($400/night)":
          id = 7;
          break;
        case "Single Suite($450/night)":
          id = 10;
          break;
        case "Double Suite($800/night)":
          id = 11;
          break;
        default:
          id = 0;
      }

      const response = await axios.post(url, {
        firstName: firstName,
        lastName: lastName,
        //Convert Dates from String to localDate
        checkInDate: new Date(checkInDate).toISOString().split("T")[0],
        checkOutDate: new Date(checkOutDate).toISOString().split("T")[0],
        roomId: Number(id)
      });

      alert(
        `Form submitted successfully!\n\nReservation No: ${response.data.reservationNo}\n
                                         First Name: ${firstName}\n
                                         Last Name: ${lastName}\n
                                         Check In Date: ${checkInDate}\n
                                         Check Out Date: ${checkOutDate}\n
                                         Reservation Total: $${response.data.reservationTotal}`
      );

      console.log(response.data);
      ("/payment");
    } catch (error) {
      console.error("Error submitting form:", error.responses);
      navigateTo("/payment");
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
            value={lastName}
            id="last-name"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
            required
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
        {/* <div class="mb-3">
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
            required
          />
        </div> */}
        <div className="mb-3">
          <label htmlFor="room-type" className="form-label">
            Room Type
          </label>
          <select
            id="room-type"
            className="form-select"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed($200/night)">Single Bed($200/night)</option>
            <option value="Double Bed($400/night)">Double Bed($400/night)</option>
            <option value="Single Suite($450/night)">Single Suite($450/night)</option>
            <option value="Double Suite($800/night)">Double Suite($800/night)</option>
          </select>
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
            required
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
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" id="submit">
            Create Reservation
          </button>
          <button id="edit" onClick={() => navigateTo("/edit")}>
            Edit Reservation
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
