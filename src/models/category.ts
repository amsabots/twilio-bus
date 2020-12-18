import { ItemCategoryStatic, ItemCategoryModel } from "./index";
import { ItemCategoryAttributes } from "../types/interfaces";
import { DataTypes, Sequelize, Model } from "sequelize";

export function CategoryFactory(sequelize: Sequelize): ItemCategoryStatic {
  return <ItemCategoryStatic>sequelize.define<
    Model<ItemCategoryModel>,
    ItemCategoryAttributes
  >("category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
}
