import React from 'react';
import UiStore from './UiStore';

export default React.createContext({
  uiStore: new UiStore(),
});
