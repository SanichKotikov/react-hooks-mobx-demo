import store from 'posts/stores/PostsStore';
import { useEffect } from 'react';

export default (fetch?: boolean) => {
  useEffect(() => {
    if (fetch) store.fetch().catch();
  }, []);

  return store;
};
