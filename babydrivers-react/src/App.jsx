import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ImageCarousel from './components/ImageCarousel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    
      <div>
        <ImageCarousel />
        </div>
    </Router>
  )
}

export default App
