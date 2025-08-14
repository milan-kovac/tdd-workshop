import { CommentDto } from "../dtos";
import { CommentServicePort, HttpBuilderPort } from "../ports";

export class CommentService implements CommentServicePort {
  constructor(private readonly httpBuilder: HttpBuilderPort) {}
  async getAllByPostId(postId: number): Promise<CommentDto[]> {
    return await this.httpBuilder.setPath("/comments").setMethod("GET").setParams({ postId }).send();
  }

  async getNameById(id: number): Promise<string | undefined> {
    const comment = await this.httpBuilder.setPath(`/comments/${id}`).setMethod("GET").send<CommentDto>();

    return comment?.name;
  }

  // TODO: implement getByName to fetch comment by name
  getByName(name: string): Promise<CommentDto | undefined> {
    throw new Error("Method not implemented.");
  }

  // TODO: implement getByEmail to fetch comment by name
  getByEmail(email: string): Promise<CommentDto | undefined> {
    throw new Error("Method not implemented.");
  }
}
