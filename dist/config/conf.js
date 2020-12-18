"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.SubCategory = exports.Category = exports.dbConfig = void 0;
var category_1 = require("../models/category");
var subcategory_1 = require("../models/subcategory");
var items_1 = require("../models/items");
var sequelize = __importStar(require("sequelize"));
var _a = process.env, DB_NAME = _a.DB_NAME, DB_USERNAME = _a.DB_USERNAME, DB_PASSWORD = _a.DB_PASSWORD;
exports.dbConfig = new sequelize.Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    dialect: "mysql",
    host: "localhost",
    logging: false,
    query: { raw: true },
});
exports.Category = category_1.CategoryFactory(exports.dbConfig);
exports.SubCategory = subcategory_1.subCategoryFactory(exports.dbConfig);
exports.Item = items_1.ItemFactory(exports.dbConfig);
//relationships between category and other tables
exports.Category.hasMany(exports.SubCategory, { foreignKey: "category_id" });
exports.SubCategory.belongsTo(exports.Category, { foreignKey: "category_id" });
// inter-relation ship btwn subcatefory and items table
exports.SubCategory.hasMany(exports.Item, { foreignKey: "subCategory_id" });
exports.Item.belongsTo(exports.SubCategory, { foreignKey: "subCategory_id" });
