import { NavBar } from "./components/NavBar";
import HomeBody from "./components/HomeBody";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ImageCarousel from "./components/ImageCarousel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import authFetch from "./axios/posts";
import { useEffect, useState } from "react";
import RoomFetchingComponent from "./components/Manager";
import Managerr from "./components/Managerr";
import PaymentForm from "./components/PaymentForm";
import EditReservation from "./components/EditReservation";

function App() {
  const [posts, setPosts] = useState([]);

  //rendering
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <HomeBody></HomeBody>
      </div>
    </Router>
  );
        <ImageCarousel />
}

export default App;
