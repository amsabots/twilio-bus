"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemFactory = void 0;
var sequelize_1 = require("sequelize");
exports.ItemFactory = function (sequelize) {
    return sequelize.define("product", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
        },
        subCategory_id: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        itemId: {
            type: sequelize_1.DataTypes.STRING,
        },
        size: {
            type: sequelize_1.DataTypes.STRING,
        },
        desc: {
            type: sequelize_1.DataTypes.TEXT,
        },
        imageUrl: {
            type: sequelize_1.DataTypes.STRING,
        },
        price: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        stock: {
            type: sequelize_1.DataTypes.INTEGER,
        },
    });
};
