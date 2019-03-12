import React from 'react';
import styles from './Title.module.css';

const Title: React.FunctionComponent = React.memo(
  ({ children }) => (
    <h1 className={styles.root}>{children}</h1>
  )
);

export default Title;
