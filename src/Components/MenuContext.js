import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

const initialMenuItems = [
  {
    name: 'BBQ Chicken',
    image: './Images/bbq chicken.webp',
    description: 'Tender chicken marinated in BBQ sauce.',
    price: 10,
  },
  {
    name: 'BBQ Fish',
    image: './Images/bbqFish.webp',
    description: 'Crispy and tender fish fillet served with a rich and flavorful sauce.',
    price: 12,
  },
  // ... other items
];

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  const addItem = (item) => {
    setMenuItems([...menuItems, item]);
  };

  const editItem = (index, newItem) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index] = newItem;
    setMenuItems(newMenuItems);
  };

  const removeItem = (index) => {
    setMenuItems(menuItems.filter((_, i) => i !== index));
  };

  return (
    <MenuContext.Provider value={{ menuItems, addItem, editItem, removeItem }}>
      {children}
    </MenuContext.Provider>
  );
};
