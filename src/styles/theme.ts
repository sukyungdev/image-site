import { DefaultTheme } from 'styled-components';

const colors = {
  background: '#E1E1E1',
  link: '#2176F6',
};

export type ColorType = typeof colors;
export const theme: DefaultTheme = {
  colors,
};
