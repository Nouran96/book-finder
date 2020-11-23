import { BOOKS_FETCH, BOOKS_ADD } from "../types/books";

export const createFetchBooksAction = (query) => ({
  type: BOOKS_FETCH,
  payload: {
    query,
  },
});

export const createAddBooksAction = (books) => ({
  type: BOOKS_ADD,
  payload: {
    books,
  },
});
