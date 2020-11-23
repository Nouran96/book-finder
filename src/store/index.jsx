import { createStore, applyMiddleware } from "redux";
import booksReducer from "./reducers/books";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import rootSaga from "./sagas";

const saga = createSagaMiddleware();

const logger = createLogger();

const store = createStore(
  booksReducer,
  undefined,
  applyMiddleware(saga, logger)
);

saga.run(rootSaga);

export default store;
