export enum uiThemeName {
  Light = 'light',
  Dark = 'dark',
}

export enum uiLoading {
  None,
  Fetch,
  Done,
  Error,
}

export interface IUser {
  id: number;
  name: string;
}
