import mongoose from "mongoose";
import dotenv from "dotenv";

const env = dotenv.config().parsed;

const connection = () => {
  mongoose.connect(env.MONGODB_URI, {
    dbName: env.MONGODB_NAME,
  });

  const connect = mongoose.connection;
  connect.on("error", console.error.bind(console, "connection error :"));
  connect.once("open", () => {
    console.log("connected to mongodb");
  });
};

export default connection;
