import client from '../../../client';
import { IPost } from '../../types';

const fetchPosts = () => client.get('/posts');

export interface IPostServices {
  fetchPosts: () => Promise<IPost[]>;
}

export default { fetchPosts };
