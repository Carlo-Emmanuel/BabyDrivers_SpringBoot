import { NavBar } from "./components/NavBar";
import HomeBody from "./components/HomeBody";
import Rooms from "./components/Rooms";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Managerr from "./components/Managerr";
import PaymentForm from "./components/PaymentForm";
import EditReservation from "./components/EditReservation";
import ContactPage from "./components/ContactPage";

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
              </>
            }
          ></Route>
          <Route path="/rooms" element={<Rooms></Rooms>}></Route> 
          <Route path="/reservation" element={<Form></Form>}></Route>
          <Route path="/managerr" element={<Managerr></Managerr>}></Route>
          <Route path="/payment" element={<PaymentForm></PaymentForm>}></Route>
          <Route
            path="/edit"
            element={<EditReservation></EditReservation>}
          ></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
  //<ImageCarousel />;
}

export default App;
