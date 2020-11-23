import { BOOKS_ADD, BOOKS_EMPTY } from "../types/books";

const INITIAL_STATE = {
  books: [],
};

const addBooks = (state, action) => ({
  books: [...action.payload.books],
});

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKS_ADD:
      return addBooks(state, action);
    default:
      return state;
  }
};

export default booksReducer;
