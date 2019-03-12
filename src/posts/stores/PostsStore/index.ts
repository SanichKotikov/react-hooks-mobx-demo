import PostsStore from './PostsStore';
import services from './services';
import { createContext } from 'react';

const postsStore = new PostsStore(services);
export const PostsStoreContext = createContext(postsStore);

export default postsStore;
