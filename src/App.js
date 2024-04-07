import logo from "./logo.svg";
import "./App.css";
import FormForAnimal from "./Components/Form";
import Animals from "./Components/Animals";
import React, { useState } from "react";

function App() {
  const [animals, setAnimals] = useState([]);

  const handleAdd = (animal) => {
    setAnimals([...animals, animal]);
  };

  const handleDelete = (index) => {
    setAnimals(animals.filter((animal, i) => i !== index));
  };

  return (
    <div>
      <FormForAnimal onAdd={handleAdd} />
      <Animals animals={animals} onLoad={setAnimals} onDelete={handleDelete} />
    </div>
  );
}

export default App;
