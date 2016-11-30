import React from 'react'
import SimpleButton from '../SimpleButton'

require('./todo.scss');

const Todo = ({ children, active, onDone, onRemove }) => (
  <div className='todo'>
    <div className='col-90'>
      <span className='desc'>{ children }</span>
      <span className='gutter force'></span>
      <span
        className='remove-button'
        onClick={() => {
          onRemove()
        }}
      >
        &times;
      </span>
    </div>

    <div className='col-10 gutter'>
      <SimpleButton
        type='button'
        onClick={() => {
          onDone();
        }}
      >
        Done
      </SimpleButton>
    </div>
  </div>
);

export default Todo;