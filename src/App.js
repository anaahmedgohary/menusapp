import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import logo from './logo.svg';
//import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
//import Landing from "./components/landing/landing";
import Hompage from "./components/homepage/hompage";
import SignIn from "./components/signin-up/signin";
import Restaurants from "./components/restaurants/restaurants";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Hompage />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path='/restaurants' element={<Restaurants />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
