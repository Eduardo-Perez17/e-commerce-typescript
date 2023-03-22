import React from 'react';
import { Props } from '../../interface/interface.image';

const Image = ({ srcImg, altImg }: Props): JSX.Element => {
  return React.createElement('img', { src: srcImg, alt: altImg }, null);
};

export default Image;
