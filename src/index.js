import React,{useReducer,useEffect} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {TodoList} from './components/todo-list';
import {TodoInput} from './components/todo-input';
import  {initialState, reducer} from './reducer';


function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(
      () => {
        const data = JSON.parse(localStorage.getItem("storage"));
        dispatch({type: 'load todos', payload: {data}})
      },[]);
      useEffect(
        () => {
          localStorage.setItem("storage", JSON.stringify(state.todos));
        });
    return (
      <div>
        <TodoInput onSubmit={(data) => dispatch({type: 'add todo', payload: data})}/>
        <TodoList todos={state.todos} 
         onDelete={(index) => dispatch({type: 'delete todo',payload: {index}})}
         onComplete={(index) => dispatch({type: 'complete todo',payload: {index}})}/>
      </div>
    );
  }
ReactDOM.render(<App />, document.getElementById("root"));
