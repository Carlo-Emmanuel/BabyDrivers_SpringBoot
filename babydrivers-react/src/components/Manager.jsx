// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const RoomFetchingComponent = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const url = "http://localhost:8080/reservations/all";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(url);
//         setData(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="manager-container"> 
//     <div className="manager-header">
//     <h1>MANAGER VIEW</h1>
//     <i class="fa-solid fa-user-tie"></i>
//     </div>
//       <h1>Booked Rooms</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {data.length > 0 && (
//         <div className="rooms">
//           {data.map((room) => (
//             <div className="room" key={room.id}>
//               <h3>Room Type: {room.name}</h3>
//               <p>Ocupant Fisrt name: {room.firstName}</p>
//               <p>Ocupent Last name:{room.lastName}</p>
//               <p>Check in {room.checkInDate}</p>
//               <p>Check Out {room.checkOutDate}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RoomFetchingComponent;


import React, { useState, useEffect } from "react";
import axios from "axios";

const RoomFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalRevenue, setTotalRevenue] = useState(0);

  const url = "http://localhost:8080/reservations/all";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
        calculateTotalRevenue(response.data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const calculateTotalRevenue = (reservations) => {
    const total = reservations.reduce((acc, reservation) => {
      return acc + reservation.reservationTotal;
    }, 0);

    setTotalRevenue(total);
  };

  return (
    <div className="manager-container">
      <div className="manager-header">
        <h1>MANAGER VIEW</h1>
        <i className="fa-solid fa-user-tie"></i>
      </div>
      <h1>Active Reservations</h1>
      {loading && <p>Loading...</p>}
      {/* {error && <p>Error: {error}</p>} */}
      {data.length > 0 && (
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Reservation No</th>
              <th>Room Type</th>
              <th>Guest First Name</th>
              <th>Guest Last Name</th>
              <th>Check In Date</th>
              <th>Check Out Date</th>
              <th>Total Due</th>
            </tr>
          </thead>
          <tbody>
            {data.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.reservationNo}</td>
                <td>{reservation.roomType}</td>
                <td>{reservation.firstName}</td>
                <td>{reservation.lastName}</td>
                <td>{reservation.checkInDate}</td>
                <td>{reservation.checkOutDate}</td>
                <td>${reservation.reservationTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="total-revenue">
        <p>YTD Revenue: ${totalRevenue}</p>
      </div>
    </div>
  );
};

export default RoomFetchingComponent;
