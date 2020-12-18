import { CategoryFactory } from "../models/category";
import { subCategoryFactory } from "../models/subcategory";
import { ItemFactory } from "../models/items";
import { userFactory } from "../models/user";
import * as sequelize from "sequelize";
const { DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;
export const dbConfig = new sequelize.Sequelize(
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
    logging: false,
    query: { raw: true },
  }
);

export const Category = CategoryFactory(dbConfig);
export const SubCategory = subCategoryFactory(dbConfig);
export const Item = ItemFactory(dbConfig);

//relationships between category and other tables
Category.hasMany(SubCategory, { foreignKey: "category_id" });
SubCategory.belongsTo(Category, { foreignKey: "category_id" });

// inter-relation ship btwn subcatefory and items table

SubCategory.hasMany(Item, { foreignKey: "subCategory_id" });
Item.belongsTo(SubCategory, { foreignKey: "subCategory_id" });

// user model

export const User = userFactory(dbConfig);
