import React from "react";

export const StatBar = ({ toDo, updatedTask }) => {
  let style = {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px rgba(0, 0, 0, 0.3) 0px 30px 60px -30px rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderRadius: 10,
    backgroundColor: "rgba(211, 211, 211, 0.605)",
    marginTop: 30,
  };
  return (
    <div>
      <p style={style}>
        {toDo.length} total {toDo.length !== 1 ? "items" : "item"}
      </p>
      <p>{updatedTask.length} completed</p>
    </div>
  );
};
