import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import FirstPage from './Components/FirstPage';
import SignIn from './Components/SignIn';
import AccountCreate from './Components/AccoutCrt';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Vieworder from './Components/Vieworder';

function App() {
  return ( 
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<FirstPage/>}></Route> 
      <Route path="/SignIn" element={<SignIn />} ></Route>
      <Route path="/AccountCreate" element={<AccountCreate/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Menu' element={<Menu/>}></Route>
      <Route path='/Vieworder' element={<Vieworder/>}></Route>
      
      
      {/* <Route path='/Navbar' element={<Navbar/>}></Route> */}
      {/* <Route path='/Footer' element={<Footer/>}></Route> */}

      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
