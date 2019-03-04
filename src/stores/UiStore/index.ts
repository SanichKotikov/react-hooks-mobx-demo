import UiStore from './UiStore';
import { createContext } from 'react';

const uiStores = new UiStore();
export const UiStoreContext = createContext(uiStores);
export default uiStores;
