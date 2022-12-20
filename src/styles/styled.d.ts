import 'style-components';
import { ColorType } from './theme';

declare module 'style-components' {
  export interface DefaultTheme {
    colors: ColorType;
  }
}
