export function reducer(state, action) {
  let todos = [...state.todos];
  const index = action.payload.index;
  switch (action.type) {
    case "add todo":
      const name = action.payload.data;
      todos.push({ name, checked: false, completed: false });
      return { ...state, todos };
    case "delete todo":
      todos.splice(index, 1);
      return { ...state, todos };
    case "complete todo":
      todos[index].completed = !todos[index].completed;
      todos[index].completed
        ? (todos[index].checked = true)
        : (todos[index].checked = false);
      return { ...state, todos };
    case "load todos":
        const data = action.payload.data;
        todos = (data && [...data]) || [];
        return { ...state, todos }; 
    default:
      throw new Error();
  }
}

export const initialState = {
  todos: []
};


