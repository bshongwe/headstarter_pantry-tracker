// components/PantryForm.js
import React, { useState } from 'react';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebaseConfig';

const PantryForm = ({ item, onSave }) => {
  const [name, setName] = useState(item?.name || '');
  const [quantity, setQuantity] = useState(item?.quantity || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (item) {
      await updateDoc(doc(db, 'pantryItems', item.id), { name, quantity });
    } else {
      await addDoc(collection(db, 'pantryItems'), { name, quantity });
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Item Name" required />
      <input value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
      <button type="submit">Save</button>
    </form>
  );
};

export default PantryForm;
