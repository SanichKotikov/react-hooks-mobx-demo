import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { StoresContext as Stores } from './contexts';
import UiStore from './stores/UiStore';
import { IStores } from './stores/types';

const stores: IStores = {
  uiStore: new UiStore(),
};

ReactDOM.render(
  <Stores.Provider value={stores}>
    <App />
  </Stores.Provider>,
  document.getElementById('root')
);
