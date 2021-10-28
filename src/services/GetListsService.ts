import axios from "axios";
import { IListsResponse } from "../dtos/IListsResponse";

class GetListsService {
  async execute(board: string): Promise<IListsResponse[]> {
    const url = `https://api.trello.com/1/boards/${board}/lists?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_TOKEN}`;
    const response = await axios.get<IListsResponse[]>(url);

    const data = response.data as IListsResponse[];
    const activeLists: IListsResponse[] = [];

    data.map((list) => {
      if (list.closed == false) {
        const listObject = {
          id: list.id,
          name: list.name,
          closed: list.closed,
          idBoard: list.idBoard,
        };

        activeLists.push(listObject);
      }
    });

    return activeLists;
  }
}

export { GetListsService };
