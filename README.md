# reduxwrapper
## Install reduxwrapper
```bash
npm install kuwuxlib --save
```

## Install Depedensi
```bash
npm install redux --save
npm install react-redux --save
```

## Action

  - 'ADD_TODO' -> Menambahkan Todo
  - 'DELETE_TODO' -> Menghapus Todo
  - 'UPDATE_TODO' -> Merubah Todo
  - 'CLEAR_DATA' -> Menghapus semua Todo


## Menambahkan Store
```bash
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxWrapper from 'kuwuxlib';

const store = createStore(ReduxWrapper)
```

## mapStateToProps
```bash
function mapStateToProps(state: { todoList: any; }){
    var listTodo = state.todoList;
  
    return {
        listTodo
    }
}
```

## mapDispatchToProps
```bash
function mapDispatchToProps(dispatch){
    return {
        addTodo: (value: { id: any; text: any; completed: any; }) => dispatch({ 
            type: "ADD_TODO", 
            payLoad: {
                id        : value.id,
                text      : value.text,
                completed : value.completed
            }
        }),
        updateTodo: (value: { id: any; text: any; }) => dispatch({
            type: "UPDATE_TODO",
            payLoad: {
                id        : value.id,
                text      : value.text
            }
        }),
        clearTodo: () => dispatch({
            type: "CLEAR_DATA"
        }),
        deleteTodo: (value: { id: any; }) => dispatch({
            type: "DELETE_TODO",
            payLoad: {
                id        : value.id
            }
        }),
      
    };
};

```
