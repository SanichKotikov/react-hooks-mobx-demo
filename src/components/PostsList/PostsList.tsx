import React from 'react';
import classNames from 'classnames';
import Post from '../Post';
import { IPost } from '../../types';
import styles from './PostsList.module.css';

interface IProps {
  posts: IPost[];
  className?: string;
}

const PostsList: React.FunctionComponent<IProps> = ({ posts, className }) => (
  <div className={classNames(styles.root, className)}>
    {posts.map(post => (
      <Post
        key={post.id}
        post={post}
        className={styles.post}
      />
    ))}
  </div>
);

export default PostsList;
