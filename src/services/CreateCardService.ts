import axios from "axios";
import { ICard } from "../dtos/ICard";
import { IPostResponse } from "../dtos/IPostResponse";

class CreateCardService {
  async execute({ name, desc, pos, idList }: ICard): Promise<IPostResponse> {
    const response = await axios.post(
      `https://api.trello.com/1/cards?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_TOKEN}&idList=${idList}&name=${name}&desc=${desc}&pos=${pos}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const data = response.data as IPostResponse;

    const returnData: IPostResponse = {
      id: data.id,
      idBoard: data.idBoard,
      idList: data.idList,
      name: data.name,
      desc: data.desc,
      closed: data.closed,
      shortUrl: data.shortUrl,
    };

    return returnData;
  }
}

export { CreateCardService };
