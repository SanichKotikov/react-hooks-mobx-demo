import PostsStore from './PostsStore';
import { createContext } from 'react';

const postsStore = new PostsStore();
export const PostsStoreContext = createContext(postsStore);
export default postsStore;
