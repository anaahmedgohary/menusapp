import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import logo from './logo.svg';
//import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
//import Landing from "./components/landing/landing";
import Hompage from "./components/homepage/hompage";
import SignUp from "./components/signin-up/signup";
import LogStatus from "./components/logstatus/logstatus";
import LogIn from "./components/login/login";
import RecoverPass from "./components/recoverpassword/recoverpass";
import Restaurants from "./components/restaurants/restaurants";
import CafesComponent from "./components/cafes/cafes";
import UserProfile from "./components/userprofile/userprofile";
// recoverpassword

function App() {
  return (
    <Router>
      <LogStatus />
      <Header />
      <Routes>
        <Route path='/' element={<Hompage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path='/recoverpassword' element={<RecoverPass />} />
        <Route path='/restaurants' element={<Restaurants />} />
        <Route path='/cafes' element={<CafesComponent />} />
        <Route path='/userprofile' element={<UserProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
