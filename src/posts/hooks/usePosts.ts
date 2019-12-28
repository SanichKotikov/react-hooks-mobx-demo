import { useEffect, useCallback } from 'react';
import useLoadingState from 'app/hooks/useLoadingState';
import store from 'posts/stores/PostsStore';

function usePosts() {
  const { setState, ...state } = useLoadingState();

  useEffect(() => {
    setState.load();
    store.fetch()
      .then(setState.done)
      .catch(setState.error);
  }, [setState]);

  const reload = useCallback(() => {
    return store.fetch().then(setState.done);
  }, [setState]);

  return {
    ...state,
    reload,
    posts: Array.from(store.posts.values()),
  };
}

export default usePosts;
