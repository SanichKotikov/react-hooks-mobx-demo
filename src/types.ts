export interface IUiTheme {
  [key: string]: string;
}

export interface IUiThemes {
  light: IUiTheme,
  dark: IUiTheme,
}

export type ThemeName = keyof IUiThemes;
