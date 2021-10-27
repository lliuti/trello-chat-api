import { Request, Response } from "express";
import { ListBoardsService } from "../services/ListBoardsService";

class ListBoardsController {
  async handle(request: Request, response: Response) {
    const service = new ListBoardsService();
    try {
      const result = await service.execute();
      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { ListBoardsController };
