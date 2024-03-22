import express from "express";
import apiRouter from "./routes/api.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(`mongodb://localhost:27017`, {
  dbName: "formApp",
});

const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error :"));

connection.once("open", () => {
  console.log("connected to mongodb");
});

apiRouter.use("/", apiRouter);

app.listen(9000, () => {
  console.log(`Server started on port 9000`);
});
