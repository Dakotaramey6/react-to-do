import "./App.css";
import React, { useState } from "react";
import { UserInput } from "./UserInput";
import { StatBar } from "./StatBar";

function App() {
  const [toDo, setToDo] = useState([]);
  const [currentToDo, setCurrentToDo] = useState("");
  const [pos, setPos] = useState(0);
  const [background, setBackground] = useState("lightPink");

  let isChecked = false;
  let updatedTask = [];

  const handleSubmit = (e) => {
    setToDo((prev) => [
      ...prev,
      {
        pos,
        background,
        id: Math.floor(Math.random() * 10000),
        value: currentToDo,
        isChecked,
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

  const handleRemove = (setState, id) => {
    setState((prev) => prev.filter((toRemove) => toRemove.id !== id));
  };

  const handleTaskComplete = (id) => {
    updatedTask = toDo.map((task) => {
      if (id === task.id) {
        return { ...task, isChecked: !task.isChecked };
      }

      return task;
    });

    setToDo(updatedTask);
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
            <input
              name="isChecked"
              type="checkbox"
              defaultChecked={toDos.isChecked}
              onChange={() => handleTaskComplete(toDos.id)}
            />
            <span id="text">{toDos.value}</span>
            <span
              id="todo-span"
              onClick={() => handleRemove(setToDo, toDos.id)}
            >
              🆇
            </span>
          </li>
        ))}
      </ul>

      <StatBar toDo={toDo} updatedTask={updatedTask} />
    </div>
  );
}

export default App;
