import React, { useState } from 'react';
import { LOGO_IMAGE, MENU_IMAGE, CLOSE_IMAGE } from '../../utils/image';
import { MENU_NAVIGATION, MENU_PROFILE } from '../../utils/path';

import './_menuApp.scss';

import { MapComponents } from '../MapComponents';
import { SectionHTML } from '../SectionHTML';
import { HeaderHTML } from '../HeaderHTML';
import { BoxSearch } from '../BoxSearch';
import { Image } from '../Image';
import { Logo } from '../Logo';
import { Box } from '../Box';

const MenuApp = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');
  const [toggleMenu, setToggleMenu] = useState<Boolean>(false);

  const handleInputValue: React.ChangeEventHandler<HTMLInputElement> = event => {
    setInputValue(event.target.value);
  };

  const handleToggleMenu: React.MouseEventHandler = () => setToggleMenu(!toggleMenu);

  return (
    <Box classStyle='header_father'>
      <Box classStyle='header_son'>
        <SectionHTML>
          <HeaderHTML classStyle={toggleMenu ? `header header__toggle--menu` : `header header_mobile`}>
            <Logo />
            <Box classStyle='header__toggle'>
              <BoxSearch handleInputValue={handleInputValue} inputValue={inputValue} />
              <Box classStyle='header__article'>
                <Box classStyle='other__icons--interaction'>
                  <MapComponents mapComponent={MENU_NAVIGATION} />
                </Box>

                <Box classStyle='menu' boxClick={handleToggleMenu}>
                  <Image srcImg={LOGO_IMAGE.img} altImg={LOGO_IMAGE.alt} />
                  <Image srcImg={MENU_IMAGE.img} altImg={MENU_IMAGE.alt} />
                  <Image srcImg={CLOSE_IMAGE.img} altImg={CLOSE_IMAGE.alt} />
                </Box>
              </Box>
            </Box>

            <Box classStyle='profile__menu'>
              <MapComponents mapComponent={MENU_PROFILE} />
            </Box>
          </HeaderHTML>
        </SectionHTML>
      </Box>
    </Box>
  );
};

export default MenuApp;
