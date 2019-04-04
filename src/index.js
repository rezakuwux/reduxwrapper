export const ActionType = {
  ADD_TODO:'ADD_TODO',
  UPDATE_TODO:'UPDATE_TODO',
  DELETE_TODO:'DELETE_TODO',
  CLEAR_TODO:'CLEAR_TODO',

}

const initState = {
  todoList: [
  ],
}

const ReduxWrapper = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.concat({
          id: action.payLoad.id,
          text: action.payLoad.text,
          completed: false
        })
      }
    case UPDATE_TODO:
      const update = state.todoList.map(todo => {
        if (todo.id === action.payLoad.id) {
          todo = { ...todo, text: action.payLoad.text };
        }
        return todo;
      });

      return {
        ...state,
        todoList: update
      }
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payLoad.id)
      }
    case CLEAR_TODO:
      return {
        ...state,
        todoList: []
      }
    default:
      return state;
  }
}

export default ReduxWrapper