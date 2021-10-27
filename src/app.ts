import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import http from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
app.use(express.json());
app.use(router);

io.on("connection", (socket) => {
  console.log(`${socket.id} connected to the server.`);
});

export { app, httpServer, io };
