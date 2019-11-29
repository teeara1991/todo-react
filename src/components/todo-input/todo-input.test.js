import React from "react";
import { TodoInput } from "../todo-input/todo-input";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<TodoInput>", () => {
  it("calls AddTodo Redux action creator with button click and form submit", () => {
    const props = {
      onSubmit: jest.fn(),
      todos: []
    };
    const wrapper = shallow(<TodoInput {...props} />);
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {},
      target: { todo_name: { value: "8", focus: jest.fn() } }
    });
    wrapper.find("button").simulate("submit", {
      preventDefault: () => {},
      target: { todo_name: { value: "8", focus: jest.fn() } }
    });
    expect(props.onSubmit).toHaveBeenCalledWith("8");
  });
});
it("matches the snapshot", () => {
  const tree = shallow(<TodoInput />);
  expect(toJson(tree)).toMatchSnapshot();
});
