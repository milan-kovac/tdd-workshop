import { CommentDto } from "../dtos";
import { CommentServicePort, HttpBuilderPort } from "../ports";

export class CommentService implements CommentServicePort {
  constructor(private readonly httpBuilder: HttpBuilderPort) {}

  getCommentsByPostId(postId: number): Promise<CommentDto[]> {
    throw new Error("Method not implemented.");
  }
}
