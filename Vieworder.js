import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, navigate } from "react-router-dom";
import { ref, get, push,remove } from "firebase/database";
import { database } from './Firebase';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './ViewOrder.css';

function ViewOrder() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || []; 

  const goToHomePage = () => {
    navigate('/Payment');
  };

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    if (cart.length === 0) {
      return;
    }

    const fetchOrderItems = async () => {
      try {
        const itemsRef = ref(database, "Menu");
        const snapshot = await get(itemsRef);
        if (snapshot.exists()) {
          const items = snapshot.val();
          const fetchedOrderItems = cart.map(cartItem => ({
            ...items[cartItem.key],
            quantity: cartItem.quantity
          }));
          setOrderItems(fetchedOrderItems);

          const orderRef = ref(database, "Orders");
          await push(orderRef, { orderItems: fetchedOrderItems });
        } else {
          setOrderItems([]);
        }
      } catch (error) {
        console.error("There is an error! ", error);
      }
    };

    fetchOrderItems();
  }, [cart, navigate]);

  const handleRemove =async (index) =>{
    try{
      const RemoveItem =  orderItems[index];
      const itemsRef = ref(database, "Orders");
      await remove(itemsRef, index);
      const updatedOrderItems = orderItems.filter((item, i) => i !== index);
      setOrderItems(updatedOrderItems);
    } catch (error) {
      console.error("Error removing item: ", error);
    }
  }
  return (
    <div className="view">
      <Navbar />
      <h1>Your Order</h1>
      <div className="select">
        {orderItems.length > 0 ? (
          orderItems.map((orderItem, index) => (
            <div key={index} className="itemselect">
              <h3 className="policyhead">{orderItem.name}</h3>
              <p>Description: {orderItem.description}</p>
              <p>Price: ${orderItem.price}</p>
              <p>Quantity: {orderItem.quantity}</p>
              <button onClick={() => handleRemove(index)} className="bts">Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <button className="bts" id="pay" onClick={goToHomePage}>Make Payment </button>
      <Footer />
    </div>
  );
}

export default ViewOrder;
