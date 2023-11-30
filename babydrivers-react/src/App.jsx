import './App.css';
import { NavBar } from './components/NavBar';
import HomeBody from './components/HomeBody';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <HomeBody></HomeBody>
    </div>
  );
}

export default App;
