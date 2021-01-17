import express from "express";
import deleteController from "../controllers/delete.js";
const app = express();

app
  .delete("/room/:roomId", deleteController.deleteRoomById)
  .delete("/messages/:messageId", deleteController.deleteMessageById);

export default app;
