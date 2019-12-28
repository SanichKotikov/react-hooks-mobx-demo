import { uiThemeName } from 'app/types';

function setTheme(theme: uiThemeName) {
  document.documentElement.setAttribute('theme', theme);
}

export default setTheme;
