import axios from "axios";

interface IListsResponse {
  id: string;
  name: string;
  closed: boolean;
  idBoard: string;
}

class GetListsService {
  async execute(boardId: string) {
    const url = `https://api.trello.com/1/boards/${boardId}/lists?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_TOKEN}`;
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
