import React, { useEffect } from "react";

const Animals = ({ animals, onLoad, onDelete }) => {
  useEffect(() => {
    onLoad(JSON.parse(localStorage.getItem("animals")) || []);
  }, [onLoad]);

  useEffect(() => {
    localStorage.setItem("animals", JSON.stringify(animals));
  }, [animals]);

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <ol className="anmlView">
      {animals.map((animal, index) => (
        <li key={index}>
          <strong>Title:</strong> {animal.title}
          <br />
          <strong>Group:</strong> {animal.group}
          <br />
          <strong>Weight:</strong> {animal.weight}
          <br />
          <strong>Is in Zoo or no:</strong> {animal.ltuZoo ? "Yes" : "No"}
          <br />
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ol>
  );
};

export default Animals;
