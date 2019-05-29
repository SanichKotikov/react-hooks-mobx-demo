import React, { useState, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import Title from '../../../app/components/Title';
import PostsList from '../../components/PostsList';
import useUser from '../../../app/hooks/useUser';
import usePosts from '../../hooks/usePosts';
import { IUser } from '../../../app/types';
import { IPost } from '../../types';
import styles from './Posts.module.css';

const filterPosts = (posts: IPost[], user: IUser | null, onlyMy: boolean): IPost[] => {
  return user && posts.length && onlyMy
    ? posts.filter(post => post.userId === user.id)
    : posts;
};

const Posts: React.FunctionComponent = observer(() => {
  const [onlyMy, setOnlyMy] = useState(false);

  const { user } = useUser();
  const { posts, status } = usePosts(true);

  const onOnlyMyChange = useCallback((event) => setOnlyMy(event.target.checked), []);

  return (
    <div>
      <div className={styles.header}>
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

export default Posts;
