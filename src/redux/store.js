import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import itemsReducer from "./reducers/itemsReducer";
import userReducer from "./reducers/usersReducer";

const reducers = combineReducers({
  itemsReducer,
  userReducer,
});

const initialState = {
  items: [],
  user: undefined,
};

export const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
