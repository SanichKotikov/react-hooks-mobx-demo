import { uiThemeName } from '../types';

export default (theme: uiThemeName) => (
  document.documentElement.setAttribute('theme', theme)
);
