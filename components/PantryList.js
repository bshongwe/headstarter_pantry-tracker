// components/PantryList.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebaseConfig';

const PantryList = ({ onEdit }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'pantryItems'));
      setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'pantryItems', id));
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - {item.quantity}
          <button onClick={() => onEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PantryList;
