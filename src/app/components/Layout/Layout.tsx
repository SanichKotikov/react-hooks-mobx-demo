import React from 'react';
import { observer } from 'mobx-react-lite';
import Header from '../Header';
import Content from '../Content';
import styles from './Layout.module.css';

const Layout: React.FunctionComponent = observer(({ children }) => {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <Content>
          {children}
        </Content>
      </main>
    </div>
  );
});

export default Layout;
