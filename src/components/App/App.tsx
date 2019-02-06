import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ThemeSelector from '../ThemeSelector';
import PostsList from '../PostsList';
import { StoresContext } from '../../contexts';
import setTheme from '../../helpers/setTheme';
import { IStores } from '../../stores/types';
import styles from './App.module.css';

const App: React.FunctionComponent = observer(() => {
  const { uiStore, postsStore } = useContext(StoresContext) as IStores;

  useEffect(() => setTheme(uiStore.theme), [uiStore.theme]);
  useEffect(() => { postsStore.fetch() }, [postsStore.posts]); // TODO ???

  return (
    <div className={styles.root}>
      <header>
        <h1>react-hooks-mobx-demo</h1>
      </header>
      <main>
        <ThemeSelector
          className={styles.themeSelector}
          onChange={uiStore.switchTheme}
        />
        <div className={styles.container}>
          <PostsList
            className={styles.posts}
            posts={Array.from(postsStore.posts.values())}
          />
        </div>
      </main>
    </div>
  );
});

export default App;
