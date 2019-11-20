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

  async CreatePost(post) {
    try {
      const formData = new FormData();
      formData.append("content", JSON.stringify(post));
      const res = await this.Post("/post", formData);

      return res;
    } catch (error) {}
  }

  parsePosts(posts) {
    return posts;
  }
}

export default new Posts();
