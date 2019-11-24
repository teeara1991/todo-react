import React from "react";
export function TodoInput(props){
  const onSubmit = event => {
    event.preventDefault();
    const todoName = event.target.todo_name
    props.onSubmit({data: todoName.value});
    todoName.value = "";
    todoName.focus();
  };
    return (
      <form name="todo" onSubmit={onSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                name="todo_name"
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
    );
  }