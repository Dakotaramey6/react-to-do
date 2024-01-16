import "./App.css";
import React, { useState } from "react";
import { UserInput } from "./UserInput";
import { StatBar } from "./StatBar";

function App() {
  const [toDo, setToDo] = useState([]);
  const [currentToDo, setCurrentToDo] = useState("");
  const [pos, setPos] = useState(0);
  const [background, setBackground] = useState("lightPink");

  const handleSubmit = (e) => {
    setToDo((prev) => [
      ...prev,
      {
        pos,
        background,
        id: Math.floor(Math.random() * 10000),
        value: currentToDo,
        isChecked: false,
      },
    ]);
    e.preventDefault();
    setPos((prev) => prev + 1);
    setCurrentToDo("");
    setBackground(() => (pos % 2 === 0 ? "lightGreen" : "lightPink"));
  };

  const handleChange = ({ target }) => {
    setCurrentToDo(() => target.value);
  };

  const removeToDo = (id) => {
    setToDo((prev) => prev.filter((toRemove) => toRemove.id !== id));
  };

  return (
    <div className="container">
      <h1>Tasks</h1>
      <UserInput
        onSubmit={handleSubmit}
        toDo={toDo}
        currentToDo={currentToDo}
        onChange={handleChange}
      />
      <ul>
        {toDo.map((toDos) => (
          <li
            key={Math.floor(Math.random() * 10000)}
            id={toDos.id}
            style={{ backgroundColor: toDos.background }}
          >
            <input name="isChecked" type="checkbox" />
            <span id="text">{toDos.value}</span>
            <span id="todo-span" onClick={() => removeToDo(toDos.id)}>
              🆇
            </span>
          </li>
        ))}
      </ul>
      <StatBar toDo={toDo} />
    </div>
  );
}

export default App;
