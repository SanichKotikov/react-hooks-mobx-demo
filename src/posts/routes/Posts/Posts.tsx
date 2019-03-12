import React, { useContext, useEffect, useState, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import Title from '../../../app/components/Title';
import PostsList from '../../components/PostsList';
import UserContext from '../../../app/contexts/UserContext';
import { PostsStoreContext } from '../../stores/PostsStore';
import { IUser } from '../../../app/types';
import { IPost } from '../../types';
import styles from './Posts.module.css';

const filterPosts = (posts: Map<number, IPost>, user: IUser | null, onlyMy: boolean): IPost[] => {
  let items = Array.from(posts.values());

  return user && items.length && onlyMy
    ? items.filter(post => post.userId === user.id)
    : items;
};

const Posts: React.FunctionComponent = observer(() => {
  const [onlyMy, setOnlyMy] = useState(false);

  const user = useContext(UserContext);
  const postsStore = useContext(PostsStoreContext);

  useEffect(() => { postsStore.fetch() }, []);

  const onOnlyMyChange = useCallback((event) => setOnlyMy(event.target.checked), []);

  return (
    <div>
      <div className={styles.header}>
        <Title>Posts</Title>
        {!!user && (
          <div>
            <input type="checkbox" id="own-posts" checked={onlyMy} onChange={onOnlyMyChange} />
            <label htmlFor="own-posts">Only my posts</label>
          </div>
        )}
      </div>
      <PostsList
        fetching={postsStore.fetching}
        posts={filterPosts(postsStore.posts, user, onlyMy)}
      />
    </div>
  );
});

export default Posts;
