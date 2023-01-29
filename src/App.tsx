import React from 'react';
import './App.css';
import Mission from './components/Mission';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Mission />
      <Navbar />
    </div>
  );
}

export default App;
