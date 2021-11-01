import { ListBoardsService } from "../services/ListBoardsService";

test("Checks return type of ListBoard service", () => {
  expect(async () => {
    const service = new ListBoardsService();
    try {
      const activeBoards = await service.execute();
      expect(typeof activeBoards).toBe("array");
    } catch (err) {
      expect(err).toThrow(TypeError);
    }
  }).rejects.toThrowError();
});
