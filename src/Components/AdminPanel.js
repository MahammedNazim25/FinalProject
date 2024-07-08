import React, { useEffect, useState } from 'react';
import MenuList from './MenuContext';
import Navbar from './Navbar';
import './AdminPanel.css'


const AdminPanel = ({ addOrEditStudent, currentId, MenuItems, onEdit, onDelete }) => {
  const initilizedItems = {
    name: '',
    image: '',
    description: '',
    price: ''
  }

  const [values, setValues] = useState(initilizedItems);

  useEffect(() => {
    if (currentId === "" || !MenuItems[currentId]) {
      setValues(initilizedItems);
    } else {
      setValues(MenuItems[currentId]);
    }
  }, [currentId, MenuItems]);

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditStudent(values);
    setValues(initilizedItems);
  }

  return (
    <div className="admin-panel">
       <Navbar/>
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Name" required
        />
        <input
          type="text"
          name="image" 
          id='image'
          value={values.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="Description" required
        />
        <input
          type="number"
          name="price"
          value={values.price}
          onChange={handleChange}
          placeholder="Price" required
        />
        <button className='btn_add' type="submit">Add Item</button>
      </form>
      <MenuList MenuItems={MenuItems} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

export default AdminPanel;
