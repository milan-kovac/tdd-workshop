import { PostDto } from "../dtos";

export interface PostServicePort {
  getAll(): Promise<PostDto[]>;
  getById(id: number): Promise<PostDto | null>;
}
