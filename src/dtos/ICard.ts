export interface ICard {
  name?: string;
  desc?: string;
  pos?: string;
  due?: string; // format = date
  dueComplete?: boolean;
  idList: string; // The ID of the list the card should be created in. EXAMPLE -> 5abbe4b7ddc1b351ef961414
  idMembers?: string[];
}
