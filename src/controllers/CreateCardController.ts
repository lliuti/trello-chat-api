import { Request, Response } from "express";
import { ICard } from "../dtos/ICard";
import { CreateCardService } from "../services/CreateCardService";

class CreateCardController {
  async handle(request: Request, response: Response) {
    const { name, desc, pos, idList }: ICard = request.body;
    const service = new CreateCardService();
    try {
      const result = await service.execute({ name, desc, pos, idList });
      return response.status(201).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { CreateCardController };
