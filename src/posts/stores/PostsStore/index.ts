import PostsStore from './PostsStore';
import { useEffect } from 'react';
import StatusStore from '../../../app/stores/StatusStore';
import { IPost } from '../../types';

const store = new PostsStore();

export const usePosts = (fetch?: boolean): [IPost[], StatusStore<IPost[]>] => {
  useEffect(() => {
    if (fetch) store.fetch().catch();
  }, []);

  return [Array.from(store.posts.values()), store.status];
};

export default store;
