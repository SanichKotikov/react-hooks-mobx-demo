import UserStore from './UserStore';
import StatusStore from '../StatusStore';
import { IUser } from '../../types';

const store = new UserStore();

export const useUser = (): [IUser | null, StatusStore<IUser>] => {
  return [store.user.get(), store.status];
};

export default store;
