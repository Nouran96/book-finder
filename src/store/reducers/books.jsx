import { BOOKS_ADD, BOOKS_FETCH } from "../types/books";

const INITIAL_STATE = {
  books: [],
  fetching: false,
};

const addBooks = (state, action) => ({
  books: [...action.payload.books],
  fetching: false,
});

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKS_FETCH:
      return { books: [...state.books], fetching: true };
    case BOOKS_ADD:
      return addBooks(state, action);
    default:
      return state;
  }
};

export default booksReducer;
