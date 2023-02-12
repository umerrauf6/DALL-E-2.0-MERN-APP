import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import postRouter from "./routes/postRoutes.js";
import dalleRouter from "./routes/dalleRoutes.js";
dotenv.config();

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.use("/api/v1/post", postRouter);
app.use("/api/v1/dalle", dalleRouter);

app.get("/", (req, res) => {
  res.send("hello from DALL-E 2.0");
});

const start = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGO_URL, () => {
      app.listen(3000, () => {
        console.log("server listening on 3000");
      });
    });
  } catch (err) {
    console.log(err);
  }
};
start();
