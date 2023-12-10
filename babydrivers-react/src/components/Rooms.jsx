import React from "react";
import { Link } from "react-router-dom";

const Rooms = () => {
  const roomsData = [
    {
      id: 1,
      type: "Single Bed($200/night)",
      image: "src/assets/images/Single Bed.jpg",
      price: 200,
      description: "A cozy room with a single bed suitable for solo travelers.",
    },
    {
      id: 2,
      type: "Double Bed($400/night)",
      image: "src/assets/images/Double bed.jpeg", 
      price: 400,
      description: "A comfortable room with a double bed for couples or two guests.",
    },
    {
      id: 3,
      type: "Single Suite($450/night)",
      image: "src/assets/images/Single Suite.jpg", 
      price: 450,
      description: "A luxurious single suite with additional amenities.",
    },
    {
      id: 4,
      type: "Double Suite($800/night)",
      image: "src/assets/images/Double Suite.jpg", 
      price: 800,
      description: "A spacious double suite with a separate living area.",
    },
  ];

  return (
    <div className="rooms-container">
      <h1>Our Rooms</h1>
      <div className="rooms-list">
        {roomsData.map((room) => (
          <div className="room" key={room.id}>
            <div className="room-image">
              <img src={room.image} alt={`${room.type} Room`} className="rooms-image" />
            </div>
            <div className="room-details">
              <div className="details-container">
                <h2>{room.type}</h2>
                <p>{room.description}</p>
                <Link to={{ pathname: "/reservation", state: { roomType: room.type } }}>Book Now</Link>
                {/* <Link to={{ pathname: "/reservation", state: { roomType: room.type.split("(")[0].trim() } }}>Book Now</Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
