import { APIPrivateRequest } from '../http/private';

export class Posts extends APIPrivateRequest {
  async FetchPosts() {
    try {
      const posts = await this.Get('/post');

      return posts;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }

  async CreatePost(post) {
    try {
      const formData = new FormData();
      formData.append('content', JSON.stringify(post));
      formData.append('image', post.images);
      const newPost = await this.Post('/post', formData);

      return newPost;
    } catch (error) {}
  }

  parsePosts(posts) {
    return posts;
  }
}

export default new Posts();
