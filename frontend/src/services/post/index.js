import { APIPrivateRequest } from "../http/private";

class Posts extends APIPrivateRequest {
  async FetchPosts() {
    try {
      const posts = await this.Get("/post");

      return posts;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }

  parsePosts(posts) {
    return posts;
  }
}

export default new Posts();
