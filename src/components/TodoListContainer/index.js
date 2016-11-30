import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from '../TodoList';
import SimpleForm from '../SimpleForm';
import { getCategoryByName, getTodoList } from '../../reducers';
import { addTodo, finishTodo, removeTodo, getTodosByCategory } from '../../actions';

require('./todo-list-container.scss');

class TodoListContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.category &&
        prevProps.category &&
        this.props.category.id !== prevProps.category.id) {
      this.fetchData();
    }
  }

  fetchData() {
    const { category, getTodosByCategory } = this.props;
    getTodosByCategory(category);
  }
  
  render() {
    const { categoryForNewTodo, todos, addTodo, finishTodo, removeTodo } = this.props;
    return (
      <div className='grid todo-list-container-component'>
        <div className='row'>
          <SimpleForm
            button='Add Todo'
            onSubmit={ description => addTodo(description, categoryForNewTodo) }
          ></SimpleForm>
        </div>
        
        <div className='row'>
          <TodoList
            todos={ todos }
            onTodoDone={ finishTodo }
            onTodoRemove={ removeTodo }
          ></TodoList>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, { params }) => ({
  category: getCategoryByName(state, params.categoryName),
  categoryForNewTodo: getCategoryByName(state, params.categoryName || 'active'),
  todos: getTodoList(state)
});

const mapActionsToProps = () => ({
  addTodo,
  finishTodo,
  removeTodo,
  getTodosByCategory
});

TodoListContainer = withRouter(connect(
  mapStateToProps,
  mapActionsToProps()
)(TodoListContainer));

export default TodoListContainer;