import IORedis from "ioredis";
import redis from "ioredis";
import { dbConfig } from "./config/conf";
import express from "express";
import { Application } from "express";
import morgan from "morgan";

// application variables declaration
export let redisClient: IORedis.Redis;
const app: Application = express();

// application middlewares configurations and initialization
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// application connection confuguration and startup
const Connection = async () => {
  try {
    await (await dbConfig.sync()).authenticate();
    console.log("Connection with the database has been authenticated");
    redisClient = new redis(6379);
    redisClient.on("connect", () => {
      console.log(
        "DiscoveryCity RedisClient Established connection on port 6379"
      );
    });
  } catch (error) {
    throw error;
  }
};
