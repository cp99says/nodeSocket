import express from "express";
import user from "./../controllers/user.js";
import { encode } from "../middlewares/jwt.js";
const app = express();

app.post("/login/:userId", async (req, res, next) => {});

export default app;
