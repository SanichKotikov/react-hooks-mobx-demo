import client from '../../../client';
import { IPost } from '../../types';

const fetchPosts = (): Promise<IPost[]> => client.get('/posts');

export default { fetchPosts };
