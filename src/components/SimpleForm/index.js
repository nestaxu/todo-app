import React from 'react'
import SimpleInputField from '../SimpleInputField'
import SimpleButton from '../SimpleButton'

require('./simple-form.scss');

const SimpleForm = ({ button, onSubmit }) => {
  let inputValue;
  let inputRef;

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    inputRef.value = '';
  };

  const inputValueChanged = (event, ref) => {
    inputRef = ref;
    inputValue = event.target.value;
  };

  return (
    <form className='simple-form' onSubmit={ onFormSubmit }>
      <div className='col-65 gutter'>
        <SimpleInputField onChange={ inputValueChanged } />
      </div>

      <div className='col-35'>
        <SimpleButton type='submit'>
          { button }
        </SimpleButton>
      </div>
    </form>
  );
};

export default SimpleForm;