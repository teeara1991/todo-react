import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS
} from '../constants/constants';

export function reducer(state = [], action) {
  let todos = [...state.todos];
  switch (action.type) {
    case ADD_TODO:
      const name = action.payload.data;
      todos.push({ name, checked: false, completed: false });
      return { ...state, todos };
    case DELETE_TODO:
      todos.splice(action.payload.index, 1);
      return { ...state, todos };
    case COMPLETE_TODO:
      const { index } = action.payload;
      todos[index].completed = !todos[index].completed;
      todos[index].completed
        ? (todos[index].checked = true)
        : (todos[index].checked = false);
      return { ...state, todos };
    case LOAD_TODOS:
      const { data } = action.payload;
      todos = (data && [...data]) || [];
      return { ...state, todos };
    default:
      return state;
  }
}

export const initialState = {
  todos: []
};
