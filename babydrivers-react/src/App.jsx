
import { NavBar } from './components/NavBar';
import HomeBody from './components/HomeBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
   <Router>
    <div className="App">
      <NavBar />
      <div className='content'>
        <Switch>
          <Route path='/'>
          </Route>
          <Route path = '/ContactPage.jsx'>

          </Route>
        </Switch>
      </div>
    <HomeBody />
    </div>
   </Router>


// THIS IS THE TRIAL SECTION TO TEST AND SEE COMPONENTS FUNCTIONALITIES BY THEMSELVES
    // <div>
    //   <NavBar />
    //   <HomeBody />
    // </div>
  );
}

export default App;
