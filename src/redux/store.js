import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import itemsReducer from "./reducers/itemsReducer";
import userReducer from "./reducers/usersReducer";
import suppliersReducer from "./reducers/suppliersReducer";
import priceReductionReducer from "./reducers/priceReductionReducer";

const reducers = combineReducers({
  itemsReducer,
  userReducer,
  suppliersReducer,
  priceReductionReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
