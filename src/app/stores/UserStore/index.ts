import UserStore from './UserStore';
import services from './services';
import { createContext } from 'react';

const userStore = new UserStore(services);
export const UserStoreContext = createContext(userStore);

export default userStore;
