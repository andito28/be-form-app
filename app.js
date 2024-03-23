import express from "express";
import apiRouter from "./routes/api.js";
import connection from "./connection.js";
import dotenv from "dotenv";

const app = express();
const env = dotenv.config().parsed;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", apiRouter);

//connect to mongodb
connection();

app.listen(env.APP_PORT, () => {
  console.log(`Server started on port ${env.APP_PORT}`);
});
