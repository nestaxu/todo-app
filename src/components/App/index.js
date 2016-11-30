import React from 'react';
import CategoryListContainer from '../CategoryListContainer'
import TodoListContainer from '../TodoListContainer'

require('./app.scss');

const App = () => (
  <div className='grid todo-app'>
    <div className='row'>
      <div className='col-20 category-list-container-container'>
        <CategoryListContainer />
      </div>
      <div className='col-80 todo-list-container-container'>
        <TodoListContainer />
      </div>
    </div>
  </div>
);

export default App;
