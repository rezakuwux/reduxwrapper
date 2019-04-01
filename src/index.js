const initState = {
  todoList: [
  ],
}

const ReduxWrapper = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: state.todoList.concat({
          id: action.payLoad.id,
          text: action.payLoad.text,
          completed: action.payLoad.completed
        })
      }
    case 'DONE_TODO':
      const done = state.todoList.map(e => {
        if (e.id === action.payLoad.id) {
          e = { ...e, completed: action.payLoad.completed };
        }
        return e;
      });

      return {
        ...state,
        todoList: done
      }
    case 'UPDATE_TODO':
      const update = state.todoList.map(e => {
        if (e.id === action.payLoad.id) {
          e = { ...e, text: action.payLoad.text };
        }
        return e;
      });

      return {
        ...state,
        todoList: update
      }
    case 'DELETE_TODO':
      var remove = state.todoList.filter(e => e.id !== action.payLoad.id);
      return {
        ...state,
        todoList: remove
      }
    case 'CLEAR_DATA':
      return {
        ...state,
        todoList: []
      }
    default:
      return state;
  }
}

export default ReduxWrapper