import React, { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from 'xlsx';

const RoomFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [username, setUsername] = useState('');
  const [logIn, setLogIn] = useState(false);
  const [pword, setPword] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [sortBy, setSortBy] = useState('reservationTotal'); 

  const url = "http://localhost:8010/reservations/all";

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

  const logInHandler = () => {
    setLogIn(pword === 'password' && username === 'manager' ? true : false)
  }

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Reservations');
    XLSX.writeFile(wb, 'reservations_report_2023.xlsx');
  };

  const handleSort = (property) => {
    setSortBy(property);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const getArrow = (property) => {
    if (sortBy === property) {
      return sortOrder === 'asc' ? '▲' : '▼';
    }
    return '';
  };

  const sortedData = [...data].sort((a, b) => {
    const order = sortOrder === 'asc' ? 1 : -1;
    return a[sortBy] > b[sortBy] ? order : -order;
  });

  return (
    <div className="manager-container"> 
    <div className="manager-header">
    <h1>MANAGER VIEW</h1>
    <i className="fa-solid fa-user-tie"></i>
    </div>

    <h1>Reservations</h1>

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
      <button onClick={logInHandler} style={{ marginTop: '10px' }}>
        Login
      </button>
    </div>
    ) : (
      <>
      {loading && <p>Loading...</p>}
      {/* {error && <p>Error: {error}</p>} */}
      {data.length > 0 && (
        <table className="rooms-table">
          <thead>
            <tr>
              <th>
                Reservation No 
              </th>
              <th onClick={() => handleSort('roomType')}>
                Room Type <span>{getArrow('roomType')}</span>
              </th>
              <th onClick={() => handleSort('firstName')}>
                Guest First Name <span>{getArrow('firstName')}</span>
              </th>
              <th onClick={() => handleSort('lastName')}>
                Guest Last Name <span>{getArrow('lastName')}</span>
              </th>
              <th onClick={() => handleSort('checkInDate')}>
                Check In Date <span>{getArrow('checkInDate')}</span>
              </th>
              <th onClick={() => handleSort('checkOutDate')}>
                Check Out Date <span>{getArrow('checkOutDate')}</span>
              </th>
              <th onClick={() => handleSort('reservationTotal')}>
                Total Due <span>{getArrow('reservationTotal')}</span>
              </th>
            </tr>
          </thead>
          <tbody>
          {sortedData.map((reservation) => (
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
          <p><button onClick={exportToExcel}>Print Report</button></p>
        </div>
      </>
    )}
  
    </div> 
  );
};

export default RoomFetchingComponent;
