import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { StoresContext as Stores } from './contexts';
import UiStore from './stores/UiStore';
import PostsStore from './stores/PostsStore';
import { IStores } from './stores/types';

const stores: IStores = {
  uiStore: new UiStore(),
  postsStore: new PostsStore(),
};

ReactDOM.render(
  <Stores.Provider value={stores}>
    <App />
  </Stores.Provider>,
  document.getElementById('root')
);
