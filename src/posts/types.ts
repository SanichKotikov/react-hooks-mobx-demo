import * as t from 'io-ts';

export const IPost = t.interface({
  userId: t.number,
  id: t.number,
  title: t.string,
  body: t.string,
});

export type IPost = t.TypeOf<typeof IPost>;
