import axios from "axios";
import { IBoardsResponse } from "../dtos/IBoardsResponse";

class ListBoardsService {
  async execute(): Promise<IBoardsResponse[]> {
    const url = `https://api.trello.com/1/members/me/boards?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_TOKEN}`;

    const response = await axios.get<IBoardsResponse[]>(url);

    const data = response.data;

    const activeBoards: IBoardsResponse[] = [];

    data.map((board) => {
      if (board.closed == false) {
        const boardObject: IBoardsResponse = {
          name: board.name,
          desc: board.desc,
          closed: board.closed,
          id: board.id,
          idMemberCreator: board.idMemberCreator,
          url: board.url,
        };

        activeBoards.push(boardObject);
      }
    });

    return activeBoards;
  }
}

export { ListBoardsService };
