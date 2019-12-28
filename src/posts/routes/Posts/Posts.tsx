import React, { useState, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import Title from 'app/components/Title';
import useUser from 'app/hooks/useUser';
import { IUser } from 'app/types';
import PostsList from 'posts/components/PostsList';
import usePosts from 'posts/hooks/usePosts';
import { IPost } from 'posts/types';

import css from './Posts.css';

function filterPosts(posts: IPost[], user: IUser | null, onlyMy: boolean): IPost[] {
  return user && posts.length && onlyMy
    ? posts.filter(post => post.userId === user.id)
    : posts;
}

export default observer(function Posts() {
  const [onlyMy, setOnlyMy] = useState(false);

  const { user } = useUser();
  const { posts, status } = usePosts(true);

  const onOnlyMyChange = useCallback((event) => setOnlyMy(event.target.checked), []);

  return (
    <div>
      <div className={css.header}>
        <Title>Posts</Title>
        {Boolean(user) && (
          <label>
            <input type="checkbox" checked={onlyMy} onChange={onOnlyMyChange} />
            Only my posts
          </label>
        )}
      </div>
      <PostsList
        loading={status.loading}
        posts={filterPosts([...posts.values()], user, onlyMy)}
      />
    </div>
  );
});
