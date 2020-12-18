import { SubCategoryModel, SubCategoryStatic } from "./index";
import { ItemSubCategoryAttributes } from "../types/interfaces";
import { DataTypes, Sequelize, Model } from "sequelize";

export const subCategoryFactory = (sequelize: Sequelize): SubCategoryStatic => {
  return <SubCategoryStatic>sequelize.define<
    Model<SubCategoryModel>,
    ItemSubCategoryAttributes
  >("subCategory", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    category_id: {
      type: DataTypes.STRING,
    },
  });
};
