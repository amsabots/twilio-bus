import { UserStatic, UserModel } from "./index";
import { UserAttributes } from "../types/interfaces";
import { DataTypes, Sequelize, Model } from "sequelize";
import sequelize from "sequelize";

export const userFactory = (sequelize: Sequelize): UserStatic => {
  return <UserStatic>sequelize.define<Model<UserModel>, UserAttributes>(
    "users",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      town: {
        type: DataTypes.STRING,
      },
      pickUpLocation: {
        type: DataTypes.STRING,
      },
      phoneNumber: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
      longitude: {
        type: DataTypes.FLOAT,
      },
      latitude: { type: DataTypes.FLOAT },
    }
  );
};
