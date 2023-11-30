import "./App.css";
import { NavBar } from "./components/NavBar";
import HomeBody from "./components/HomeBody";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<HomeBody></HomeBody>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
