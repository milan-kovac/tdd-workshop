import * as dotenv from "dotenv";
import { HttpBuilder } from "./http/HttpBuilder";
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

const workshop = new Workshop();

console.log("Hello world!");
