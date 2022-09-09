import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import logo from './logo.svg';
//import './App.css';
import Header from "./components/header/header";
//import Landing from "./components/landing/landing";
import Hompage from "./components/homepage/hompage";
import SignIn from "./components/signin-up/signin";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Hompage />} />
        <Route path="/signup" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
