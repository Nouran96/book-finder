import { BOOKS_ADD, BOOKS_FETCH, BOOKS_FETCH_ERROR } from "../types/books";

const INITIAL_STATE = {
  books: [],
  fetching: false,
  error: null,
};

const addBooks = (state, action) => ({
  books: [...action.payload.books],
  fetching: false,
  error: null,
});

const addFetchError = (state, action) => ({
  books: [],
  fetching: false,
  error: action.payload.error,
});

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Fired before saga
    case BOOKS_FETCH:
      return { books: [...state.books], fetching: true, error: null };
    case BOOKS_FETCH_ERROR:
      return addFetchError(state, action);
    case BOOKS_ADD:
      return addBooks(state, action);
    default:
      return state;
  }
};

export default booksReducer;
