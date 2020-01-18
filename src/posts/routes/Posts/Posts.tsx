import React, { useState, useContext, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import DataWrapper from 'react-data-wrapper';
import Title from 'app/components/Title';
import ErrorLoading from 'app/components/ErrorLoading';
import UserContext from 'app/contexts/UserContext';
import { IUser } from 'app/types';
import PostsList from 'posts/components/PostsList';
import store from 'posts/stores/PostsStore';
import { IPost } from 'posts/types';

import css from './Posts.css';

function filterPosts(posts: IPost[], user: IUser | null, onlyMy: boolean): IPost[] {
  return user && posts.length && onlyMy
    ? posts.filter(post => post.userId === user.id)
    : posts;
}

export default observer(function Posts() {
  const [onlyMy, setOnlyMy] = useState(false);

  const user = useContext(UserContext);

  const onOnlyMyChange = useCallback((event) => (
    setOnlyMy(event.target.checked)
  ), []);

  return (
    <>
      <div className={css.header}>
        <Title>Posts</Title>
        {Boolean(user) && (
          <label>
            <input type="checkbox" checked={onlyMy} onChange={onOnlyMyChange} />
            <span>Only my posts</span>
          </label>
        )}
      </div>
      <DataWrapper
        fetchFunc={store.fetch}
        isEmpty={store.empty}
        loading={<div>Loading posts...</div>}
        failure={<ErrorLoading className={css.error} />}
        empty={<div>No data</div>}
      >
        <PostsList
          posts={filterPosts(
            Array.from(store.posts.values()),
            user,
            onlyMy,
          )}
        />
      </DataWrapper>
    </>
  );
});
