import * as dotenv from "dotenv";
import { HttpBuilder } from "./http/http.builder";
import { AppConfig } from "./config";
import { CommentService, PostService } from "./services";
import { CommentServicePort, PostServicePort } from "./ports";

dotenv.config();

class Workshop {
  private postService: PostServicePort;
  private commentService: CommentServicePort;

  constructor() {
    const httpBuilder = new HttpBuilder().setBaseUrl(AppConfig.getBaseUrl);

    this.postService = new PostService(httpBuilder);
    this.commentService = new CommentService(httpBuilder);
  }

  get post(): PostServicePort {
    return this.postService;
  }

  get commnet(): CommentServicePort {
    return this.commentService;
  }
}

(async () => {
  const workshop = new Workshop();

  const commentsByPostId = await workshop.commnet.getAllByPostId(1);
  const postById = await workshop.post.getById(1);
  const allPosts = await workshop.post.getAll();

  console.log("commentsByPostId", commentsByPostId);
  console.log("postById", postById);
  console.log("allPosts", allPosts);
})();
