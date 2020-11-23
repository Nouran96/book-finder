import { BOOKS_FETCH, BOOKS_ADD, BOOKS_FETCH_ERROR } from "../types/books";

export const createFetchBooksAction = (query) => ({
  type: BOOKS_FETCH,
  payload: {
    query,
  },
});

export const createBooksFetchErrorAction = (error) => {
  console.log(error);
  return {
    type: BOOKS_FETCH_ERROR,
    payload: {
      error: error.toJSON(),
    },
  };
};

export const createAddBooksAction = (books) => ({
  type: BOOKS_ADD,
  payload: {
    books,
  },
});
