import React from "react";

const Form = () => {
  return (
    <div className="form-container">
      <form action="" id="reservation-form">
        <div class="mb-3">
          <label for="first-name" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="first-name"
            placeholder="Example input placeholder"
          />
        </div>
        <div class="mb-3">
          <label for="last-name" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="last-name"
            placeholder="Another input placeholder"
          />
        </div>
        <div class="mb-3">
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

export default Form;
