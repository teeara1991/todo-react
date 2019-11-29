import React, { useEffect } from "react";
import { TodoList } from "../todo-list/todo-list";
import { TodoInput } from "../todo-input/todo-input";
import { connect } from "react-redux";
import {
  addTodo,
  deleteTodo,
  completeTodo,
  loadTodos
} from "../../actions/actions";
function App(props) {
  const { todos, onSubmit, onDelete, onComplete, onLoad } = props;
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("storage"));
    onLoad(data);
  }, []);
  useEffect(() => {
    localStorage.setItem("storage", JSON.stringify(todos));
  });
  return (
    <div>
      <TodoInput onSubmit={onSubmit} />
      <TodoList todos={todos} onDelete={onDelete} onComplete={onComplete} />
    </div>
  );
}
const mapStateToProps = state => ({ todos: state.todos });
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => dispatch(addTodo(data)),
    onDelete: index => dispatch(deleteTodo(index)),
    onComplete: index => dispatch(completeTodo(index)),
    onLoad: data => dispatch(loadTodos(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
