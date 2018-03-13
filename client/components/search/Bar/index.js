import React, { Component } from 'react';
import Input from '../../ui/styled/Input';
import Form from '../../ui/styled/Form';
import { compose, withHandlers, withState } from 'recompose';

const PLACEHOLDER = "search: Bohemian Rhapsody";

const enhace = compose(
  withState('value', 'updateValue', ''),
  withHandlers({
    handleSubmit: ({ onSubmit, value, updateValue }) => event => {
      event.preventDefault();
      event.stopPropagation();
      updateValue('');
      if (value.length > 3) onSubmit(value);
    },
    handleChange: ({ updateValue  }) => event => {
      updateValue(event.target.value)
    }
  })
);

const Bar = ({ mt, handleSubmit, handleChange }) => (
  <div>
    <Form onSubmit={handleSubmit}>
      <Input
        mt={mt}
        type="text"
        placeholder={PLACEHOLDER}
        onChange={handleChange}/>
    </Form>
  </div>
);


export default enhace(Bar);

