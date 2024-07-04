import React, { useContext, useState } from 'react';
import { MenuContext } from './MenuContext';

const AdminPanel = () => {
  const { menuItems, addItem, editItem, removeItem } = useContext(MenuContext);
  const [newItem, setNewItem] = useState({
    name: '',
    image: '',
    description: '',
    price: 0,
  });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem({ name: '', image: '', description: '', price: 0 });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="image"
          value={newItem.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          type="text"
          name="description"
          value={newItem.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="price"
          value={newItem.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <button type="submit">Add Item</button>
      </form>

      <h3>Edit Items</h3>
      {menuItems.map((item, index) => (
        <div key={index}>
          <input
            type="text"
            value={item.name}
            onChange={(e) =>
              editItem(index, { ...item, name: e.target.value })
            }
          />
          <input
            type="text"
            value={item.image}
            onChange={(e) =>
              editItem(index, { ...item, image: e.target.value })
            }
          />
          <input
            type="text"
            value={item.description}
            onChange={(e) =>
              editItem(index, { ...item, description: e.target.value })
            }
          />
          <input
            type="number"
            value={item.price}
            onChange={(e) =>
              editItem(index, { ...item, price: parseFloat(e.target.value) })
            }
          />
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
