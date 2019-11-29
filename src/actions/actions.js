//action creators
import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS
} from '../constants/constants';

export function addTodo(data) {
  return { type: ADD_TODO, payload: { data } };
}
export function deleteTodo(index) {
  return { type: DELETE_TODO, payload: { index } };
}
export function completeTodo(index) {
  return { type: COMPLETE_TODO, payload: { index } };
}
export function loadTodos(data) {
  return { type: LOAD_TODOS, payload: { data } };
}
