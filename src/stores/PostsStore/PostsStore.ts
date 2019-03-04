import server from '../../server';
import { observable, action, runInAction } from 'mobx';
import { IPost } from '../../types';

class PostsStore {

  @observable fetching = false;
  @observable posts = observable.map({});

  @action async fetch(): Promise<void> {
    try {
      this.fetching = true;
      const posts: IPost[] = await server.get('/posts');

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
