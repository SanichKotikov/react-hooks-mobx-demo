import React from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import Post from '../Post';
import { IPost } from '../../types';
import styles from './PostsList.module.css';

interface IProps {
  posts: IPost[];
  loading: boolean;
  className?: string;
}

const PostsList: React.FunctionComponent<IProps> = observer(
  ({ posts, loading, className }) => (
    <div className={classNames(styles.root, className)}>
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          className={styles.post}
        />
      ))}
      {loading && <div>Loading...</div>}
    </div>
  )
);

export default PostsList;
