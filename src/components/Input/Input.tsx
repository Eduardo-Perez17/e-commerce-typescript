import React from 'react';
import { Props } from '../../interface/interface.input';

const Input = ({ inputPlacheholder, inputName, inputValue, inputOnChange, inputType }: Props) => {
  return React.createElement('input', { type: inputType, name: inputName, value: inputValue, placeholder: inputPlacheholder, onChange: inputOnChange }, null);
};

export default Input;
