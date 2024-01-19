import React from "react";
import "./statbar.css";

export const StatBar = ({ toDo }) => {
  let completed = 0;
  for (let i = 0; i < toDo.length; i++) {
    if (toDo[i].isChecked) completed++;
  }

  return (
    <div className="stat-bar-container">
      <p>{toDo.length} total task</p>
      <p>{completed} task completed</p>
    </div>
  );
};
