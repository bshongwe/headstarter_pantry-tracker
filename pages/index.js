import { useState } from 'react';
import PantryForm from '../components/PantryForm';
import PantryList from '../components/PantryList';

const HomePage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSave = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <h1>Pantry Tracker</h1>
      <PantryForm item={selectedItem} onSave={handleSave} />
      <PantryList onEdit={setSelectedItem} />
    </div>
  );
};

export default HomePage;
