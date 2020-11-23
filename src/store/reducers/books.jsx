import { BOOKS_ADD } from "../types/books";

const INITIAL_STATE = [];

const addBooks = (state, action) => [...state, ...action.payload.books];

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKS_ADD:
      return addBooks(state, action);
    default:
      return state;
  }
};

export default booksReducer;
