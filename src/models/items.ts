import { DataTypes, Sequelize, Model } from "sequelize";
import { ItemAttributes } from "../types/interfaces";
import { ItemStatic, ItemModel } from "./index";

export const ItemFactory = (sequelize: Sequelize): ItemStatic => {
  return <ItemStatic>sequelize.define<Model<ItemModel>, ItemAttributes>(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      subCategory_id: {
        type: DataTypes.INTEGER,
      },
      itemId: {
        type: DataTypes.STRING,
      },
      size: {
        type: DataTypes.STRING,
      },
      desc: {
        type: DataTypes.TEXT,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      stock: {
        type: DataTypes.INTEGER,
      },
    }
  );
};
