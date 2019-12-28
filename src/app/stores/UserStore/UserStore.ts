import { action, observable, runInAction } from 'mobx';
import { IUser } from 'app/types';
import services from './services';

class UserStore {
  @observable user: IUser | null;

  constructor() {
    this.user = null;
  }

  @action fetch = async () => {
    const user = await services.fetchUser();
    runInAction(() => {
      this.user = user;
    });
  };
}

export default UserStore;
