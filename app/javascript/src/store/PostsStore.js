import {observable} from "mobx";
import axios from 'axios';
import ReactOnRails from 'react-on-rails';

export default class PostsStore {
  @observable posts = [];
  constructor(posts) {
    this.posts = posts
  }

  removePost = (postId) => {
    axios({
      method: 'delete',
      headers: ReactOnRails.authenticityHeaders(),
      url: `/posts/${postId}.json`,
    }).then(() => {
      this.posts = this.posts.filter(post => post.id !== postId)
    });
  }
}