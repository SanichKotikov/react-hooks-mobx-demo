import { makeAutoObservable, runInAction } from 'mobx';
import { IUser } from 'app/types';
import services from './services';

class UserStore {
  user: IUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetch = async () => {
    const user = await services.fetchUser();
    runInAction(() => {
      this.user = user;
    });
  };
}

export default UserStore;
