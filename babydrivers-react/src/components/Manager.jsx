import React, { useState, useEffect } from "react";
import axios from "axios";

const RoomFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [logIn, setLogIn] = useState(false);
  const [pword, setPword] = useState('');

  const url = "https://localhost:8080/reservations/db2b103e";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const logInHandler = () => {
    setLogIn(pword === 'password' && username === 'manager' ? true : false)
  }

  return (
    <div className="manager-container"> 
    <div className="manager-header">
    <h1>MANAGER VIEW</h1>
    <i className="fa-solid fa-user-tie"></i>
    </div>

    <h1>Booked Rooms</h1>

    {!logIn ? (
    <div className="log-in-container">
      <label htmlFor="username" className="form-label">
        Username
      </label>
      <input
        type="text"
        className="form-control"
        value={username}
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        required
      />
      <label htmlFor="pword" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        value={pword}
        id="pword"
        onChange={(e) => setPword(e.target.value)}
        placeholder="Enter password"
        required
      />
      <button onClick={logInHandler}>Login</button>
    </div>
    ) : (
      <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.length > 0 && (
        <div className="rooms">
          {data.map((room) => (
            <div className="room" key={room.id}>
              <h3>Room Type: {room.name}</h3>
              <p>Ocupant Fisrt name: {room.firstName}</p>
              <p>Ocupent Last name:{room.lastName}</p>
              <p>Check in {room.checkInDate}</p>
              <p>Check Out {room.checkOutDate}</p>
            </div>
          ))}
        </div>
      )}
      </>
    )}
    </div> 
  );
};

export default RoomFetchingComponent;
