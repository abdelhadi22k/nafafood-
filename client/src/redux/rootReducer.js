import { combineReducers } from "redux";
import reduserFood from './food/foodReducer';
import reducerCart from './cart/cartReducer';
import reducerUser from "./user/userReducer";
export const rootReduser = combineReducers({
  food:reduserFood,
  cart:reducerCart,
  user:reducerUser
});
