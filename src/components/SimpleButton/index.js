import React from 'react'

require('./simple-button.scss');

const SimpleButton = ({ type, children, onClick }) => {
  return (
    <button
      className='simple-button'
      type={ type }
      onClick={ onClick }
    >
      { children }
    </button>
  );
};

export default SimpleButton;