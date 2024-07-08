// import Reac, { useState,useEffect } from 'react';
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
import { ref, onValue, push, update, remove } from "firebase/database";
import { database } from './Components/Firebase';
import MenuList from './Components/MenuContext';
import { useEffect, useState } from 'react';
import Help from './Components/Help';
import About from './Components/About';
import Policy from './Components/Policy';
import Payment from './Components/Payment';
import Success from './Components/Success';



const App = () => {
  const [MenuItems, setMenuItems] = useState([]);
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    const Itemsrf = ref(database, "Menu");
    onValue(Itemsrf, (snapshot) => {
      if (snapshot.exists()) {
        setMenuItems(snapshot.val());
      } else {
        setMenuItems({});
      }
    });
  }, []);

  const addOrEditStudent = (obj) => {
    if (currentId === "") {
      const NewItemsrf = push(ref(database, "Menu"));
      update(NewItemsrf, obj)
        .then(() => {
          console.log("data added");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      update(ref(database, "Menu/" + currentId), obj)
        .then(() => {
          console.log("data updated");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setCurrentId("");
  };

  const onEdit = id => {
    setCurrentId(id);
  }

  const onDelete = id => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      remove(ref(database, "Menu/" + id)).then(() => {
        console.log("data deleted");
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path='/help' element={<Help/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path='/Policy' element={<Policy/>} />
        <Route path="/AccountCreate" element={<AccountCreate />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/admin" element={<AdminPanel addOrEditStudent={addOrEditStudent} currentId={currentId} MenuItems={MenuItems} onEdit={onEdit} onDelete={onDelete} />} />
        <Route path="/ManageWebsite" element={<ManageWebsite />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/ViewOrder" element={<ViewOrder />} />
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/Success' element={<Success/>}/>
      </Routes>
      <Footer />
    </div>
  </Router>
);
};

export default App;
