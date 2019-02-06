import server from '../server';
import { observable, action, ObservableMap } from 'mobx';
import { IPost } from '../types';

class PostsStore {

  @observable posts: ObservableMap<number, IPost>;

  constructor() {
    this.posts = observable.map({});
  }

  @action setPost(post: IPost) {
    this.posts.set(post.id, post);
  }

  async fetch(): Promise<void> {
    try {
      const posts: IPost[] = await server.get('/posts');
      posts.forEach(this.setPost.bind(this))
    } catch (error) {
      console.log(error);
    }
  }

}

export default PostsStore;
