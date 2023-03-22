import React from 'react';

const Label = ({ forLabel, children }: ILabelProp): JSX.Element => {
  return React.createElement('label', { htmlFor: forLabel }, children);
};

export default Label;
