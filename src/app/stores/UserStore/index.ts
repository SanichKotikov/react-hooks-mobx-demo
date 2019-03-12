import UserStore from './UserStore';
import { createContext } from 'react';

const userStore = new UserStore();
export const UserStoreContext = createContext(userStore);

export default userStore;
