import { io } from "../app";
import { v4 as uuid } from "uuid";

class NewMessageService {
  async execute(messageObject) {
    const msgObj = {
      id: uuid(),
      message: messageObject.message,
      from: messageObject.from,
    };

    console.log(msgObj);

    io.emit("new-message", msgObj);
  }
}

export { NewMessageService };
