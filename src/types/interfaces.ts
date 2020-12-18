export interface IDiscoveryResponse {
  message: string;
  sessionId: string;
  errorMessage: string | null;
  statusCode: number;
  msisdn: string | number;
  nextStepId: string | null;
  previousUrlCall: string | null;
}

export interface ItemCategoryAttributes {
  name: string;
  id: number;
}

export interface ItemSubCategoryAttributes {
  name: string;
  id: number;
  category_id: number;
}

export interface ItemAttributes {
  id: number;
  name: string;
  subCategory_id: number;
  desc: string;
  imageUrl: string;
  size: string;
  price: number;
  stock: number;
  itemId: string;
}

export interface UserAttributes {
  id: string;
  name: string | null;
  location: string | null;
  latitude: number | null;
  longitude: number | null;
  phoneNumber: string;
  pickUpLocation: string | null;
  town: string | null;
}

declare global {
  namespace Express {
    interface Request {
      sessionId: String;
      nextUrlCallId: string;
      previousUrlCall: string;
    }
  }
}
