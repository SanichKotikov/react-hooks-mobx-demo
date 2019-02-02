import { IUiTheme, IUiThemes } from './types';

const light: IUiTheme = {
  '--color': 'orange',
  '--background-color': '#eee',
  '--text-color': '#333',
};

const dark: IUiTheme = {
  '--color': 'red',
  '--background-color': '#333',
  '--text-color': '#eee',
};

const THEMES: IUiThemes = { light, dark };

export default THEMES;
