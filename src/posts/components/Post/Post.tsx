import React from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import { IPost } from 'posts/types';

import css from './Post.css';

interface IProps {
  post: IPost;
  className?: string;
}

export default observer<IProps>(
  function Post({ post, className }) {
    return (
      <div className={classNames(css.root, className)}>
        <h3 className={css.title}>
          {post.title}
        </h3>
        <p className={css.body}>
          {post.body}
        </p>
      </div>
    );
  }
);
