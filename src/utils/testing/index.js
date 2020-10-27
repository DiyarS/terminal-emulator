import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "../../reducers";

const middlewares = [ReduxThunk];

export const testStore = (initialState) => {
  const storeWithMiddlewares = applyMiddleware(...middlewares)(createStore);

  return storeWithMiddlewares(RootReducer, initialState);
};
