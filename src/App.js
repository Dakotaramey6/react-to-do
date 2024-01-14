import "./App.css";
import React, { useEffect, useState } from "react";
import { UserInput } from "./UserInput";

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
      <h1>Task</h1>
      <UserInput
        onSubmit={handleSubmit}
        toDo={toDo}
        onChange={handleChange}
        currentToDo={currentToDo}
      />
      <ul>
        {toDo.map((toDos) => (
          <li
            key={Math.floor(Math.random() * 10000)}
            id={toDos.id}
            className="active"
            style={{ backgroundColor: toDos.background }}
          >
            <span id="text">{toDos.value}</span>
            <span id="todo-span" onClick={() => removeToDo(toDos.id)}>
              🆇
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
