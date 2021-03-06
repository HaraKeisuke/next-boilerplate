import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import rootReducer, { getInitialState } from "../modules";

const configureStore = () => {
  const initialState = getInitialState();
  const middleware = [thunk, logger];
  return createStore(
    rootReducer(),
    initialState,
    compose(applyMiddleware(...middleware))
  );
};

export default configureStore;
