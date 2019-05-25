import { observable, IObservableValue, runInAction, onBecomeObserved } from 'mobx';
import StatusStore from '../StatusStore';
import services from './services';
import { IUser } from '../../types';

class UserStore {

  status: StatusStore<IUser>;
  @observable user: IObservableValue<IUser | null>;

  constructor() {
    this.status = new StatusStore(services.fetchUser);
    this.user = observable.box(null);

    onBecomeObserved(this, 'user', () => this.fetch());
  }

  fetch() {
    return this.status.fetch()
      .then((user) => {
        runInAction(() => this.user.set(user));
      });
  }

}

export default UserStore;
