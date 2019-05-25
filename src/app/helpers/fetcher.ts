import { runInAction } from 'mobx';
import { uiLoading } from '../types';

async function fetcher<S extends any, T>(store: S, name: string, service: Promise<T>): Promise<T> {
  try {
    store[name] = uiLoading.Fetch;
    const data = await service;

    runInAction(() => {
      store[name] = uiLoading.Done;
    });

    return Promise.resolve(data);
  } catch (error) {
    runInAction(() => {
      store[name] = uiLoading.Error;
    });

    return Promise.reject(error);
  }
}

export default fetcher;
