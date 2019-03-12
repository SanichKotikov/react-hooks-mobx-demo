import React from 'react';
import classNames from 'classnames';
import styles from './Content.module.css';

interface Props {
  className?: string;
}

const Content: React.FunctionComponent<Props> = React.memo(
  ({ className, children }) => (
    <div className={classNames(styles.root, className)}>
      {children}
    </div>
  )
);

export default Content;
