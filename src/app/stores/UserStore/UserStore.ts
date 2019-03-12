import { observable, action, runInAction } from 'mobx';
import { IUserServices } from './services';
import { IUser } from '../../types';

class UserStore {

  private services: IUserServices;

  @observable user: IUser | null = null;

  constructor(services: IUserServices) {
    this.services = services;
  }

  @action async fetch() {
    try {
      const user = await this.services.fetchUser();
      runInAction(() => this.user = user);
    } catch (error) {
      console.log(error);
      runInAction(() => this.user = null);
    }
  }

}

export default UserStore;
