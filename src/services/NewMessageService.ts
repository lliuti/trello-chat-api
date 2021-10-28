import { io } from "../app";
import { v4 as uuid } from "uuid";
import { IMessage } from "../dtos/IMessage";

class NewMessageService {
  async execute(messageObject): Promise<void> {
    const msgObj: IMessage = {
      id: uuid(),
      message: messageObject.message,
      from: messageObject.from,
    };

    io.emit("new-message", msgObj);
  }
}

export { NewMessageService };
