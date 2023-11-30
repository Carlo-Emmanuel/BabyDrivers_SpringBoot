


import { NavBar } from './components/NavBar';
import HomeBody from './components/HomeBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ImageCarousel from './components/ImageCarousel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
        <ImageCarousel />
}

export default App;
