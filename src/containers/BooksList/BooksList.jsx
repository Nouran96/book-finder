import BookCard from "../../components/BookCard/BookCard";
import { connect } from "react-redux";

const BooksList = ({ books, fetching, error }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {
        // If fetching data, show this message otherwise check the books returned
        fetching ? (
          <p className="text-center">Fetching...</p>
        ) : error ? (
          <p className="text-center">Something went wrong</p>
        ) : books && books.length > 0 ? (
          books.map((book) => <BookCard key={book.id} book={book.volumeInfo} />)
        ) : (
          <p className="text-center">No Books Available</p>
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  fetching: state.fetching,
  error: state.error,
});

export default connect(mapStateToProps)(BooksList);
