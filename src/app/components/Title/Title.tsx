import React from 'react';

import css from './Title.css';

export default React.memo(
  function Title({ children }) {
    return <h1 className={css.root}>{children}</h1>;
  }
);
