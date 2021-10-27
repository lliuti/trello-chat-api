import { Request, Response } from "express";
import { GetListsService } from "../services/GetListsService";

class GetListsController {
  async handle(request: Request, response: Response) {
    const { board } = request.params;
    const service = new GetListsService();
    try {
      const result = await service.execute(board);
      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { GetListsController };
