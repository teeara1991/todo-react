import React from "react";
import { TodoList } from "../todo-list/todo-list";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

it("calls removeTodo Redux action creator with trash click", () => {
  const props = {
    onDelete: jest.fn(),
    todos: [
      { name: "Buy groceries", completed: false },
      { name: "Change oil", completed: false }
    ]
  };
  const wrapper = mount(<TodoList {...props} />);
  wrapper
    .find(".fas")
    .at(0)
    .simulate("click");
  expect(props.onDelete).toHaveBeenCalledWith(0);
});
it("calls completeTodo Redux action creator with input click", () => {
  const props = {
    onComplete: jest.fn(),
    todos: [
      { name: "Buy groceries", completed: false },
      { name: "Change oil", completed: false }
    ]
  };
  const wrapper = mount(<TodoList {...props} />);
  wrapper
    .find(".todo-text")
    .at(0)
    .simulate("click");
  wrapper
    .find("input")
    .at(0)
    .simulate("click");
  expect(props.onComplete).toHaveBeenCalledWith(0);
});

it("matches the snapshot", () => {
  const props = {
    todos: [
      { name: "Buy groceries", completed: false },
      { name: "Change oil", completed: false }
    ]
  };
  const tree = shallow(<TodoList {...props} />);
  expect(toJson(tree)).toMatchSnapshot();
});
