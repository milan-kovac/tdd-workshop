import { PostDto } from "../dtos";

export interface PostServicePort {
  getPosts(): Promise<PostDto[]>;
  getPostById(id: number): Promise<PostDto | null>;
}
