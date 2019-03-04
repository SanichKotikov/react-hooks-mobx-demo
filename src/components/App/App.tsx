import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ThemeSelector from '../ThemeSelector';
import PostsList from '../PostsList';
import { UiStoreContext } from '../../stores/UiStore';
import { PostsStoreContext } from '../../stores/PostsStore';
import setTheme from '../../helpers/setTheme';
import styles from './App.module.css';

const App: React.FunctionComponent = observer(() => {
  const uiStore = useContext(UiStoreContext);
  const postsStore = useContext(PostsStoreContext);

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
            fetching={postsStore.fetching}
            posts={Array.from(postsStore.posts.values())}
          />
        </div>
      </main>
    </div>
  );
});

export default App;
