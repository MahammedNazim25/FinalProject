import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MenuProvider } from './Components/MenuContext';
import FirstPage from './Components/FirstPage';
import SignIn from './Components/SignIn';
import AccountCreate from './Components/AccoutCrt';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import Home from './Components/Home';
import Menu from './Components/Menu';
import ViewOrder from './Components/Vieworder';
import ManageWebsite from './Components/Managewebsite';
import AdminPanel from './Components/AdminPanel';

const App = () => {
  return (
    <MenuProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/AccountCreate" element={<AccountCreate />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/ManageWebsite" element={<ManageWebsite />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/ViewOrder" element={<ViewOrder />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </MenuProvider>
  );
};

export default App;
