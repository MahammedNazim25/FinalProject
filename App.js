import logo from './logo.svg';
// import './App.css';
import React,{ useState } from 'react';
import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import FirstPage from './Components/FirstPage';
import SignIn from './Components/SignIn';
import AccountCreate from './Components/AccoutCrt';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
//dffd
  // Method to handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
//dfdffg
  return (
    
    <Router>
    <div className="App">
    {isAuthenticated && <Navbar />}
      <Routes>
      <Route path="/" element={<FirstPage/>}></Route> 
      <Route path="/SignIn" element={<SignIn />} ></Route>
      <Route path="/AccountCreate" element={<AccountCreate/>}></Route>
      </Routes>
      <Footer/>

    </div>
    </Router>
  );
}
// this is try
// this is try 2
// this is try 3

export default App;
