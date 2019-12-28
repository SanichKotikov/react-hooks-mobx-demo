import React from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import { IPost } from 'posts/types';
import Post from '../Post';

import css from './PostsList.css';

interface IProps {
  posts: IPost[];
  className?: string;
}

export default observer<IProps>(
  function PostsList({ posts, className }) {
    return (
      <div className={classNames(css.root, className)}>
        {posts.map(post => (
          <Post
            key={post.id}
            post={post}
            className={css.post}
          />
        ))}
      </div>
    );
  }
);
