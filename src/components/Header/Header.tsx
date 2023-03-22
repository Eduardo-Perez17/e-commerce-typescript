import { useState } from 'react';
import { FAVORITE_IMAGE, SHOP_IMAGE } from '../../utils/image';

import './_header.scss';

import { BoxSearch } from '../../components/BoxSearch';
import { Image } from '../../components/Image';
import { Box } from '../../components/Box';

const Header = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputValue: React.ChangeEventHandler<HTMLInputElement> = event => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  return (
    <Box classStyle='header-app'>
      <BoxSearch handleInputValue={handleInputValue} inputValue={inputValue} />
      <Box classStyle='header__other--interaction'>
        <Image srcImg={FAVORITE_IMAGE.img} altImg={FAVORITE_IMAGE.alt} />
        <Image srcImg={SHOP_IMAGE.img} altImg={SHOP_IMAGE.alt} />
      </Box>
      <Box classStyle='header__profile'>
        <></>
      </Box>
    </Box>
  );
};

export default Header;
