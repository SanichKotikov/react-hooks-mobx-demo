import { IUiTheme } from '../types';

export default (theme: IUiTheme) => {
  const doc = document.documentElement;

  Object.keys(theme).forEach(key => {
    doc.style.setProperty(key, theme[key]);
  });
};
