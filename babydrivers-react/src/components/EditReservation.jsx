import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditReservation = () => {
  const [confirmCode, setConfirmCode] = useState("");
  const [roomData, setRoomData] = useState(null);
  const [isModalVisible, setModalVisibility] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setID] = useState("");
  const [checkInDate, setCheckIn] = useState("");
  const [checkOutDate, setCheckOut] = useState("");

  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:8080/reservations/${confirmCode}`;
      const response = await axios.put(url, {
        firstName: firstName,
        lastName: lastName,
        checkInDate: new Date(checkInDate).toISOString().split("T")[0],
        checkOutDate: new Date(checkOutDate).toISOString().split("T")[0],
        roomId: Number(id),
      });
      console.log("Reservation updated:", response.data);
      setModalVisibility(false);
    } catch (error) {
      console.error("Error updating reservation:", error);
      // Assuming you want to navigate to "/payment" in case of an error
      navigateTo("/payment");
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8080/reservations/${confirmCode}`
      );
      setRoomData(response.data);
      setModalVisibility(true);

      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setID(response.data.roomId);
      setCheckIn(response.data.checkInDate);
      setCheckOut(response.data.checkOutDate);
    } catch (error) {
      console.error("Error searching reservation:", error);
    }
  };

  const closeModal = () => {
    setModalVisibility(false);
  };

  return (
    <div>
      <form action="" id="search-reservation" onSubmit={handleSearch}>
        <div className="mb-3">
          <label htmlFor="confirm-search">Enter Confirmation Code</label>
          <input
            type="text"
            id="confirm-search"
            value={confirmCode}
            onChange={(e) => setConfirmCode(e.target.value)}
          />
          <button type="submit" id="submit-code">
            Search
          </button>
        </div>
      </form>
      {isModalVisible && (
        <div className="modal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit your reservation</h5>
                <button
                  type="button"
                  className="btn btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-container">
                  <form action="" id="reservation-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="first-name" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={firstName}
                        id="first-name"
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="last-name" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={lastName}
                        id="last-name"
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="id" className="form-label">
                        ID
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={id}
                        id="id"
                        onChange={(e) => setID(e.target.value)}
                        placeholder="Enter room ID"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="user-check-in" className="form-label">
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
                      <label htmlFor="user-check-out" className="form-label">
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
                      Save Changes
                    </button>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditReservation;