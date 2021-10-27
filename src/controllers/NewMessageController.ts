import { Request, Response } from "express";
import { NewMessageService } from "../services/NewMessageService";

class NewMessageController {
  async handle(request: Request, response: Response) {
    const { messageObject } = request.body;
    const service = new NewMessageService();
    try {
      const result = await service.execute(messageObject);
      return response.status(201).json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { NewMessageController };
