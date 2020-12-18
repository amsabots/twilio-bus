"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subCategoryFactory = void 0;
var sequelize_1 = require("sequelize");
exports.subCategoryFactory = function (sequelize) {
    return sequelize.define("subCategory", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
        },
        category_id: {
            type: sequelize_1.DataTypes.STRING,
        },
    });
};
