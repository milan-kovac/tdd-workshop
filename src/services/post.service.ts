import { PostDto } from "../dtos";
import { PostServicePort, HttpBuilderPort } from "../ports";

export class PostService implements PostServicePort {
  constructor(private readonly httpBuilder: HttpBuilderPort) {}

  async getAll(): Promise<PostDto[]> {
    return await this.httpBuilder.setPath("/posts").setMethod("GET").send();
  }

  async getById(id: number): Promise<PostDto | null> {
    return await this.httpBuilder.setPath(`/posts/${id}`).setMethod("GET").send();
  }
}
