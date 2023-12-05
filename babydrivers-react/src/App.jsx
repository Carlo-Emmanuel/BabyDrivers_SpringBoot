import { NavBar } from "./components/NavBar";
import HomeBody from "./components/HomeBody";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import ImageCarousel from "./components/ImageCarousel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import authFetch from "./axios/posts";
import { useEffect, useState } from "react";

function App() {
  //axios testing
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await authFetch.get();
  //       setPosts(response.data);
  //       console.log(response);
  //     } catch (err) {
  //       console.log(error.response.data);
  //       console.log(err.response.status);
  //       console.log(err.reponse.headers);
  //     }
  //   };
  //   fetchPosts();
  // }, []);

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
