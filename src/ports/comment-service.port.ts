import { CommentDto } from "../dtos";

export interface CommentServicePort {
  getAllByPostId(postId: number): Promise<CommentDto[]>;
  getNameById(id: number): Promise<string | undefined>;
  getByName(name: string): Promise<CommentDto | undefined>;
  getByEmail(email: string): Promise<CommentDto | undefined>;
}
