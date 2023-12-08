import { NavBar } from "./components/NavBar";
import HomeBody from "./components/HomeBody";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import authFetch from "./axios/posts";
import { useEffect, useState } from "react";
import RoomFetchingComponent from "./components/Manager";
import Managerr from "./components/Managerr";
import PaymentForm from "./components/PaymentForm";
import EditReservation from "./components/EditReservation";
import ImageCarousel from "./components/ImageCarousel";
import {home_slides} from "./components/homeCarousel.json"

function App() {
  const [posts, setPosts] = useState([]);

  //rendering
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeBody></HomeBody>
                <ImageCarousel data = {home_slides}/>
              </>
            }></Route>
          <Route path="/reservation" element={<Form></Form>}></Route>
          <Route path="/managerr" element={<Managerr></Managerr>}></Route>
          <Route path="/payment" element={<PaymentForm></PaymentForm>}></Route>
          <Route path="/edit" element={<EditReservation></EditReservation>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
