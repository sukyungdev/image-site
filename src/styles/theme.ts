import { DefaultTheme } from 'styled-components';

const colors = {
  background: '#EEE',
  iconColor: '#808080',
  link: '#2176F6',
  favorite: '#EF5478',
};

export type ColorType = typeof colors;
export const theme: DefaultTheme = {
  colors,
};
