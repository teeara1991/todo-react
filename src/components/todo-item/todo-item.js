import React from "react";
export function TodoItem(props) {
  return (
    <ul className={`todo-item ${props.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onComplete}
      />
      <span className="todo-text" onClick={props.onComplete}>
        {props.name}
      </span>
      <span className="todo-trash">
        <i className="fas fa-trash-alt" onClick={props.onDelete}></i>
      </span>
    </ul>
  );
}
