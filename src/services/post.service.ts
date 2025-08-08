import { PostDto } from "../dtos";
import { PostServicePort, HttpBuilderPort } from "../ports";

export class PostService implements PostServicePort {
  constructor(private readonly httpBuilder: HttpBuilderPort) {}

  getPosts(): Promise<PostDto[]> {
    throw new Error("Method not implemented.");
  }

  getPostById(id: number): Promise<PostDto | null> {
    throw new Error("Method not implemented.");
  }
}
