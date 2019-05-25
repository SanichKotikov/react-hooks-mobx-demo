import { observable, action, computed, runInAction } from 'mobx';

enum fsState {
  Idle,
  Pending,
  Fulfilled,
  Rejected,
}

class StatusStore<R, A extends any[] = []> {

  private readonly service: (...args: A) => Promise<R>;
  @observable private state: fsState;

  constructor(service: (...args: A) => Promise<R>) {
    this.service = service;
    this.state = fsState.Idle;
  }

  @computed get loading(): boolean {
    return this.state === fsState.Pending;
  }

  @computed get success(): boolean {
    return this.state === fsState.Fulfilled;
  }

  @computed get failure(): boolean {
    return this.state === fsState.Rejected;
  }

  @action async fetch(...args: A): Promise<R> {
    try {
      this.state = fsState.Pending;
      const data = await this.service(...args);

      runInAction(() => {
        this.state = fsState.Fulfilled;
      });

      return Promise.resolve(data);
    } catch (error) {
      runInAction(() => {
        this.state = fsState.Rejected;
      });

      return Promise.reject(error);
    }
  }

}

export default StatusStore;
