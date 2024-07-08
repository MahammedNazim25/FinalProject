import React from 'react';

const generateRows = (MenuItems, onDelete, onEdit) => {
  const rows = [];
  for (let id in MenuItems) {
    rows.push(
      <tr key={id}>
        <td>{MenuItems[id].name}</td>
        <td id='links'>{MenuItems[id].image}</td>
        <td>{MenuItems[id].description}</td>
        <td>{MenuItems[id].price}</td>
        <td>
          <button className="edit" onClick={() => onEdit(id)}>Edit</button>
          <button className="delete" onClick={() => onDelete(id)}>Delete</button>
        </td>
      </tr>
    );
  }
  return rows;
};

const MenuList = ({ MenuItems, onDelete, onEdit }) => {
  return (
    <div>
      <h1>Menu Items List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th >Image Link</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{generateRows(MenuItems, onDelete, onEdit)}</tbody>
      </table>
    </div>
  );
};

export default MenuList;
