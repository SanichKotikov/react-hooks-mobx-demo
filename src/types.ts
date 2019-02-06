export enum uiThemeName {
  Light = 'light',
  Dark = 'dark',
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
