import { FAVORITE_IMAGE, SHOP_IMAGE, USER_IMAGE, SETTINGS_IMAGE, SIGN_IN_IMAGE, LOG_IN_IMAGE, HOME_IMAGE } from '../image';

export const HOME = {
  name: 'hogar',
  path: '/',
  private: false,
  image: HOME_IMAGE,
};

export const PROFILE = {
  name: 'perfil',
  path: '/perfil',
  private: true,
  image: USER_IMAGE,
};

export const LOG_IN = {
  name: 'iniciar sesion',
  path: '/iniciar-sesion',
  private: false,
  image: LOG_IN_IMAGE,
};

export const SIGN_IN = {
  name: 'crear cuenta',
  path: '/crear-cuenta',
  private: false,
  image: SIGN_IN_IMAGE,
};

export const FAVORITE = {
  name: 'favoritos',
  path: '/favoritos',
  private: true,
  image: FAVORITE_IMAGE,
};

export const SHOP = {
  name: 'tienda',
  path: '/tienda',
  private: false,
  image: SHOP_IMAGE,
};

export const SETTINGS = {
  name: 'configuracion',
  path: '/configuracion',
  private: true,
  image: SETTINGS_IMAGE,
};

export const MENU_NAVIGATION = [HOME, FAVORITE, SHOP, LOG_IN, SIGN_IN];
export const MENU_PROFILE = [PROFILE, SETTINGS];
