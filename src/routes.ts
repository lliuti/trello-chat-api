import { Router } from "express";
import { CreateCardController } from "./controllers/CreateCardController";
import { GetListsController } from "./controllers/GetListsController";
import { ListBoardsController } from "./controllers/ListBoardsController";
import { NewMessageController } from "./controllers/NewMessageController";

const router = Router();

router.get("/boards", new ListBoardsController().handle);

router.get("/boards/:board/lists", new GetListsController().handle);

router.post("/cards", new CreateCardController().handle);

router.post("/message", new NewMessageController().handle);

export { router };
