import { takeEvery, all } from "redux-saga/effects";
import { BOOKS_FETCH } from "../types/books";
import { handleBooksFetch } from "./books";

function* rootSaga() {
  yield all([takeEvery(BOOKS_FETCH, handleBooksFetch)]);
}

export default rootSaga;
