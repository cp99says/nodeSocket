import express from "express";
const app = express();
import user from "../controllers/user.js";

app
  .get("/", user.onGetAllUsers)
  .post("/", user.onCreateUser)
  .get("/", user.onGetUserById)
  .delete("/", user.onDeleteUserById);

export default app;
