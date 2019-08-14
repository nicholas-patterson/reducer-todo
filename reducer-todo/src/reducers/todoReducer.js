export const initialState = {
  todos: [
    {
      todo: "clean the house",
      completed: false,
      id: 1
    },
    {
      todo: "code",
      completed: false,
      id: 2
    },
    {
      todo: "Go to sleep",
      completed: false,
      id: 3
    }
  ]
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        todo: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

    case "TOGGLE_COMPLETED":
      return {
        todos: state.todos.map(todo => {
          console.log(todo);
          return todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo;
        })
      };
    case "CLEAR_COMPLETED":
      return {
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};
