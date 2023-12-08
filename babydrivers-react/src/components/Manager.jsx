import React, { useState, useEffect } from "react";
import axios from "axios";

const RoomFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="manager-container"> 
    <div className="manager-header">
    <h1>MANAGER VIEW</h1>
    <i class="fa-solid fa-user-tie"></i>
    </div>
      <h1>Booked Rooms</h1>
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
    </div>
  );
};

export default RoomFetchingComponent;
