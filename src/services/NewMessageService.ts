import { io } from "../app";

class NewMessageService {
  async execute(messageObject) {
    console.log(messageObject);
    io.emit("new-message", messageObject);
  }
}

export { NewMessageService };
