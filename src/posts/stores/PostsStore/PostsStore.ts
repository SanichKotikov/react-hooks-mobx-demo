import { observable, action, runInAction } from 'mobx';
import { IPostServices } from './services';

class PostsStore {

  private services: IPostServices;

  @observable fetching = false;
  @observable posts = observable.map({});

  constructor(services: IPostServices) {
    this.services = services;
  }

  @action async fetch(): Promise<void> {
    try {
      this.fetching = true;
      const posts = await this.services.fetchPosts();

      runInAction(() => {
        posts.forEach(post => this.posts.set(post.id, post));
        this.fetching = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => this.fetching = false);
    }
  }

}

export default PostsStore;
