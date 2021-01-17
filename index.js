import express from "express";
const app = express();
import logger from "morgan";
import cors from "cors";
import mongoose from "mongoose";
////////////////////////////////
import indexRouter from "./routes/index.js";
import userRouter from "./routes/user.js";
import chatRoomRouter from "./routes/chatRoom.js";
import deleteRouter from "./routes/delete.js";
// // middlewares
import { decode } from "./middlewares/jwt.js";
//import dotenv from "dotenv/config";
//require("dotenv").config();

// mongoose.connect(
//   process.env.mongoURI,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log(`db connected`);
//   }
// );
mongoose.connect(
  "mongodb://localhost:27017/chatApp",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(`db connected`);
  }
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("*", cors());
//////////////////////////
//app.use("/", indexRouter);
// app.use("/users", userRouter);
// app.use("/room", decode, chatRoomRouter);
// app.use("/delete", deleteRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
