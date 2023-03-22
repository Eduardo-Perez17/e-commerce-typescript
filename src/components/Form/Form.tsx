import React from 'react';
import { Props } from '../../interface/interface.form';

const Form = ({ children, formSubmit }: Props): JSX.Element => {
  return React.createElement('form', { onSubmit: formSubmit }, children);
};

export default Form;
