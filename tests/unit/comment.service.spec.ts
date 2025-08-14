import { ErrorMessages, HttpError } from "../../src/errors";
import { CommentServicePort, HttpBuilderPort } from "../../src/ports";
import { CommentService } from "../../src/services/comment.service";
import { mockComments } from "./mocks/comment.service.mock";

describe("CommentService", () => {
  let service: CommentServicePort;
  let httpBuilderMock: jest.Mocked<HttpBuilderPort>;

  beforeEach(() => {
    httpBuilderMock = {
      setBaseUrl: jest.fn().mockReturnThis(),
      setPath: jest.fn().mockReturnThis(),
      setMethod: jest.fn().mockReturnThis(),
      setParams: jest.fn().mockReturnThis(),
      setHeader: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    service = new CommentService(httpBuilderMock);
  });

  describe("getCommentsByPostId", () => {
    it("should call request builder with correct params and return comments", async () => {
      const postId = 1;
      httpBuilderMock.send.mockResolvedValue(mockComments);

      const result = await service.getAllByPostId(postId);

      expect(httpBuilderMock.setPath).toHaveBeenCalledWith("/comments");
      expect(httpBuilderMock.setMethod).toHaveBeenCalledWith("GET");
      expect(httpBuilderMock.setParams).toHaveBeenCalledWith({ postId });
      expect(httpBuilderMock.send).toHaveBeenCalled();
      expect(result).toEqual(mockComments);
    });

    it("should return an empty array when no comments are found", async () => {
      const postId = 999;
      httpBuilderMock.send.mockResolvedValue([]);

      const result = await service.getAllByPostId(postId);

      expect(httpBuilderMock.setPath).toHaveBeenCalledWith("/comments");
      expect(httpBuilderMock.setMethod).toHaveBeenCalledWith("GET");
      expect(httpBuilderMock.setParams).toHaveBeenCalledWith({ postId });
      expect(httpBuilderMock.send).toHaveBeenCalled();
      expect(result).toEqual([]);
    });
  });

  describe("getTitleById", () => {
    it("should return comment title when found", async () => {
      const mockComment = mockComments.shift();

      httpBuilderMock.send.mockResolvedValue(mockComment);

      const result = await service.getNameById(1);

      expect(httpBuilderMock.setPath).toHaveBeenCalledWith("/comments/1");
      expect(httpBuilderMock.setMethod).toHaveBeenCalledWith("GET");
      expect(httpBuilderMock.send).toHaveBeenCalled();
      expect(result).toBe(mockComment?.name);
    });

    it("should throw HttpError with 404 when comment not found", async () => {
      httpBuilderMock.send.mockResolvedValue({});

      await service.getNameById(999).catch((err: HttpError) => {
        expect(err.statusCode).toBe(404);
        expect(err.message).toBe(ErrorMessages.NotFound);
      });
    });
  });
});
