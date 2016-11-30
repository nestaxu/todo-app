import React, { Component }  from 'react'

require('./simple-input-field.scss');

const SimpleInputField = ({ onChange }) => {
  let _ref;

  return (
    <input
      className='simple-input-field'
      ref={ ref => _ref = ref }
      onChange={ event => onChange(event, _ref) }
    />
  );
};

export default SimpleInputField;