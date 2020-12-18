"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryFactory = void 0;
var sequelize_1 = require("sequelize");
function CategoryFactory(sequelize) {
    return sequelize.define("category", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
        },
    });
}
exports.CategoryFactory = CategoryFactory;
