"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = void 0;
var ioredis_1 = __importDefault(require("ioredis"));
var redisConnection = function () {
    exports.redisClient = new ioredis_1.default(6379);
    exports.redisClient.on("connect", function () {
        console.log("DiscoveryCity RedisClient Established connection on port 6379");
    });
};
