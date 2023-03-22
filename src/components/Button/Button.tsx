import React from 'react';
import { Props } from '../../interface/interface.button';

const Button = ({ typeBtn, classStyle, children }: Props): JSX.Element => {
  return React.createElement('button', { type: typeBtn, className: classStyle }, children);
};

export default Button;
