import React from "react";
import {TodoItem} from '../todo-item/todo-item';
export function TodoList(props){
  return (
    <ul className="todos todos-custom">
          {props.todos.map((todo, index) => (
            <TodoItem
              key={index}
              name={todo.name}
              checked={todo.checked}
              completed={todo.completed}
              onDelete={() => props.onDelete(index)}
              onComplete={() => props.onComplete(index)}/>
          ))}
    </ul>
  );
}