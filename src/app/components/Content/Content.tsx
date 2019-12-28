import React from 'react';
import classNames from 'classnames';

import css from './Content.css';

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

export default React.memo<IProps>(
  function Content({ className, children }) {
    return (
      <div className={classNames(css.root, className)}>
        {children}
      </div>
    );
  }
);
