import { action, observable, onBecomeObserved, runInAction } from 'mobx';
import StatusStore from '../StatusStore';
import services from './services';
import { IUser } from '../../types';

class UserStore {

  status: StatusStore<IUser>;
  @observable user: IUser | null;

  constructor() {
    this.status = new StatusStore(services.fetchUser);
    this.user = null;
    onBecomeObserved(this, 'user', () => this.fetch());
  }

  @action fetch = () => (
    this.status.fetch()
      .then(([user, callback]) => runInAction(() => {
        this.user = user;
        callback();
      }))
      .catch((error) => {
        console.log(error);
      })
  );

}

export default UserStore;
