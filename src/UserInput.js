import React from "react";
import "./userInput.css";

export function UserInput({ onSubmit, onChange, currentToDo }) {
  return (
    <form onSubmit={onSubmit} className="form">
      <input type="text" value={currentToDo} onChange={onChange} required />
      <br />
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}
