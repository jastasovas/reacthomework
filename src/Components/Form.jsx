import React, { useState } from "react";

const FormForAnimal = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [group, setGroup] = useState("");
  const [weight, setWeight] = useState("");
  const [ltuZoo, setLtuZoo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, group, weight, ltuZoo });
    setTitle("");
    setGroup("");
    setWeight("");
    setLtuZoo(false);
  };

  return (
    <form className="anmlForm" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Group:
        <select value={group} onChange={(e) => setGroup(e.target.value)}>
          <option value="">Select</option>
          <option value="Bird">Bird</option>
          <option value="Reptile">Reptile</option>
          <option value="Mammal">Mammal</option>
          <option value="Fish">Fish</option>
          <option value="Insect">Insect</option>
        </select>
      </label>
      <label>
        Weight:
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <label>
        LTU ZOO:
        <input
          type="checkbox"
          checked={ltuZoo}
          onChange={(e) => setLtuZoo(e.target.checked)}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormForAnimal;
