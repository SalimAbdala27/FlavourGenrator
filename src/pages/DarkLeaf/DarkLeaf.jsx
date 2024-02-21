import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const darkLeaf = {
  "Fruity Flavors": ["Double Apple", "Watermelon", "Grape", "Blueberry", "Peach", "Mango", "Strawberry", "Pineapple", "Cherry", "Raspberry", "Blackberry", "Coconut", "Kiwi", "Banana", "Lemon", "Orange"],
  "Minty/Refreshing Flavors": ["Mint", "Spearmint", "Peppermint", "Wintergreen"],
  "Sweet and Dessert Flavors": ["Vanilla", "Chocolate", "Caramel", "Coffee", "Hazelnut", "Butterscotch", "Tiramisu", "Cotton Candy", "Bubblegum"],
  "Floral Flavors": ["Rose", "Jasmine", "Lavender"],
  "Spicy/Exotic Flavors": ["Cinnamon", "Cardamom", "Clove", "Ginger", "Anise (Licorice)"],
  "Tropical Flavors": ["Guava", "Passionfruit", "Lychee", "Papaya"],
  "Herbal/Unusual Flavors": ["Pinkman", "Absinthe", "Energy Drink", "Blue Mist", "Melon Dew"],
  "Mixed/Bleneded Flavors": ["Blueberry Mint", "Orange Mint", "Lemon Mint", "Grape Mint"]
};

const DarkLeaf = () => {
  const [pickedFlavors, setPickedFlavors] = useState([]);
  const [numFlavors, setNumFlavors] = useState(3);

  const handleNumFlavorsChange = (e) => {
    setNumFlavors(parseInt(e.target.value));
  };

  const getRandomFlavors = () => {
    const allFlavors = Object.values(darkLeaf).flat();
    const randomFlavors = [];
    while (randomFlavors.length < numFlavors) {
      const randomIndex = Math.floor(Math.random() * allFlavors.length);
      const flavor = allFlavors[randomIndex];
      if (!randomFlavors.includes(flavor)) {
        randomFlavors.push(flavor);
      }
    }
    setPickedFlavors(randomFlavors);
  };

  return (
    <div>
      <h1>DarkLeaf</h1>
      <label htmlFor="numFlavors">Number of Flavors:</label>
      <input
        type="number"
        id="numFlavors"
        value={numFlavors}
        onChange={handleNumFlavorsChange}
      />
      <button onClick={getRandomFlavors}>Pick Random Flavors</button>
      <div>
        {pickedFlavors.length > 0 && (
          <ul>
            {pickedFlavors.map((flavor, index) => (
              <li key={index}>{flavor}</li>
            ))}
          </ul>
        )}
      </div>
      <Link to='/'>HOME</Link>
    </div>
  );
};

export default DarkLeaf;
