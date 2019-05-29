import store from '../stores/PostsStore';
import { useEffect } from 'react';

export default (fetch?: boolean) => {
  useEffect(() => {
    if (fetch) store.fetch().catch();
  }, []);

  return store;
};
