import React from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import { IPost } from '../../types';
import styles from './Post.module.css';

interface IProps {
  post: IPost;
  className?: string;
}

const Post: React.FunctionComponent<IProps> = observer(
  ({ post, className }) => (
    <div className={classNames(styles.root, className)}>
      <h3 className={styles.title}>
        {post.title}
      </h3>
      <p className={styles.body}>
        {post.body}
      </p>
    </div>
  )
);

export default Post;
