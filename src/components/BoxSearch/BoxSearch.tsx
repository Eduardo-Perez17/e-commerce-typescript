import React from 'react';
import { MAGNIFYING_GLASS_IMAGE } from '../../utils/image';
import { Props } from '../../interface/interface.boxSearch';

import { Input } from '../Input';
import { Image } from '../Image';
import { Box } from '../Box';

const BoxSearch = ({ handleInputValue, inputValue }: Props) => {
  return (
    <Box classStyle='search'>
      <Input inputType='text' inputPlacheholder='Buscar' inputName='text' inputOnChange={handleInputValue} inputValue={inputValue} />
      <Image srcImg={MAGNIFYING_GLASS_IMAGE.img} altImg={MAGNIFYING_GLASS_IMAGE.alt} />
    </Box>
  );
};

export default BoxSearch;
