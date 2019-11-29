import React from "react";
import { TodoItem} from "../todo-item/todo-item";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() });
it('matches the snapshot', () => {
    const props = {
       name: 'Buy groceries', checked:false, completed: false
      };
    const tree = shallow(<TodoItem {...props}/>)
    expect(toJson(tree)).toMatchSnapshot()
  })