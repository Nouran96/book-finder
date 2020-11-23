import { call, put } from "redux-saga/effects";
import { fetchBooks } from "../endpoints/books";
import {
  createAddBooksAction,
  createBooksFetchErrorAction,
} from "../actions/books";

export function* handleBooksFetch(action) {
  try {
    const books = yield call(fetchBooks, action.payload.query);

    yield put(createAddBooksAction(books));
  } catch (error) {
    yield put(createBooksFetchErrorAction(error));
  }
}
