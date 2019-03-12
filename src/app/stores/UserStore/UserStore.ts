import server from '../../../server';
import { observable, action, runInAction } from 'mobx';
import { IUser } from '../../types';

class UserStore {

  @observable user: IUser | null = null;

  @action async fetch() {
    try {
      const user: any = await server.get('/users/2');
      runInAction(() => this.user = user);
    } catch (error) {
      console.log(error);
      runInAction(() => this.user = null);
    }
  }

}

export default UserStore;
