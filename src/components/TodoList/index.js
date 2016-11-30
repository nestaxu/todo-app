import React from 'react'
import Todo from '../Todo'

require('./todo-list.scss');

const TodoList = ({ todos, onTodoDone, onTodoRemove } ) => (
  <div className='todo-list scrollable'>
    {
      todos.map(todo =>
        <div className='row todo' key={ todo.id }>
          <Todo
            onDone={ () => onTodoDone(todo) }
            onRemove={ () => onTodoRemove(todo) }
          >
            { todo.description }
          </Todo>
        </div>
      )
    }
  </div>
);

export default TodoList;