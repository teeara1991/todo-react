import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Todo(props) {
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

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [{ name: "asdasd", checked: true, completed: false }]
    };
  }
  submitAction = event => {
    event.preventDefault();
    const todo = this.state.todo.slice();
    const form = document.querySelector("form[name=todo]");
    const todoName = form.querySelector("input[name=todo-name]");
    todo.push({ name: todoName.value, checked: false });
    this.setState({ todo });
    todoName.value = "";
    todoName.focus();
  };
  deleteAction = index => {
    const todo = this.state.todo.slice();
    todo.splice(index, 1);
    this.setState({ todo });
  };
  completeAction = index => {
    const todo = this.state.todo.slice();
    todo[index].completed = !todo[index].completed;
    todo[index].completed
      ? (todo[index].checked = true)
      : (todo[index].checked = false);
    this.setState({ todo });
  };
  saveAction = () => {
    const todo = this.state.todo;
    localStorage.setItem("storage", JSON.stringify(todo));
  };
  componentDidUpdate() {
    this.saveAction();
  }
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("storage"));
    const todo = (data && [...data]) || [];
    this.setState({ todo });
  }
  render() {
    return (
      <div>
        <form name="todo" onSubmit={this.submitAction}>
          <div className="input-group mb-3">
            <input
              type="text"
              name="todo-name"
              className="form-control"
              placeholder="Добавить задачу"
              aria-describedby="basic-addon2"
              autoFocus/>
            <div className="input-group-append">
              <button
                type="submit"
                className="btn btn-primary btn-outline-secondary">
                +
              </button>
            </div>
          </div>
        </form>
        <ul className="todos todos-custom">
          {this.state.todo.map((todo, index) => (
            <Todo
              key={index}
              name={todo.name}
              checked={todo.checked}
              completed={todo.completed}
              onDelete={() => this.deleteAction(index)}
              onComplete={() => this.completeAction(index)}/>
          ))}
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<Todos />, document.getElementById("root"));
