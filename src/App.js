import React from 'react';
import './App.css';
import { Navbar, Body, Card, Jumbotron } from "./components"
// import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Body></Body>
    </div>
  );
}

export default App;
