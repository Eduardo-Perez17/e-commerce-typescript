import React from 'react';
import { Props } from '../../interface/interface.box';

const Box = ({ classStyle, boxID, boxClick, children }: Props): JSX.Element => {
  return React.createElement('div', { className: classStyle, id: boxID, onClick: boxClick }, children);
};

export default Box;
