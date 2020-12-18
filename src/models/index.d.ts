import { type } from "os";
import { Model, BuildOptions } from "sequelize";
import {
  ItemCategoryAttributes,
  ItemSubCategoryAttributes,
  ItemAttributes,
  UserAttributes,
} from "../types/interfaces";
/**
 * Category Model defination aand augmentation via type assertion
 */
export interface ItemCategoryModel
  extends Model<ItemCategoryAttributes>,
    ItemCategoryAttributes {}

export class ItemCategory extends Model<
  ItemCategoryAttributes,
  ItemCategoryModel
> {}
export type ItemCategoryStatic = typeof Model & {
  (value?: object, options: BuildOptions): ItemCategoryModel;
};

/**
 * subCategory Model augmenation
 * belongs to category Model
 * relationship is via a foreign category_id key
 */

export interface SubCategoryModel
  extends Model<ItemSubCategoryAttributes>,
    ItemSubCategoryAttributes {}

export class SubCategory extends Model<
  SubCategoryModel,
  ItemSubCategoryAttributes
> {}
export type SubCategoryStatic = typeof Model & {
  (value: {}, options: BuildOptions): SubCategoryModel;
};

/**
 * Item Model augmentation
 * model interface must be valid for correct type assetion at compile time
 */

export interface ItemModel extends Model<ItemAttributes>, ItemAttributes {}

export class Item extends Model<ItemModel, ItemAttributes> {}

export type ItemStatic = typeof Model & {
  (value: {}, options: BuildOptions): ItemModel;
};

/**
 * User model
 */

export interface UserModel extends Model<UserAttributes>, UserAttributes {}

export class User extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof Model & {
  (value: {}, options: BuildOptions): UserModel;
};
