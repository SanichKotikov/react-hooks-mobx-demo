import * as t from 'io-ts';
import * as tPromise from 'io-ts-promise';
import client from '../../../client';
import { IPost } from '../../types';

const fetchPosts = async () => {
  const data = await client.get<IPost[]>('/posts');
  return tPromise.decode(t.array(IPost), data);
};

export default { fetchPosts };
