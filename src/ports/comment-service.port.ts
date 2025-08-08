import { CommentDto } from "../dtos";

export interface CommentServicePort {
  getCommentsByPostId(postId: number): Promise<CommentDto[]>;
}
