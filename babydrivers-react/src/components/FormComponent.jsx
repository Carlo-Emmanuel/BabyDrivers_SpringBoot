import React from "react";

const FormComponent = () => {
  return (
    <div>
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

        <button type="submit" id="submit">
          Create Reservation
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
