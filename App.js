import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import FirstPage from './Components/FirstPage';
import SignIn from './Components/SignIn';
import AccountCreate from './Components/AccoutCrt';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return ( 
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<FirstPage/>}></Route> 
      <Route path="/SignIn" element={<SignIn />} ></Route>
      <Route path="/AccountCreate" element={<AccountCreate/>}></Route>
      <Route path='/Navbar' element={<Navbar/>}></Route>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}
export default App;
