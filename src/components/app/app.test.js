import React from "react";
import App from "./app";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { initialState, reducer } from "../../reducers/reducer";
import toJson from 'enzyme-to-json'
import {
    addTodo,
    deleteTodo,
    completeTodo,
} from "../../actions/actions";

configure({ adapter: new Adapter() });

const store = createStore(reducer, initialState);

it('calls addTodo Redux action creator return new state', () => {
    const firstState = {
      todos: [{name: 'Buy groceries',completed: false,checked: false}]
    }
    const lastState = {
        todos: [{name: 'Buy groceries',completed: false,checked: false},
         {name: 'Change oil', completed:false,checked: false}]
    }
    expect(reducer(firstState, addTodo('Change oil'))).toStrictEqual(lastState);
})

it('calls deleteTodo Redux action creator return new state', () => {
    const firstState = {
        todos: [{name: 'Buy groceries',completed: false,checked: false},
        {name: 'Change oil', completed:false,checked: false}]
    }
    const lastState = {
        todos: [{name: 'Buy groceries',completed: false,checked: false}]
    }
    expect(reducer(firstState, deleteTodo(1))).toStrictEqual(lastState);
})

it('calls completeTodo Redux action creator return new state', () => {
    const firstState = {
        todos: [{name: 'Buy groceries', completed: false,checked: false},
        {name: 'Change oil', completed:false,checked: false}]
    }
    const lastState = {
        todos: [{name: 'Buy groceries', completed: true, checked: true},
        {name: 'Change oil', completed:false,checked: false}]
    }
    expect(reducer(firstState, completeTodo(0))).toStrictEqual(lastState);
})

it('matches the snapshot', () => {
  const tree = mount(<Provider store={store}>
    <App />
  </Provider>)
  expect(toJson(tree)).toMatchSnapshot()
})


 
