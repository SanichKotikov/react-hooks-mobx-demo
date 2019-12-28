import * as t from 'io-ts';

export enum uiThemeName {
  Light = 'light',
  Dark = 'dark',
}

export const IUser = t.readonly(
  t.interface({
    id: t.number,
    name: t.string,
  })
);

export type IUser = t.TypeOf<typeof IUser>;
